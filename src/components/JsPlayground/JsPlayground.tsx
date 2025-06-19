import {useEffect, useState} from "react";
import Editor from "@monaco-editor/react";
import './JsPlayground.scss'
import VsCode from "../VsCode/VsCode.tsx";

type JsPlaygroundProps = {
  defaultCode: string,
  title: string,
  description: string,
  args: any,
  answers: any,
  functionName: string,
  examples: string[],
  taskId: number,
}
export default function JsPlayground(props: JsPlaygroundProps) {
  const {
    taskId,
    examples,
    defaultCode,
    title,
    description,
    args,
    answers,
    functionName
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
  }, []);
  const saveCodeById = (value: any) => {
    localStorage.setItem(`taskCode${taskId}`, value)
  }
  const runCode = () => {
    const logs: string[] = [];
    const originalLog = console.log;
    console.log = (...args: any[]) => {
      logs.push(args.map(String).join(" "));
    };
    try {
      eval(code);
    } catch (err) {
      logs.push('💥 Ошибка при выполнении кода:');
      logs.push(String(err));
    }
    console.log = originalLog;
    console.log(originalLog)
    setOutput(logs);
  }
  const checkCode = () => {
    const logs: string[] = [];
    const originalLog = console.log;
    console.log = (...args: any[]) => {
      logs.push(args.map(String).join(" "));
    };
    for (let i = 0; i < args.length; i++) {
      let strFunction = `${functionName}(`
      let properties = ''
      for (let j = 0; j < args[i].length; j++) {
        let currentArgument = args[i][j]
        if (typeof args[i][j] === 'object' && args[i][j] !== null) {
          currentArgument = JSON.stringify(args[i][j])
        }
        if (j === args[i].length - 1) {
          properties += currentArgument
          break
        }
        properties += currentArgument + ', '
      }
      strFunction += properties + ')'
      const newCode = `${code}\n${strFunction}`
      try {
        let result = eval(newCode);
        if (typeof result === 'object' && result !== null){
          result = JSON.stringify(result)
        }
        let currentAnswer = answers[i]
        if (typeof currentAnswer === 'object' && currentAnswer!== null){
          currentAnswer = JSON.stringify(answers[i])
        }
        if (result !== currentAnswer) {
          logs.push('❌ Неверный результат');
          logs.push(`Ввод: ${strFunction}`);
          logs.push(`Ваш вывод: ${result}`);
          logs.push(`Ожидалось: ${currentAnswer}`);
          break;
        }

        if (i === args.length - 1) {
          logs.push('🎉 Отлично! Все тесты пройдены.');
          logs.push('✅ Ваш код работает корректно на всех входных данных.');
        }
      } catch (err) {
        logs.push('💥 Ошибка при выполнении кода:');
        logs.push(String(err));
        break
      }

    }
    console.log = originalLog;
    console.log(originalLog)
    setOutput(logs);
  };

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
