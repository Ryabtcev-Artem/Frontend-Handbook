import Test from "../../../components/Test/Test.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
import VsCode from "../../../components/VsCode/VsCode.tsx";

type PrimitivesProps = {}
export default function Primitives(props: PrimitivesProps) {
  const {} = props

  return (
    <section className={'topic container'}>
      <h2>Примитивные типы данных в JavaScript</h2>

      <p>
        <strong>Примитивы</strong> — это значения, которые не являются объектами и не имеют методов. Они хранятся и передаются по значению, а не по ссылке.
      </p>

      <h3>number</h3>
      <p>
        <code>number</code> — тип для любых чисел: целых, дробных, положительных и отрицательных.
      </p>
      <p>Пример: <code>42</code>, <code>3.14</code>, <code>-7</code></p>

      <h3>string</h3>
      <p>
        <code>string</code> — строка текста. Может содержать любые символы, обёрнутые в одинарные, двойные или обратные кавычки.
      </p>
      <p>Пример: <code>"hello"</code>, <code>'мир'</code>, <code>{'`шаблон ${переменная}`'}</code>
      </p>

      <h3>boolean</h3>
      <p>
        <code>boolean</code> — логический тип с двумя значениями: <code>true</code> (истина) и <code>false</code> (ложь).
      </p>
      <p>Пример: <code>true</code>, <code>false</code></p>

      <h3>null</h3>
      <p>
        <code>null</code> — специальное значение, обозначающее "пусто" или "значение отсутствует". Устанавливается явно.
      </p>
      <p>Пример: <code>let user = null;</code></p>

      <h3>undefined</h3>
      <p>
        <code>undefined</code> — значение переменной, которая была объявлена, но не инициализирована.
      </p>
      <p>Пример: <code>let a;</code> // <code>a</code> сейчас <code>undefined</code>
      </p>

      <h3>bigint</h3>
      <p>
        <code>bigint</code> — тип для очень больших целых чисел, выходящих за пределы <code>Number.MAX_SAFE_INTEGER</code>.
      </p>
      <p>Пример: <code>1234567890123456789012345678901234567890n</code></p>

      <h3>symbol</h3>
      <p>
        <code>symbol</code> — уникальное и неизменяемое значение, часто используется в качестве уникальных ключей в объектах.
      </p>
      <p>Пример: <code>const id = Symbol('id');</code></p>

      <h3>typeof</h3>
      <p>Оператор <code>typeof</code> позволяет определить тип значения:</p>
      <VsCode>{`typeof 123       // "number"
typeof "text"    // "string"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof null      // "object" (исторический баг)
typeof Symbol()  // "symbol"
typeof 123n      // "bigint"`}
      </VsCode>

      <h3>Тонкости, которые следует запомнить</h3>

      <h4>NaN — "не число", но всё ещё number</h4>
      <p>
        <code>NaN</code> (Not-a-Number) — специальное значение, которое возникает при неудачных математических операциях.
      </p>
      <p>
        Пример: <code>Number("abc")</code> или <code>0 / 0</code> вернёт <code>NaN</code>.
      </p>
      <p>
        <strong>Тип у NaN — <code>number</code></strong>:
        <br />
        <code>typeof NaN === "number"</code>
      </p>
      <p>
        При этом <code>NaN !== NaN</code> — это единственное значение в JS, не равное самому себе.
      </p>

      <h4>typeof null === "object"</h4>
      <p>
        Это историческая ошибка в JavaScript, которая сохранена ради совместимости. <code>null</code> не является объектом, но <code>typeof null</code> возвращает <code>"object"</code>.
      </p>
      <h4>typeof undeclaredVariable</h4>
      <p>Если вы вызовите typeof для необъявленной переменной, он не выбросит ошибку, а просто вернёт строку "undefined".</p>
      <h4>null == undefined</h4>
      <p>При нестрогом сравнении == null и undefined считаются равными только друг другу, и больше — ничему. При строгом сравнении будет false <code>null === undefined // false</code></p>
      <h4>typeof function</h4>
      <p>
        Для функций <code>typeof</code> возвращает <code>"function"</code>, хотя функции — объекты. Это единственный случай, когда typeof возвращает не тип по спецификации, а специальную метку.
      </p>
      <p>Пример: <code>typeof function() &#123;&#125; // "function"</code></p>
      <h4>typeof vs instanceof</h4>
      <p>
        <code>typeof</code> работает только с примитивами и функциями. Для объектов (включая массивы и даты) используется <code>instanceof</code>.
      </p>
      <p>Пример: <code>[] instanceof Array // true</code></p>

      <h2>Итого</h2>
      <ul>
        <li>Примитивы — это 7 типов: number, string, boolean, null, undefined, bigint, symbol.</li>
        <li>Они не являются объектами и передаются по значению.</li>
        <li>
          <code>typeof</code> позволяет определить тип, но иногда ведёт себя неочевидно.
        </li>
        <li><code>NaN</code> — это число, но оно не равно самому себе.</li>
        <li><code>null</code> ошибочно считается объектом — это баг.</li>
        <li>Функции — особый случай: <code>typeof</code> покажет "function".
        </li>
      </ul>
      <NavButtons prev={'/js/Hoisting'} next={'/js/Transformation'} />
      <Test
        allTasks={[
          {
            question: 'Какой тип вернёт typeof для значения null?',
            variants: ['null', 'object', 'undefined', 'None'],
            explanations: [
              'typeof не возвращает "null" — это невалидное значение.',
              'typeof null возвращает "object" — историческая ошибка в языке.',
              'typeof undefined вернёт "undefined", но здесь значение — null.',
              'None — это не валидное значение в JavaScript, это из Python.'
            ],
            correct: 1,
            isCode: false
          },
          {
            question: 'Что выведется в консоль?',
            variants: [
              'number',
              'NaN',
              'undefined',
              'object'
            ],
            explanations: [
              'typeof NaN вернёт "number", несмотря на название.',
              'NaN — значение, а не тип. typeof возвращает строку.',
              'undefined — это отдельное значение, не связано с NaN напрямую.',
              'object — возвращается только у null.'
            ],
            correct: 0,
            isCode: true,
            code: `console.log(typeof NaN);`
          },
          {
            question: 'Что вернёт сравнение null == undefined?',
            variants: ['true', 'false', 'TypeError'],
            explanations: [
              'Они равны при нестрогом сравнении по спецификации.',
              'false было бы при строгом ===, но не при ==.',
              'TypeError возникает при недопустимых операциях, не при сравнении.'
            ],
            correct: 0,
            isCode: false
          },
          {
            question: 'Что выведется в консоль?',
            variants: [
              'number',
              'undefined',
              'function',
              'object'
            ],
            explanations: [
              'typeof вернёт "number", если переменная содержит число.',
              'typeof всегда возвращает строку, не undefined.',
              'function возвращается только для функций.',
              'object — только для null или объектов.'
            ],
            correct: 0,
            isCode: true,
            code: `let x = 123;\nconsole.log(typeof x);`
          },
          {
            question: 'Какой результат сравнения: NaN === NaN?',
            variants: ['true', 'false', 'undefined', 'NaN'],
            explanations: [
              'NaN никогда не равен даже самому себе по спецификации.',
              'Это верный результат: NaN !== NaN.',
              'undefined — это значение, не результат сравнения.',
              'NaN — значение, а не результат оператора ===.'
            ],
            correct: 1,
            isCode: false
          },
          {
            question: 'Какой тип вернёт typeof для функции?',
            variants: ['object', 'function', 'undefined', 'callable'],
            explanations: [
              'Функции — объекты, но typeof даёт специальный тип "function".',
              'typeof для функций — "function", по спецификации.',
              'undefined — только для неинициализированных переменных.',
              'callable — не валидный тип в JS.'
            ],
            correct: 1,
            isCode: false
          },
          {
            question: 'Что выведется в консоль?',
            variants: ['undefined', 'ReferenceError', 'null', 'false'],
            explanations: [
              'Переменная объявлена, но не инициализирована — её значение undefined.',
              'ReferenceError был бы при обращении к необъявленной переменной.',
              'null задаётся явно — здесь его нет.',
              'false — это логическое значение, здесь оно не используется.'
            ],
            correct: 0,
            isCode: true,
            code: `let a;\nconsole.log(a);`
          },
          {
            question: 'Что вернёт typeof для значения 123n?',
            variants: ['number', 'bigint', 'NaN', 'integer'],
            explanations: [
              'number — это для обычных чисел, но здесь число с суффиксом n.',
              'bigint — специальный тип для больших чисел.',
              'NaN — другое значение, здесь не при чём.',
              'integer — несуществующий тип в JavaScript.'
            ],
            correct: 1,
            isCode: false
          },
          {
            question: 'Что выведется в консоль?',
            variants: ['symbol', 'string', 'object', 'undefined'],
            explanations: [
              'typeof возвращает "symbol" для значений типа Symbol.',
              'Symbol — это не строка, а отдельный тип.',
              'object — будет только у null или объектов.',
              'undefined — это значение, а не тип symbol.'
            ],
            correct: 0,
            isCode: true,
            code: `const id = Symbol("id");\nconsole.log(typeof id);`
          },
          {
            question: 'Что произойдёт при выполнении кода?',
            variants: ['undefined', 'ReferenceError', 'null', 'TypeError'],
            explanations: [
              'typeof может быть вызван даже на необъявленной переменной — результат будет undefined.',
              'ReferenceError не произойдёт из-за особенностей typeof.',
              'null здесь не используется, только неинициализированная переменная.',
              'TypeError возникает при попытке вызвать не-функцию.'
            ],
            correct: 0,
            isCode: true,
            code: `console.log(typeof undeclaredVariable);`
          }
        ]}
      />
      <NavButtons prev={'/js/Hoisting'} next={'/js/Transformation'} />
    </section>
  )
}
