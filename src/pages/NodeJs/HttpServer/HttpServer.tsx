import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function HttpServer() {
  

  return (
    <section className={'topic container'}>
      <h2>Создание HTTP-сервера в Node.js</h2>

      <p>
        В Node.js можно создавать собственные HTTP-серверы с помощью встроенного модуля <code>http</code>. Это позволяет принимать запросы от клиентов и отправлять им ответы.
      </p>

      <h3>Подключение модуля и базовый сервер</h3>
      <p>Пример простого HTTP-сервера, который отвечает "Hello, world!" на любой запрос:</p>
      <VsCode>{`import http from 'http';

const PORT = 3000;
const HOST = 'localhost';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

server.listen(PORT, HOST, () => {
  console.log(\`Сервер запущен на http://\${HOST}:\${PORT}\`);
});`}</VsCode>

      <h3>Как это работает?</h3>
      <ul>
        <li><code>http.createServer()</code> создаёт сервер и принимает функцию-обработчик, которая вызывается на каждый запрос.</li>
        <li>В функции-обработчике есть два объекта: <code>req</code> — запрос клиента, <code>res</code> — ответ сервера.</li>
        <li>Метод <code>res.writeHead()</code> задаёт статус и заголовки ответа.</li>
        <li>Метод <code>res.end()</code> отправляет тело ответа и завершает обработку.</li>
        <li><code>server.listen()</code> запускает сервер на указанном хосте и порту.</li>
      </ul>

      <h3>Обработка разных маршрутов (Router)</h3>
      <p>Можно обрабатывать разные URL:</p>
      <VsCode>{`const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Главная страница</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>О сайте</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Страница не найдена');
  }
});`}</VsCode>

      <h3>Почему стоит использовать фреймворки?</h3>
      <p>
        Чистый <code>http</code>-сервер — мощный, но требует много ручного кода для маршрутизации, обработки ошибок, работы с телом запроса и т.д.
        Для упрощения и ускорения разработки используют фреймворки, например, <code>Express</code>.
      </p>

      <h3>Как проверить сервер?</h3>
      <p>
        Запустите файл с сервером командой <code>node yourfile.js</code> и откройте в браузере <code>http://localhost:3000</code>.
      </p>
      <h2>Итого</h2>
      <ul>
        <li>Модуль <code>http</code> позволяет создавать собственные HTTP-серверы на Node.js.</li>
        <li>Сервер обрабатывает запросы через callback с объектами <code>req</code> и <code>res</code>.</li>
        <li>Методы <code>res.writeHead()</code> и <code>res.end()</code> используются для отправки ответа клиенту.</li>
        <li>Можно реализовать простую маршрутизацию по URL, обрабатывая разные пути в коде сервера.</li>
        <li>Для удобства и масштабируемости часто используют фреймворки, например, Express.</li>
      </ul>
      <NavButtons prev={'/nodeJs/FileSystem'} next={'/nodeJs/Express'} />
    </section>
  )
}
