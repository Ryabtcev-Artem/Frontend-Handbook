import NavButtons from "../../../components/NavButtons/NavButtons.tsx";


export default function Bem() {
  

  return (
    <section className={'topic container'}>
      <h2>БЭМ (Блок, Элемент, Модификатор)</h2>

      <h3>Что такое БЭМ?</h3>
      <p>
        <strong>БЭМ</strong> — это методология написания HTML и CSS, которая помогает создавать <em>понятную, масштабируемую и переиспользуемую</em> верстку.
        Название расшифровывается как <strong>Блок – Элемент – Модификатор</strong>.
      </p>

      <p>
        В отличие от семантики, которая объясняет смысл контента браузеру, <strong>BEM — это про структуру и читаемость кода</strong> для разработчиков. Он помогает не запутаться в стилях, особенно когда проект становится большим.
      </p>

      <h3>Как работает БЭМ?</h3>
      <ul>
        <li><strong>Блок</strong> — независимый компонент. Например: <code>menu</code>, <code>card</code>, <code>form</code>.</li>
        <li><strong>Элемент</strong> — часть блока, которая не может существовать отдельно. Записывается через двойное подчеркивание: <code>menu__item</code>, <code>card__title</code>.</li>
        <li><strong>Модификатор</strong> — вариант блока или элемента. Записывается через двойной дефис: <code>menu--active</code>, <code>button--big</code>.</li>
      </ul>

      <pre>
{`<div class="card card--featured">
  <h2 class="card__title">Заголовок</h2>
  <p class="card__text">Описание карточки</p>
</div>`}
      </pre>

      <h3>Зачем нужен БЭМ?</h3>
      <p>
        Он помогает:
      </p>
      <ul>
        <li>Избежать конфликтов стилей</li>
        <li>Писать CSS, который легко переиспользовать</li>
        <li>Работать в команде без путаницы</li>
        <li>Поддерживать проект в чистоте даже через год</li>
      </ul>

      <h3>📦 Пример из жизни</h3>
      <p>
        Представьте, что вы строите дом. У каждого элемента есть своё имя: «Кухня», «Спальня», «Дверь в кухню», «Зелёная дверь в кухню». С такими названиями легко понять, что где находится. Вот так же и работает БЭМ — только вместо комнат и дверей у нас HTML-элементы и CSS-классы.
      </p>

      <h3>🧠 А сколько раз можно использовать?</h3>
      <p>
        <strong>Блоки и элементы можно использовать столько раз, сколько нужно.</strong> Один и тот же <code>card</code> может появиться 10 раз на странице, и в каждом случае иметь свои элементы и модификаторы.
      </p>

      <h3>Итого</h3>
      <ul>
        <li><strong>БЭМ</strong> — это метод организации классов в HTML/CSS.</li>
        <li>Состоит из блоков, элементов и модификаторов.</li>
        <li>Помогает писать чистый, понятный и устойчивый код.</li>
        <li>Не влияет на семантику, но делает структуру прозрачной.</li>
        <li>Широко используется в крупных проектах и командах (Google, Github и т.д.).</li>
      </ul>
      <NavButtons prev={'/html/Accessibility'} next={'/html'} />
    </section>
  )
}
