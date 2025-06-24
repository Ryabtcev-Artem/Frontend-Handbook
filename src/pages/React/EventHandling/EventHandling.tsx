import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function EventHandling() {

  return (
    <section className={'topic container'}>
      <h2>Обработка событий в React</h2>

      <h3>Что такое обработка событий?</h3>
      <p>Обработка событий — это способ реагировать на действия пользователя: клики, ввод, наведение мыши и так далее. В React события обрабатываются с помощью специальных атрибутов, которые записываются в camelCase и получают функцию-обработчик.</p>

      <p>Синтаксис напоминает HTML, но за кулисами React использует свою систему событий, основанную на <em>SyntheticEvent</em>, что даёт лучшую совместимость и кроссбраузерность.
      </p>

      <VsCode>
        {`function Button() {
  function handleClick() {
    alert('Кнопка нажата!')
  }

  return (
    <button onClick={handleClick}>
      Нажми меня
    </button>
  )
}`}
      </VsCode>

      <h3>Передача аргументов</h3>
      <p>Чтобы передать аргумент в обработчик, используйте стрелочную функцию. Это нужно, чтобы не вызывать функцию сразу при рендеринге.</p>

      <VsCode>
        {`function Greet({ name }) {
  function greetUser(user) {
    alert(\`Привет, \${user}!\`)
  }

  return (
    <button onClick={() => greetUser(name)}>
      Поздороваться
    </button>
  )
}`}
      </VsCode>

      <h3>Объект события (event)</h3>
      <p>Каждый обработчик получает объект события — <code>event</code>, аналогичный обычному <code>Event</code> из DOM, но обёрнутый в синтетическую обёртку React. Он работает одинаково в любом браузере.
      </p>

      <VsCode>
        {`function InputLogger() {
  function handleChange(event) {
    console.log('Пользователь ввёл:', event.target.value)
  }

  return <input type="text" onChange={handleChange} />
}`}
      </VsCode>

      <h3>Частые события</h3>
      <ul>
        <li><code>onClick</code> — нажатие на элемент</li>
        <li>
          <code>onChange</code> — изменение значения (ввод текста, выбор опции)
        </li>
        <li><code>onSubmit</code> — отправка формы</li>
        <li><code>onKeyDown</code> / <code>onKeyUp</code> — нажатие клавиш</li>
        <li><code>onMouseEnter</code> / <code>onMouseLeave</code> — события мыши
        </li>
      </ul>

      <p>Вот пример формы с обработчиком отправки:</p>

      <VsCode>
        {`function Form() {
  function handleSubmit(event) {
    event.preventDefault() // предотвращаем перезагрузку страницы
    alert('Форма отправлена!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Ваше имя" />
      <button type="submit">Отправить</button>
    </form>
  )
}`}
      </VsCode>

      <h3>Контекст и this</h3>
      <p>Если вы используете классовые компоненты, обработчики нужно привязывать к <code>this</code> вручную или использовать стрелочные функции. В функциональных компонентах с этим всё проще — контекста <code>this</code> там нет.
      </p>

      <h2>Итого</h2>
      <ul>
        <li>События в React обрабатываются через camelCase-атрибуты (например, <code>onClick</code>).
        </li>
        <li>Обработчик — это функция, которая вызывается при наступлении события.</li>
        <li>Чтобы передать аргумент, используйте стрелочную функцию в JSX.</li>
        <li>React передаёт синтетическое событие — оно ведёт себя как обычное <code>event</code>.
        </li>
        <li>Не забывайте о <code>preventDefault()</code> для форм и других стандартных действий.
        </li>
      </ul>
      <NavButtons
        prev={'/react/Rendering'}
        next={'/react/Hooks'}
      />
    </section>
  )
}