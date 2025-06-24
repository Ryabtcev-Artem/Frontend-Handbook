import VsCode from "../../../components/VsCode/VsCode.tsx";
import diff from '../../../images/JsImages/Arrow/diff.png'
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
import Test from "../../../components/Test/Test.tsx";


export default function Arrow() {
  

  return (
    <section className="topic container">
      <h2>Arrow Function (стрелочная функция)</h2>

      <p>
        <strong>Стрелочная функция</strong> — это краткий синтаксис объявления функций,
        введённый в ES6. Она особенно удобна для коротких функций и замыканий.
      </p>

      <VsCode>{`const sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5`}</VsCode>

      <h3>Синтаксис стрелочных функций</h3>
      <ul>
        <li><strong>Без параметров:</strong> <VsCode>{`() => значение`}</VsCode>
        </li>
        <li><strong>С одним параметром:</strong>
          <VsCode>{`x => значение`}</VsCode></li>
        <li><strong>С несколькими параметрами:</strong>
          <VsCode>{`(x, y) => выражение`}</VsCode></li>
        <li><strong>С телом блока:</strong>
          <VsCode>{`(x) => { /* тело */}`}</VsCode>
        </li>
      </ul>

      <h3>Основные отличия от обычных функций</h3>

      <ol>
        <li>
          <strong>Нет собственного <code>this</code></strong><br />
          Стрелочные функции не имеют своего <code>this</code>, они берут его из внешнего контекста,
          в котором были созданы (лексическое связывание).
          <VsCode>{`const user = {
  name: "Alice",
  greet: function () {
    const inner = () => {
      console.log("Hi, " + this.name);
    };
    inner();
  }
};
user.greet(); // Hi, Alice`}</VsCode>
        </li>

        <li>
          <strong>Нельзя использовать как конструктор</strong><br />
          Стрелочные функции не имеют <code>[[Construct]]</code>, нельзя вызывать с <code>new</code>.
          <VsCode>{`const Person = (name) => {
  this.name = name;
};
const p = new Person("Bob"); // TypeError: Person is not a constructor`}</VsCode>
        </li>

        <li>
          <strong>Нет <code>arguments</code></strong><br />
          У стрелочных функций нет своего <code>arguments</code>-объекта. Для доступа к аргументам — использовать rest-оператор.
          <VsCode>{`const logArgs = (...args) => {
  console.log(args);
};
logArgs(1, 2, 3); // [1, 2, 3]`}</VsCode>
        </li>

        <li>
          <strong>Нельзя изменить <code>this</code> с помощью <code>call/apply/bind</code></strong><br />
          Методы <code>call</code>, <code>apply</code> и <code>bind</code> не меняют <code>this</code> стрелочной функции.
        </li>
      </ol>

      <h3>Отличие от function declaration и expression</h3>
      <img
        src={diff}
        alt=""
        width=""
        height=""
        loading="lazy"
      />

      <h3>Когда использовать стрелочную функцию?</h3>
      <ul>
        <li>Когда нужен краткий синтаксис</li>
        <li>В коллбеках, особенно в методах массива (map, filter, reduce)</li>
        <li>При замыканиях, где важно сохранить <code>this</code> из внешнего контекста
        </li>
      </ul>

      <p><strong>Не</strong> стоит использовать стрелочные функции:</p>
      <ul>
        <li>Для методов объектов (если требуется <code>this</code>)</li>
        <li>Для конструкторов</li>
      </ul>
      <NavButtons
        prev={'/js/Curry'}
        next={'/js/Generators'}
      />
      <Test allTasks={[
      {
        question: "Что произойдёт при попытке выполнить данный код?",
        variants: [
        `Hello`,
        `undefined`,
        `object Window`,
        `TypeError`
        ],
        explanations: [
        `Arrow-функция не имеет собственного контекста и использует внешний this, равный "Hello".`,
        `Arrow-функция не теряет контекст, this остаётся прежним.`,
        `this в arrow-функции не указывает на объект Window без причины.`,
        `Arrow-функции нельзя использовать как конструкторы, вызов с new вызовет TypeError.`
        ],
        correct: 3,
        isCode: true,
        code: `const Arrow = () => {};
const obj = new Arrow();
`
      },
      {
        question: "Какой результат выполнения кода?",
        variants: [
        `42`,
        `undefined`,
        `NaN`,
        `function`
        ],
        explanations: [
        `Функция возвращает литерал объекта, но обёрнутый в скобки, интерпретируется как выражение.`,
        `Возвращается литерал объекта, но без скобок — интерпретируется как блок, return не срабатывает.`,
        `NaN невозможно получить в данном контексте.`,
        `Функция возвращает не функцию, а объект.`
        ],
        correct: 0,
        isCode: true,
        code: `const fn = () => ({ value: 42 });
console.log(fn().value);
`
      },
      {
        question: "Какая из записей создаёт стрелочную функцию, возвращающую сумму аргументов a и b?",
        variants: [
        `a, b => { return a + b; }`,
        `(a, b) => return a + b`,
        `(a, b) => a + b`,
        `a + b => (a, b)`
        ],
        explanations: [
        `Без скобок вокруг параметров не допускается, если их больше одного.`,
        `Слово return не может использоваться без фигурных скобок.`,
        `Это корректная краткая форма записи стрелочной функции.`,
        `Это синтаксически недопустимая форма.`
        ],
        correct: 2,
        isCode: true,
      },
      {
        question: "В чём отличие стрелочной функции от обычной (function declaration)?",
        variants: [
        `"Arrow-функция имеет собственный this, обычная — нет"`,
        `"Обычная функция может быть вызвана с new, стрелочная — нет"`,
        `"Arrow-функция может использовать arguments, обычная — нет"`,
        `"Обе функции можно использовать как конструкторы"`
        ],
        explanations: [
        `Наоборот: у стрелочной функции нет собственного this, он берётся из внешнего контекста.`,
        `Стрелочные функции не имеют собственного конструктора и вызов с new вызовет ошибку.`,
        `Arrow-функции не имеют arguments, только через rest-параметры.`,
        `Стрелочные функции нельзя использовать как конструкторы.`
        ],
        correct: 1,
        isCode: false
      }
        ]} />
      <NavButtons
        prev={'/js/Curry'}
        next={'/js/Generators'}
      />
    </section>
  )
}