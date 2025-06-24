import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function ExpressServer() {
  

  return (
    <section className={'topic container'}>
      <h2>Создание простого приложения на Express</h2>

      <p>
        Express позволяет легко отправлять HTML-файлы клиенту в ответ на определённые маршруты.
        Для этого используется метод <code>res.sendFile</code>, который отправляет указанный файл пользователю.
      </p>

      <h3>🛠 Подключение необходимых модулей</h3>
      <p>В начале мы импортируем Express и определяем путь к текущей директории, так как в ESM нет <code>__dirname</code> по умолчанию:</p>

      <VsCode>{`import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)`}</VsCode>

      <h3>🚏 Обработка маршрутов и отправка HTML</h3>
      <p>Далее задаём обработчики маршрутов и отправляем нужные HTML-файлы:</p>

      <VsCode>{`// Главная страница
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Страница "О нас"
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

// Любая другая страница
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'))
})`}</VsCode>

      <h3>🚀 Запуск сервера</h3>
      <VsCode>{`app.listen(PORT, () => {
  console.log(\`Сервер запущен на http://localhost:\${PORT}\`)
})`}</VsCode>

      <h3>📁 Структура проекта</h3>
      <VsCode>{`
project/
├── public/
│   ├── index.html
│   ├── about.html
│   └── contact.html
├── server.js
`}</VsCode>
      <h3>Статическая раздача файлов</h3>
      <p>
        В Express можно сделать все файлы внутри папки <code>public</code> доступными по URL через встроенное middleware <code>express.static</code>.
      </p>

      <VsCode>{`app.use(express.static('public'))`}</VsCode>

      <p>
        После этого, например, файл <code>public/style.css</code> будет доступен в браузере по адресу:
      </p>

      <VsCode>{`http://localhost:3000/style.css`}</VsCode>

      <p>
        Это очень удобно для подключения стилей, изображений, скриптов и других ресурсов, которые не требуют обработки сервером.
      </p>

      <h2>Итого</h2>
      <ul>
        <li>Для отправки HTML-файлов используйте <code>res.sendFile()</code>.</li>
        <li>Не забудьте корректно указать путь через <code>path.join()</code>.</li>
        <li>Создайте папку <code>public</code> и разместите в ней все HTML-файлы.</li>
        <li>При работе с ESM используйте <code>fileURLToPath</code> и <code>path.dirname</code> для получения <code>__dirname</code>.</li>
      </ul>
      <NavButtons prev={'/nodeJs/Express'} next={'/nodeJs/AsyncBasics'} />
    </section>
  )
}
