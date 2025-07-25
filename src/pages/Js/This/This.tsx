import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
import Test from "../../../components/Test/Test.tsx";


export default function This() {
  

  return (
    <section className={`topic container`}>
      <h2>This в JavaScript: определение и особенности</h2>

      <p>
        <strong>This</strong> — это специальное ключевое слово в JavaScript, которое ссылается на текущий контекст выполнения функции или объекта. Значение <code>this</code> определяется во время вызова функции и соответствует объекту, через который функция была вызвана или который был явно привязан.
      </p>

      <p>Значение <code>this</code> не фиксировано и зависит от того, где и как вызвана функция, а не от того, где она была объявлена.
      </p>

      <h3>Как определяется значение this в разных случаях</h3>

      <ul>
        <li>
          <strong>В глобальной области (не в строгом режиме)</strong> — <code>this</code> указывает на глобальный объект (в браузерах — <code>window</code>).
        </li>
        <VsCode>{`console.log(this);\n// В браузере выведет: Window`}</VsCode>

        <li>
          <strong>В строгом режиме</strong> — <code>this</code> будет <code>undefined</code>, если функция вызвана без объекта.
        </li>
        <VsCode>{`'use strict';\nfunction foo() {\n  console.log(this);\n}\nfoo();\n// undefined`}</VsCode>

        <li>
          <strong>Метод объекта</strong> — <code>this</code> указывает на объект, к которому принадлежит метод.
        </li>
        <VsCode>{`const user = {\n  name: 'Anna',\n  greet() {\n    console.log(this.name);\n  }\n};\nuser.greet();\n// Anna`}</VsCode>

        <li>
          <strong>Функция-конструктор</strong> — при вызове через <code>new</code>, <code>this</code> указывает на создаваемый объект.
        </li>
        <VsCode>{`function Person(name) {\n  this.name = name;\n}\nconst p = new Person('Ivan');\nconsole.log(p.name);\n// Ivan`}</VsCode>

        <li>
          <strong>Явное указание с помощью call, apply, bind</strong> — позволяет принудительно задать <code>this</code>.
        </li>
        <VsCode>{`function sayHi() {\n  console.log(this.name);\n}\nconst obj = { name: 'Kate' };\nsayHi.call(obj);\n// Kate`}</VsCode>

        <li>
          <strong>Стрелочные функции</strong> — <code>this</code> берётся из внешнего лексического контекста, не имеет собственного <code>this</code>.
        </li>
        <VsCode>{`const user = {\n  name: 'Leo',\n  greet: () => {\n    console.log(this.name);\n  }\n};\nuser.greet();\n// undefined (или window.name в браузере)`}</VsCode>
      </ul>

      <h3>Почему контекст важен?</h3>

      <p>Если есть объект <code>user</code> с методом <code>sayName</code>, то внутри этого метода <code>this</code> будет ссылаться на <code>user</code>. Но если вы вызовете этот метод отдельно, например присвоите его переменной и вызовете как обычную функцию, <code>this</code> перестанет указывать на <code>user</code>. Это явление называется <strong>потерей контекста this</strong>.
      </p>

      <p>Потеря контекста происходит потому, что при вызове функции напрямую, без объекта, которому она принадлежит, <code>this</code> не связывается автоматически с исходным объектом и становится либо <code>undefined</code> (в строгом режиме), либо ссылается на глобальный объект.
      </p>

      <VsCode>{`const user = {\n  name: 'Sam',\n  sayName() {\n    console.log(this.name);\n  }\n};\n\nconst fn = user.sayName;\nfn();\n// undefined (или window.name)\nuser.sayName();\n// Sam`}</VsCode>

      <h3>Понимание привязки this</h3>

      <p>Важно понимать, что <code>this</code> по факту не привязан к объекту, в методе которого он используется. Многие ошибочно считают, что в методе объекта <code>this</code> всегда жёстко связан с этим объектом. На самом деле, <code>this</code> определяется в момент вызова функции и зависит от контекста вызова, а не от места определения.
      </p>

      <p>Это значит, что метод объекта можно вызвать в другом контексте, и <code>this</code> уже будет ссылаться не на исходный объект, а на тот, с которым вызвана функция.
      </p>

      <h3>Контекст в React и других библиотеках</h3>

      <p>В React <code>this</code> часто ассоциируется с классами-компонентами, где оно указывает на экземпляр компонента. В функциональных компонентах <code>this</code> обычно не используется — там применяют хуки и замыкания.
      </p>

      <p>В React также есть понятие <strong>Context API</strong> — это механизм для передачи данных через дерево компонентов без проброса пропсов. Это не связано напрямую с ключевым словом <code>this</code>, но также управляет контекстом данных.
      </p>

      <h3>Ключевые особенности this</h3>

      <ul>
        <li>Значение <code>this</code> динамическое, зависит от способа вызова функции.
        </li>
        <li>Стрелочные функции не имеют своего <code>this</code>, они наследуют значение из внешней области.
        </li>
        <li>Явное управление <code>this</code> возможно с помощью методов <code>call</code>, <code>apply</code>, <code>bind</code>.
        </li>
        <li>В строгом режиме значение <code>this</code> может быть <code>undefined</code>, что помогает избежать ошибок.
        </li>
      </ul>

      <h2>Итого</h2>
      <ul>
        <li>
          <strong>This</strong> — ссылка на объект, определяемая в момент вызова функции.
        </li>
        <li>Его значение меняется в зависимости от типа вызова и контекста выполнения.</li>
        <li>Стрелочные функции наследуют <code>this</code> из окружающего кода.
        </li>
        <li>В классах React <code>this</code> указывает на текущий экземпляр компонента.
        </li>
        <li>Контекст исполнения — это окружение, в котором определяется <code>this</code>, важен для понимания его поведения.
        </li>
        <li>Для точного контроля <code>this</code> применяют методы <code>call</code>, <code>apply</code>, <code>bind</code>.
        </li>
      </ul>
      <NavButtons
        prev={'/js/Objects'}
        next={'/js/Prototypes'}
      />

      <Test
        allTasks={[
          {
            question: "Что такое контекст выполнения (execution context) в JavaScript?",
            variants: [
              "Область видимости переменных и функций, доступных в данный момент.",
              "Объект, на который ссылается ключевое слово this.",
              "Среда, в которой выполняется текущий код и определяется значение this.",
              "Тип функции, который определяет, как она вызывается."
            ],
            explanations: [
              "Область видимости — это часть контекста, но сам execution context — это комплекс данных о текущем состоянии выполнения.",
              "this — часть контекста, но контекст шире и включает другие данные.",
              "Верно. Execution context — это окружение, в котором выполняется код, включая область видимости и значение this.",
              "Тип функции влияет на this, но не определяет контекст выполнения целиком."
            ],
            correct: 2,
            isCode: false
          },
          {
            question: "Какое значение будет у this в функции, вызванной в глобальной области видимости в строгом режиме?",
            variants: [
              "Глобальный объект (window в браузере)",
              "undefined",
              "null",
              "Ссылка на саму функцию"
            ],
            explanations: [
              "В строгом режиме this не ссылается на глобальный объект.",
              "Правильно. В строгом режиме this будет undefined при вызове функции без объекта.",
              "null не присваивается this автоматически.",
              "this — не ссылка на функцию."
            ],
            correct: 1,
            isCode: false
          },
          {
            question: "Что произойдёт при вызове метода объекта через отдельную переменную (потеря контекста this)?",
            variants: [
              "this продолжит ссылаться на исходный объект.",
              "this станет undefined в строгом режиме или укажет на глобальный объект.",
              "Функция вызовет ошибку.",
              "this будет ссылаться на переменную, которой присвоен метод."
            ],
            explanations: [
              "this не сохраняет привязку к объекту при таком вызове.",
              "Верно. Контекст теряется, this не связан с исходным объектом.",
              "Ошибок не происходит, просто меняется контекст.",
              "this не ссылается на переменную, а определяется во время вызова."
            ],
            correct: 1,
            isCode: false
          },
          {
            question: "Выберите правильное определение стрелочной функции в контексте this.",
            variants: [
              "Стрелочная функция создаёт новый this, привязанный к своему вызову.",
              "Стрелочная функция не имеет собственного this и наследует его из внешнего лексического контекста.",
              "Стрелочная функция всегда ссылается на глобальный объект как this.",
              "Стрелочная функция не может использовать this."
            ],
            explanations: [
              "Стрелочные функции не создают новый this.",
              "Правильно. Они берут this из внешней функции или области.",
              "Не всегда. Если нет внешнего контекста, может быть глобальный объект.",
              "this есть, просто наследуется, не создаётся заново."
            ],
            correct: 1,
            isCode: false
          },
          {
            question: "Что выведет следующий код?",
            variants: [
              "undefined",
              "Sam",
              "Ошибка",
              "null"
            ],
            explanations: [
              "this не привязан к объекту при вызове через переменную, поэтому undefined.",
              "this привязан к объекту, если вызвать напрямую, но здесь вызывается через fn.",
              "Ошибка не возникнет.",
              "null здесь не используется."
            ],
            correct: 0,
            isCode: true,
            code: `const user = {\n  name: 'Sam',\n  sayName() {\n    console.log(this.name);\n  }\n};\n\nconst fn = user.sayName;\nfn();`
          },
          {
            question: "Как исправить предыдущий код и получить Sam?",
            variants: [
              "fn().this = user",
              "fn(this=user)",
              "fn.call(user)"
            ],
            explanations: [
              "this не меняется таким способом, потому что присваивание this напрямую в вызове функции невозможно.",
              "Синтаксис вызова с передачей this как аргумента не работает в JavaScript.",
              "Правильно. Метод call вызывает и явно устанавливает контекст this."
            ],
            correct: 2,
            isCode: true,
          },
          {
            question: "Какой метод используется для явной привязки this к функции?",
            variants: [
              "bind",
              "call",
              "apply",
              "Все перечисленные"
            ],
            explanations: [
              "bind создаёт новую функцию с привязанным this.",
              "call вызывает функцию с указанным this, но не создаёт новую функцию.",
              "apply работает как call, с другим способом передачи аргументов.",
              "Все методы позволяют управлять значением this, но делают это по-разному."
            ],
            correct: 3,
            isCode: false
          },
          {
            question: "Как правильно сохранить контекст this функции для последующего вызова?",
            variants: [
              "Присвоить функцию переменной.",
              "Вызвать функцию через call или apply с нужным this.",
              "Использовать bind для создания новой функции с привязанным this.",
              "Объявить функцию стрелочной."
            ],
            explanations: [
              "Простое присваивание не сохраняет контекст.",
              "call и apply вызывают функцию сразу, не сохраняют для позднего вызова.",
              "Правильно. bind возвращает новую функцию с фиксированным this.",
              "Стрелочная функция наследует this, но не всегда подходит."
            ],
            correct: 2,
            isCode: false
          },
          {
            question: "Что из перечисленного НЕ относится к способам задания this в JavaScript?",
            variants: [
              "Лексическое определение this",
              "Привязка this через bind, call, apply",
              "Вызов функции как метода объекта",
              "Использование ключевого слова var"
            ],
            explanations: [
              "this не лексически определяется, кроме стрелочных функций.",
              "Это стандартные способы управления this.",
              "Методы объектов автоматически задают this.",
              "var влияет на область видимости, но не на this."
            ],
            correct: 3,
            isCode: false
          }
        ]
        }
      />
      <NavButtons
        prev={'/js/Objects'}
        next={'/js/Prototypes'}
      />
    </section>
  )
}