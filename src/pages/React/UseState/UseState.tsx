import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";


export default function UseState() {

  return (
    <section className={'topic container'}>
      <h2>useState — локальное состояние компонента</h2>

      <h3>Что такое useState?</h3>
      <p><code>useState</code> — это хук в React, который позволяет компоненту хранить и обновлять своё локальное состояние. Это основа для создания интерактивного интерфейса.</p>

      <p>Он возвращает пару: текущее значение состояния и функцию для его обновления.</p>

      <VsCode>
        {`import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Вы нажали {count} раз
    </button>
  )
}`}
      </VsCode>

      <h3>Как работает useState?</h3>
      <p>Вы передаёте в <code>useState</code> начальное значение. При первом рендере оно используется как начальное состояние. Функция, возвращаемая вторым элементом массива, изменяет это значение и вызывает повторный рендер компонента.</p>

      <h3>Можно использовать любое значение</h3>
      <p>Состояние может быть числом, строкой, булевым значением, объектом или массивом. React не ограничивает вас типами данных.</p>

      <VsCode>
        {`const [name, setName] = useState('Гость')
const [isVisible, setIsVisible] = useState(true)
const [items, setItems] = useState([])`}
      </VsCode>

      <h3>Обновление объекта или массива</h3>
      <p>Если вы храните в состоянии объект или массив — не забывайте, что <code>setState</code> заменяет значение, а не дополняет. Поэтому нужно копировать старое значение вручную.</p>

      <VsCode>
        {`// Обновляем объект
setUser(prev => ({ ...prev, age: 25 }))

// Добавляем в массив
setList(prev => [...prev, 'Новый элемент'])`}
      </VsCode>

      <h3>Отложенная инициализация</h3>
      <p>Вы можете передать в <code>useState</code> функцию, и она будет вызвана один раз — только при первом рендере. Удобно, если начальное значение рассчитывается долго.</p>

      <VsCode>
        {`const [value, setValue] = useState(() => {
  return сложныйВычислитель()
})`}
      </VsCode>

      <h3>Кнопка: переключение состояния</h3>
      <p>Простой пример: кнопка, которая скрывает и показывает элемент.</p>

      <VsCode>
        {`function Toggle() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Скрыть' : 'Показать'}
      </button>
      {isOpen && <p>Этот текст можно спрятать</p>}
    </div>
  )
}`}
      </VsCode>

      <h2>Итого</h2>
      <ul>
        <li><code>useState</code> создаёт и управляет локальным состоянием в компоненте.</li>
        <li>Хук возвращает массив: [значение, функция для изменения].</li>
        <li>Вы можете хранить любой тип данных: число, строку, объект, массив и т.д.</li>
        <li>Объекты и массивы нужно обновлять аккуратно, создавая копии.</li>
        <li>Для тяжёлых вычислений начального значения используйте функцию.</li>
      </ul>
      <NavButtons prev={'/react/Hooks'} next={'/react/UseEffect'} />
    </section>
  )
}