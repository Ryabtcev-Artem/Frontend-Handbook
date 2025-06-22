import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
type SettimeoutAndSetintervalProps = {}
export default function SettimeoutAndSetinterval(props: SettimeoutAndSetintervalProps) {
  const {} = props

  return (
    <section className={'topic container'}>
      <h2>setTimeout и setInterval</h2>

      <h3>setTimeout</h3>
      <p>
        <code>setTimeout</code> запускает функцию один раз через заданную задержку (в миллисекундах).
      </p>
      <p>
        Это способ отложить выполнение кода. После вызова <code>setTimeout</code> JavaScript не ждёт, а продолжает выполнение остального кода. Через указанное время колбэк сработает.
      </p>
      <VsCode>
        {`setTimeout(() => {
  console.log("Через 2 секунды");
}, 2000);`}
      </VsCode>
      <p>
        <code>setTimeout</code> возвращает числовой идентификатор. С его помощью можно отменить выполнение таймера:
      </p>
      <VsCode>
        {`const id = setTimeout(() => console.log("Не выполнится"), 5000);
clearTimeout(id);`}
      </VsCode>

      <h3>setInterval</h3>
      <p>
        <code>setInterval</code> запускает функцию снова и снова через равные интервалы времени.
      </p>
      <p>
        Пока вы его не остановите — он будет работать бесконечно. Удобен для повторяющихся действий: например, обновлять интерфейс или проверять данные.
      </p>
      <VsCode>
        {`const id = setInterval(() => {
  console.log("Каждые 3 секунды");
}, 3000);`}
      </VsCode>
      <p>
        Чтобы остановить — используйте <code>clearInterval</code>:
      </p>
      <VsCode>
        {`clearInterval(id);`}
      </VsCode>

      <h3>Чем отличаются</h3>
      <ul>
        <li>
          <code>setTimeout</code> — один запуск, <code>setInterval</code> — бесконечные.
        </li>
        <li>Оба работают асинхронно — не блокируют основной поток выполнения.</li>
      </ul>

      <h3>Аргументы в таймер</h3>
      <p>
        В оба метода можно передавать дополнительные аргументы в колбэк:
      </p>
      <VsCode>
        {`setTimeout((msg) => console.log(msg), 1000, "Привет!");`}
      </VsCode>

      <h3>Вложенные setTimeout</h3>
      <p>
        Иногда вместо <code>setInterval</code> удобнее использовать цепочку <code>setTimeout</code> — чтобы лучше управлять паузами и реакцией на ошибки.
      </p>
      <VsCode>
        {`function repeat() {
  console.log("Каждую секунду, но гибко");
  setTimeout(repeat, 1000);
}
repeat();`}
      </VsCode>

      <h3>Асинхронная пауза через Promise</h3>
      <p>
        <code>setTimeout</code> часто используют внутри Promise для создания "задержки":
      </p>
      <VsCode>
        {`function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

await delay(2000);
console.log("Прошло 2 секунды");`}
      </VsCode>

      <h3>Особенности и подводные камни</h3>
      <ul>
        <li>Фактическое время срабатывания может быть больше из-за очереди событий.</li>
        <li>Функции внутри <code>setInterval</code> могут "накладываться", если они работают дольше, чем интервал.
        </li>
        <li>Для стабильных циклов лучше <code>requestAnimationFrame</code> или рекурсивный <code>setTimeout</code>.
        </li>
      </ul>

      <h2>Итого</h2>
      <ul>
        <li><b>setTimeout</b> запускает код один раз с задержкой.</li>
        <li><b>setInterval</b> запускает код регулярно с равным интервалом.</li>
        <li>Оба можно остановить с помощью <code>clearTimeout</code> и <code>clearInterval</code>.
        </li>
        <li>Время выполнения — минимальное, но не гарантированное, зависит от загрузки потока.</li>
        <li>Для точного контроля лучше использовать <code>setTimeout</code> в виде цикла.
        </li>
        <li>Можно передавать аргументы в колбэк напрямую.</li>
        <li>Асинхронную паузу удобно реализовать через <code>Promise + setTimeout</code>.
        </li>
      </ul>
      <NavButtons prev={'/js/MapAndSet'} next={'/js/Promises'} />
    </section>
  )
}