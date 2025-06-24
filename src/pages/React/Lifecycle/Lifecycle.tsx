import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function Lifecycle() {

  return (
    <section className={'topic container'}>
      <h2>Что такое жизненный цикл компонента в React</h2>

      <h3>Жизненный цикл — это этапы жизни React-компонента</h3>
      <p>Каждый компонент в React проходит три основных этапа: <strong>монтаж</strong>, <strong>обновление</strong> и <strong>размонтирование</strong>. React позволяет выполнять определённые действия на каждом из этих этапов — например, загружать данные, очищать таймеры или сохранять изменения.
      </p>

      <h3>Три стадии жизненного цикла</h3>

      <ul>
        <li>
          <strong>Монтаж (mount)</strong> — компонент впервые появляется в DOM. Здесь удобно загружать данные или запускать эффекты.
        </li>
        <li>
          <strong>Обновление (update)</strong> — происходит, когда пропсы или состояние изменяются, и React перерисовывает компонент.
        </li>
        <li>
          <strong>Размонтирование (unmount)</strong> — компонент удаляется из DOM. Здесь важно «убрать за собой»: остановить таймеры, подписки, чистить память.
        </li>
      </ul>

      <h3>Как это реализуется в классовых компонентах</h3>
      <p>Раньше жизненный цикл обрабатывался через специальные методы:</p>

      <ul>
        <li>
          <code>componentDidMount</code> — вызывается один раз после первого рендера.
        </li>
        <li><code>componentDidUpdate</code> — вызывается при каждом обновлении.
        </li>
        <li>
          <code>componentWillUnmount</code> — вызывается перед удалением компонента.
        </li>
      </ul>

      <VsCode>
        {`class MyComponent extends React.Component {
  componentDidMount() {
    console.log('Компонент смонтирован')
  }

  componentDidUpdate() {
    console.log('Компонент обновлён')
  }

  componentWillUnmount() {
    console.log('Компонент будет удалён')
  }

  render() {
    return <div>Привет</div>
  }
}`}
      </VsCode>

      <h3>Как это выглядит в функциональных компонентах с хуками</h3>
      <p>Теперь всё это делается через <code>useEffect</code>.</p>

      <VsCode>
        {`import { useEffect } from 'react'

function Hello() {
  useEffect(() => {
    console.log('Монтирование')

    return () => {
      console.log('Размонтирование')
    }
  }, [])

  return <h1>Привет</h1>
}`}
      </VsCode>

      <p>
        Здесь <code>useEffect</code> с пустым массивом зависимостей <code>[]</code> запускается один раз при монтировании, а функция внутри <code>return</code> вызывается при удалении компонента.
      </p>

      <h2>Итого</h2>
      <ul>
        <li>Жизненный цикл — это путь компонента от появления до удаления.</li>
        <li>Стадии: монтирование, обновление, размонтирование.</li>
        <li>В классах используются специальные методы, в функциях — хук <code>useEffect</code>.
        </li>
        <li>Жизненный цикл помогает правильно загружать данные, очищать ресурсы и управлять побочными эффектами.</li>
      </ul>
      <NavButtons
        prev={'/react/Components'}
        next={'/react/Props'}
      />
    </section>
  )
}