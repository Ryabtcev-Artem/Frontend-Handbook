import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function UseRef() {

  return (
    <section className={'topic container'}>
      <h2>UseRef в React: что это и зачем</h2>
      <h3>Что такое useRef</h3>
      useRef — это хук React, который создаёт мутабельный объект с единственным свойством <code>current</code>. Этот объект сохраняется между рендерами компонента и не вызывает повторного рендера при изменении значения. <h3>Для чего нужен useRef</h3> useRef используется для хранения любых значений, которые должны сохраняться при перерисовках, но не влиять на них напрямую. Например, для хранения ссылки на DOM-элемент или значения таймера, счётчика, предыдущего состояния и т.п. <h3>Пример использования useRef для работы с DOM</h3> Если нужно получить доступ к конкретному DOM-элементу (например, чтобы установить фокус или измерить размер), useRef создаёт ссылку, которую React присоединяет к элементу:
      <VsCode>{`import { useRef, useEffect } from "react";

export default function InputFocus() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  return <input ref={inputRef} type="text" />;
}
`}</VsCode>

      В этом примере inputRef.current ссылается на сам DOM-элемент <input />.

      <h3>Использование useRef для хранения мутабельных данных</h3> useRef подходит для хранения значений, которые нужно изменять без перерисовки компонента. Например, счётчик, который обновляется, но не должен триггерить ререндер:
      <VsCode>{`import { useRef } from "react";

export default function Timer() {
  const count = useRef(0);
  
  function increment() {
    count.current += 1;
    console.log(count.current);
  }
  
  return <button onClick={increment}>Увеличить</button>;
}
`}</VsCode>

      Значение <code>count.current</code> изменяется, но компонент не обновляется.

      <h3>Почему useRef не вызывает ререндер</h3> Изменения <code>current</code> не отслеживаются React. Это отличие от useState, который при изменении запускает обновление компонента. useRef — это просто контейнер с изменяемым свойством. <h3>Особенности useRef</h3> - Значение сохраняется между рендерами, не сбрасывается. - Изменение значения не влияет на UI. - Можно использовать для хранения любых мутабельных данных, не связанных с UI. - Полезен для работы с DOM и таймерами, а также для сохранения предыдущих значений. <h2>Итого</h2>
      <ul>
        <li>useRef создаёт объект с полем <code>current</code>, который сохраняется между рендерами.
        </li>
        <li>Значения в useRef можно менять без перерисовки компонента.</li>
        <li>Часто используется для получения ссылки на DOM-элемент.</li>
        <li>Подходит для хранения мутабельных данных, не влияющих на UI.</li>
        <li>useRef отличается от useState: useState обновляет компонент, useRef — нет.</li>
      </ul>
      <NavButtons prev={'/react/UseEffect'} next={'/react/AdditionalHooks'} />
    </section>
  )
}