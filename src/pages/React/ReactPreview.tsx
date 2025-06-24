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
            <Link to="/react/Intro">Что такое React?</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.2</div>
            <Link to="/react/Setup">Настройка окружения и создание проекта</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">2. Основы React</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.1</div>
            <Link to="/react/Components">Компоненты и JSX</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.2</div>
            <Link to="/react/Lifecycle">Жизненный цикл компонента</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.3</div>
            <Link to="/react/Props">Props - передача данных</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.4</div>
            <Link to="/react/Rendering">Условный рендеринг и списки</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.5</div>
            <Link to="/react/EventHandling">Обработка событий</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">3. Состояние и хуки</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.1</div>
            <Link to="/react/Hooks">Что такое Хуки?</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.2</div>
            <Link to="/react/UseState">useState - локальное состояние</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.3</div>
            <Link to="/react/UseEffect">useEffect - побочные эффекты</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.4</div>
            <Link to="/react/UseRef">useRef - работа с DOM</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.5</div>
            <Link to="/react/AdditionalHooks">Дополнительные хуки (useContext, useReducer, useMemo)</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">4. Работа с данными</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.1</div>
            <Link to="/react/Forms">Работа с формами</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.2</div>
            <Link to="/react/FetchingData">Получение данных (fetch, axios)</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.3</div>
            <Link to="/react/Context">Context API - глобальное состояние</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.4</div>
            <Link to="/react/StateManagement">Управление состоянием (Redux, Zustand)</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">5. Маршрутизация и навигация</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.1</div>
            <Link to="/react/RouterBasics">React Router - основы</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.2</div>
            <Link to="/react/RouterAdvanced">Продвинутая маршрутизация</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">6. Оптимизация и производительность</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">6.1</div>
            <Link to="/react/MemoOptimization">React.memo и оптимизация рендеринга</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">6.2</div>
            <Link to="/react/Performance">Профилирование и оптимизация производительности</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">6.3</div>
            <Link to="/react/CodeSplitting">Разделение кода (Code Splitting)</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">7. Тестирование и деплой</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">7.1</div>
            <Link to="/react/Testing">Тестирование компонентов</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">7.2</div>
            <Link to="/react/Deployment">Деплой React-приложений</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">7.3</div>
            <Link to="/react/Lifecycle">Жизненный цикл компонентов (классы)</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
