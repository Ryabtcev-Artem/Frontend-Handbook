import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
type MutationObserverProps = {}
export default function MutationObserver(props: MutationObserverProps) {
  const {} = props

  return (
    <section className={'topic container'}>
      <h2>MutationObserver</h2>

      <p></p>

      <h3>Что это такое</h3>
      <p>
        <code>MutationObserver</code> — это встроенный класс в JavaScript, который позволяет отслеживать изменения в DOM-дереве: добавление/удаление элементов, изменение атрибутов или текста внутри узлов.
      </p>

      <h3>Как работает</h3>
      <p>
        Ты создаёшь наблюдатель, указываешь, за какими изменениями следить, и что делать, когда они происходят.
      </p>

      <VsCode>
        {`const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    console.log('Что-то изменилось:', mutation);
  });
});

const target = document.getElementById('watched');

observer.observe(target, {
  childList: true,
  attributes: true,
  subtree: true,
});
`}
      </VsCode>

      <h3>Что можно отслеживать</h3>
      <ul>
        <li><strong>childList</strong> — добавление или удаление узлов</li>
        <li><strong>attributes</strong> — изменение атрибутов</li>
        <li><strong>subtree</strong> — следить не только за элементом, но и за его потомками</li>
        <li><strong>characterData</strong> — изменение текстового содержимого</li>
      </ul>

      <h3>Отключение наблюдения</h3>
      <p>
        Когда наблюдатель больше не нужен — его нужно отключить.
      </p>

      <VsCode>
        {`observer.disconnect();`}
      </VsCode>

      <h3>Особенности</h3>
      <ul>
        <li>Асинхронный: изменения собираются и передаются в колбэк одним пакетом.</li>
        <li>Не срабатывает на стили и классы, если не меняется сам атрибут.</li>
        <li>Поддерживается во всех современных браузерах.</li>
      </ul>

      <h3>Когда применять</h3>
      <ul>
        <li>Нужно отреагировать на появление/удаление элементов.</li>
        <li>Следить за тем, как кто-то меняет DOM, например при внедрении стороннего скрипта.</li>
        <li>Создание кастомных компонентов и обёрток над библиотеками.</li>
      </ul>

      <h3>Пример: отследить вставку элемента</h3>
      <VsCode>
        {`const observer = new MutationObserver((mutations) => {
  for (const m of mutations) {
    if (m.type === 'childList') {
      console.log('Добавили узел:', m.addedNodes);
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });

document.body.appendChild(document.createElement('div'));`}
      </VsCode>

      <h2>Итого</h2>
      <ul>
        <li><code>MutationObserver</code> — это инструмент для отслеживания изменений в DOM.</li>
        <li>Умеет следить за атрибутами, узлами и текстом.</li>
        <li>Работает асинхронно, возвращает массив изменений.</li>
        <li>Подходит для динамического контроля DOM без постоянного опроса.</li>
        <li>Важно отключать наблюдение при ненадобности через <code>disconnect()</code>.</li>
      </ul>
      <NavButtons prev={'/js/Storage'} next={'/js'} />
    </section>
  )
}