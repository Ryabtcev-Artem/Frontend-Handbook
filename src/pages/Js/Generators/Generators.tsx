import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function Generators() {
  

  return (
    <section className="topic container">
      <h2>Генераторы в JavaScript</h2>

      <h3>Что такое генератор</h3>
      Генератор — это функция, выполнение которой можно приостанавливать и возобновлять.
      Она объявляется с помощью ключевого слова <code>function*</code> и возвращает объект-итератор.

      <h3>Как работают генераторы</h3>
      Генератор не выполняется целиком сразу. При вызове он возвращает специальный объект с методом <code>next()</code>.
      Каждое обращение к <code>next()</code> запускает выполнение генератора до ближайшего <code>yield</code>, приостанавливает выполнение и возвращает значение.

      <h3>Оператор yield</h3>
      <code>yield</code> используется для приостановки выполнения генератора.
      Это ключевое слово, с помощью которого генератор «отдаёт» значение наружу. Следующий вызов <code>next()</code> продолжит выполнение с этой точки.

      <VsCode>
        {`function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
`}
      </VsCode>

      <h3>Возвращаемое значение</h3>
      Генератор может завершиться с помощью <code>return</code>.
      При этом <code>done: true</code>, а значение из <code>return</code> попадает в <code>value</code> последнего объекта <code>next()</code>.

      <VsCode>
        {`function* gen() {
  yield 10;
  return 99;
}
const g = gen();
g.next(); // { value: 10, done: false }
g.next(); // { value: 99, done: true }
`}
      </VsCode>

      <h3>Передача данных внутрь генератора</h3>
      Аргумент, переданный в <code>next()</code>, попадает в генератор как результат предыдущего <code>yield</code>.

      <VsCode>
        {`function* gen() {
  const a = yield "first";
  yield a * 2;
}
const g = gen();
g.next();       // { value: "first", done: false }
g.next(5);      // { value: 10, done: false }
`}
      </VsCode>

      <h3>Генераторы и итераторы</h3>
      Объект, возвращаемый генератором, реализует интерфейс итератора и итерируемого объекта.
      Это значит, его можно использовать в <code>for...of</code>, <code>Array.from()</code>, и других местах, где ожидается итерируемое поведение.

      <VsCode>
        {`function* range(start, end) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}
for (let num of range(1, 4)) {
  console.log(num); // 1, 2, 3
}
`}
      </VsCode>

      <h3>Генераторы и бесконечные последовательности</h3>
      Генераторы удобны для создания потенциально бесконечных последовательностей.
      В отличие от обычных массивов, они не занимают память под все элементы сразу.

      <VsCode>
        {`function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
`}
      </VsCode>

      <h3>Обработка ошибок внутри генератора</h3>
      Генератор может перехватывать исключения, если их «вбросить» через <code>throw()</code> у итератора.

      <VsCode>
        {`function* gen() {
  try {
    yield 1;
  } catch (e) {
    console.log("Error inside:", e);
  }
}
const g = gen();
g.next();          // { value: 1, done: false }
g.throw("Oops");   // Error inside: Oops
`}
      </VsCode>

      <h2>Итого</h2>
      <ul>
        <li>Генератор — функция с управляемым выполнением: остановка через <code>yield</code>, продолжение через <code>next()</code>.</li>
        <li>Он возвращает объект-итератор и может использоваться в <code>for...of</code>.</li>
        <li><code>yield</code> — точка выхода данных наружу и входа при следующем вызове.</li>
        <li>Позволяет создавать ленивые или бесконечные последовательности.</li>
        <li>Поддерживает передачу данных и выброс исключений внутрь.</li>
      </ul>
      <NavButtons prev={'/js/Curry'} next={'/js/Objects'} />
    </section>

  )
}