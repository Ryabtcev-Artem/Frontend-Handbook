import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";


export default function Express() {
  

  return (
    <section className={'topic container'}>
      <h2>Express.js — лёгкий и популярный фреймворк для Node.js</h2>

      <p>
        Express — это минималистичный и гибкий фреймворк для создания веб-приложений и API на Node.js. Он упрощает работу с HTTP-сервером, добавляя удобные абстракции и инструменты.
      </p>

      <h3>Что делает Express?</h3>
      <ul>
        <li>Упрощает создание маршрутов (routes) для обработки разных URL и HTTP-методов (GET, POST, PUT, DELETE и др.).</li>
        <li>Позволяет легко работать с запросами и ответами, включая парсинг тела запроса (body), работу с заголовками, куки и сессиями.</li>
        <li>Поддерживает middleware — функции, которые выполняются последовательно при обработке запроса, например, для логирования, авторизации, обработки ошибок и т.д.</li>
        <li>Автоматически управляет заголовками ответа и статусами.</li>
      </ul>
      <h3>Что такое middleware в Express?</h3>
      <p>
        <strong>Middleware</strong> — это <em>промежуточные функции</em>, которые обрабатывают запросы <strong>до того</strong>, как они попадут в конечный обработчик маршрута (route).
      </p>
      <p>Они могут:</p>
      <ul>
        <li>Изменять <code>req</code> и <code>res</code></li>
        <li>Завершать запрос (например, сразу отправить ответ)</li>
        <li>Передавать управление дальше через <code>next()</code></li>
      </ul>

      <h3>Примеры:</h3>
      <ul>
        <li>
          <strong>CORS</strong> — добавляет заголовки, разрешающие доступ с других доменов
        </li>
        <li>
          <strong>body-parser</strong> — превращает тело запроса в объект <code>req.body</code>
        </li>
        <li><strong>logger</strong> — логирует метод и путь запроса</li>
        <li><strong>auth</strong> — проверяет авторизацию пользователя</li>
      </ul>

      <h3>Пример:</h3>
      <VsCode>{`app.use((req, res, next) => {
  console.log('Запрос получен:', req.method, req.url);
  next(); // передаём управление следующему middleware
})`}</VsCode>

      <h3>Вывод:</h3>
      <p>
        Middleware — это как фильтры или «слои обработки», через которые проходят все запросы.
        <br />
        <strong>CORS — это один из примеров middleware</strong>, но middleware — это <strong>механизм</strong> Express, позволяющий настраивать поведение приложения гибко.
      </p>

      <h3>Основные методы Express</h3>
      <ul>
        <li>
          <VsCode>app.get(path, handler)</VsCode><VsCode>app.post(path, handler)</VsCode><VsCode>app.put(path, handler)</VsCode><VsCode>app.delete(path, handler)</VsCode> — обработка разных запросов по указанному пути.
        </li>
        <li>
          <VsCode>app.use(middleware)</VsCode> — подключение middleware, которые могут изменять запрос или ответ.
        </li>
        <li>
          <VsCode>app.listen(port, callback)</VsCode> — запуск сервера на указанном порту.
        </li>
      </ul>

      <h3>Пример простого Express-сервера</h3>
      <VsCode>{`import express from 'express';

const app = express();
const PORT = 3000;

// Middleware для парсинга JSON в теле запроса
app.use(express.json());

// Обработка GET запроса на главную страницу
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Обработка POST запроса с JSON телом
app.post('/data', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Данные получены', yourData: req.body });
});

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});
`}</VsCode>

      <h3>Почему Express так популярен?</h3>
      <ul>
        <li>Очень прост в освоении и использовании — подойдёт новичкам и профи.</li>
        <li>Гибкий и расширяемый: можно подключать огромное количество готовых middleware и плагинов.</li>
        <li>Большое сообщество и множество ресурсов, что облегчает обучение и поддержку проектов.</li>
        <li>Легко интегрируется с разными базами данных и фронтенд-фреймворками.</li>
      </ul>

      <h3>Подытог</h3>
      <p>
        Express — это надстройка над Node.js HTTP-сервером, которая значительно упрощает разработку веб-приложений и API. Она абстрагирует роутинг, обработку запросов и ответы, позволяя быстрее и удобнее создавать серверную логику.
      </p>
      <NavButtons
        prev={'/nodeJs/HttpServer'}
        next={'/nodeJs/ExpressServer'}
      />
    </section>
  )
}
