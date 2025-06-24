import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
export default function Rendering() {

  return (
    <section className={'topic container'}>
      <h2>Условный рендеринг и списки</h2>

      <h3>Условный рендеринг</h3>
      <p>Условный рендеринг — это способ показать или скрыть часть интерфейса в зависимости от условий. В React это делается так же, как в обычном JavaScript — с помощью логических операторов или тернарного выражения.</p>

      <p>Вы можете использовать:</p>
      <ul>
        <li>Тернарный оператор: <code>условие ? JSX_если_да : JSX_если_нет</code></li>
        <li>Логическое И: <code>условие && JSX</code></li>
        <li>Ранний возврат из компонента</li>
      </ul>

      <VsCode>
        {`function WelcomeMessage({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Добро пожаловать!</p> : <p>Пожалуйста, войдите</p>}
    </div>
  )
}`}
      </VsCode>

      <p>Иногда удобно не рендерить ничего, если условие не выполняется. Тогда можно вернуть <code>null</code>.</p>

      <VsCode>
        {`function ErrorMessage({ error }) {
  if (!error) return null
  return <p style={{ color: 'red' }}>{error}</p>
}`}
      </VsCode>

      <h3>Списки</h3>
      <p>Чтобы отобразить список элементов в React, используют метод массива <code>map()</code>, возвращая JSX для каждого элемента. Каждому элементу списка обязательно нужно задать уникальный <code>key</code>.</p>

      <p>Это нужно для корректного обновления элементов в DOM при изменениях. Ключ должен быть уникальным и стабильным (не индекс массива, если порядок может меняться).</p>

      <VsCode>
        {`const users = ['Аня', 'Борис', 'Вика']

function UserList() {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  )
}`}
      </VsCode>

      <p>Если элементов немного и они не изменяются динамически, можно использовать индекс массива как <code>key</code>. Но в большинстве случаев лучше использовать значение или ID.</p>

      <h3>Комбинирование списков и условий</h3>
      <p>Можно фильтровать данные прямо внутри <code>map()</code> или до него. Также можно показывать заглушку, если список пуст.</p>

      <VsCode>
        {`function ProductList({ products }) {
  if (products.length === 0) {
    return <p>Нет доступных товаров</p>
  }

  return (
    <ul>
      {products.map(p => (
        p.inStock && <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  )
}`}
      </VsCode>

      <h2>Итого</h2>
      <ul>
        <li>Условный рендеринг позволяет показывать или скрывать элементы в зависимости от логики.</li>
        <li>Для условий используют <code>?:</code>, <code>&&</code>, <code>if</code> и <code>null</code> как отсутствие рендера.</li>
        <li>Списки рендерятся через <code>map()</code>, каждому элементу нужен <code>key</code>.</li>
        <li>Фильтрация и проверка пустых данных — нормальная практика при работе со списками.</li>
        <li>Условный рендеринг и списки часто комбинируются для создания адаптивного UI.</li>
      </ul>
      <NavButtons prev={'/react/Props'} next={'/react/EventHandling'} />
    </section>
  )
}