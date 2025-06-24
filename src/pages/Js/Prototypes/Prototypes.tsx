import VsCode from "../../../components/VsCode/VsCode.tsx";
import Test from "../../../components/Test/Test.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";


export default function Prototypes() {
  

  return (
    <section className={`topic container`}>
      <h2>Прототипы в JavaScript: <code>__proto__</code> и <code>.prototype</code>
      </h2>

      <h3>Что такое прототип</h3>
      <p>
        Прототип — это объект, от которого другой объект наследует свойства и методы.
        В JavaScript у каждого объекта есть скрытая ссылка на его прототип, и это формирует так называемую <strong>прототипную цепочку</strong>.
      </p>
      <p>
        Когда к объекту обращаются за свойством, которого в нём нет, JavaScript идёт по этой цепочке вверх — через прототипы — до тех пор, пока не найдёт нужное свойство или не дойдёт до <code>null</code>.
      </p>

      <h3><code>__proto__</code> — ссылка на прототип</h3>
      <p>
        <code>__proto__</code> — это специальное свойство, присутствующее у всех объектов (кроме <code>null</code>), которое указывает на их прототип.
      </p>
      <p>
        Это не стандартное свойство по спецификации, а геттер/сеттер к внутреннему <code>[[Prototype]]</code>. Используется в основном для отладки и визуализации цепочек прототипов.
      </p>

      <VsCode>{`const animal = { eats: true };
const rabbit = { jumps: true };

rabbit.__proto__ = animal;

console.log(rabbit.eats); // true — найдено по цепочке
`}</VsCode>

      <p>
        Лучше использовать стандартные методы:
      </p>

      <VsCode>{`Object.getPrototypeOf(rabbit); // Для получения прототипа объекта
Object.setPrototypeOf(rabbit, animal); // Для установки прототипа объекта
`}</VsCode>

      <h3><code>.prototype</code> — свойство функции-конструктора</h3>
      <p>
        <code>.prototype</code> — это не то же самое, что <code>__proto__</code>. Этот метод существует только у функций (включая классы, так как они тоже функции, но в обертке), и определяет <strong>будущий прототип</strong> объектов, создаваемых этой функцией через <code>new</code>. Обычно такие функции пишут с большой буквы, это является хорошим тоном.
      </p>

      <VsCode>{`function Animal() {}
Animal.prototype.eats = true;

const rabbit = new Animal();

console.log(rabbit.eats); // true — унаследовано из Animal.prototype
`}</VsCode>

      <p>
        При создании объекта через <code>new Animal()</code>, в <code>rabbit.__proto__</code> автоматически записывается <code>Animal.prototype</code>.
      </p>

      <h3>Классы и прототипы</h3>
      <p>
        Классы в JavaScript — это синтаксический сахар над функциями-конструкторами. Внутри они всё ещё используют прототипы.
      </p>

      <VsCode>{`class Animal {
  eat() { console.log("nom"); }
}

const cat = new Animal();

console.log(Object.getPrototypeOf(cat) === Animal.prototype); // true
`}</VsCode>

      <h3>Особенности и важные моменты</h3>
      <ul>
        <li>Каждый объект имеет <code>[[Prototype]]</code>, доступ к которому можно получить через <code>__proto__</code> или <code>Object.getPrototypeOf()</code>.
        </li>
        <li>Функции (и только они) имеют <code>.prototype</code>, который используется как прототип для объектов, создаваемых с помощью <code>new</code>.
        </li>
        <li>
          <code>__proto__</code> у объекта указывает на <code>.prototype</code> функции, через которую он был создан.
        </li>
        <li>Цепочка прототипов может быть сколь угодно длинной, и поиск свойств идёт по ней вверх.</li>
        <li>
          <code>Object.create(proto)</code> позволяет создать объект с заданным прототипом без конструктора.
        </li>
      </ul>

      <h3>Как связаны <code>__proto__</code> и <code>.prototype</code></h3>
      <p>
        Самое важное соотношение:
      </p>

      <VsCode>{`const a = new SomeFunc();

a.__proto__ === SomeFunc.prototype; // true
`}</VsCode>

      <p>
        То есть: <strong>объект наследует свойства из <code>.prototype</code> функции-конструктора через <code>__proto__</code></strong>.
      </p>

      <h3>Можно ли изменять <code>__proto__</code> напрямую?</h3>
      <p>
        Да, но не рекомендуется. Это небезопасно и может привести к ошибкам производительности и чтения.
        Вместо этого используйте:
      </p>

      <VsCode>{`Object.create(proto);
Object.setPrototypeOf(obj, proto);
`}</VsCode>

      <h3>Итого</h3>
      <ul>
        <li>
          <code>__proto__</code> — это внутренняя ссылка объекта на его прототип.
        </li>
        <li>
          <code>.prototype</code> — это свойство у функции, которое определяет, что получит в <code>__proto__</code> созданный через <code>new</code> объект.
        </li>
        <li>Они не одно и то же, но связаны: <code>obj.__proto__ === Constructor.prototype</code>.
        </li>
        <li>Прототипы формируют цепочку, по которой JavaScript ищет свойства и методы.</li>
        <li>Лучше использовать <code>Object.create</code> и <code>Object.getPrototypeOf</code> вместо прямого изменения <code>__proto__</code>.
        </li>
      </ul>
      <NavButtons prev={'/js/This'} next={'/js/New'} />
      <Test
        allTasks={[
          {
            question: "Что такое __proto__ в JavaScript?",
            variants: [
              "Собственное свойство объекта",
              "Метод для создания объекта",
              "Ссылка на прототип, от которого унаследован объект",
              "Система типов ECMAScript"
            ],
            explanations: [
              "__proto__ — это не собственное свойство, а скрытая ссылка на прототип.",
              "Это не метод, а специальное внутреннее свойство.",
              "Верно. __proto__ — это внутреннее свойство объекта, указывающее на его прототип.",
              "__proto__ не имеет отношения к системе типов языка."
            ],
            correct: 2,
            isCode: false
          },
          {
            question: "Что такое .prototype у функции в JavaScript?",
            variants: [
              "Свойство всех объектов",
              "Объект, который станет прототипом при вызове функции через new",
              "Список всех методов функции",
              "Родитель всех объектов"
            ],
            explanations: [
              ".prototype есть только у функций, не у всех объектов.",
              "Да. Если вызвать функцию через new, её .prototype станет прототипом нового объекта.",
              "Методы могут быть в .prototype, но сам .prototype — это объект, не список.",
              "Object.prototype — родитель всех объектов, но не .prototype."
            ],
            correct: 1,
            isCode: false
          },
          {
            question: "Какой результат выполнения кода?",
            isCode: true,
            code: `function A() {}
A.prototype.greet = () => "hi";

const obj = new A();
console.log(obj.greet());`,
            variants: [
              `"hi"`,
              `undefined`,
              `TypeError`,
              `"greet"`
            ],
            explanations: [
              "Функция greet определена в прототипе, и доступна объекту.",
              "Метод есть в прототипе, так что вернётся не undefined.",
              "Нет ошибки, всё валидно.",
              "Метод greet возвращает 'hi', не 'greet'."
            ],
            correct: 0
          },
          {
            question: "Какой результат выполнения кода?",
            isCode: true,
            code: `const a = Record<string, never>;
console.log(a.__proto__ === Object.prototype);`,
            variants: [
              "true",
              "false",
              "undefined",
              "TypeError"
            ],
            explanations: [
              "Все обычные объекты наследуют от Object.prototype.",
              "Это было бы верно, если бы a создавался нестандартно.",
              "__proto__ существует по умолчанию.",
              "Нет ошибки, просто сравнение."
            ],
            correct: 0
          },
          {
            question: "Какой прототип у функции?",
            isCode: true,
            code: `function Foo() {}

console.log(Object.getPrototypeOf(Foo));`,
            variants: [
              "Function.prototype",
              "Object.prototype",
              "null",
              "Foo.prototype"
            ],
            explanations: [
              "Функции являются экземплярами Function, их прототип — Function.prototype.",
              "Object.prototype — прототип обычных объектов, не функций.",
              "Функции никогда не имеют null-прототип.",
              "Foo.prototype — это объект, на который ссылается сам Foo, но он не его прототип."
            ],
            correct: 0
          },
          {
            question: "Что будет результатом этого кода?",
            isCode: true,
            code: `const a = Record<string, never>;
const b = Object.create(a);

console.log(b.__proto__ === a);`,
            variants: [
              "true",
              "false",
              "undefined",
              "null"
            ],
            explanations: [
              "Object.create(a) создаёт объект, у которого a — прототип.",
              "Это утверждение неверно, b наследует от a.",
              "__proto__ есть у объекта.",
              "__proto__ никогда не null у созданного объекта, если явно не задано."
            ],
            correct: 0
          },
          {
            question: "Какая связь между __proto__ и Object.getPrototypeOf?",
            variants: [
              "__proto__ используется внутри Object.getPrototypeOf",
              "Они делают одно и то же, но первый неформальный",
              "__proto__ — метод, getPrototypeOf — свойство",
              "Они возвращают разные значения"
            ],
            explanations: [
              "__proto__ — не часть реализации getPrototypeOf.",
              "Верно. Оба возвращают прототип, но __proto__ — неформальный и устаревший.",
              "__proto__ — свойство, а не метод.",
              "Они возвращают одно и то же — [[Prototype]]."
            ],
            correct: 1,
            isCode: false
          },
          {
            question: "Какой способ создания объекта предпочтителен с точки зрения производительности?",
            variants: [
              "Object.setPrototypeOf",
              "Object.create",
              "__proto__",
              "Object.assign"
            ],
            explanations: [
              "Этот метод мутирует объект, и может быть дорогим.",
              "Да. Object.create сразу создаёт объект с нужным прототипом.",
              "__proto__ устаревший и не рекомендуется.",
              "Object.assign не создаёт прототипные связи."
            ],
            correct: 1,
            isCode: false
          },
          {
            question: "Что вернёт этот код?",
            isCode: true,
            code: `const obj = Object.create(null);

console.log(obj.__proto__);`,
            variants: [
              "undefined",
              "null",
              "Object.prototype",
              "Ошибка"
            ],
            explanations: [
              "У объектов, созданных через Object.create(null), нет __proto__.",
              "Это верно. У объекта нет прототипа вообще.",
              "Object.prototype не устанавливается по умолчанию при create(null).",
              "Нет ошибки, просто undefined."
            ],
            correct: 0
          },
          {
            question: "Что делает Object.getPrototypeOf?",
            variants: [
              "Возвращает объект-прототип",
              "Изменяет прототип",
              "Создаёт новый объект",
              "Проверяет тип"
            ],
            explanations: [
              "Верно. Object.getPrototypeOf просто возвращает прототип.",
              "Для изменения используется setPrototypeOf.",
              "Это не конструктор.",
              "Метод не связан с типизацией."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Что выведет этот код?",
            isCode: true,
            code: `function Animal() {}
Animal.prototype.legs = 4;

const dog = new Animal();
Animal.prototype.legs = 3;

console.log(dog.legs);`,
            variants: [
              "3",
              "4",
              "undefined",
              "TypeError"
            ],
            explanations: [
              "Изменение в прототипе влияет на все объекты, которые на него ссылаются.",
              "4 — это старое значение, оно переопределено.",
              "legs доступен через прототип.",
              "Ошибки нет."
            ],
            correct: 0
          },
          {
            question: "Может ли __proto__ быть унаследованным свойством?",
            variants: [
              "Нет, это внутреннее свойство",
              "Да, если наследуется от другого объекта",
              "Да, но это не влияет на поведение",
              "__proto__ никогда не наследуется"
            ],
            explanations: [
              "__proto__ может быть как внутренним, так и унаследованным.",
              "Правильно. __proto__ — обычное свойство в спецификации, может быть в цепочке.",
              "Это влияет на поведение: определяет цепочку.",
              "Это возможно, особенно в старых реализациях."
            ],
            correct: 1,
            isCode: false
          },
          {
            question: "Какой результат?",
            isCode: true,
            code: `const obj = Record<string, never>;
obj.__proto__ = null;

console.log(Object.getPrototypeOf(obj));`,
            variants: [
              "null",
              "Object.prototype",
              "undefined",
              "Ошибка"
            ],
            explanations: [
              "Да, мы явно обнулили прототип.",
              "Object.prototype — это поведение по умолчанию, но оно изменено.",
              "undefined — это значение obj.__proto__, а не getPrototypeOf.",
              "Ошибки нет."
            ],
            correct: 0
          },
          {
            question: "Можно ли удалить свойство из прототипа?",
            variants: [
              "Да, через delete",
              "Нет, только из самого объекта",
              "Да, но только через Object.freeze",
              "Можно, только если объект неизменяемый"
            ],
            explanations: [
              "Верно. delete работает с любыми свойствами — в том числе из .prototype.",
              "Это неверно. Прототип — обычный объект.",
              "freeze предотвращает изменения, а не удаляет.",
              "Не имеет отношения к удалению."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Что вернёт этот код?",
            isCode: true,
            code: `function A() {}
const a = new A();

console.log(a.constructor === A);`,
            variants: [
              "true",
              "false",
              "undefined",
              "TypeError"
            ],
            explanations: [
              "По умолчанию в .prototype.constructor указывается сама функция.",
              "Это верно, если вручную перезаписать .prototype.",
              "constructor всегда определён по умолчанию.",
              "Нет ошибки."
            ],
            correct: 0
          },
          {
            question: "Можно ли вручную установить __proto__?",
            variants: [
              "Да, но это не рекомендуется",
              "Нет, это только чтение",
              "Да, и это самый надёжный способ",
              "Только в ES5"
            ],
            explanations: [
              "Можно, но это устаревшая и потенциально проблемная практика.",
              "__proto__ можно писать.",
              "Это ненадёжно, в новых проектах лучше использовать create или setPrototypeOf.",
              "Доступно и позже, не только в ES5."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Какая связь между классами и prototype?",
            variants: [
              "Классы — это синтаксический сахар над прототипами",
              "Они работают по разным системам",
              "Классы не используют prototype",
              "prototype у классов не существует"
            ],
            explanations: [
              "Да. Классы под капотом работают на прототипах.",
              "Они неразрывно связаны, не независимы.",
              "Каждый класс имеет prototype.",
              "Это не так — у классов есть prototype."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Что будет результатом?",
            isCode: true,
            code: `class A {}
const a = new A();

console.log(Object.getPrototypeOf(a) === A.prototype);`,
            variants: [
              "true",
              "false",
              "undefined",
              "TypeError"
            ],
            explanations: [
              "Объекты, созданные через new, получают prototype конструктора как прототип.",
              "Это верно только если a был бы создан иначе.",
              "getPrototypeOf никогда не возвращает undefined для валидных объектов.",
              "Нет ошибки."
            ],
            correct: 0
          }
        ]
        }
      />
      <NavButtons prev={'/js/This'} next={'/js/New'} />
    </section>
  )
}