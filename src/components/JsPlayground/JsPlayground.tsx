// Импортируем необходимые хуки и компоненты
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import "./JsPlayground.scss";
import VsCode from "../VsCode/VsCode.tsx";

// Описание типа тестового кейса
type TestCase = { input: any[]; expected: any; description?: string };

// Описание пропсов компонента JsPlayground
type JsPlaygroundProps = {
    defaultCode: string; // Код по умолчанию
    title: string; // Заголовок задания
    description: string; // Описание задания
    validationMode: "function" | "expression" | "console" | "async" | "custom"; // Режим проверки
    functionName?: string; // Имя функции (если требуется)
    testCases: TestCase[]; // Массив тестовых кейсов
    taskId: number; // id задания (для сохранения кода)
    timeout?: number; // Таймаут выполнения кода
    customValidator?: { code: string; setup?: string }; // Кастомный валидатор
    allowConsoleOutput?: boolean; // Разрешить вывод в консоль
    isAsync?: boolean; // Асинхронный ли код
    setupCode?: string; // Код для инициализации окружения
};

// Глубокое сравнение двух значений (используется для проверки результатов)
function deepEq(a: any, b: any): boolean {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (Array.isArray(a) && Array.isArray(b))
        return a.length === b.length && a.every((v, i) => deepEq(v, b[i]));
    if (a && b && typeof a === "object") {
        const ka = Object.keys(a),
            kb = Object.keys(b);
        if (ka.length !== kb.length) return false;
        return ka.every((k) => kb.includes(k) && deepEq(a[k], b[k]));
    }
    return false;
}

// Форматирование объекта для вывода (используется для отображения ожидаемых/полученных значений)
function formatObj(val: any): string {
    if (val === null) return "null";
    if (val === undefined) return "undefined";
    if (typeof val === "string") return JSON.stringify(val);
    if (typeof val === "function") return val.toString();
    if (Array.isArray(val)) return `[${val.map(formatObj).join(", ")}]`;
    if (typeof val === "object")
        return `{${Object.entries(val)
            .map(([k, v]) => `${k}: ${formatObj(v)}`)
            .join(", ")}}`;
    return String(val);
}

// Основной компонент песочницы
export default function JsPlayground({
    defaultCode,
    title,
    description,
    validationMode,
    functionName,
    testCases,
    taskId,
    timeout = 5000,
    customValidator,
    allowConsoleOutput = true,
    isAsync = false,
    setupCode = "",
}: JsPlaygroundProps) {
    // Состояния: код, вывод, выполнение, сброс
    const [code, setCode] = useState(defaultCode);
    const [output, setOutput] = useState<
        { type: "text" | "code"; content: string }[]
    >([]);
    const [isRunning, setIsRunning] = useState(false);
    const [reset, setReset] = useState(false);

    // Определяем тему редактора в зависимости от темы пользователя
    const theme =
        localStorage.getItem("user-theme") === "dark" ? "vs-dark" : "vs";

    // При монтировании компонента подгружаем сохранённый код для текущего задания
    useEffect(() => {
        const saved = localStorage.getItem(`taskCode${taskId}`);
        if (saved) setCode(saved);
    }, [taskId]);

    // Сохраняем код в localStorage при изменении
    const saveCode = (v: string) =>
        localStorage.setItem(`taskCode${taskId}`, v);

    // Выполнение кода с таймаутом (и поддержкой async)
    const runWithTimeout = (src: string) =>
        new Promise<any>((res, rej) => {
            const t = setTimeout(
                () => rej(new Error(`Timeout ${timeout}ms`)),
                timeout
            );
            try {
                let r;
                if (isAsync) {
                    // Если асинхронный режим, оборачиваем в async функцию
                    r = eval(`(async()=>{${setupCode}\n${src}})()`);
                    if (r instanceof Promise)
                        r.then(
                            (x) => {
                                clearTimeout(t);
                                res(x);
                            },
                            (e) => {
                                clearTimeout(t);
                                rej(e);
                            }
                        );
                    else {
                        clearTimeout(t);
                        res(r);
                    }
                } else {
                    // Синхронный режим
                    r = eval(setupCode + "\n" + src);
                    clearTimeout(t);
                    res(r);
                }
            } catch (e) {
                clearTimeout(t);
                rej(e);
            }
        });

    // Проверка решения пользователя по тестам
    async function validate() {
        let logs: { type: "text" | "code"; content: string }[] = [];
        try {
            // Проверка для режима "function"
            if (validationMode === "function" && functionName) {
                for (let tc of testCases) {
                    // Преобразуем аргументы (если это строка-функция, превращаем в функцию)
                    let args = tc.input.map((arg) =>
                        typeof arg === "string" &&
                        (arg.includes("=>") || arg.includes("function"))
                            ? new Function("return " + arg)()
                            : arg
                    );
                    // Формируем вызов функции
                    let call = `${functionName}(${args
                        .map(formatObj)
                        .join(",")})`;
                    let src = code + `\n${call}`;
                    // Выполняем код и сравниваем результат
                    let result = await runWithTimeout(src);
                    if (!deepEq(result, tc.expected)) {
                        logs.push({
                            type: "text",
                            content: `❌ ${tc.description || ""}`,
                        });
                        logs.push({ type: "code", content: call });
                        logs.push({
                            type: "text",
                            content: `Ожидалось: ${formatObj(tc.expected)}`,
                        });
                        logs.push({
                            type: "text",
                            content: `Получено: ${formatObj(result)}`,
                        });
                        setOutput(logs);
                        return;
                    }
                }
                logs.push({ type: "text", content: "✅ Все тесты пройдены!" });
            } 
            // Проверка для режима "expression"
            else if (validationMode === "expression") {
                for (let tc of testCases) {
                    let result = await runWithTimeout(code);
                    if (!deepEq(result, tc.expected)) {
                        logs.push({
                            type: "text",
                            content: `❌ ${tc.description || ""}`,
                        });
                        logs.push({
                            type: "text",
                            content: `Ожидалось: ${formatObj(tc.expected)}`,
                        });
                        logs.push({
                            type: "text",
                            content: `Получено: ${formatObj(result)}`,
                        });
                        setOutput(logs);
                        return;
                    }
                }
                logs.push({ type: "text", content: "✅ Верно!" });
            } 
            // Проверка для режима "console"
            else if (validationMode === "console") {
                let logArr: string[] = [];
                const orig = console.log;
                // Переопределяем console.log для сбора вывода
                console.log = (...a: any[]) =>
                    logArr.push(a.map(String).join(" "));
                await runWithTimeout(code);
                console.log = orig;
                // Сравниваем вывод с ожидаемым
                for (let i = 0; i < testCases.length; ++i) {
                    if (logArr[i] !== testCases[i].expected) {
                        logs.push({
                            type: "text",
                            content: `❌ ${testCases[i].description || ""}`,
                        });
                        logs.push({
                            type: "text",
                            content: `Ожидалось: "${testCases[i].expected}"`,
                        });
                        logs.push({
                            type: "text",
                            content: `Получено: "${
                                logArr[i] || "отсутствует"
                            }"`,
                        });
                        setOutput(logs);
                        return;
                    }
                }
                logs.push({
                    type: "text",
                    content: "✅ Консольный вывод корректен!",
                });
            } 
            // Проверка для режима "async"
            else if (validationMode === "async" && functionName) {
                for (let tc of testCases) {
                    // Формируем асинхронный вызов функции
                    let call = `await ${functionName}(${tc.input
                        .map(formatObj)
                        .join(",")})`;
                    let result = await runWithTimeout(call);
                    if (!deepEq(result, tc.expected)) {
                        logs.push({
                            type: "text",
                            content: `❌ ${tc.description || ""}`,
                        });
                        logs.push({
                            type: "text",
                            content: `Ожидалось: ${formatObj(tc.expected)}`,
                        });
                        logs.push({
                            type: "text",
                            content: `Получено: ${formatObj(result)}`,
                        });
                        setOutput(logs);
                        return;
                    }
                }
                logs.push({
                    type: "text",
                    content: "✅ Асинхронные тесты пройдены!",
                });
            } 
            // Проверка для режима "custom"
            else if (validationMode === "custom" && customValidator) {
                // Сначала выполняем пользовательский код
                await runWithTimeout(code);
                // Затем выполняем кастомный валидатор
                let result = await runWithTimeout(
                    (customValidator.setup || "") + "\n" + customValidator.code
                );
                if (result === true)
                    logs.push({
                        type: "text",
                        content: "✅ Кастомная проверка пройдена!",
                    });
                else
                    logs.push({
                        type: "text",
                        content:
                            "❌ " +
                            (typeof result === "string"
                                ? result
                                : "Проверка не пройдена"),
                    });
            }
        } catch (e: any) {
            // Если возникла ошибка, выводим её
            logs.push({ type: "text", content: "💥 Ошибка: " + String(e) });
        }
        setOutput(logs);
    }

    // Просто выполнить код пользователя (без проверки)
    async function run() {
        if (isRunning) return;
        setIsRunning(true);
        let logs: { type: "text" | "code"; content: string }[] = [];
        const orig = console.log;
        // Если разрешён вывод в консоль, собираем его
        if (allowConsoleOutput)
            console.log = (...a: any[]) =>
                logs.push({ type: "text", content: a.map(String).join(" ") });
        try {
            await runWithTimeout(code);
            if (!logs.length)
                logs.push({ type: "text", content: "Код выполнен успешно" });
        } catch (e: any) {
            logs.push({ type: "text", content: "💥 Ошибка: " + String(e) });
        }
        if (allowConsoleOutput) console.log = orig;
        setOutput(logs);
        setIsRunning(false);
    }

    // Основной JSX компонента
    return (
        <>
            {/* Оверлей для подтверждения сброса кода */}
            {reset && (
                <div className="reset-overlay">
                    <div className="reset-overlay__content">
                        <h3>Точно хотите сбросить код?</h3>
                        <div className="reset-overlay__buttons">
                            <button
                                className="reset-overlay__yes"
                                onClick={() => {
                                    setReset(false);
                                    setCode(defaultCode);
                                    setOutput([]);
                                }}
                            >
                                Да
                            </button>
                            <button
                                className="reset-overlay__no"
                                onClick={() => setReset(false)}
                            >
                                Нет
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Заголовок и описание задания */}
            <h3>{title}</h3>
            <p>{description}</p>
            {/* Если режим function, показываем подсказки */}
            {validationMode === "function" && functionName && (
                <ul>
                    <li>
                        Результат должен возвращаться через <code>return</code>
                    </li>
                    <li>
                        Имя функции: <code>{functionName}</code>
                    </li>
                </ul>
            )}
            {/* Примеры тестов */}
            {testCases.length > 0 && (
                <div className="js-playground__examples">
                    <p>Примеры тестов:</p>
                    {testCases.slice(0, 3).map((tc, i) => (
                        <VsCode key={i}>
                            {tc.description ? `// ${tc.description}\n` : ""}
                            {validationMode === "function" && functionName
                                ? `${functionName}(${tc.input
                                      .map(formatObj)
                                      .join(", ")}) // → ${formatObj(
                                      tc.expected
                                  )}`
                                : validationMode === "console"
                                ? `// Должен вывести: ${formatObj(tc.expected)}`
                                : `// Ожидается: ${formatObj(tc.expected)}`}
                        </VsCode>
                    ))}
                    {testCases.length > 3 && (
                        <p>
                            <em>...и ещё {testCases.length - 3} тест(ов)</em>
                        </p>
                    )}
                </div>
            )}
            <div className="js-playground">
                {/* Редактор кода */}
                <Editor
                    className="js-playground__editor"
                    height="300px"
                    defaultLanguage="javascript"
                    theme={theme}
                    value={code}
                    onChange={(v) => {
                        const val = v || "";
                        saveCode(val);
                        setCode(val);
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
                {/* Кнопки управления */}
                <div className="js-playground__buttons">
                    <button
                        className="js-playground__check"
                        onClick={validate}
                        disabled={isRunning}
                    >
                        {isRunning ? "Проверяем..." : "Проверить"}
                    </button>
                    <button
                        className="js-playground__run"
                        onClick={run}
                        disabled={isRunning}
                    >
                        {isRunning ? "Выполняем..." : "Запустить"}
                    </button>
                    <button
                        className="js-playground__reset"
                        onClick={() => setReset(true)}
                        disabled={isRunning}
                    >
                        Сбросить ↻
                    </button>
                </div>
                {/* Вывод результата/ошибок */}
                <div className="js-playground__output">
                    {output.length === 0
                        ? "// Здесь будет вывод"
                        : output.map((e, i) =>
                              e.type === "code" ? (
                                  <VsCode key={i}>{e.content}</VsCode>
                              ) : (
                                  <div key={i}>{e.content}</div>
                              )
                          )}
                </div>
            </div>
        </>
    );
}
