import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
type TimersProps = {}
export default function Timers(props: TimersProps) {
  const {} = props

  return (
    <section className="topic container">
      <h2>Таймеры в Node.js</h2>

      <p>
        В Node.js таймеры реализованы через глобальные функции <code>setTimeout</code>, <code>setInterval</code>,
        <code>setImmediate</code> и <code>process.nextTick</code>. Это встроенные механизмы для выполнения кода с задержкой или отложенно —
        и они работают не через браузер, а через <strong>libuv</strong> — слой, обеспечивающий асинхронность в Node.
      </p>

      <h3>1. setTimeout(fn, delay)</h3>
      <p>Выполняет функцию <code>fn</code> один раз через заданную задержку <code>delay</code> в миллисекундах.</p>
      <VsCode>{`setTimeout(() => {
  console.log('Через 1 секунду');
}, 1000);`}</VsCode>

      <h3>2. setInterval(fn, delay)</h3>
      <p>Выполняет <code>fn</code> периодически через каждые <code>delay</code> миллисекунд, пока не будет остановлен через <code>clearInterval</code>.</p>
      <VsCode>{`const id = setInterval(() => {
  console.log('Каждую секунду');
}, 1000);

setTimeout(() => {
  clearInterval(id);
}, 5000);`}</VsCode>

      <h3>3. setImmediate(fn)</h3>
      <p>Добавляет <code>fn</code> в очередь для выполнения сразу после текущей фазы событийного цикла, раньше, чем <code>setTimeout(..., 0)</code>.</p>
      <VsCode>{`setImmediate(() => {
  console.log('Сработает после текущего кода, но до setTimeout');
});

setTimeout(() => {
  console.log('setTimeout с 0');
}, 0);

console.log('Начало');`}</VsCode>
      <p>Вывод будет:</p>
      <VsCode>{`Начало
Сработает после текущего кода, но до setTimeout
setTimeout с 0`}</VsCode>
      <h3>4. process.nextTick(fn)</h3>
      <p>Добавляет <code>fn</code> в микротаски, которые выполняются <strong>до</strong> любых других асинхронных задач (включая <code>setImmediate</code> и <code>setTimeout</code>).</p>
      <VsCode>{`process.nextTick(() => {
  console.log('nextTick');
});

setImmediate(() => {
  console.log('setImmediate');
});

console.log('Начало');`}</VsCode>

      <p>Вывод будет:</p>
      <VsCode>{`Начало
nextTick
setImmediate`}</VsCode>

      <h3>Важное отличие от браузера</h3>
      <p>
        В браузере <code>setTimeout</code> и <code>setInterval</code> работают через Web API. В Node.js же все эти таймеры управляются libuv —
        системой, которая реализует событийный цикл и таймеры без участия браузера.
      </p>

      <h3>Итог</h3>
      <ul>
        <li><strong>setTimeout</strong> — задержка один раз</li>
        <li><strong>setInterval</strong> — повторяется через заданный интервал</li>
        <li><strong>setImmediate</strong> — выполняется в конце текущей фазы событийного цикла</li>
        <li><strong>process.nextTick</strong> — выполняется до любой асинхронной очереди, как микротаска</li>
        <li>Все таймеры в Node работают через <code>libuv</code>, не через Web API</li>
      </ul>
      <NavButtons prev={'/nodeJs/ErrorHandling'} next={'/nodeJs/HttpRequests'} />
    </section>
  )
}