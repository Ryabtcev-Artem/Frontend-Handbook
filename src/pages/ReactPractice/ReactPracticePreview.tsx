import auto from "../../images/JsPracticeImages/Preview/auto.svg";
import hard from "../../images/JsPracticeImages/Preview/hard.svg";

export default function ReactPracticePreview() {
  return (
    <section className="chapter">
      <div className="chapter__blocks container">
        <h3 className="chapter__block-title diff-title">Базовый уровень</h3>
        <img
          className="diff-icon"
          src={auto}
          alt=""
          width="24"
          height="24"
          loading="lazy"
        />
        <div className="chapter__topic self--check">
          1. Счетчик:
          <ul>
            <li>Создайте компонент с числовым состоянием (useState).</li>
            <li>Добавьте две кнопки: одна увеличивает значение, другая уменьшает.</li>
            <li>Отображайте текущее значение счетчика на экране.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          2. Форма имени:
          <ul>
            <li>Используйте useState для хранения введённого имени.</li>
            <li>Добавьте input и кнопку.</li>
            <li>При отправке формы выводите приветствие: "Привет, [имя]".</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          3. Todo список:
          <ul>
            <li>Используйте useState для хранения массива задач.</li>
            <li>Добавьте input для новой задачи и кнопку "Добавить".</li>
            <li>Отображайте список задач, рядом с каждой — кнопку "Удалить".</li>
            <li>При нажатии на "Удалить" задача исчезает из списка.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          4. Select города:
          <ul>
            <li>Создайте массив городов с дополнительной информацией (мок-данные).</li>
            <li>Используйте useState для хранения выбранного города.</li>
            <li>Добавьте select с option для каждого города.</li>
            <li>При выборе города отображайте информацию о нем.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          5. Случайная цитата дня (useState + работа с массивом):
          <ul>
            <li>Создайте массив с несколькими вдохновляющими цитатами.</li>
            <li>Используйте useState для хранения индекса текущей цитаты.</li>
            <li>Добавьте кнопку "Показать случайную цитату", которая выбирает и отображает новую случайную цитату из массива (но не ту же самую подряд).</li>
            <li>Добавьте кнопку "Скопировать", чтобы скопировать текст цитаты в буфер обмена (используйте <code>navigator.clipboard.writeText</code>).</li>
            <li>Покажите уведомление "Скопировано!", когда цитата успешно скопирована.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          6. Передача пропсов и отображение:
          <ul>
            <li>Создайте родительский компонент с массивом данных (например, список книг).</li>
            <li>Передайте данные в дочерний компонент через props.</li>
            <li>В дочернем компоненте отобразите список с помощью map.</li>
            <li>Добавьте уникальный key для каждого элемента.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          7. Управление фокусом с useRef:
          <ul>
            <li>Создайте input и используйте useRef для получения ссылки на него.</li>
            <li>Добавьте кнопку "Фокус", которая при нажатии ставит фокус на input.</li>
            <li>Попробуйте реализовать автофокус при монтировании с помощью useEffect.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          8. Компонент "Счетчик с шагом":
          <ul>
            <li>Создайте компонент с числовым состоянием (useState).</li>
            <li>Добавьте input для задания шага изменения счетчика.</li>
            <li>Кнопки "+" и "-" должны увеличивать/уменьшать значение на указанный шаг.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          9. Управление формой и валидация:
          <ul>
            <li>Создайте форму с полями email и пароль (useState).</li>
            <li>Проверьте, что email содержит символ "@", а пароль не короче 6 символов.</li>
            <li>Показывайте сообщения об ошибках под соответствующими полями.</li>
            <li>Добавьте кнопку "Показать/скрыть пароль".</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          10. Таймер с кнопками управления:
          <ul>
            <li>Используйте useState для хранения количества секунд.</li>
            <li>С помощью setInterval увеличивайте счетчик каждую секунду.</li>
            <li>Добавьте кнопки "Старт", "Пауза" и "Сброс".</li>
            <li>Не забудьте очищать интервал при сбросе.</li>
          </ul>
        </div>
      </div>

      <div className="chapter__blocks container">
        <h3 className="chapter__block-title diff-title">Средний уровень</h3>
        <img
          className="diff-icon"
          src={hard}
          alt=""
          width="24"
          height="24"
          loading="lazy"
        />
        <div className="chapter__topic self--check">
          11. Кастомный хук useToggle:
          <ul>
            <li>Создайте кастомный хук useToggle на основе useState.</li>
            <li>Хук должен возвращать текущее значение и функцию toggle для смены значения.</li>
            <li>Используйте хук для переключения состояния (например, видимости или темы).</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          12. Кастомный хук useCounter:
          <ul>
            <li>Создайте кастомный хук useCounter с начальным значением и шагом.</li>
            <li>Хук должен возвращать текущее значение, функции increment, decrement и reset.</li>
            <li>Используйте хук для создания счетчика с кнопками управления.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          13. Кастомный хук useInput:
          <ul>
            <li>Создайте кастомный хук useInput для управления состоянием input.</li>
            <li>Хук должен возвращать value, onChange и функцию reset.</li>
            <li>Добавьте валидацию и возвращайте состояние ошибки.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          14. Кастомный хук useLocalStorage:
          <ul>
            <li>Создайте кастомный хук useLocalStorage для синхронизации с localStorage.</li>
            <li>Хук должен автоматически сохранять и загружать данные из localStorage.</li>
            <li>Используйте хук для сохранения настроек пользователя.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          15. Кастомный хук useFetch:
          <ul>
            <li>Создайте кастомный хук useFetch для загрузки данных с API.</li>
            <li>Хук должен возвращать данные, состояние загрузки, ошибку и функцию refetch.</li>
            <li>Используйте useEffect для выполнения запроса при изменении URL.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          16. Кастомный хук useDebounce:
          <ul>
            <li>Создайте кастомный хук useDebounce для задержки обновления значения.</li>
            <li>Хук должен возвращать дебаунсированное значение с настраиваемой задержкой.</li>
            <li>Используйте хук для оптимизации поиска или API-запросов.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          17. Кастомный хук usePrevious:
          <ul>
            <li>Создайте кастомный хук usePrevious для отслеживания предыдущего значения.</li>
            <li>Хук должен возвращать предыдущее значение переменной.</li>
            <li>Используйте useRef для хранения предыдущего значения.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          18. ThemeContext и useContext:
          <ul>
            <li>Создайте ThemeContext с помощью createContext.</li>
            <li>Используйте useContext для доступа к теме в дочерних компонентах.</li>
            <li>Сделайте провайдер с возможностью переключения темы.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          19. useDebounce для поиска:
          <ul>
            <li>Создайте кастомный хук useDebounce, который возвращает значение с задержкой.</li>
            <li>Используйте хук в input для задержки обработки ввода (например, для поиска или API-запроса).</li>
            <li>Проверьте, что значение обновляется только после паузы во вводе.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          20. Управление списком через useRef:
          <ul>
            <li>Создайте список задач и input для добавления новой задачи.</li>
            <li>Используйте useRef для хранения ссылки на input и для хранения уникального id задачи.</li>
            <li>Добавляйте задачи по нажатию Enter или кнопки.</li>
            <li>Удаляйте задачи из списка.</li>
          </ul>
        </div>
      </div>

      <div className="chapter__blocks container">
        <h3 className="chapter__block-title diff-title">Продвинутый уровень</h3>
        <img
          className="diff-icon"
          src={hard}
          alt=""
          width="24"
          height="24"
          loading="lazy"
        />
        <div className="chapter__topic self--check">
          21. Форма с useReducer:
          <ul>
            <li>Используйте useReducer для хранения значений email, password и checkbox.</li>
            <li>Обновляйте значения через dispatch.</li>
            <li>Добавьте валидацию полей и вывод ошибок.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          22. Error Boundary:
          <ul>
            <li>Создайте класс-компонент с методом componentDidCatch.</li>
            <li>Отлавливайте ошибки в дочерних компонентах и отображайте fallback UI.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          23. Модалка с forwardRef:
          <ul>
            <li>Создайте модальное окно как компонент с использованием forwardRef.</li>
            <li>Родитель должен открывать/закрывать модалку через ref.</li>
            <li>Используйте useImperativeHandle для предоставления методов управления.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          24. Модальное окно через React Portal:
          <ul>
            <li>Создайте отдельный div в index.html для портала.</li>
            <li>Используйте ReactDOM.createPortal для рендера модального окна вне основного DOM-дерева.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          25. Ленивая загрузка компонентов:
          <ul>
            <li>Используйте React.lazy для динамического импорта компонента.</li>
            <li>Оборачивайте компонент в Suspense с fallback для отображения загрузки.</li>
            <li>Компонент должен подгружаться только при необходимости.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          26. Оптимизация рендеринга:
          <ul>
            <li>Используйте React.memo для предотвращения лишних рендеров компонента.</li>
            <li>Примените useCallback для мемоизации функций, передаваемых в дочерние компоненты.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          27. Render Props:
          <ul>
            <li>Создайте компонент, который принимает функцию как children.</li>
            <li>Передавайте данные (например, координаты мыши) в эту функцию.</li>
            <li>Пример: MouseTracker, который передаёт координаты мыши в render-функцию.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          28. HOC (Higher-Order Component):
          <ul>
            <li>Создайте функцию-обёртку для компонента.</li>
            <li>HOC должен логировать пропсы в консоль при каждом рендере.</li>
            <li>Обверните любой компонент и проверьте работу HOC.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          29. Карусель изображений:
          <ul>
            <li>Создайте массив изображений или элементов.</li>
            <li>Используйте useState для хранения текущего индекса.</li>
            <li>Добавьте кнопки "Вперед" и "Назад" для переключения элементов.</li>
            <li>Опционально: добавьте анимацию перехода.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          30. Форма авторизации с асинхронным запросом:
          <ul>
            <li>Создайте форму с email и паролем.</li>
            <li>Используйте useState для хранения значений.</li>
            <li>При отправке отправляйте запрос (fetch), показывайте loader во время ожидания.</li>
            <li>Отображайте ошибку при неудачной авторизации.</li>
          </ul>
        </div>
      </div>

      <div className="chapter__blocks container">
        <h3 className="chapter__block-title diff-title">Уровень "Под капотом и архитектура"</h3>
        <img
          className="diff-icon"
          src={hard}
          alt=""
          width="24"
          height="24"
          loading="lazy"
        />
        <div className="chapter__topic self--check">
          31. Redux:
          <ul>
            <li>Настройте Redux store, создайте reducer и actions.</li>
            <li>Добавьте middleware (например, redux-thunk) для асинхронных действий.</li>
            <li>Подключите Redux DevTools для отладки.</li>
            <li>Продемонстрируйте работу с состоянием через Redux.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          32. Zustand store:
          <ul>
            <li>Создайте глобальное хранилище с помощью Zustand.</li>
            <li>Реализуйте CRUD-операции для задач (создание, чтение, обновление, удаление).</li>
            <li>Используйте Zustand для управления состоянием из разных компонентов.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          33. Список с сервера:
          <ul>
            <li>Загрузите список элементов с API.</li>
            <li>Реализуйте сортировку, фильтрацию и пагинацию списка.</li>
            <li>Используйте useEffect и useState для управления данными и состояниями.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          34. React Query/SWR:
          <ul>
            <li>Используйте useQuery (React Query) или useSWR для загрузки данных.</li>
            <li>Покажите кеширование, refetch, состояния загрузки и ошибок.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          35. Presentational/Container:
          <ul>
            <li>Разделите компоненты на презентационные (UI) и контейнерные (логика).</li>
            <li>Передавайте данные через пропсы или используйте хранилище.</li>
            <li>Поясните разницу между подходами.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          36. useForm или Formik:
          <ul>
            <li>Используйте библиотеку Formik или кастомный хук useForm для сложной формы.</li>
            <li>Реализуйте валидацию, вывод сообщений об ошибках и сброс формы (reset).</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          37. Тесты:
          <ul>
            <li>Напишите тесты с помощью React Testing Library.</li>
            <li>Проверьте рендер компонента, взаимодействия пользователя и результат.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          38. Таблица:
          <ul>
            <li>Создайте таблицу с данными.</li>
            <li>Реализуйте сортировку по колонкам.</li>
            <li>Добавьте возможность редактирования строк (inline или через модальное окно).</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          39. Toasts:
          <ul>
            <li>Реализуйте систему уведомлений (toasts) через Context или Zustand.</li>
            <li>Добавляйте уведомления из любого места приложения.</li>
            <li>Уведомления должны автоматически исчезать через заданное время.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          40. SPA:
          <ul>
            <li>Используйте React Router v6 для создания Single Page Application.</li>
            <li>Добавьте несколько страниц и навигацию через Route и Link.</li>
            <li>Вынесите общие компоненты (Header, Footer) на все страницы.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          41. Анимация:
          <ul>
            <li>Используйте Framer Motion для анимации появления и исчезновения элементов.</li>
            <li>Добавьте анимацию к списку или модальному окну.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          42. Styled Components/Emotion:
          <ul>
            <li>Стилизуйте компоненты с помощью Styled Components или Emotion.</li>
            <li>Используйте динамические стили и темы.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          43. Drag & Drop:
          <ul>
            <li>Используйте библиотеку dnd-kit или react-beautiful-dnd для перетаскивания элементов в списке.</li>
            <li>Реализуйте изменение порядка элементов с помощью drag-and-drop.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          44. Локализация:
          <ul>
            <li>Добавьте поддержку нескольких языков с помощью react-i18next.</li>
            <li>Храните строки в json-файлах.</li>
            <li>Реализуйте переключение языков в интерфейсе.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          45. Сложная форма:
          <ul>
            <li>Создайте форму с вложенными полями и массивами значений.</li>
            <li>Реализуйте динамическое добавление и удаление полей.</li>
            <li>Обрабатывайте значения как массивы объектов.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          46. Архитектура Feature Slices:
          <ul>
            <li>Организуйте проект по фичам (feature slices).</li>
            <li>Выделите общие модули, отдельные папки для компонентов, стилей, утилит.</li>
            <li>Поясните преимущества такого подхода.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          47. Protected Routes:
          <ul>
            <li>Реализуйте защищённые маршруты (Protected Routes).</li>
            <li>Проверяйте авторизацию пользователя (например, наличие токена).</li>
            <li>При отсутствии авторизации делайте редирект на /login.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          48. Сохранение состояния:
          <ul>
            <li>Используйте localStorage или sessionStorage для сохранения состояния.</li>
            <li>Сохраняйте данные при изменении (useEffect).</li>
            <li>Восстанавливайте состояние при загрузке приложения.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          49. Аналитика/логирование:
          <ul>
            <li>Реализуйте логирование действий пользователя через context или middleware.</li>
            <li>Отправляйте логи на сервер (можно mock).</li>
            <li>Покажите пример логирования событий.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          50. Мини-дашборд:
          <ul>
            <li>Создайте несколько виджетов с асинхронными данными.</li>
            <li>Организуйте layout с помощью grid или flex.</li>
            <li>Добавьте фильтрацию по дате или категории.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}