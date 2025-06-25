import {useEffect, useState} from "react";
import Editor from "@monaco-editor/react";
import './JsPlayground.scss'
import VsCode from "../VsCode/VsCode.tsx";

// Типы для различных способов проверки
type TestCase = {
  input: any[];
  expected: any;
  description?: string;
}

type ValidationMode = 'function' | 'expression' | 'console' | 'async' | 'custom';

type CustomValidator = {
  code: string; // код для выполнения валидации
  setup?: string; // код для подготовки окружения
}

// Тип для логов с поддержкой специального форматирования
type LogEntry = {
  type: 'text' | 'code';
  content: string;
}

type JsPlaygroundProps = {
  defaultCode: string;
  title: string;
  description: string;

  // Основные настройки проверки
  validationMode: ValidationMode;
  functionName?: string; // для mode: 'function'
  testCases: TestCase[];

  // Дополнительные настройки
  taskId: number;
  delay?: number;
  timeout?: number; // таймаут для выполнения кода

  // Кастомная валидация
  customValidator?: CustomValidator;

  // Настройки консоли
  allowConsoleOutput?: boolean;

  // Настройки асинхронности
  isAsync?: boolean;

  // Дополнительные библиотеки или код для инициализации
  setupCode?: string;
}

export default function JsPlayground(props: JsPlaygroundProps) {
  const {
    taskId,
    defaultCode,
    title,
    description,
    validationMode,
    functionName,
    testCases,
    delay = 0,
    timeout = 5000,
    customValidator,
    allowConsoleOutput = true,
    isAsync = false,
    setupCode = '',
  } = props;

  const [code, setCode] = useState(defaultCode);
  const [isResetOverlay, setIsResetOverlay] = useState(false);
  const [output, setOutput] = useState<LogEntry[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // Сохранение/загрузка кода
  useEffect(() => {
    const savedCode = localStorage.getItem(`taskCode${taskId}`);
    if (savedCode) {
      setCode(savedCode);
    }
  }, [taskId]);

  const saveCodeById = (value: string) => {
    localStorage.setItem(`taskCode${taskId}`, value);
  };

  const resetCode = () => {
    setCode(defaultCode);
    setOutput([]);
  };

  // Безопасное выполнение кода с таймаутом
  const executeWithTimeout = async (codeToExecute: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error(`Превышен лимит времени выполнения (${timeout}ms)`));
      }, timeout);

      try {
        if (isAsync) {
          const asyncWrapper = `
            (async () => {
              ${setupCode}
              ${codeToExecute}
            })()
          `;
          const result = eval(asyncWrapper);

          if (result instanceof Promise) {
            result
              .then(res => {
                clearTimeout(timeoutId);
                resolve(res);
              })
              .catch(err => {
                clearTimeout(timeoutId);
                reject(err);
              });
          } else {
            clearTimeout(timeoutId);
            resolve(result);
          }
        } else {
          const fullCode = setupCode + '\n' + codeToExecute;
          const result = eval(fullCode);
          clearTimeout(timeoutId);
          resolve(result);
        }
      } catch (error) {
        clearTimeout(timeoutId);
        reject(error);
      }
    });
  };

  // Универсальная проверка в зависимости от режима
  const validateCode = async (): Promise<{ success: boolean; logs: LogEntry[] }> => {
    const logs: LogEntry[] = [];

    try {
      switch (validationMode) {
        case 'function':
          return await validateFunction(logs);
        case 'expression':
          return await validateExpression(logs);
        case 'console':
          return await validateConsole(logs);
        case 'async':
          return await validateAsync(logs);
        case 'custom':
          return await validateCustom(logs);
        default:
          throw new Error('Неподдерживаемый режим валидации');
      }
    } catch (error) {
      logs.push({ type: 'text', content: '💥 Ошибка при проверке:' });
      logs.push({ type: 'text', content: String(error) });
      return { success: false, logs };
    }
  };

  // Проверка функций
  const validateFunction = async (logs: LogEntry[]): Promise<{ success: boolean; logs: LogEntry[] }> => {
    if (!functionName) {
      throw new Error('Не указано имя функции для проверки');
    }

    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i];
      if (!testCase) continue;
      
      const callCode = formatFunctionCall(functionName, testCase.input);
      const fullCode = `${code}\n${callCode}`;

      try {
        const result = await executeWithTimeout(fullCode);

        if (!deepEqual(result, testCase.expected)) {
          logs.push({ type: 'text', content: '❌ Тест не пройден' });
          if (testCase.description) logs.push({ type: 'text', content: `Описание: ${testCase.description}` });
          logs.push({ type: 'text', content: 'Вызов:' });
          logs.push({ type: 'code', content: callCode });
          logs.push({ type: 'text', content: `Ожидалось: ${formatObject(testCase.expected)}` });
          logs.push({ type: 'text', content: `Получено: ${formatObject(result)}` });
          return { success: false, logs };
        }
      } catch (error) {
        logs.push({ type: 'text', content: '❌ Ошибка в тесте:' });
        if (testCase.description) logs.push({ type: 'text', content: `Описание: ${testCase.description}` });
        logs.push({ type: 'text', content: 'Вызов:' });
        logs.push({ type: 'code', content: callCode });
        logs.push({ type: 'text', content: `Ошибка: ${String(error)}` });
        return { success: false, logs };
      }
    }
    logs.push({ type: 'text', content: '✅ Все тесты пройдены! 🎉' });
    return { success: true, logs };
  };

  // Проверка выражений (например, для задач на hoisting)
  const validateExpression = async (logs: LogEntry[]): Promise<{ success: boolean; logs: LogEntry[] }> => {
    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i];
      if (!testCase) continue;

      try {
        const result = await executeWithTimeout(code);

        if (!deepEqual(result, testCase.expected)) {
          logs.push({ type: 'text', content: '❌ Неверный результат' });
          if (testCase.description) logs.push({ type: 'text', content: `Описание: ${testCase.description}` });
          logs.push({ type: 'text', content: `Ожидалось: ${formatObject(testCase.expected)}` });
          logs.push({ type: 'text', content: `Получено: ${formatObject(result)}` });
          return { success: false, logs };
        }
      } catch (error) {
        logs.push({ type: 'text', content: '❌ Ошибка выполнения:' });
        logs.push({ type: 'text', content: String(error) });
        return { success: false, logs };
      }
    }

    logs.push({ type: 'text', content: '✅ Задача решена верно! 🎉' });
    return { success: true, logs };
  };

  // Проверка вывода в консоль
  const validateConsole = async (logs: LogEntry[]): Promise<{ success: boolean; logs: LogEntry[] }> => {
    const consoleLogs: string[] = [];
    const originalLog = console.log;

    console.log = (...args: any[]) => {
      consoleLogs.push(args.map(String).join(' '));
    };

    try {
      await executeWithTimeout(code);

      for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i];
        if (!testCase) continue;
        
        const expectedOutput = testCase.expected;

        if (i >= consoleLogs.length || consoleLogs[i] !== expectedOutput) {
          logs.push({ type: 'text', content: '❌ Неверный вывод в консоль' });
          if (testCase.description) logs.push({ type: 'text', content: `Описание: ${testCase.description}` });
          logs.push({ type: 'text', content: `Ожидался вывод: "${expectedOutput}"` });
          logs.push({ type: 'text', content: `Получен вывод: "${consoleLogs[i] || 'отсутствует'}"` });
          return { success: false, logs };
        }
      }

      logs.push({ type: 'text', content: '✅ Консольный вывод корректен! 🎉' });
      return { success: true, logs };
    } catch (error) {
      logs.push({ type: 'text', content: '❌ Ошибка выполнения:' });
      logs.push({ type: 'text', content: String(error) });
      return { success: false, logs };
    } finally {
      console.log = originalLog;
    }
  };

  // Проверка асинхронного кода
  const validateAsync = async (logs: LogEntry[]): Promise<{ success: boolean; logs: LogEntry[] }> => {
    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i];
      if (!testCase) continue;
      
      const callCode = functionName
        ? `await ${functionName}(${testCase.input.map(arg => JSON.stringify(arg)).join(', ')})`
        : code;

      try {
        const result = await executeWithTimeout(callCode);

        if (!deepEqual(result, testCase.expected)) {
          logs.push({ type: 'text', content: '❌ Асинхронный тест не пройден' });
          if (testCase.description) logs.push({ type: 'text', content: `Описание: ${testCase.description}` });
          logs.push({ type: 'text', content: `Ожидалось: ${JSON.stringify(testCase.expected)}` });
          logs.push({ type: 'text', content: `Получено: ${JSON.stringify(result)}` });
          return { success: false, logs };
        }
      } catch (error) {
        logs.push({ type: 'text', content: '❌ Ошибка в асинхронном коде:' });
        logs.push({ type: 'text', content: String(error) });
        return { success: false, logs };
      }
    }

    logs.push({ type: 'text', content: '✅ Асинхронные тесты пройдены! 🎉' });
    return { success: true, logs };
  };

  // Кастомная проверка
  const validateCustom = async (logs: LogEntry[]): Promise<{ success: boolean; logs: LogEntry[] }> => {
    if (!customValidator) {
      throw new Error('Не указан кастомный валидатор');
    }

    try {
      const validationCode = `
        ${customValidator.setup || ''}
        const userCode = \`${code.replace(/`/g, '\\`')}\`;
        ${customValidator.code}
      `;

      const result = await executeWithTimeout(validationCode);

      if (result === true) {
        logs.push({ type: 'text', content: '✅ Кастомная проверка пройдена! 🎉' });
        return { success: true, logs };
      } else if (typeof result === 'string') {
        logs.push({ type: 'text', content: '❌ ' + result });
        return { success: false, logs };
      } else {
        logs.push({ type: 'text', content: '❌ Проверка не пройдена' });
        return { success: false, logs };
      }
    } catch (error) {
      logs.push({ type: 'text', content: '❌ Ошибка кастомной проверки:' });
      logs.push({ type: 'text', content: String(error) });
      return { success: false, logs };
    }
  };

  // Глубокое сравнение объектов
  const deepEqual = (a: any, b: any): boolean => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i])) return false;
      }
      return true;
    }
    if (typeof a === 'object' && typeof b === 'object') {
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
      if (keysA.length !== keysB.length) return false;
      for (const key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
      }
      return true;
    }
    return false;
  };

  // Функция для форматирования объектов с отступами
  const formatObject = (obj: any, indent: number = 0): string => {
    const spaces = '  '.repeat(indent);
    
    if (obj === null) return 'null';
    if (obj === undefined) return 'undefined';
    if (typeof obj === 'string') return JSON.stringify(obj);
    if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj);
    
    if (Array.isArray(obj)) {
      // Массивы всегда в одну строку
      return `[${obj.map(item => formatObject(item)).join(', ')}]`;
    }
    
    if (typeof obj === 'object') {
      const keys = Object.keys(obj);
      if (keys.length === 0) return '{}';
      
      // Для объектов - многострочный комментарий в начале и переносы
      const items = keys.map(key => {
        const value = formatObject(obj[key], indent + 1);
        return `${spaces}  ${key}: ${value}`;
      });
      return `{\n${items.join(',\n')}\n${spaces}}`;
      
    }
    
    return String(obj);
  };

  // Функция для форматирования входных параметров функции
  const formatFunctionCall = (functionName: string, args: any[]): string => {
    if (args.length === 0) return `${functionName}()`;
    
    const formattedArgs = args.map(arg => formatObject(arg));
    return `${functionName}(${formattedArgs.join(', ')})`;
  };

  // Запуск кода
  const runCode = async () => {
    if (isRunning) return;

    setIsRunning(true);
    const logs: LogEntry[] = [];
    const originalLog = console.log;

    if (allowConsoleOutput) {
      console.log = (...args: any[]) => {
        logs.push({ type: 'text', content: args.map(String).join(' ') });
      };
    }

    try {
      if (delay) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      await executeWithTimeout(code);

      if (logs.length === 0) {
        logs.push({ type: 'text', content: 'Код выполнен успешно' });
      }
    } catch (error) {
      logs.push({ type: 'text', content: '💥 Ошибка при выполнении:' });
      logs.push({ type: 'text', content: String(error) });
    } finally {
      console.log = originalLog;
      setIsRunning(false);
      setOutput(logs);
    }
  };

  // Проверка кода
  const checkCode = async () => {
    if (isRunning) return;

    setIsRunning(true);

    try {
      if (delay) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      const { success, logs } = await validateCode();
      setOutput(logs);
    } catch (error) {
      setOutput([
        { type: 'text', content: '💥 Критическая ошибка:' },
        { type: 'text', content: String(error) }
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  const currentTheme = localStorage.getItem('user-theme');
  const html = document.documentElement;

  // Функция для красивого форматирования объектов/массивов для комментариев
  const prettyFormat = (value: any, indent: number = 0): string => {
    const spaces = '  '.repeat(indent);
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'string') return JSON.stringify(value);
    if (typeof value === 'number' || typeof value === 'boolean') return String(value);
    if (Array.isArray(value)) {
      if (value.length === 0) return '[]';
      const items = value.map(item => prettyFormat(item, indent + 1));
      return '[\n' + items.map(i => spaces + '  ' + i).join(',\n') + '\n' + spaces + ']';
    }
    if (typeof value === 'object') {
      const keys = Object.keys(value);
      if (keys.length === 0) return '{}';
      const items = keys.map(key => `${spaces}  ${JSON.stringify(key)}: ${prettyFormat(value[key], indent + 1)}`);
      return '{\n' + items.join(',\n') + '\n' + spaces + '}';
    }
    return String(value);
  };

  // Функция для оборачивания результата в многострочный комментарий, если это объект или массив
  const formatAsMultilineComment = (value: any): string => {
    if (typeof value === 'object' && value !== null) {
      return `/*\n${prettyFormat(value, 0)}\n*/`;
    }
    return String(value);
  };

  return (
    <>
      {isResetOverlay && (
        <div className={'reset-overlay'}>
          <div className={'reset-overlay__content'}>
            <h3>Точно хотите сбросить код?</h3>
            <div className="reset-overlay__buttons">
              <button
                className={'reset-overlay__yes'}
                type="button"
                onClick={() => {
                  html.classList.remove('stop-scroll');
                  setIsResetOverlay(false);
                  resetCode();
                }}
              >
                Да
              </button>
              <button
                className={'reset-overlay__no'}
                type="button"
                onClick={() => {
                  html.classList.remove('stop-scroll');
                  setIsResetOverlay(false);
                }}
              >
                Нет
              </button>
            </div>
          </div>
        </div>
      )}

      <h3>{title}</h3>
      <p>{description}</p>

      {validationMode === 'function' && functionName && (
        <>
          <h4>Условия</h4>
          <ul>
            <li>Результат должен возвращаться функцией с помощью return</li>
            <li>Название функции должно быть строго <code>{functionName}</code></li>
          </ul>
        </>
      )}

      {testCases.length > 0 && (
        <>
          <p>Примеры тестов:</p>
          <div className={'js-playground__examples'}>
            {testCases.slice(0, 3).map((testCase, index) => {
              let exampleText = '';

              if (validationMode === 'function' && functionName) {
                exampleText = `${functionName}(${testCase.input.map(arg => JSON.stringify(arg)).join(', ')}) // → ${JSON.stringify(testCase.expected)}`;
              } else if (validationMode === 'console') {
                exampleText = `// Должен вывести: ${JSON.stringify(testCase.expected)}`;
              } else {
                exampleText = `// Ожидается: ${JSON.stringify(testCase.expected)}`;
              }

              if (testCase.description) {
                exampleText = `// ${testCase.description}\n${exampleText}`;
              }

              return (
                <VsCode key={index}>{exampleText}</VsCode>
              );
            })}
            {testCases.length > 3 && (
              <p><em>...и ещё {testCases.length - 3} тест(ов)</em></p>
            )}
          </div>
        </>
      )}

      <div className={'js-playground'}>
        <Editor
          className={'js-playground__editor'}
          height="300px"
          defaultLanguage="javascript"
          theme={currentTheme === 'dark' ? 'vs-dark' : 'vs'}
          value={code}
          onChange={(value) => {
            const newCode = value || '';
            saveCodeById(newCode);
            setCode(newCode);
          }}
          options={{
            quickSuggestions: false,
            tabSize: 2,
            insertSpaces: true,
            minimap: { enabled: false },
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
            disabled={isRunning}
          >
            {isRunning ? 'Проверяем...' : 'Проверить'}
          </button>
          <button
            className={'js-playground__run'}
            type="button"
            onClick={runCode}
            disabled={isRunning}
          >
            {isRunning ? 'Выполняем...' : 'Запустить'}
          </button>
          <button
            className={'js-playground__reset'}
            type="button"
            onClick={() => {
              html.classList.add('stop-scroll');
              setIsResetOverlay(true);
            }}
            disabled={isRunning}
          >
            Сбросить ↻
          </button>
        </div>

        <div className={'js-playground__output'}>
          {output.length === 0
            ? "// Здесь будет вывод"
            : output.map((entry, i) => (
                entry.type === 'code' ? (
                  <VsCode key={i}>{entry.content}</VsCode>
                ) : (
                  <div key={i}>{entry.content}</div>
                )
              ))}
        </div>
      </div>
    </>
  );
}