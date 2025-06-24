import VsCode from "../../../components/VsCode/VsCode.tsx";
import Test from "../../../components/Test/Test.tsx";
import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";


export default function FunctionTypes() {
  

  return (
    <section className={'topic container'}>
      <h2>Типы функций в JavaScript</h2>
      <p>
        <strong>Функция</strong> — это именованный или анонимный блок кода, который выполняет определённую задачу, может принимать входные параметры, выполнять операции и возвращать результат. Функции позволяют повторно использовать код, обеспечивают изоляцию логики и управляют потоком выполнения программы. Каждая функция имеет собственный контекст выполнения и область видимости для локальных переменных.
      </p>
      <h3>Объявление функций</h3>
      <p>
        В JavaScript функции можно создавать разными способами:
      </p>
      <ul>
        <li>
          <b>Function Declaration</b> — классический способ с помощью ключевого слова <code>function</code>.
        </li>
        <li><b>Function Expression</b> — функция, присвоенная переменной.</li>
        <li>
          <b>Arrow Function</b> — короткий синтаксис, не имеющий собственного <code>this</code>.
        </li>
      </ul>
      <h3>Пример</h3>
      <VsCode>{`// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
const multiply = function(a, b) {
  return a * b;
}

// Arrow Function
const divide = (a, b) => a / b;`}</VsCode>
      <p>
        Каждый способ имеет свои особенности и подходит под разные задачи.
        Например, arrow-функции удобны для коротких вычислений и не имеют собственного <code>this</code>, что упрощает работу с контекстом.
      </p>

      <h3>Hoisting (Поднятие)</h3>
      <p>
        <b>Function Declaration</b> поднимается (hoisted) целиком, что позволяет вызывать функцию до её объявления в коде.
        <br />
        <b>Function Expression</b> и <b>Arrow Function</b> ведут себя как переменные: поднимается только объявление переменной, но не присвоение функции. Поэтому вызов до присвоения вызовет ошибку.
      </p>
      <h3>Пример</h3>
      <VsCode>{`// Вызов Function Declaration до объявления работает
console.log(sum(2, 3)); // 5
function sum(a, b) {
  return a + b;
}

// Вызов Function Expression до присвоения — ошибка
console.log(multiply(2, 3)); // ReferenceError
const multiply = function(a, b) {
  return a * b;
};

// Вызов Arrow Function до присвоения — тоже ошибка
console.log(divide(6, 2)); // ReferenceError
const divide = (a, b) => a / b;`}</VsCode>
      <p>
        Это важно учитывать, чтобы избежать неожиданных ошибок в коде.
      </p>


      <h3>Передача параметров и возврат значений</h3>
      <p>
        Параметры функции — входные данные. Возврат — результат работы функции через оператор <code>return</code>.
      </p>
      <h3>Итого</h3>
      <ul>
        <li>Функция — блок кода для повторного использования.</li>
        <li>Объявлять функции можно через декларации, выражения или стрелочные функции.</li>
        <li>Понимание особенностей каждого типа важно для правильного выбора.</li>
        <li>Arrow-функции не имеют собственного <code>this</code> и удобны для коротких операций.
        </li>
      </ul>
      <NavButtons prev={'/js/Loops'} next={'/js/Closures'} />
      <Test
        allTasks={[
          {
            question: 'Какой способ объявления функции поднимается (hoisted) целиком, позволяя вызывать функцию до её объявления?',
            variants: [
              'Function Declaration',
              'Function Expression',
              'Arrow Function',
              'Все способы одинаково поднимаются'
            ],
            explanations: [
              'Function Declaration полностью поднимается, поэтому её можно вызвать до определения.',
              'Function Expression поднимается как переменная, но функция присваивается только после выполнения кода.',
              'Arrow Function тоже ведёт себя как переменная, не поднимается целиком.',
              'Неверно, только Function Declaration поднимается полностью.'
            ],
            correct: 0,
            isCode: false
          },
          {
            question: 'Что будет, если вызвать Function Expression до её присвоения?',
            variants: [
              'Функция выполнится без ошибок',
              'Будет ошибка ReferenceError',
              'Вернётся undefined',
              'Код сработает, но вернёт null'
            ],
            explanations: [
              'Неверно — функция не присвоена, поэтому вызова нет.',
              'Правильно — переменная объявлена, но функция ещё не присвоена, ReferenceError.',
              'Неверно, функция не возвращает undefined, а вызов выдаст ошибку.',
              'Неверно — null не возвращается в этом случае.'
            ],
            correct: 1,
            isCode: false
          },
          {
            question: 'Какой синтаксис объявления функции не имеет собственного this?',
            variants: [
              'Function Declaration',
              'Function Expression',
              'Arrow Function',
              'Все функции имеют this'
            ],
            explanations: [
              'Function Declaration имеет собственный this.',
              'Function Expression тоже имеет собственный this.',
              'Arrow Function наследует this из внешнего контекста и не имеет своего.',
              'Неверно — Arrow Function не имеет собственного this.'
            ],
            correct: 2,
            isCode: false
          },
          {
            question: 'Что делает оператор return в функции?',
            variants: [
              'Прекращает выполнение функции и возвращает значение',
              'Останавливает весь скрипт',
              'Выводит значение в консоль',
              'Объявляет новую переменную'
            ],
            explanations: [
              'Верно — return завершает функцию и возвращает результат.',
              'Неверно — скрипт продолжается, return действует только внутри функции.',
              'Неверно — для вывода в консоль используется console.log.',
              'Неверно — return не объявляет переменные.'
            ],
            correct: 0,
            isCode: false
          },
          {
            question: 'Какая из функций ниже является Function Expression?',
            variants: [
              'function test() { return 1; }',
              'const test = function() { return 1; }',
              'const test = () => 1',
              'Все варианты являются Function Expression'
            ],
            explanations: [
              'Это Function Declaration, объявленная через function.',
              'Это классический Function Expression, присвоенный переменной.',
              'Это тоже Function Expression, но в виде стрелочной функции.',
              'Неверно, первый — декларация, остальные — выражения.'
            ],
            correct: 1,
            isCode: true,
            code: `function test() { return 1; }
const test = function() { return 1; }
const test = () => 1`
          }
        ]}
      />
      <JsPlayground
        taskId={3}
        functionName={'fibonacciSequence'}
        answers={[
          [0],
          [0, 1],
          [0, 1, 1, 2, 3, 5],
          [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55],
        ]}
        defaultCode={`function fibonacciSequence(n) {

}`}
        title={'Задача: Рекурсивное построение массива чисел Фибоначчи'}
        examples={[
          'fibonacciSequence(0) \n// Ожидаемый результат: [0]',
          'fibonacciSequence(1) \n// Ожидаемый результат: [0, 1]',
          'fibonacciSequence(5) \n// Ожидаемый результат: [0, 1, 1, 2, 3, 5]',
        ]}
        description={
          'Реализуйте функцию fibonacciSequence, которая принимает число n и возвращает массив чисел Фибоначчи от 0 до n включительно, используя рекурсию. Числа Фибоначчи - это числовая последовательность, в которой каждое число равно сумме двух предыдущих.'
        }
      />



      <NavButtons prev={'/js/Loops'} next={'/js/Closures'} />
    </section>
  )
}
