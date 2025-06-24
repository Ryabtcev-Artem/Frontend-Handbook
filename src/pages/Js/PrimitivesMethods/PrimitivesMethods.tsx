import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";



export default function PrimitivesMethods() {
  

  return (
    <section className={'topic container'}>
      <h2>Методы у примитивов: почему это работает?</h2>

      <h3>Примитивы не имеют методов… формально</h3>
      <p>Типы вроде string, number, boolean, null, undefined, symbol, bigint — это примитивы.
        У них нет методов и свойств, потому что они не объекты.</p>
      <p>Тем не менее, такое выражение работает:</p>
      <VsCode>{`'hello'.toUpperCase(); // 'HELLO'`}</VsCode>
      <p>Почему?</p>

      <h3>Автоматическая обёртка — особенность JavaScript</h3>
      <p>Когда вы вызываете метод у примитива, движок:</p>
      <p>1. Временно оборачивает примитив в объект соответствующего класса:<br />
        - String, Number, Boolean<br />
        2. Вызывает метод у этого объекта.<br />
        3. Удаляет временный объект.</p>
      <p>Это называется auto-boxing (автоматическая обёртка).</p>
      <p>Пример:</p>

      <VsCode>{`const result = 'test'.toUpperCase();
// Под капотом:
// const temp = new String('test');
// const result = temp.toUpperCase();
// temp удаляется`}</VsCode>

      <h3>Важно: у null и undefined нет обёрток</h3>
      <p>Поэтому вызов метода на null или undefined вызывает ошибку:</p>

      <VsCode>{`null.toString();      // ❌ TypeError
undefined.valueOf();  // ❌ TypeError`}</VsCode>

      <h3>Вы можете обернуть примитив вручную — но не стоит</h3>
      <p>Если вы пишете new String('abc'), создаётся объект, а не строка:</p>

      <VsCode>{`const a = new String('abc');
typeof a; // 'object'

'abc' === new String('abc'); // false`}</VsCode>

      <p>Такой код выглядит похоже, но ведёт себя иначе. Это частая причина багов.</p>

      <h3>Методы хранятся в прототипах</h3>
      <p>Объекты-обёртки хранят методы в своих прототипах:</p>
      <ul>
        <li>String.prototype</li>
        <li>Number.prototype</li>
        <li>Boolean.prototype</li>
      </ul>
      <p>Когда вы вызываете 'abc'.length или 'abc'.toUpperCase(), происходит обращение к String.prototype.</p>

      <h3>Объекты с примитивным поведением</h3>
      <p>Иногда можно вручную сконструировать обёртку — и получить нетипичное поведение:</p>

      <VsCode>{`const str = new String('hi');
console.log(str == 'hi'); // true — значение сравнивается
console.log(str === 'hi'); // false — типы разные`}</VsCode>

      <p>Такое поведение стоит знать, но лучше его избегать в реальной разработке.</p>

      <h2>Итого</h2>
      <ul>
        <li>Примитивы не содержат методов, но JavaScript временно оборачивает их в объекты для выполнения вызова.</li>
        <li>У строк, чисел и булевых значений есть встроенные обёртки (String, Number, Boolean).</li>
        <li>null и undefined нельзя обернуть — при попытке вызвать метод возникнет ошибка.</li>
        <li>Ручное создание обёрток через new String(...) приводит к объекту. Это может вызвать нежеланные эффекты.</li>
        <li>Методы примитивов на самом деле лежат в prototype соответствующей обёртки.</li>
      </ul>
      <NavButtons prev={'/js/New'} next={'/js/Nums'} />
    </section>
  )
}
