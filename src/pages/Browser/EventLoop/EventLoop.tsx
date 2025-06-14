import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

type EventLoopProps = {}
export default function EventLoop(props: EventLoopProps) {
  const {} = props

  return (
    <section className="topic container">
      <h2>Event Loop — как работает и почему он важен</h2>
      <p>
        <strong>Event Loop</strong> — это механизм <strong>среды</strong> выполнения JavaScript (например, браузера), который управляет выполнением кода,
        обработкой асинхронных задач и событий. Важно понимать, что Event Loop — это <em>не часть самого JavaScript</em>, а фича среды, которая позволяет
        однопоточному JS эффективно работать с асинхронностью.
      </p>

      <h3>Почему Event Loop нужен?</h3>
      <p>
        JavaScript — однопоточный язык, он может выполнять только одну операцию за раз. Но веб-приложения работают с сетью, таймерами, пользователями и т.д.
        Event Loop позволяет выполнять асинхронные операции, не блокируя главный поток.
      </p>

      <h3>Основные понятия</h3>
      <ul>
        <li>
          <strong>Call Stack (стек вызовов)</strong> — здесь выполняются функции. Когда функция вызывается — она кладётся в стек, когда завершает — удаляется.
        </li>
        <li>
          <strong>Web APIs (браузерные API)</strong> — функции вне стека JS, например, setTimeout, DOM-события, AJAX. Они выполняются браузером параллельно.
        </li>
        <li>
          <strong>Task Queues (очереди задач)</strong> — сюда браузер ставит задачи, готовые к выполнению:
          <ul>
            <li><em>Macrotasks (tasks)</em> — обработчики событий, таймеры, AJAX.</li>
            <li><em>Microtasks</em> — промисы (.then/.catch), queueMicrotask, MutationObserver.</li>
          </ul>
        </li>
      </ul>

      <h3>Как работает Event Loop — пошагово</h3>
      <ol>
        <li>JS движок выполняет синхронный код из стека вызовов.</li>
        <li>Асинхронные операции (например, setTimeout, fetch) запускаются в Web APIs.</li>
        <li>Когда асинхронная операция завершается, браузер помещает callback в очередь задач (microtasks или macrotasks).</li>
        <li>Когда стек вызовов пуст, Event Loop выполняет все microtasks подряд.</li>
        <li>После этого берётся одна задача из macrotasks и выполняется в стеке.</li>
        <li>Цикл повторяется.</li>
      </ol>

      <h3>Важные детали</h3>
      <ul>
        <li>Microtasks выполняются перед следующей macrotask — это важно для скорости и порядка.</li>
        <li>Если во время выполнения macrotask создаются новые microtasks, они выполнятся сразу.</li>
        <li>setTimeout(fn, 0) — не выполняется сразу, а после всех microtasks и текущей macrotask.</li>
      </ul>

      <h3>Пример кода и вывод в консоль</h3>
      <pre>{`console.log('start');

setTimeout(() => {
  console.log('timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('promise');
});

console.log('end');`}</pre>

      <p>Вывод в консоль будет:</p>
      <pre>{`start
end
promise
timeout`}</pre>

      <p>Объяснение:</p>
      <ul>
        <li>start и end — синхронный код, выводятся сразу.</li>
        <li>promise — microtask, выполняется сразу после синхронного кода.</li>
        <li>timeout — macrotask, выполняется после microtasks.</li>
      </ul>

      <h3>Итог</h3>
      <p>
        Event Loop — это ключевой механизм, который позволяет JavaScript эффективно работать с асинхронным кодом в браузере,
        управляя порядком выполнения задач и не блокируя интерфейс.
      </p>
      <NavButtons prev={'/browser/PageRequest'} next={'/browser'} />
    </section>
  )
}
