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
          5. Показ/скрытие блока:
          <ul>
            <li>Создайте булевое состояние (useState).</li>
            <li>Добавьте кнопку для переключения состояния.</li>
            <li>Отображайте или скрывайте блок в зависимости от состояния.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          6. Переключатель темы:
          <ul>
            <li>Используйте useState для хранения текущей темы (например, "light" или "dark").</li>
            <li>Добавьте кнопку для смены темы.</li>
            <li>Меняйте классы или стили в зависимости от выбранной темы.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          7. Форма валидации:
          <ul>
            <li>Используйте useState для хранения email и пароля.</li>
            <li>Проверьте, что email содержит символ "@", а пароль — не короче 6 символов.</li>
            <li>Выводите сообщения об ошибках под соответствующими полями.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          8. Список пользователей:
          <ul>
            <li>Создайте массив пользователей (мок-данные).</li>
            <li>С помощью map отобразите карточки пользователей.</li>
            <li>Обязательно используйте уникальный key для каждого элемента.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          9. Передача пропсов:
          <ul>
            <li>Создайте родительский компонент с данными.</li>
            <li>Передайте данные в дочерний компонент через props.</li>
            <li>Отобразите полученные данные в дочернем компоненте.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          10. Таймер:
          <ul>
            <li>Используйте useState для хранения количества секунд.</li>
            <li>С помощью useEffect и setInterval увеличивайте счетчик каждую секунду.</li>
            <li>Не забудьте очистить интервал в cleanup-функции useEffect.</li>
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
          11. Фильтрация списка:
          <ul>
            <li>Создайте массив элементов (например, пользователей или товаров).</li>
            <li>Используйте useState для хранения строки фильтра.</li>
            <li>Отображайте только те элементы, которые соответствуют фильтру (filter).</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          12. Autocomplete:
          <ul>
            <li>Создайте массив вариантов (например, городов).</li>
            <li>Используйте useState для хранения введённого значения.</li>
            <li>При вводе фильтруйте массив и показывайте подходящие варианты под input.</li>
            <li>При выборе варианта подставляйте его в input.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          13. Загрузка данных:
          <ul>
            <li>Используйте useEffect для загрузки данных с помощью fetch (например, с JSONPlaceholder).</li>
            <li>Сохраняйте полученные данные в useState.</li>
            <li>Отображайте список загруженных элементов.</li>
            <li>Обрабатывайте состояния загрузки и ошибок.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          14. Вкладки (Tabs):
          <ul>
            <li>Создайте несколько вкладок (например, "Профиль", "Настройки").</li>
            <li>Используйте useState для хранения активной вкладки.</li>
            <li>Отображайте содержимое только активной вкладки.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          15. Фокус на input:
          <ul>
            <li>Создайте input и используйте useRef для получения ссылки на него.</li>
            <li>С помощью useEffect установите фокус на input при монтировании компонента.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          16. Аккордеон:
          <ul>
            <li>Создайте список элементов-аккордеонов.</li>
            <li>Используйте useState для хранения id открытого элемента.</li>
            <li>Отображайте содержимое только для открытого элемента.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          17. useToggle:
          <ul>
            <li>Создайте кастомный хук useToggle на основе useState.</li>
            <li>Хук должен возвращать текущее значение и функцию toggle для смены значения.</li>
            <li>Используйте хук для переключения состояния (например, видимости).</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          18. Подъём состояния:
          <ul>
            <li>Создайте родительский компонент с общим состоянием (например, текст).</li>
            <li>Добавьте два дочерних компонента с input, которые изменяют общее состояние через колбэки.</li>
            <li>Изменения в одном input должны отображаться и в другом.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          19. ThemeContext:
          <ul>
            <li>Создайте ThemeContext с помощью createContext.</li>
            <li>Используйте useContext для доступа к теме в дочерних компонентах.</li>
            <li>Сделайте провайдер с возможностью переключения темы.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          20. useDebounce:
          <ul>
            <li>Создайте кастомный хук useDebounce, который возвращает значение с задержкой.</li>
            <li>Используйте хук в input для задержки обработки ввода (например, для поиска или API-запроса).</li>
            <li>Проверьте, что значение обновляется только после паузы во вводе.</li>
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
          21. useReducer форма:
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
          25. Ленивая загрузка:
          <ul>
            <li>Используйте React.lazy для динамического импорта компонента.</li>
            <li>Оборачивайте компонент в Suspense с fallback для отображения загрузки.</li>
            <li>Компонент должен подгружаться только при необходимости.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          26. Оптимизация:
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
          28. HOC:
          <ul>
            <li>Создайте функцию-обёртку (Higher-Order Component) для компонента.</li>
            <li>HOC должен логировать пропсы в консоль при каждом рендере.</li>
            <li>Обверните любой компонент и проверьте работу HOC.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          29. Карусель:
          <ul>
            <li>Создайте массив изображений или элементов.</li>
            <li>Используйте useState для хранения текущего индекса.</li>
            <li>Добавьте кнопки "Вперед" и "Назад" для переключения элементов.</li>
            <li>Опционально: добавьте анимацию перехода.</li>
          </ul>
        </div>
        <div className="chapter__topic self--check">
          30. Форма авторизации:
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