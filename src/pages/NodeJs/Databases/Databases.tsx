import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
type DatabasesProps = {}
export default function Databases(props: DatabasesProps) {
  const {} = props

  return (
    <section className="topic container">
      <h2>Базы данных: от основ до использования в Node.js</h2>

      <p>
        <strong>База данных</strong> — это система, которая хранит, организует и позволяет быстро получать нужные данные. Она может быть простой, как таблица Excel, или очень сложной — как система, обслуживающая Instagram.
      </p>

      <h3>Зачем нужны базы данных</h3>

      <p>Когда данных становится слишком много, чтобы хранить их просто в памяти или в файлах, нужна база. Она умеет:</p>
      <ul>
        <li>Хранить информацию структурировано</li>
        <li>Быстро находить нужное</li>
        <li>Обновлять, удалять, фильтровать, сортировать и связывать данные</li>
        <li>Работать с миллионами записей без потерь производительности</li>
      </ul>

      <h3>Виды баз данных</h3>

      <p>Существует несколько типов баз. Вот основные:</p>

      <ul>
        <li>
          <strong>Реляционные (SQL):</strong> данные — это таблицы. Всё чётко структурировано. Пример — PostgreSQL, MySQL, SQLite.
        </li>
        <li>
          <strong>Документоориентированные (NoSQL):</strong> данные хранятся в виде объектов. Пример — MongoDB.
        </li>
        <li>
          <strong>Ключ-значение:</strong> как словарь. Очень быстро, но ограниченно. Пример — Redis.
        </li>
        <li>
          <strong>Графовые:</strong> хранят связи между сущностями. Пример — Neo4j.
        </li>
      </ul>

      <h3>Что такое SQL</h3>

      <p>
        <strong>SQL</strong> — язык запросов, с помощью которого вы общаетесь с базой данных. Например:
      </p>

      <VsCode>
        {
          "SELECT * FROM users WHERE age &gt; 18;"
        }
      </VsCode>

      <p>Этот запрос вернёт всех пользователей старше 18 лет.</p>

      <h3>Когда нужна база, а не просто файл</h3>

      <p>Файл подходит, когда у вас десятки записей. База — когда сотни, тысячи, миллионы. Кроме того, база умеет:</p>
      <ul>
        <li>Работать с несколькими пользователями одновременно</li>
        <li>Следить за целостностью данных</li>
        <li>Оптимизировать поиск</li>
        <li>Обеспечивать безопасность и доступ по правам</li>
      </ul>

      <h3>Как Node.js работает с базами</h3>

      <p>Node.js сам по себе не содержит встроенной базы, но может подключаться к любой через пакеты. Самые популярные:</p>

      <ul>
        <li><code>pg</code> — для PostgreSQL</li>
        <li><code>mysql2</code> — для MySQL</li>
        <li><code>mongoose</code> — удобная обёртка для MongoDB</li>
        <li><code>sequelize</code> — универсальный ORM для SQL-баз</li>
      </ul>

      <h3>Пример подключения к PostgreSQL</h3>

      <VsCode>
        {
          "const { Client } = require('pg')\n\nconst client = new Client({\n  user: 'postgres',\n  host: 'localhost',\n  database: 'test',\n  password: '1234',\n  port: 5432,\n})\n\nclient.connect()\n\nclient.query('SELECT NOW()', (err, res) =&gt; {\n  console.log(err, res.rows)\n  client.end()\n})"
        }
      </VsCode>

      <h3>Пример с MongoDB через mongoose</h3>

      <VsCode>
        {
          "const mongoose = require('mongoose')\n\nmongoose.connect('mongodb://localhost:27017/test')\n\nconst User = mongoose.model('User', {\n  name: String,\n  age: Number,\n})\n\nconst user = new User({ name: 'Artem', age: 25 })\nuser.save()"
        }
      </VsCode>

      <h2>Итого</h2>
      <ul>
        <li>База данных — это система хранения информации с быстрым доступом</li>
        <li>SQL-базы используют таблицы и строгую структуру</li>
        <li>NoSQL — более гибкие, хранят данные как объекты</li>
        <li>Node.js подключается к базам через пакеты (например, <code>pg</code>, <code>mongoose</code>)</li>
        <li>Можно выполнять SQL-запросы или работать с моделями</li>
        <li>Без базы не обойтись, если нужно хранить много данных и управлять ими</li>
      </ul>
      <NavButtons prev={'/nodeJs/DataParsing'} next={'/nodeJs'} />
    </section>
  )
}
