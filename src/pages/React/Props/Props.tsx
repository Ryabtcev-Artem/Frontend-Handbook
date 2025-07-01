import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
import props from '../../../images/ReactImages/Props/props.png'
export default function Props() {

  return (
    <section className={'topic container'}>
      <h2>Props — способ передачи данных в компоненты</h2>

      <h3>Что такое props</h3>
      <p>
        Props (сокращение от “properties”) — это механизм React, с помощью которого компонент получает данные от родительского компонента. Они передаются в компонент как атрибуты при его вызове.
      </p>

      <h3>Зачем нужны props</h3>
      <p>
        Props позволяют повторно использовать компоненты с разными значениями. Вместо того чтобы жёстко вшивать текст или поведение внутрь компонента, вы передаёте их извне. Это делает компонент гибким, конфигурируемым и универсальным.
      </p>

      <h3>Как передавать и использовать props</h3>
      <p>
        Когда вы используете компонент, вы указываете свойства как HTML-атрибуты. Внутри компонента эти данные доступны через параметр <code>props</code>:
      </p>

      <VsCode>{`type ButtonProps = {
  label: string
}

function Button(props: ButtonProps) {
  return <button>{props.label}</button>
}

// Использование:
<Button label="Отправить" />
<Button label="Удалить" />
`}</VsCode>

      <h3>Деструктуризация props</h3>
      <p>
        Вместо <code>props.label</code> можно использовать деструктуризацию прямо в параметрах функции — это делает код чище:
      </p>

      <VsCode>{`type ButtonProps = {
  label: string
}

function Button({ label }: ButtonProps) {
  return <button>{label}</button>
}
`}</VsCode>

      <h3>Props нельзя изменять</h3>
      <p>
        Props — это read-only. Если вы попытаетесь изменить их внутри компонента, React проигнорирует это. Props задаёт родитель, и только он может передать новые значения при необходимости.
      </p>

      <h3>Типизация props</h3>
      <p>
        При использовании TypeScript важно задавать тип для props, особенно если компонент принимает больше одного свойства. Это предотвращает ошибки и делает код самодокументируемым.
      </p>

      <VsCode>{`type CardProps = {
  title: string
  content: string
}

function Card({ title, content }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}
`}</VsCode>

      <h3>Можно передавать что угодно</h3>
      <p>
        Через props можно передавать не только строки, но и числа, объекты, массивы и даже функции и JSX-элементы. Это основа для построения динамических и гибких компонентов.
      </p>

      <VsCode>{`type AlertProps = {
  children: React.ReactNode
}

function Alert({ children }: AlertProps) {
  return <div className="alert">{children}</div>
}

// Использование:
<Alert>
  <strong>Внимание!</strong> Это важно.
</Alert>
`}</VsCode>
      <h3>Props передаются от родителя к ребёнку</h3>
      <p>Props передаются между компонентами сверху вниз — от родительского компонента к дочернему.
        То есть мы НЕ можем передавать props снизу вверх
      </p>
      <img
        src={props}
        alt=""
        width=""
        height=""
        loading="lazy"
      />
      <p>Таким образом, родитель управляет тем, что отображает ребёнок,
        передавая ему нужные данные через props. Сам дочерний компонент
        не меняет эти данные — он их только читает и показывает.</p>
      <p>Это важный принцип React — <em>однонаправленный поток данных</em>. Он упрощает понимание приложения и помогает избежать ошибок.
      </p>
      <h2>Итого</h2>
      <ul>
        <li>
          <strong>Props</strong> — это способ передать данные от родителя к компоненту.
        </li>
        <li>Они неизменяемы внутри компонента — только на чтение.</li>
        <li>С помощью props можно переиспользовать компоненты с разными данными.</li>
        <li>Можно передавать строки, числа, функции, компоненты и любые другие значения.</li>
        <li>Типизация props повышает надёжность кода и помогает IDE подсказывать корректные значения.</li>
      </ul>
      <NavButtons
        prev={'/react/Lifecycle'}
        next={'/react/Rendering'}
      />
    </section>
  )
}