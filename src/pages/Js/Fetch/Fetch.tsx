import VsCode from "../../../components/VsCode/VsCode.tsx";
import JsPlayground from "../../../components/JsPlayground/JsPlayground.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function Fetch() {
  

  return (
    <section className={'topic container'}>
      <h2>Fetch</h2>

      <h3>Что такое fetch</h3>
      Fetch — это встроенная функция браузера для отправки HTTP-запросов и получения данных. Она возвращает промис, который резолвится объектом Response.

      <h3>Сигнатура</h3>
      <code>fetch(url, options?)</code>
      Аргументы:
      <ul>
        <li><b>url</b> — строка с адресом запроса.</li>
        <li>
          <b>options</b> — объект с дополнительными настройками (метод, заголовки, тело и т.д.).
        </li>
      </ul>

      <h3>Простой пример</h3>
      <VsCode>
        {`fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));`}
      </VsCode>

      <h3>Что возвращает fetch</h3>
      Промис, который:
      <ul>
        <li>всегда переходит в состояние fulfilled, даже если сервер вернул 404 или 500;</li>
        <li>ошибкой будет только проблема на сетевом уровне (например, нет интернета).</li>
      </ul>

      <h3>Проверка статуса ответа</h3>
      Чтобы проверить, всё ли прошло успешно, используют свойство `response.ok`:

      <VsCode>
        {`fetch('/api/user')
  .then(res => {
    if (!res.ok) {
      throw new Error('Ошибка сети');
    }
    return res.json();
  });`}
      </VsCode>

      <h3>POST-запрос</h3>
      Для отправки данных нужно указать метод и тело:

      <VsCode>
        {`fetch('/api/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({name: 'Alex'}),
});`}
      </VsCode>

      <h3>Асинхронный синтаксис</h3>
      Можно использовать async/await вместо .then:

      <VsCode>
        {`async function loadData() {
  const res = await fetch('/api/stats');
  if (!res.ok) throw new Error('Ошибка запроса');
  const data = await res.json();
  return data;
}`}
      </VsCode>

      <h2>Итого</h2>
      <ul>
        <li>
          <b>fetch</b> — встроенная функция для HTTP-запросов, возвращающая промис;
        </li>
        <li>успех запроса определяется через <code>response.ok</code>;</li>
        <li>по умолчанию — GET-запрос, для POST нужно указывать метод и тело;</li>
        <li>результат нужно парсить, например через <code>.json()</code>;</li>
        <li>синтаксис <code>async/await</code> делает код чище и понятнее.</li>
      </ul>
      <NavButtons prev={'/js/Promises'} next={'/js/Classes'} />
      <JsPlayground
        taskId={8}
        functionName={'getUserNames'}
        answers={[
          [
            "Leanne Graham",
            "Ervin Howell",
            "Clementine Bauch",
            "Patricia Lebsack",
            "Chelsey Dietrich",
            "Mrs. Dennis Schulist",
            "Kurtis Weissnat",
            "Nicholas Runolfsdottir V",
            "Glenna Reichert",
            "Clementina DuBuque"
          ]
        ]}
        defaultCode={`async function getUserNames() {
  fetch("https://jsonplaceholder.typicode.com/users")
}`}
        title={'Задача: Получение имени пользователя через fetch'}
        description={`Реализуйте асинхронную функцию getUserNames(), которая отправляет GET-запрос на https://jsonplaceholder.typicode.com/users
и возвращает массив объектов с информацией о пользователях, верните массив всех полей "username" в этих объектах.`}
        examples={[
          `getUserNames() \n// Ожидаемый результат: ["Leanne Graham","Ervin Howell","Clementine Bauch", ...]`,
        ]}
        delay={500}
      />
      <NavButtons prev={'/js/Promises'} next={'/js/Classes'} />
    </section>
  )
}