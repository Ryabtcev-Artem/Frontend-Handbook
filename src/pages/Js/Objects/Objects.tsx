import VsCode from "../../../components/VsCode/VsCode.tsx";
import Test from "../../../components/Test/Test.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";

type ObjectsProps = {}
export default function Objects(props: ObjectsProps) {
  const {} = props

  return (
    <section className={'topic container'}>
      <h2>Объекты в JavaScript</h2>

      <h3>Что такое объект</h3>
      Объект — это структура, которая хранит пары ключ–значение. Ключи — строки или символы. Значения — любые типы данных.

      <h3>Создание объектов</h3>
      Объекты создают с помощью фигурных скобок {} или через new Object().

      <VsCode>{`const user = {
  name: "Alice",
  age: 25
}

const product = new Object() // старый способ
`}</VsCode>

      <h3>Доступ к свойствам</h3>
      Свойства читаются через точку obj.key или скобочную нотацию obj["key"].

      <VsCode>{`console.log(user.name)       // "Alice"
console.log(user["age"])     // 25
`}</VsCode>

      <h3>Изменение и удаление свойств</h3>
      Свойства можно добавлять, менять и удалять в любое время.

      <VsCode>{`
user.city = "Paris"
user.age = 30
delete user.name
`}</VsCode>

      <h3>Вложенные объекты</h3>
      Значением свойства может быть другой объект.

      <VsCode>{`const book = {
  title: "1984",
  author: {
    name: "Orwell",
    born: 1903
  }
}
`}</VsCode>

      <h3>Методы объекта</h3>
      Метод — это функция, записанная в объекте как значение свойства.

      <VsCode>{`const user = {
  sayHi() {
    console.log("Hi!")
  }
}

user.sayHi()  // Hi!
`}</VsCode>

      <h3>this в методах</h3>
      Внутри метода this указывает на объект, которому принадлежит метод.

      <VsCode>{`const user = {
  name: "Alice",
  greet() {
    console.log("Hi, " + this.name)
  }
}
user.greet()  // Hi, Alice
`}</VsCode>

      <h3>Объекты как ссылки</h3>
      Объекты передаются по ссылке. Изменения через одну переменную затронут и другую.

      <VsCode>{`const a = { value: 10 }
const b = a
b.value = 20
console.log(a.value)  // 20
`}</VsCode>

      <h3>Перебор свойств</h3>
      Для перебора всех ключей объекта используют for...in.

      <VsCode>{`const user = { name: "Alice", age: 25 }

for (let key in user) {
  console.log(key, user[key])
}
`}</VsCode>

      <h3>Object.keys, values, entries</h3>
      Встроенные методы для работы с объектами.

      <VsCode>{`Object.keys(obj)    // Массив ключей
Object.values(obj)  // Массив значений
Object.entries(obj) // Массив [ключ, значение]
`}</VsCode>

      <h3>Клонирование объектов</h3>
      Для поверхностной копии используют Object.assign или spread-оператор.

      <VsCode>{`const original = { a: 1, b: 2 }
const copy = { ...original }

copy.a = 100
console.log(original.a)  // 1
`}</VsCode>

      <h3>Глубокое копирование</h3>
      Для вложенных объектов поверхностной копии недостаточно. Один из простых способов — structuredClone.

      <VsCode>{`const deep = structuredClone(obj)
`}</VsCode>

      <h3>Проверка наличия свойства</h3>
      Оператор in проверяет, есть ли ключ в объекте (включая прототипы).

      <VsCode>{`"name" in user  // true
`}</VsCode>

      <h3>Опциональная цепочка</h3>
      Чтобы не получать ошибку при обращении к свойствам undefined, используют ?. .

      <VsCode>{`user?.address?.street
`}</VsCode>

      <h2>Итого</h2>
      <ul>
        <li>Объект — структура с парами ключ–значение.</li>
        <li>Ключи — только строки или символы. Значения — любые.</li>
        <li>Можно добавлять, удалять, перебирать, копировать свойства.</li>
        <li>Методы — обычные функции, у которых есть доступ к this.</li>
        <li>Для вложенных структур — глубокое копирование.</li>
      </ul>
      <NavButtons prev={'/js/FunctionTypes'} next={'/js/Context'} />
      <Test
        allTasks={[
          {
            question: "Какой способ создаёт пустой объект?",
            variants: [
              "const obj = []",
              "const obj = {}",
              "const obj = createObject()",
              "const obj = null"
            ],
            explanations: [
              "Это создаёт массив, а не объект.",
              "Это стандартный способ создать пустой объект.",
              "Этот способ создаёт объект без прототипа, но тоже пустой.",
              "null — это не объект, а специальное примитивное значение."
            ],
            correct: 1,
            isCode: true
          },
          {
            question: "Что вернёт следующий код?",
            isCode: true,
            code: `const user = { name: "Anna" };
console.log("name" in user);`,
            variants: ["true", "false", "undefined", "ReferenceError"],
            explanations: [
              `"in" проверяет, есть ли ключ в объекте, даже если его значение undefined.`,
              `false — если бы ключа не было вовсе.`,
              `"undefined" — это значение, а не результат "in".`,
              `ReferenceError тут не возникает — ключ проверяется как строка.`
            ],
            correct: 0
          },
          {
            question: "Как удалить свойство из объекта?",
            variants: [
              "delete obj.key",
              "remove obj.key",
              "obj.key = null",
              "obj.key.destroy()"
            ],
            explanations: [
              "`delete` — это корректный оператор для удаления свойства.",
              "`remove` не существует в JS для объектов.",
              "Это занулит значение, но ключ останется.",
              "Нет метода `destroy()` у обычных объектов."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Что делает метод Object.assign()?",
            variants: [
              "Клонирует и объединяет объекты",
              "Удаляет свойства объекта",
              "Проверяет тип объекта",
              "Создаёт класс"
            ],
            explanations: [
              "Object.assign() копирует перечисляемые свойства из одного или нескольких объектов в целевой.",
              "Удаление происходит через `delete`, не `assign`.",
              "Тип проверяется через `typeof` или `instanceof`.",
              "`Object.assign()` не связан с созданием классов."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Что выведет код?",
            isCode: true,
            code: `const obj = { a: 1 };
const copy = obj;
copy.a = 10;
console.log(obj.a);`,
            variants: ["1", "10", "undefined", "Ошибка"],
            explanations: [
              "1 — если бы был глубокий клон, но здесь просто ссылка.",
              "Правильно. `copy` и `obj` указывают на один объект.",
              "Свойство `a` определено, поэтому не `undefined`.",
              "Никакой ошибки здесь не происходит."
            ],
            correct: 1
          }
        ]}
      />
      <JsPlayground
        taskId={4}
        functionName={'getAdults'}
        args={[
          [{ alice: 17, bob: 22, charlie: 30 }],
          [{ anna: 15, mike: 18 }],
          [{ john: 12, jane: 16, max: 20 }],
        ]}
        answers={[
          { bob: 22, charlie: 30 },
          { mike: 18 },
          { max: 20 }
        ]}
        defaultCode={`function getAdults(people) {
  // Возвращайте только тех, чей возраст >= 18
}`}
        title={'Задача: Фильтруем совершеннолетних'}
        description={'Функция getAdults получает объект people, где ключ — имя человека, а значение — его возраст. Нужно вернуть новый объект, в котором останутся только те, у кого возраст 18 или больше.'}
        examples={[
          'getAdults({ alice: 17, bob: 22, charlie: 30 }) // { bob: 22, charlie: 30 }',
          'getAdults({ anna: 15, mike: 18 }) // { mike: 18 }',
          'getAdults({ john: 12, jane: 16, max: 20 }) // { max: 20 }',
        ]}
      />
      <NavButtons prev={'/js/FunctionTypes'} next={'/js/Context'} />
    </section>
  )
}