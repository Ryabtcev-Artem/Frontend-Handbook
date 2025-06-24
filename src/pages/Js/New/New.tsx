import VsCode from "../../../components/VsCode/VsCode.tsx";
import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function New() {
  

  return (
    <section className={'topic container'}>
      <h2>Оператор new в JavaScript</h2>

      <h3>Что делает оператор new</h3>
      Оператор <code>new</code> используется для создания объектов на основе функций-конструкторов. Он создаёт новый объект, связывает его с прототипом функции и вызывает эту функцию в специальном контексте.

      <h3>Пошаговая работа new</h3>
      Когда вызывается <code>new Constructor()</code>, JavaScript выполняет следующие шаги:

      <ol>
        <li>Создаёт новый пустой объект: <code>{`{}`}</code></li>
        <li>Устанавливает <code>[[Prototype]]</code> нового объекта на <code>Constructor.prototype</code></li>
        <li>Вызывает функцию <code>Constructor</code> с <code>this</code>, ссылающимся на новый объект</li>
        <li>Если функция возвращает объект — возвращается он. Если возвращает примитив или ничего — возвращается созданный объект</li>
      </ol>

      <h3>Простой пример</h3>

      <VsCode>{`function User(name) {
  this.name = name;
}

const u = new User("Alice");

console.log(u.name); // "Alice"`}</VsCode>

      Функция User вызвана с new, поэтому:

      - Создаётся объект u
      - У него будет u.__proto__ === User.prototype
      - Свойство name устанавливается через this.name = name

      <h3>Что будет, если не использовать new</h3>

      Если вызвать функцию-конструктор без new, она выполнится как обычная функция, и this будет указывать на глобальный объект (или undefined в строгом режиме):

      <VsCode>{`function Car(model) {
  this.model = model;
}

const wrongCar = Car("Tesla"); // без new
console.log(wrongCar); // undefined`}</VsCode>

      Вместо создания объекта мы просто установили свойство model на глобальный контекст. Это ошибка проектирования.

      <h3>Возврат значения в конструкторе</h3>

      Если функция-конструктор возвращает объект — он заменяет созданный по умолчанию. Но если возвращается примитив — он игнорируется.

      <VsCode>{`function Thing() {
  this.name = "box";
  return { custom: true };
}

const a = new Thing();
console.log(a); // { custom: true }`}</VsCode>

      Если бы return "hi" — возвращённый примитив игнорировался бы, и вернулся бы объект с name.

      <h3>Связь с prototype</h3>

      Оператор new напрямую связывает новый объект с .prototype функции:

      <VsCode>{`function Animal() {}
const dog = new Animal();

console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true`}</VsCode>

      Это основа прототипного наследования: все объекты, созданные через new Animal(), будут иметь доступ к свойствам и методам Animal.prototype.

      <h3>Использование new с классами</h3>

      С ключевым словом class new обязателен. Без него выбросится ошибка.

      <VsCode>{`class Human {
  constructor(name) {
    this.name = name;
  }
}

const h = new Human("Bob"); // ✅
const h2 = Human("Eve");    // ❌ TypeError`}</VsCode>

      <h3>Итого</h3>

      <ul>
        <li><code>new</code> создаёт объект на основе функции-конструктора</li>
        <li>Новый объект связывается с <code>Function.prototype</code> через <code>[[Prototype]]</code></li>
        <li>Конструктор вызывается с <code>this</code>, ссылающимся на новый объект</li>
        <li>Если конструктор возвращает объект — он заменяет результат <code>new</code></li>
        <li>Без <code>new</code> функция-конструктор не создаёт объект, и <code>this</code> указывает не туда</li>
        <li>С <code>class</code> оператор <code>new</code> обязателен</li>
      </ul>
      <NavButtons prev={'/js/Prototypes'} next={'/js/PrimitivesMethods'} />
      <JsPlayground
        taskId={6}
        functionName={'myNew'}
        answers={[
          { age: 30, name: "Alice" },
          { make: "Toyota", model: "Camry" },
          { x: 10, y: 20 },
        ]}
        defaultCode={`function myNew(constructorFn, argsArray) {

}`}
        title={'Задача: Пишем свою функцию new'}
        description={'Оператор new создаёт объект, связывает его с прототипом и вызывает функцию конструктора. В этой задаче вам нужно вручную реализовать поведение new. Возвращать нужно объект.'}
        examples={[
          `myNew(function User(age, name) {\n  this["age"] = age;\n  this["name"] = name;\n}, [30, "Alice"]) \n// Ожидаемый результат: {"age":30,"name":"Alice"}`,

          `myNew(function Car(make, model) {\n  this["make"] = make;\n  this["model"] = model;\n}, ["Toyota", "Camry"]) \n// Ожидаемый результат: {"make":"Toyota","model":"Camry"}`,

          `myNew(function Point(x, y) {\n  this["x"] = x;\n  this["y"] = y;\n}, [10, 20]) \n// Ожидаемый результат: {"x":10,"y":20}`
        ]
        }

      />
      <NavButtons prev={'/js/Prototypes'} next={'/js/PrimitivesMethods'} />
    </section>
  )
}