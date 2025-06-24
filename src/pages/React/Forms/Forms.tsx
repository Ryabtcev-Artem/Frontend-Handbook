import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function Forms() {

  return (
    <section className={'topic container'}>
      <h2>Работа с формами в React</h2>

      <p>
        Работа с формами в React построена вокруг управляемых компонентов — это когда состояние элементов формы (input, select и т.д.) хранится в React-состоянии, а не внутри самого DOM.
      </p>

      <p>
        Это даёт полный контроль над вводом, возможность валидации, маскирования и моментальной реакции на действия пользователя.
      </p>

      <h3>Управляемые компоненты</h3>

      <p>
        Это такой подход, при котором значение элемента формы полностью зависит от состояния в компоненте. Вы сами решаете, что отобразится в input.
      </p>

      <VsCode>{`const [value, setValue] = useState('')

return <input value={value} onChange={e => setValue(e.target.value)} />`}</VsCode>

      <p>
        Каждый ввод символа вызывает <code>onChange</code>, обновляется <code>state</code>, и React перерисовывает поле с новым значением. Это и есть контроль.
      </p>

      <h3>Обработка отправки формы</h3>

      <p>
        Для отправки формы в React используется обычный <code>onSubmit</code>, но обязательно нужно отключить стандартное поведение браузера.
      </p>

      <VsCode>{`const handleSubmit = (e) => {
  e.preventDefault()
  console.log('Отправка данных:', value)
}

<form onSubmit={handleSubmit}>
  <input value={value} onChange={e => setValue(e.target.value)} />
  <button type="submit">Отправить</button>
</form>`}</VsCode>

      <p>
        Теперь вместо перезагрузки страницы данные можно обрабатывать программно — отправлять на сервер, валидировать, сохранять.
      </p>

      <h3>Несколько полей в форме</h3>

      <p>
        Если полей много, их удобно хранить в одном объекте.
      </p>

      <VsCode>{`const [form, setForm] = useState({ email: '', password: '' })

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value })
}`}</VsCode>

      <p>
        Такой шаблон легко масштабируется: любое количество полей, одна функция <code>handleChange</code>, никакой рутины.
      </p>

      <h3>Валидация данных</h3>

      <p>
        Проверку правильности можно делать прямо в момент изменения или при отправке. Самый простой способ — вручную:
      </p>

      <VsCode>{`if (!form.email.includes('@')) {
  alert('Некорректный email')
}`}</VsCode>

      <p>
        Для сложных форм используют библиотеки, вроде <code>react-hook-form</code> или <code>Formik</code>. Они автоматизируют валидацию, упрощают работу с ошибками и интеграцию со схемами (например, через <code>Yup</code>).
      </p>

      <h3>Файл, чекбокс и select</h3>

      <p>
        Чекбоксы используют свойство <code>checked</code> вместо <code>value</code>.
      </p>

      <VsCode>{`<input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />`}</VsCode>

      <p>
        Select работает по тем же правилам, что и input:
      </p>

      <VsCode>{`<select value={gender} onChange={e => setGender(e.target.value)}>
  <option value="male">Мужчина</option>
  <option value="female">Женщина</option>
</select>`}</VsCode>

      <p>
        Файлы — особый случай: их нельзя контролировать через состояние, но можно читать через <code>e.target.files</code>.
      </p>

      <VsCode>{`const handleFile = (e) => {
  const file = e.target.files[0]
  console.log(file.name)
}`}</VsCode>

      <h2>Итого</h2>

      <ul>
        <li>
          <b>Управляемые формы</b> — React хранит значение элементов в состоянии.
        </li>
        <li>
          <b>onChange</b> и <b>value</b> делают input полностью подконтрольным.
        </li>
        <li>
          <b>onSubmit</b> используется для отправки формы без перезагрузки страницы.
        </li>
        <li><b>Объект состояния</b> упрощает работу с несколькими полями.</li>
        <li><b>Валидация</b> может быть ручной или через библиотеки.</li>
        <li>
          <b>Чекбокс, select и file</b> требуют немного другого подхода, но принцип тот же — всё под контролем.
        </li>
      </ul>

      <p>
        Суть: в React всё работает через состояние. Вы не просто заполняете поля, вы управляете логикой ввода. Это делает формы гибкими, мощными и предсказуемыми.
      </p>
      <NavButtons prev={'/react/AdditionalHooks'} next={'/react'} />
    </section>
  )
}