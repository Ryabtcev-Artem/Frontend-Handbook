import { Link } from "react-router-dom";
import ChapterPreview from "../../components/ChapterPreview/ChapterPreview.tsx";

export default function NodeJsPreview() {
  return (
    <section className="chapter">
      <ChapterPreview
        title="NodeJs"
        description="В этом разделе мы разберем что такое NodeJs и как писать серверную часть."
      />
      <div className="chapter__blocks container">

        <h3 className="chapter__block-title">1. Введение в Node.js</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.1</div>
            <Link to="/nodeJs/Intro">Что такое Node.js?</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.2</div>
            <Link to="/nodeJs/Setup">Установка и запуск простого приложения</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">2. Архитектура и основы</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.1</div>
            <Link to="/nodeJs/Architecture">Архитектура Node.js</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.2</div>
            <Link to="/nodeJs/BlockingAndNonBlockingIo">Блокирующий и неблокирующий ввод-вывод</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.3</div>
            <Link to="/nodeJs/Modules">Модули: CommonJS vs ES Modules</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.4</div>
            <Link to="/nodeJs/FileSystem">Работа с файлами (fs)</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">3. Создание сервера</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.1</div>
            <Link to="/nodeJs/HttpServer">HTTP-сервер на чистом Node.js</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.2</div>
            <Link to="/nodeJs/Express">Express.js</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.3</div>
            <Link to="/nodeJs/ExpressServer">Создание простого приложения на Express.js</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">4. Асинхронность</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.1</div>
            <Link to="/nodeJs/AsyncBasics">Callbacks, Promises, async/await</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.2</div>
            <Link to="/nodeJs/ErrorHandling">Обработка ошибок</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.3</div>
            <Link to="/nodeJs/Timers">Таймеры и планирование задач</Link>
          </div>
        </div>
        <h3 className="chapter__block-title">5. Взаимодействие с внешними ресурсами</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.1</div>
            <Link to="/nodeJs/HttpRequests">HTTP-запросы</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.2</div>
            <Link to="/nodeJs/DataParsing">Парсинг JSON и URL-encoded</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.3</div>
            <Link to="/nodeJs/DatabasesIntro">Введение в базы данных</Link>
          </div>
        </div>
        <h3 className="chapter__block-title">6. Практические аспекты</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">6.1</div>
            <Link to="/nodeJs/EnvVariables">Environment variables</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">6.2</div>
            <Link to="/nodeJs/LoggingDebug">Логирование и дебаг</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">6.3</div>
            <Link to="/nodeJs/Deployment">Деплой простого Node.js приложения</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
