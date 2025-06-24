import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
import VsCode from "../../../components/VsCode/VsCode.tsx";


export default function EventLoop() {
  

  return (
    <section className="topic container">
      <h2>Event Loop — как работает и почему он важен</h2>
      <p>
        <strong>Event Loop</strong> — это механизм <strong>среды выполнения JavaScript</strong> (браузера или Node.js), который управляет выполнением кода, обработкой асинхронных задач и событий. Важно понимать, что Event Loop — не часть самого языка JavaScript, а именно функция среды, позволяющая однопоточному JS эффективно работать с асинхронностью.
      </p>

      <h3>Основные компоненты работы JS</h3>
      <ul>
        <li>
          <strong>Call Stack (стек вызовов)</strong> — это структура данных, которая хранит стек вызовов функций. Когда вызывается функция, она кладётся в стек, и пока функция не завершится, другие функции не выполняются. После завершения функция удаляется из стека.
        </li>
        <li>
          <strong>Memory Heap (куча памяти)</strong> — область памяти, где хранятся все объекты, функции и сложные данные. Heap — это неупорядоченная "куча" памяти, из которой движок выделяет место под объекты и управляет ссылками на них.
        </li>
        <li>
          <strong>Web APIs / Node APIs</strong> — внешние API, предоставляемые средой (браузером или Node.js). Сюда входят функции работы с таймерами (setTimeout), сетевые запросы (fetch или http-модули), события DOM и другие асинхронные операции. Они работают параллельно с основным JS-потоком.
        </li>
        <li>
          <strong>Task Queues (очереди задач)</strong> — сюда помещаются коллбэки, которые готовы к выполнению:
          <ul>
            <li>
              <em>Macrotasks (tasks)</em> — обработчики событий, таймеры, запросы. Они ставятся в очередь и выполняются по одному.
            </li>
            <li>
              <em>Microtasks</em> — промисы (.then/.catch), queueMicrotask, MutationObserver. Эти задачи имеют более высокий приоритет и выполняются сразу после текущего синхронного кода и перед следующей macrotask.
            </li>
          </ul>
        </li>
      </ul>

      <h3>Как работает Event Loop — пошагово</h3>
      <ol>
        <li>JavaScript-движок выполняет синхронный код из <strong>Call Stack</strong>.
        </li>
        <li>Асинхронные операции (например, setTimeout, fetch) запускаются через <strong>Web APIs</strong>.
        </li>
        <li>Когда асинхронная операция завершается, её коллбэк помещается в одну из очередей задач — либо в microtasks, либо в macrotasks.</li>
        <li>Когда стек вызовов пуст, Event Loop первым делом выполняет все задачи из очереди <strong>microtasks</strong>.
        </li>
        <li>После обработки microtasks Event Loop берёт одну задачу из очереди <strong>macrotasks</strong> и помещает её в Call Stack для выполнения.
        </li>
        <li>Цикл повторяется постоянно, позволяя JS не блокировать выполнение и обрабатывать асинхронные операции.</li>
      </ol>
      <p>Если хотите лучше разобраться, то есть сайт <a
        href="https://www.jsv9000.app/"
      >JS Visualizer</a> с понятной пошаговой визуализацией event loop, там можно выбрать или написать самому пример кода и увидеть его пошаговое выполнение.</p>
      <h3>Важные детали</h3>
      <ul>
        <li>Microtasks всегда выполняются перед следующей macrotask — это ускоряет обработку промисов и других микрозадач.</li>
        <li>Если во время выполнения macrotask появляются новые microtasks, они будут выполнены сразу же после неё.</li>
        <li>setTimeout(fn, 0) — не выполняется мгновенно, а после того, как выполнены все microtasks и текущая macrotask.</li>
      </ul>

      <h3>Пример кода и порядок вывода</h3>
      <VsCode>{`console.log('start');

setTimeout(() => {
  console.log('timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('promise');
});

console.log('end');`}</VsCode>

      <p>Вывод в консоль будет:</p>
      <VsCode>{`start
end
promise
timeout`}</VsCode>

      <p>Объяснение:</p>
      <ul>
        <li>
          <strong>start</strong> и <strong>end</strong> — синхронный код, выполняется сразу.
        </li>
        <li>
          <strong>promise</strong> — микротаск, выполняется сразу после синхронного кода.
        </li>
        <li>
          <strong>timeout</strong> — макротаск, выполняется после всех микротасков.
        </li>
      </ul>

      <h3>Итог</h3>
      <p>
        <strong>Event Loop</strong> — ключевой механизм, который позволяет JavaScript эффективно работать с асинхронным кодом в однопоточном окружении, управляя очередями задач и не блокируя основной поток выполнения.
      </p>
      <NavButtons
        prev={'/browser/PageRequest'}
        next={'/browser'}
      />
    </section>
  )
}
