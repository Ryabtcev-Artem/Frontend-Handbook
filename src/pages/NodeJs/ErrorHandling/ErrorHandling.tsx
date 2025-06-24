import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
import Test from "../../../components/Test/Test.tsx";


export default function ErrorHandling() {
  

  return (
    <section className="topic container">
      <h2>Обработка ошибок в JavaScript и Node.js</h2>

      <p>
        <strong>Обработка ошибок</strong> — это процесс перехвата и обработки ситуаций, при которых выполнение кода может пойти не по плану (например, при чтении несуществующего файла, сетевом сбое и т.д.).
      </p>

      <h3>Синхронная обработка ошибок</h3>
      <p>Синхронные ошибки возникают во время обычного выполнения кода. Для их перехвата используется конструкция <code>try/catch</code>:
      </p>
      <VsCode>{`try {
  const json = JSON.parse('{invalid json}');
} catch (err) {
  console.error('Ошибка парсинга:', err.message);
}`}</VsCode>

      <h3>Асинхронные ошибки: промисы</h3>
      <p>Промисы позволяют работать с асинхронными операциями и обрабатывать ошибки через <code>.catch()</code>:
      </p>
      <VsCode>{`fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Ошибка запроса:', err.message));`}</VsCode>

      <h3>Асинхронные ошибки: async/await</h3>
      <p>С помощью <code>async/await</code> можно писать асинхронный код, похожий на синхронный. Ошибки перехватываются через <code>try/catch</code>:
      </p>
      <VsCode>{`async function fetchData() {
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Ошибка:', err.message);
  }
}`}</VsCode>

      <h3>Node.js и error-first callbacks</h3>
      <p>Во многих API Node.js используется стиль <em>callback первым аргументом передаёт ошибку</em>:
      </p>
      <VsCode>{`const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка чтения файла:', err.message);
    return;
  }
  console.log(data);
});`}</VsCode>

      <h3>Глобальные обработчики ошибок</h3>
      <p>Иногда ошибки "проскальзывают". Node.js позволяет подстраховаться глобальными обработчиками:</p>
      <VsCode>{`process.on('uncaughtException', (err) => {
  console.error('Необработанная ошибка:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('Необработанный промис:', reason);
});`}</VsCode>
      <p>Но лучше никогда до них не доводить — обрабатывайте ошибки локально, по месту.</p>

      <h3>Собственные ошибки</h3>
      <p>Можно создать ошибку самостоятельно, если ситуация того требует:</p>
      <VsCode>{`function divide(a, b) {
  if (b === 0) throw new Error('Деление на ноль невозможно');
  return a / b;
}`}</VsCode>

      <p>Или сделать свой класс ошибки:</p>
      <VsCode>{`class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}`}</VsCode>

      <h2>Итого</h2>
      <ul>
        <li><strong>try/catch</strong> — для обработки синхронных ошибок.</li>
        <li>
          <strong>.catch()</strong> и <strong>async/await</strong> — для промисов и асинхронных операций.
        </li>
        <li>
          <strong>Node.js callbacks</strong> используют стиль error-first — ошибка первым аргументом.
        </li>
        <li>
          <strong>process.on()</strong> — ловит ошибки, которые не были обработаны явно, но использовать стоит только как запасной вариант.
        </li>
        <li>Создавай свои ошибки, если хочешь дать более точное описание ситуации.</li>
        <li>Хорошая обработка ошибок делает приложение стабильным и предсказуемым.</li>
      </ul>
      <NavButtons
        prev={'/nodeJs/AsyncBasics'}
        next={'/nodeJs/Timers'}
      />
      <Test
        allTasks={[
          {
            question: "Какой результат выполнения следующего кода?",
            code: `try {
  setTimeout(() => {
    throw new Error('Ошибка в таймере');
  }, 0);
} catch (e) {
  console.log('Поймано:', e.message);
}`,
            variants: [
              "Поймано: Ошибка в таймере",
              "Uncaught Error: Ошибка в таймере",
              "Ничего не выведется",
            ],
            explanations: [
              "setTimeout — асинхронный, ошибка выбрасывается вне try/catch.",
              "Ошибка не будет поймана, потому что колбэк setTimeout исполняется позже, вне блока try/catch. Это асинхронная операция.",
              "На самом деле ошибка будет в консоли как Uncaught Error.",
            ],
            correct: 1,
            isCode: false
          },
          {
            question: "Что произойдёт, если промис завершится с ошибкой, но без .catch() или try/catch?",
            variants: [
              "Ошибка будет проигнорирована silently",
              "Код завершится с синтаксической ошибкой",
              "Node.js вызовет событие unhandledRejection",
              "Промис никогда не перейдёт в завершённое состояние"
            ],
            explanations: [
              "В Node.js такие ошибки не игнорируются, они фатальны.",
              "Синтаксис тут не при чём, ошибка — в логике выполнения.",
              "Node.js отслеживает необработанные отклонения промисов.",
              "Промис завершится — просто с ошибкой, но без обработчика."
            ],
            correct: 2,
            isCode: false
          },
          {
            question: "Выберите корректное определение: что такое конструкция try/catch?",
            variants: [
              "Это механизм отложенного выполнения кода",
              "Это синтаксис для безопасного выполнения потенциально опасного блока кода",
              "Это способ создания асинхронного кода в Node.js",
              "Это альтернатива setTimeout"
            ],
            explanations: [
              "try/catch выполняется немедленно, не откладывает выполнение.",
              "Его задача — ловить исключения и не прерывать выполнение программы.",
              "Для асинхронности используют промисы, async/await, а не try/catch сам по себе.",
              "setTimeout — про таймеры, не про обработку исключений."
            ],
            correct: 1,
            isCode: false
          },
          {
            question: "Что будет выведено в консоль?",
            code: `async function f() {
  throw new Error("BOOM");
}

f().catch(err => console.log("Поймано:", err.message));`,
            variants: [
              "Поймано: BOOM",
              "UnhandledPromiseRejection",
              "Ошибка синтаксиса",
              "Ничего не произойдёт"
            ],
            explanations: [
              "Ошибка будет перехвачена в .catch().",
              "Ошибка перехвачена — глобального события не будет.",
              "Код валиден, синтаксис корректный.",
              "Функция выполнится, промис завершится ошибкой, но она обработана."
            ],
            correct: 0,
            isCode: false
          }
        ]}
      />
      <NavButtons
        prev={'/nodeJs/AsyncBasics'}
        next={'/nodeJs/Timers'}
      />
    </section>
  )
}