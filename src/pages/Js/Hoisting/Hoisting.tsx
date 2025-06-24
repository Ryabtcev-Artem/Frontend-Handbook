import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
import Test from "../../../components/Test/Test.tsx";
import VsCode from "../../../components/VsCode/VsCode.tsx";


export default function Hoisting() {
  

  return (
    <section className={'topic container'}>
      <h2>Hoisting</h2>

      <p>
        <strong>Hoisting</strong> — это механизм в JavaScript, при котором объявления переменных и функций автоматически поднимаются вверх своей области видимости перед выполнением кода.
      </p>

      <p>
        Проще говоря, JavaScript сначала «смотрит» на весь код и регистрирует все объявления переменных и функций, а потом уже выполняет инструкции. Благодаря этому можно использовать функции и переменные до того, как они были написаны в коде.
      </p>

      <h3>Hoisting переменных</h3>
      <p>
        Для переменных, объявленных с помощью <code>var</code>, происходит поднятие объявления, но не инициализация. Это значит, что переменная существует с начала области видимости, но пока её значение — <code>undefined</code>.
      </p>
      <p>
        Переменные, объявленные через <code>let</code> и <code>const</code>, тоже поднимаются, но находятся в «временной мёртвой зоне» (TDZ) до момента их объявления в коде. Попытка использовать такие переменные до объявления приведёт к ошибке.
      </p>
      <VsCode>
        {`console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;`}
      </VsCode>

      <h3>Hoisting функций</h3>
      <p>
        Функциональные объявления (function declaration) полностью поднимаются — и объявление, и тело функции доступны во всей области видимости. Это позволяет вызывать функцию до её объявления в коде.
      </p>
      <p>
        Функциональные выражения, присвоенные переменным (например, через <code>const</code> или <code>let</code>), ведут себя как обычные переменные — поднимается только объявление переменной (если <code>var</code>), но не инициализация с функцией.
      </p>
      <VsCode>
        {`sayHi(); // Hello

function sayHi() {
  console.log("Hello");
}

sayBye(); // TypeError: sayBye is not a function
var sayBye = function() {
  console.log("Bye");
};`}
      </VsCode>

      <h3>Практические последствия</h3>
      <p>
        Hoisting часто становится причиной ошибок и неожиданного поведения кода. Понимание его принципов помогает писать более предсказуемый и безопасный код.
      </p>
      <p>
        Рекомендуется использовать <code>let</code> и <code>const</code> и объявлять функции перед использованием, чтобы избежать проблем, связанных с hoisting.
      </p>

      <h3>Итого</h3>
      <ul>
        <li>Hoisting — механизм поднятия объявлений переменных и функций в начало области видимости до выполнения кода.</li>
        <li>
          <code>var</code> — объявление поднимается, значение — <code>undefined</code> до инициализации.
        </li>
        <li>
          <code>let</code> и <code>const</code> поднимаются, но доступны только после объявления (TDZ).
        </li>
        <li>Function declaration полностью поднимается — можно вызывать функцию до её объявления.</li>
        <li>Function expression ведёт себя как переменная — доступна только после инициализации.</li>
        <li>Для избегания ошибок лучше объявлять переменные и функции перед использованием.</li>
      </ul>
      <NavButtons
        prev={'/js/Variables'}
        next={'/js/Primitives'}
      />
      <Test
        allTasks={[
          {
            question: 'Что означает hoisting в JavaScript?',
            variants: ['Объявления переменных и функций поднимаются вверх своей области видимости перед выполнением кода.', 'Переменные и функции создаются только во время исполнения соответствующих строк.', 'Все переменные и функции становятся доступными только после их объявления.', 'Hoisting — автоматическое удаление неиспользуемого кода.'],
            explanations: ['Объявления поднимаются, что позволяет использовать их до фактической строки объявления.', 'Объявления регистрируются заранее, а не во время исполнения строки.', 'Некоторые объявления доступны раньше фактической строки кода.', 'Это не относится к hoisting, а к оптимизациям.'],
            correct: 0,
            isCode: false
          }, {
            question: 'Что выведет следующий код?',
            variants: ['undefined', 'ReferenceError', '10', 'null'],
            explanations: ['Переменная a объявлена через var и поднимается, но значение присваивается позже.', 'ReferenceError не возникает — var поднимается.', 'Значение 10 будет доступно после присваивания.', 'null в коде не используется.'],
            correct: 0,
            isCode: true,
            code: `console.log(a);\nvar a = 10;`
          }, {
            question: 'Что произойдет при выполнении кода?',
            variants: ['Выведет "Hi" без ошибок', 'ReferenceError', 'TypeError', 'Ничего не выведется'],
            explanations: ['Function declaration поднимается целиком и доступна до объявления.', 'ReferenceError не возникает.', 'TypeError не возникает при объявлении function.', 'Функция вызовется и выведет "Hi".'],
            correct: 0,
            isCode: true,
            code: `sayHi();\nfunction sayHi() { \n  console.log("Hi"); \n}`
          }, {
            question: 'Какой будет результат выполнения кода?',
            variants: ['"Hello"', 'ReferenceError', 'TypeError', 'undefined'],
            explanations: ['Функциональное выражение не поднимается как функция.', 'Переменная объявлена, ReferenceError не возникнет.', 'Переменная sayBye объявлена, но ещё не функция, вызов — TypeError.', 'undefined — значение переменной до присваивания, но вызов вызовет ошибку.'],
            correct: 2,
            isCode: true,
            code: `sayBye();\nvar sayBye = function() {\n  console.log("Hello"); \n};`
          }, {
            question: 'Что выведет следующий код?', variants: [
              'ReferenceError',
              'undefined',
              '10',
              '5'
            ],
            explanations: [
              'let не поднимается, использование до объявления вызывает ReferenceError.',
              'undefined — только для var, здесь let.',
              '10 — значение переменной, но ошибка до объявления.',
              '5 — не будет выведено из-за ошибки.'
            ],
            correct: 0,
            isCode: true,
            code: `console.log(x);\nlet x = 10;`
          }
        ]}
      />
      <NavButtons
        prev={'/js/Variables'}
        next={'/js/Primitives'}
      />
    </section>
  )
}
