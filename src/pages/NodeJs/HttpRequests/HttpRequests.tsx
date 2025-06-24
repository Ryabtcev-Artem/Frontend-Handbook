import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";


export default function HttpRequests() {
  

  return (
    <section className="topic container">
      <h2>HTTP-запросы: структура, приём и отправка</h2>

      <h3>Что такое HTTP-запрос?</h3>
      <p>
        HTTP-запрос — это сообщение, которое клиент (обычно браузер или другое приложение) отправляет серверу, чтобы получить данные или выполнить действие. Он состоит из нескольких частей:
      </p>

      <h3>Структура HTTP-запроса</h3>
      <p>Запрос состоит из трёх основных блоков:</p>
      <ol>
        <li>
          <strong>Стартовая строка (Request line)</strong> — содержит метод, путь (URL) и версию протокола.
          <br />
          Пример: <VsCode>{`GET /users?id=123 HTTP/1.1`}</VsCode>
        </li>
        <li>
          <strong>Заголовки (Headers)</strong> — ключ-значение пары, которые передают метаинформацию.
          <br />
          Примеры:
          <ul>
            <li>
              <VsCode>{`Content-Type: application/json`}</VsCode> — тип тела запроса
            </li>
            <li>
              <VsCode>{`Authorization: Bearer TOKEN`}</VsCode> — токен авторизации
            </li>
            <li>
              <VsCode>{`Accept: application/json`}</VsCode> — какие форматы клиент ожидает получить
            </li>
            <li>
              <VsCode>{`User-Agent: Mozilla/5.0`}</VsCode> — информация о клиенте
            </li>
          </ul>
        </li>
        <li>
          <strong>Тело запроса (Body)</strong> — содержимое запроса, обычно используется с методами POST, PUT, PATCH. Может быть JSON, форма (form-data), текст, файл и т.д.
          <br />
          Например:
          <VsCode>{`{"name": "John", "age": 30}`}</VsCode>
        </li>
      </ol>

      <h3>HTTP-методы (verbs)</h3>
      <p>Основные методы, которые определяют действие:</p>
      <ul>
        <li>
          <strong>GET</strong> — получить данные, тело запроса обычно отсутствует.
        </li>
        <li><strong>POST</strong> — отправить данные на сервер (создать ресурс).
        </li>
        <li><strong>PUT</strong> — обновить ресурс целиком.</li>
        <li><strong>PATCH</strong> — частично обновить ресурс.</li>
        <li><strong>DELETE</strong> — удалить ресурс.</li>
      </ul>

      <h3>Как отправлять HTTP-запросы с фронта</h3>
      <h4>Fetch API</h4>
      <p>Встроенный в браузер метод для отправки запросов.</p>
      <VsCode>{`fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John', age: 30 })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`}</VsCode>

      <h4>Axios</h4>
      <p>Популярная внешняя библиотека с удобным API и поддержкой старых браузеров.</p>
      <VsCode>{`import axios from 'axios';

axios.post('/api/users', { name: 'John', age: 30 })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`}</VsCode>

      <h3>Как принимать HTTP-запросы на сервере (Express)</h3>
      <p>Express упрощает работу с HTTP. Вот как принимать запросы с разными методами:</p>

      <h4>GET-запрос</h4>
      <p>Параметры передаются через URL (query params):</p>
      <VsCode>{`app.get('/users', (req, res) => {
  const userId = req.query.id; // получаем параметр id из URL: /users?id=123
  // логика по получению пользователя
  res.json({ id: userId, name: 'John' });
});`}</VsCode>

      <h4>POST-запрос</h4>
      <p>Данные передаются в теле запроса, чаще всего в формате JSON. Не забудьте подключить middleware <code>express.json()</code> для парсинга:
      </p>
      <VsCode>{`app.use(express.json()); // подключаем парсер JSON

app.post('/users', (req, res) => {
  const userData = req.body; // тело запроса
  // логика создания пользователя
  res.status(201).json({ message: 'Пользователь создан', user: userData });
});`}</VsCode>

      <h4>PUT-запрос</h4>
      <p>Обновление ресурса:</p>
      <VsCode>{`app.put('/users/:id', (req, res) => {
  const userId = req.params.id; // параметр пути
  const newData = req.body;
  // логика обновления пользователя
  res.json({ message: \`Пользователь \${userId} обновлен\`, newData });
});`}</VsCode>

      <h4>DELETE-запрос</h4>
      <p>Удаление ресурса:</p>
      <VsCode>{`app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  // логика удаления пользователя
  res.json({ message: \`Пользователь \${userId} удалён\` });
});`}</VsCode>

      <h3>Подробности о запросе в Express</h3>
      <ul>
        <li>
          <strong>req.query</strong> — объект с параметрами строки запроса (GET-параметры).
        </li>
        <li>
          <strong>req.params</strong> — параметры маршрута (например, /users/:id).
        </li>
        <li>
          <strong>req.body</strong> — тело запроса (требует парсинга, например express.json()).
        </li>
        <li><strong>req.headers</strong> — объект с заголовками запроса.</li>
      </ul>

      <h3>Что такое CORS и зачем он нужен</h3>
      <p>
        CORS (Cross-Origin Resource Sharing) — политика браузера, которая ограничивает запросы к ресурсам с другого домена. Чтобы разрешить такие запросы,
        на сервер добавляют специальные заголовки, например с помощью middleware <code>cors</code> в Express.
      </p>
      <h2>Что такое CORS и зачем он нужен</h2>
      <p>
        <strong>CORS</strong> (Cross-Origin Resource Sharing) — это механизм безопасности браузера, который ограничивает выполнение веб-страницами запросов к ресурсам, расположенным на другом домене (домен + порт + протокол). По умолчанию браузеры блокируют такие "кросс-доменные" запросы из-за политики одного источника (Same-Origin Policy).
      </p>
      <p>Если сайт с домена <code>example.com</code> пытается запросить данные с API на <code>api.otherdomain.com</code>, браузер сначала проверит, разрешён ли такой запрос сервером через специальные HTTP-заголовки CORS.
      </p>
      <h3>Как сервер разрешает CORS</h3>
      <p>Чтобы разрешить кросс-доменные запросы, сервер должен ответить с определёнными заголовками, например:</p>
      <ul>
        <li>
          <code>Access-Control-Allow-Origin</code> — указывает, какие домены могут делать запросы (например, <code>*</code> — разрешить всем, либо конкретный домен).
        </li>
        <li>
          <code>Access-Control-Allow-Methods</code> — какие HTTP-методы разрешены (GET, POST, PUT и т.д.).
        </li>
        <li>
          <code>Access-Control-Allow-Headers</code> — какие заголовки клиент может отправлять.
        </li>
      </ul>
      <h3>Как настроить CORS в Express</h3>
      <p>Самый простой и правильный способ — использовать npm-библиотеку <code>cors</code> (обязательно её установить):
      </p>
      <VsCode>{`npm install cors`}</VsCode>

      <p>Далее в коде сервера:</p>
      <VsCode>{`import express from 'express'
import cors from 'cors'

const app = express()

// Разрешить запросы с любого домена (небезопасно в проде)
app.use(cors())

// Можно настроить более детально, например:
app.use(cors({
  origin: 'http://localhost:3000', // Разрешаем только с этого домена
  methods: ['GET', 'POST'], // Разрешённые методы
  allowedHeaders: ['Content-Type', 'Authorization'] // Разрешённые заголовки
}))

app.listen(3000)`}</VsCode>

      <p>Так сервер автоматически добавит необходимые CORS-заголовки к ответам.</p>
      <h3>Что нужно делать на фронте</h3>
      <p>На стороне клиента (например, в fetch или axios) особых действий не требуется. Браузер сам отправит предварительный OPTIONS-запрос (preflight) и проверит ответ сервера.</p>
      <p>Если вы используете fetch, просто пишите запрос как обычно:</p>
      <VsCode>{`fetch('http://api.otherdomain.com/data')
  .then(res => res.json())
  .then(data => console.log(data))`}</VsCode>

      <p>Если нужно отправлять куки или авторизацию, укажите опцию <code>credentials</code>:
      </p>
      <VsCode>{`fetch('http://api.otherdomain.com/data', {
  credentials: 'include' // или 'same-origin' 
})`}</VsCode>

      < p> На
        сервере в
        этом случае
        нужно разрешить
        заголовок<code>
          Access-Control - Allow - Credentials: true</code> и указать конкретный домен (не <code>*</code>) в <code>Access-Control-Allow-Origin</code>.
      </p>
      <h3>Что важно помнить</h3>
      <ul>
        <li>Без настроенного CORS браузер заблокирует запросы к другому домену.</li>
        <li>CORS — это политика браузера, на сервере не действует. Сервер просто отвечает нужными заголовками.</li>
        <li>Если сервер не отвечает заголовками CORS, клиентский JS получить доступ к ответу не сможет (даже если запрос прошёл).</li>
        <li>Для API и микросервисов важно настроить CORS, чтобы фронтенд мог работать с ними корректно.</li>
      </ul>
      <h3>Итого</h3>
      <ul>
        <li>CORS — браузерная политика безопасности для контроля доступа к ресурсам с других доменов.</li>
        <li>Сервер должен отправлять специальные заголовки, чтобы разрешить кросс-доменные запросы.</li>
        <li>В Express используется пакет <code>cors</code> для лёгкой настройки.
        </li>
        <li>На фронте обычно ничего дополнительного делать не нужно, кроме случая с куки и авторизацией.</li>
        <li>Без CORS браузер не даст JavaScript получить данные с другого домена.</li>
      </ul>
      <h3>Итого</h3>
      <ul>
        <li>HTTP-запрос — это сообщение с методами, заголовками и телом для общения клиента и сервера.</li>
        <li>Методы GET, POST, PUT, DELETE определяют действие над ресурсами.</li>
        <li>Fetch и Axios — популярные способы отправки запросов с фронта.</li>
        <li>Express.js упрощает приём запросов и работу с их частями через req.query, req.body, req.params, req.headers.</li>
        <li>CORS — механизм безопасности браузера, регулирующий доступ к ресурсам с других доменов.</li>
      </ul>
      <NavButtons prev={'/nodeJs/Timers'} next={'/nodeJs/DataParsing'} />
    </section>
  )
}