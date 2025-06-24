import {useEffect, useState} from "react";
import Editor from "@monaco-editor/react";
import './JsPlayground.scss'
import VsCode from "../VsCode/VsCode.tsx";

type JsPlaygroundProps = {
  defaultCode: string,
  title: string,
  description: string,
  answers: unknown[][],
  functionName: string,
  examples: string[],
  taskId: number,
  delay?: number,
}
export default function JsPlayground(props:JsPlaygroundProps) {
  const {
    taskId,
    examples,
    defaultCode,
    title,
    description,
    answers,
    functionName,
    delay,
  } = props
  const [code, setCode] = useState(defaultCode);
  const [isResetOverlay, setIsResetOverlay] = useState(false)
  const [output, setOutput] = useState<string[]>([]);
  const currentTheme = localStorage.getItem('user-theme')
  const html = document.documentElement
  const resetCode = () => {
    const logs: string[] = [];
    setCode(defaultCode)
    setOutput(logs);
  }
  useEffect(() => {
    const savedCode = localStorage.getItem(`taskCode${taskId}`)
    if (savedCode) {
      setCode(savedCode)
    }
  }, [taskId]);
  const saveCodeById = (value: unknown) => {
    if (typeof value === 'string'){
      localStorage.setItem(`taskCode${taskId}`, value)
    }
  }
  const runCode = async () => {
    const logs: string[] = [];
    const originalLog = console.log;
    console.log = (...args: unknown[]) => {
      logs.push(args.map(String).join(" "));
    };
    try {
      eval(code);
      if (delay) {
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    } catch (err) {
      logs.push('💥 Ошибка при выполнении кода:');
      logs.push(String(err));
    }
    console.log = originalLog;
    console.log(originalLog)
    setOutput(logs);
  }
  const checkCode = async () => {
    const logs: string[] = [];
    const originalLog = console.log;
    console.log = (...args: unknown[]) => {
      logs.push(args.map(String).join(" "));
    };
    let codeWithFunction = ''
    for (let i = 0; i < examples.length; i++) {
      codeWithFunction = `${code}\n${examples[i]}`
      try {
        if (delay) {
          await new Promise(resolve => setTimeout(resolve, delay))
        }
        const result = eval(codeWithFunction)
        if (JSON.stringify(answers[i]) !== JSON.stringify(result)) {
          logs.push('❌ Ваш код не прошел проверку')
          logs.push(`input: ${examples[i]}`)
          logs.push(`your output: ${JSON.stringify(result)}`)
          break
        }
        if (i === examples.length - 1) {
          logs.push('✅ Ура, ваш код прошел все проверки! 🎉🥳🚀');
          logs.push('💡 Вы настоящий JS-ниндзя! 🧠😎');
        }
      } catch (err) {
        logs.push('💥 Ошибка при выполнении кода:');
        logs.push(String(err));
      }
    }
    console.log = originalLog;
    console.log(originalLog)
    setOutput(logs);
  }

  return (
    <>
      {isResetOverlay && (<div className={'reset-overlay'}>
        <div className={'reset-overlay__content'}>
          <h3>Точно хотите сбросить код?</h3>
          <div className="reset-overlay__buttons">
            <button
              className={'reset-overlay__yes'}
              type="button"
              onClick={() => {
                html.classList.remove('stop-scroll')
                setIsResetOverlay(false)
                resetCode()
              }}
            >
              Да
            </button>
            <button
              className={'reset-overlay__no'}
              type="button"
              onClick={() => {
                html.classList.remove('stop-scroll')
                setIsResetOverlay(false)
              }
              }
            >
              Нет
            </button>
          </div>
        </div>
      </div>)}
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>Условия</h4>
      <ul>
        <li>Результат должен возвращаться функцией с помощью return</li>
        <li>При проверке название функции должно быть строго {functionName}</li>
      </ul>
      <p>Примеры входных и выходных данных:</p>
      <div
        className={'js-playground__examples'}
      >
        {examples.map((example, index) => {
          return (
            <VsCode key={index}>{example}</VsCode>
          )
        })}
      </div>
      <div className={'js-playground'}>
        <Editor
          className={'js-playground__editor'}
          height="300px"
          defaultLanguage="javascript"
          theme={currentTheme === 'dark' ? 'vs-dark' : 'vs'}
          value={code}
          onChange={(value) => {
            saveCodeById(value)
            setCode(value || "")
          }}
          options={{
            quickSuggestions: false,
            tabSize: 2,
            insertSpaces: true,
            minimap: {enabled: false},
            glyphMargin: false,
            lineDecorationsWidth: 0,
            lineNumbersMinChars: 2,
            fontSize: 14,
          }}
        />
        <div className="js-playground__buttons">
          <button
            className={'js-playground__check'}
            onClick={checkCode}
          >
            Проверить
          </button>
          <button
            className={'js-playground__run'}
            type="button"
            onClick={runCode}
          >
            Запустить
          </button>
          <button
            className={'js-playground__reset'}
            type="button"
            onClick={() => {
              html.classList.add('stop-scroll')
              setIsResetOverlay(true)
            }}
          >
            Сбросить ↻
          </button>
        </div>
        <div
          className={'js-playground__output'}
        >
          {output.length === 0
            ? "// Здесь будет вывод"
            : output.map((line, i) => <div key={i}>{line}</div>)}
        </div>
      </div>
    </>
  );
}
