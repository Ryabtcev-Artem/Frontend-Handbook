import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
type AsyncBasicsProps = {}
export default function AsyncBasics(props: AsyncBasicsProps) {
  const {} = props

  return (
    <section className="topic container">
      <h2>Асинхронность в Node.js: основы</h2>

      <p>
        В Node.js асинхронность — это ключевой принцип работы. Поскольку Node.js однопоточный, он не должен блокироваться длительными операциями, чтобы эффективно обслуживать множество запросов одновременно.
      </p>

      <h3>Почему асинхронность так важна в Node.js?</h3>
      <p>
        Node.js запускает весь код в одном основном потоке. Если операция, например, чтение файла или запрос к базе данных, будет выполняться синхронно и долго, сервер не сможет принимать новые запросы, что приведёт к задержкам и "зависаниям".
      </p>

      <h3>Как Node.js работает с асинхронным вводом-выводом?</h3>
      <p>
        Node.js использует внутреннюю библиотеку <code>libuv</code>, которая запускает длительные операции (I/O) в отдельных потоках пула. Основной поток Node.js не ждёт завершения этих операций, а продолжает выполнять остальной код.
      </p>

      <h3>Callback, промисы и async/await в Node.js</h3>
      <ul>
        <li>
          <strong>Callback</strong> — традиционный способ обработки результатов асинхронных операций. Например:
          <VsCode>{`fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});`}</VsCode>
        </li>
        <li>
          <strong>Промисы</strong> — более современный и удобный способ, позволяющий цеплять обработчики через <code>.then()</code> и <code>.catch()</code>. Например:
          <VsCode>{`fs.promises.readFile('file.txt', 'utf-8')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });`}</VsCode>
        </li>
        <li>
          <strong>async/await</strong> — синтаксический сахар над промисами, который делает асинхронный код похожим на синхронный, улучшая читаемость.
          <VsCode>{`async function readFile() {
  try {
    const data = await fs.promises.readFile('file.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
readFile();`}</VsCode>
        </li>
      </ul>

      <h3>Event Loop и очередь задач в Node.js</h3>
      <p>
        В Node.js <strong>Event Loop</strong> управляет очередью задач: когда асинхронная операция завершается, её callback или промис ставится в очередь на выполнение. Event Loop обрабатывает эти задачи по очереди, не блокируя основной поток.
      </p>

      <h3>Итог</h3>
      <ul>
        <li>Асинхронность позволяет Node.js обрабатывать тысячи запросов без блокировки.</li>
        <li>Node.js использует <code>libuv</code> для выполнения длительных I/O операций в фоне.</li>
        <li>Для асинхронного кода в Node.js используются callback, промисы и async/await.</li>
        <li>Event Loop следит за завершением задач и запускает обработчики по мере готовности.</li>
      </ul>
      <NavButtons prev={'/nodeJs/ExpressServer'} next={'/nodeJs/ErrorHandling'} />
    </section>
  )
}