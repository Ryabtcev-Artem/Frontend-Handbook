import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

type FlexAndGridProps = {}
export default function FlexAndGrid(props: FlexAndGridProps) {
  const {} = props

  return (
    <section className={'topic container'}>
      <h2>Flex и Grid — что это такое?</h2>
      <p>
        <strong>Flexbox</strong> и <strong>Grid</strong> — это современные способы выстраивать элементы на странице. Они заменили громоздкие таблицы, float'ы и марджины.
      </p>

      <h3>Flexbox (гибкая коробка)</h3>
      <p>
        <strong>Flex</strong> используется, когда нужно расположить элементы в одну строку или колонку и управлять их поведением при сжатии или расширении.
      </p>

      <p>Простой пример:</p>
      <pre><code>{`<div style="display: flex;">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`}</code></pre>

      <p>🧭 Аналогия: Flexbox — это как очередь. Люди стоят в ряд, и можно задать правила: кто стоит ближе, кто отодвинется, если станет тесно, и кто растянется, если появится больше места.</p>

      <h4>Основные свойства:</h4>
      <ul>
        <li><code>display: flex;</code> — включает режим флекса.</li>
        <li><code>flex-direction</code>: направление (строка, колонка).</li>
        <li>
          <code>justify-content</code>: выравнивание по главной оси (вдоль строки).
        </li>
        <li>
          <code>align-items</code>: выравнивание по поперечной оси (перпендикулярно).
        </li>
        <li>
          <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code> — управление размером элементов.
        </li>
      </ul>

      <h3>CSS Grid (сетка)</h3>
      <p>
        <strong>Grid</strong> — это способ разместить элементы в двух измерениях: по строкам и по колонкам.
      </p>

      <p>Простой пример:</p>
      <pre><code>{`<div style="display: grid; grid-template-columns: 1fr 2fr;">
  <div>Левая колонка</div>
  <div>Правая шире</div>
</div>`}</code></pre>

      <p>🧩 Аналогия: Grid — это как таблица. Есть ячейки, строки и колонки. Можно легко спланировать, что где будет стоять.</p>

      <h4>Основные свойства:</h4>
      <ul>
        <li><code>display: grid;</code> — включает режим сетки.</li>
        <li>
          <code>grid-template-columns</code> и <code>grid-template-rows</code> — задают структуру.
        </li>
        <li><code>gap</code> — расстояние между элементами.</li>
        <li>
          <code>grid-column</code>, <code>grid-row</code> — размещение конкретных элементов.
        </li>
      </ul>

      <h3>Flex vs Grid — в чём разница?</h3>
      <ul>
        <li>
          <strong>Flex</strong> хорош, если нужна **одна ось** — всё в ряд или колонку.
        </li>
        <li>
          <strong>Grid</strong> лучше, если нужно **двумерное размещение** — строки и колонки одновременно.
        </li>
        <li>Flex — про "контент диктует", Grid — про "сетка диктует".</li>
      </ul>

      🖼️ Иллюстрация:
      Два прямоугольника. В одном — 3 блока выстроены по горизонтали (Flex). Во втором — 3 на 3 сетка, где элементы лежат как плитки (Grid).

      <h2>Итого</h2>
      <ul>
        <li>
          <strong>Flex</strong> — выстраивает элементы в строку или колонку, отлично подходит для меню, карточек, кнопок.
        </li>
        <li>
          <strong>Grid</strong> — создаёт полноценную сетку, полезен для галерей, лэйаутов, сложных блоков.
        </li>
        <li>Лучше всего: комбинировать. Например, использовать Grid для внешнего макета, а внутри — Flex для выравнивания.</li>
      </ul>
      <NavButtons
        prev={'/Css/Connection'}
        next={'/Css'}
      />
    </section>
  )
}