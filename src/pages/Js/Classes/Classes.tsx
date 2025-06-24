import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function Classes() {
  

  return (
    <section className={'topic container'}>
      <h2>Классы и наследование в JavaScript</h2>

      <h3>Что такое класс</h3>
      Класс — это синтаксическая обёртка над функцией-конструктором. Он определяет шаблон для создания объектов с одинаковой структурой и поведением.

      <h3>Объявление класса</h3>
      Класс создаётся с помощью ключевого слова <code>class</code>:
      <VsCode>{`class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return 'Привет, ' + this.name;
  }
}`}</VsCode>
      Создать экземпляр класса можно через <code>new</code>:
      <VsCode>{`const user = new User("Анна");
console.log(user.sayHi()); // Привет, Анна`}</VsCode>

      <h3>Что делает constructor</h3>
      Метод <code>constructor</code> вызывается при создании объекта через <code>new</code>. Он инициализирует свойства экземпляра:
      <VsCode>{`class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}`}</VsCode>

      <h3>Методы в классе</h3>
      Методы, определённые внутри тела класса, попадают в <code>prototype</code> и разделяются между экземплярами:
      <VsCode>{`class Counter {
  increment() {
    console.log("++");
  }
}`}</VsCode>
      Методы НЕ копируются в каждый объект, как свойства.

      <h3>Наследование: extends и super</h3>
      Класс может унаследовать поведение другого класса через <code>extends</code>. В конструкторе нужно вызывать <code>super</code> — это вызов конструктора родителя.
      <VsCode>{`class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + ' издаёт звук';
  }
}

class Dog extends Animal {
  speak() {
    return this.name + ' гавкает';
  }
}`}</VsCode>
      <VsCode>{`const dog = new Dog("Бобик");
console.log(dog.speak()); // Бобик гавкает`}</VsCode>

      <h3>super в методах</h3>
      В методах можно обращаться к родительской реализации через <code>super.methodName()</code>:
      <VsCode>{`class Cat extends Animal {
  speak() {
    return super.speak() + ' как кошка';
  }
}`}</VsCode>

      <h3>Переопределение методов</h3>
      Если метод с таким же именем определён в потомке — он перекрывает родительский. Это называется **переопределением**.

      <h3>Статические методы</h3>
      Метод, помеченный как <code>static</code>, принадлежит самому классу, а не его экземплярам:
      <VsCode>{`class MathHelper {
  static square(x) {
    return x * x;
  }
}
console.log(MathHelper.square(3)); // 9`}</VsCode>

      <h3>instanceof и прототипная цепочка</h3>
      Оператор <code>instanceof</code> проверяет, принадлежит ли объект к классу (с учётом цепочки наследования):
      <VsCode>{`console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true`}</VsCode>

      <h2>Итого</h2>
      <ul>
        <li>Классы — это синтаксическая обёртка над функциями-конструкторами и прототипами.</li>
        <li><code>constructor</code> отвечает за начальную инициализацию.</li>
        <li>Методы класса автоматически попадают в <code>prototype</code>.</li>
        <li>Наследование реализуется через <code>extends</code> и <code>super</code>.</li>
        <li>Методы можно переопределять и расширять.</li>
        <li>Статические методы вызываются на классе, а не на экземпляре.</li>
        <li><code>instanceof</code> проверяет принадлежность к классу через цепочку прототипов.</li>
      </ul>
      <NavButtons prev={'/js/Fetch'} next={'/js/Storage'} />
    </section>
  )
}