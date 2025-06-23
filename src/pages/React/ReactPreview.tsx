import { Link } from "react-router-dom";
import ChapterPreview from "../../components/ChapterPreview/ChapterPreview.tsx";

export default function ReactPreview() {
  return (
    <section className="chapter">
      <ChapterPreview
        title="React"
        description="В этом разделе мы разберем что такое React и как создавать интерфейсы."
      />
      <div className="chapter__blocks container">

        <h3 className="chapter__block-title">1. Введение в React</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.1</div>
            <Link to="/react/intro">Что такое React?</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.2</div>
            <Link to="/react/setup">Установка и запуск приложения</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">2. Основы React</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.1</div>
            <Link to="/react/components">Компоненты и JSX</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.2</div>
            <Link to="/react/props-state">Props и State</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.3</div>
            <Link to="/react/event-handling">Обработка событий</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.4</div>
            <Link to="/react/lifecycle">Жизненный цикл компонентов</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">3. Расширенные возможности</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.1</div>
            <Link to="/react/hooks">React Hooks</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.2</div>
            <Link to="/react/context">Context API</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.3</div>
            <Link to="/react/router">React Router</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">4. Работа с данными</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.1</div>
            <Link to="/react/fetching-data">Получение данных (fetch, axios)</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.2</div>
            <Link to="/react/state-management">Управление состоянием (Redux, Zustand)</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.3</div>
            <Link to="/react/forms">Работа с формами</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">5. Продвинутые темы</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.1</div>
            <Link to="/react/performance">Оптимизация производительности</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.2</div>
            <Link to="/react/testing">Тестирование компонентов</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.3</div>
            <Link to="/react/deployment">Деплой React-приложений</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
