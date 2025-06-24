import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function DataParsing() {
  

  return (
    <section className="topic container">
      <h2>Парсинг данных в Node.js</h2>

      <p>Парсинг — это извлечение нужной информации из строки, файла или ответа от сервера. В Node.js под парсингом обычно понимается обработка данных, полученных извне: JSON, HTML, CSV, XML и других форматов.</p>

      <h3>Когда нужен парсинг</h3>
      <p>Чаще всего — когда вы что-то получаете: от API, из файла, из формы. Эти данные нужно разобрать и использовать по делу.</p>

      <ul>
        <li>При чтении JSON-файла или ответа от сервера</li>
        <li>При парсинге HTML-страниц (например, парсинг сайтов)</li>
        <li>При обработке CSV-файлов, логов, конфигураций</li>
      </ul>

      <h3>Парсинг JSON</h3>
      <p>Самый частый и простой случай. JSON — это уже почти «нативный» формат в JavaScript.</p>

      <VsCode>
        {
          "const jsonStr = '{\"name\":\"Artem\",\"age\":25}'\nconst data = JSON.parse(jsonStr)\nconsole.log(data.name) // Artem"
        }
      </VsCode>

      <p>Node также умеет сразу читать и парсить JSON-файлы:</p>

      <VsCode>
        {
          "const fs = require('fs')\n\nconst raw = fs.readFileSync('./data.json', 'utf-8')\nconst parsed = JSON.parse(raw)\nconsole.log(parsed)"
        }
      </VsCode>

      <h3>Парсинг HTML</h3>
      <p>Если вам нужно вытащить что-то с сайта — понадобится HTML-парсинг. Для этого есть популярные библиотеки:</p>

      <ul>
        <li><code>cheerio</code> — быстрый, лёгкий jQuery-подобный инструмент
        </li>
        <li><code>jsdom</code> — эмулятор DOM из браузера</li>
      </ul>

      <p>Пример с cheerio:</p>

      <VsCode>
        {
          "const cheerio = require('cheerio')\nconst html = '&lt;div class=\"user\"&gt;Artem&lt;/div&gt;'\n\nconst $ = cheerio.load(html)\nconsole.log($('.user').text()) // Artem"
        }
      </VsCode>

      <h3>Парсинг CSV</h3>
      <p>CSV-файлы часто приходят из Excel или систем учёта. Для их разбора есть библиотеки вроде <code>csv-parser</code>.
      </p>

      <VsCode>
        {
          "const fs = require('fs')\nconst csv = require('csv-parser')\n\nfs.createReadStream('data.csv')\n  .pipe(csv())\n  .on('data', (row) =&gt; console.log(row))\n  .on('end', () =&gt; console.log('Готово'))"
        }
      </VsCode>

      <h3>Парсинг URL и query-параметров</h3>
      <p>Node даёт встроенные инструменты для разбора URL-адресов и параметров запросов:</p>

      <VsCode>
        {
          "const { URL } = require('url')\n\nconst myURL = new URL('https://site.com/page?user=artem&amp;age=25')\nconsole.log(myURL.searchParams.get('user')) // artem"
        }
      </VsCode>
      <h3>Парсинг URL-encoded данных в Node.js</h3>

      <p><strong>URL-encoded</strong> — это формат, в котором браузер отправляет данные формы, если не задан <code>enctype="multipart/form-data"</code>. Он выглядит как обычная строка запроса: <code>name=Artem&amp;age=25</code>.</p>

      <p>В Node.js эти данные приходят как строка, и её нужно распарсить вручную или через библиотеку.</p>

      <h3>Как выглядит URL-encoded строка</h3>

      <p>Пример содержимого тела запроса:</p>

      <VsCode>
        {
          "name=Artem&amp;age=25&amp;city=Moscow"
        }
      </VsCode>

      <p>Каждое поле — это <code>ключ=значение</code>, а пары разделяются <code>&amp;</code>. Пробелы кодируются как <code>+</code>, спецсимволы — через <code>%</code>-кодировку (например, <code>%20</code> вместо пробела).</p>

      <h3>Парсинг вручную (встроенный модуль querystring)</h3>

      <p>Node.js имеет модуль <code>querystring</code>, который умеет превращать такую строку в объект:</p>

      <VsCode>
        {
          "const querystring = require('querystring')\n\nconst body = 'name=Artem&amp;age=25'\nconst parsed = querystring.parse(body)\n\nconsole.log(parsed.name) // Artem\nconsole.log(parsed.age) // 25"
        }
      </VsCode>

      <h3>Автоматический парсинг с Express</h3>

      <p>Если вы используете Express, то всё ещё проще. Просто подключаете встроенный middleware:</p>

      <VsCode>
        {
          "const express = require('express')\nconst app = express()\n\napp.use(express.urlencoded({ extended: true }))\n\napp.post('/submit', (req, res) =&gt; {\n  console.log(req.body.name) // Artem\n  res.send('ОК')\n})"
        }
      </VsCode>

      <p><code>extended: true</code> означает, что внутри будет использоваться более мощная библиотека <code>qs</code>, которая умеет разбирать вложенные объекты вроде <code>user[name]=Artem</code>.</p>

      <h2>Итого</h2>
      <ul>
        <li>Парсинг — это разбор и извлечение нужных данных из текста, файла, HTML, JSON и т. д.</li>
        <li>JSON легко парсить встроенными средствами: <code>JSON.parse</code>
        </li>
        <li>HTML можно парсить с <code>cheerio</code> или <code>jsdom</code>
        </li>
        <li>CSV — через <code>csv-parser</code> и поток чтения</li>
        <li>URL-параметры разбираются через модуль <code>url</code></li>
        <li>URL-encoded — это способ передачи данных формы через строку <code>ключ=значение</code></li>
        <li>Node.js идеально подходит для любых задач по обработке данных</li>
      </ul>
      <NavButtons prev={'/nodeJs/HttpRequest'} next={'/nodeJs/Databases'} />
    </section>
  )
}