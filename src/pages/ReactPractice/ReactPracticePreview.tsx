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
          <div className="chapter__topic self--check">1. Счетчик: useState для хранения числа, две кнопки (+/-), отображение значения.</div>
          <div className="chapter__topic self--check">2. Форма имени: useState, input, кнопка, при отправке выводит &quot;Привет, [имя]&quot;.</div>
          <div className="chapter__topic self--check">3. Todo список: useState, input для новой задачи, кнопка добавить, удаление через кнопку рядом с задачей.</div>
          <div className="chapter__topic self--check">4. Select города: useState, select + option, отображение информации из мок-данных по выбранному городу.</div>
          <div className="chapter__topic self--check">5. Показ/скрытие блока: useState (boolean), условный рендеринг по состоянию.</div>
          <div className="chapter__topic self--check">6. Переключатель темы: useState, кнопка, смена классов/темы по состоянию.</div>
          <div className="chapter__topic self--check">7. Форма валидации: useState, проверка email на &quot;@&quot;, пароля на длину, вывод ошибок.</div>
          <div className="chapter__topic self--check">8. Список пользователей: map по массиву, отображение карточек, обязательный key.</div>
          <div className="chapter__topic self--check">9. Передача пропсов: родитель передаёт данные в дочерний компонент через props, вывод на экран.</div>
          <div className="chapter__topic self--check">10. Таймер: useEffect с setInterval, useState для секунд, очистка в cleanup.</div>
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
          <div className="chapter__topic self--check">11. Фильтрация списка: useState для строки, filter по массиву.</div>
          <div className="chapter__topic self--check">12. Autocomplete: useState, filter, подстановка списка вариантов при вводе.</div>
          <div className="chapter__topic self--check">13. Загрузка данных: useEffect, fetch, отображение списка из JSONPlaceholder.</div>
          <div className="chapter__topic self--check">14. Вкладки (Tabs): useState для текущей вкладки, отображение по активной вкладке.</div>
          <div className="chapter__topic self--check">15. Фокус на input: useRef, useEffect для автофокуса при загрузке компонента.</div>
          <div className="chapter__topic self--check">16. Аккордеон: useState с id открытого элемента, условный рендеринг.</div>
          <div className="chapter__topic self--check">17. useToggle: кастомный хук с useState, возвращает value и toggle-функцию.</div>
          <div className="chapter__topic self--check">18. Подъём состояния: общий useState в родителе, два дочерних input компонента с колбэками.</div>
          <div className="chapter__topic self--check">19. ThemeContext: createContext, useContext, провайдер с переключателем темы.</div>
          <div className="chapter__topic self--check">20. useDebounce: кастомный хук, задержка ввода, используется в input с API или консолью.</div>
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
          <div className="chapter__topic self--check">21. useReducer форма: хранение значений email/password/checkbox, обновление через dispatch, валидация.</div>
          <div className="chapter__topic self--check">22. Error Boundary: class component с componentDidCatch, отлов ошибок дочерних компонентов.</div>
          <div className="chapter__topic self--check">23. Модалка с forwardRef: родитель открывает/закрывает через ref, useImperativeHandle для методов.</div>
          <div className="chapter__topic self--check">24. Модальное окно через React Portal: создание отдельного div в index.html, ReactDOM.createPortal.</div>
          <div className="chapter__topic self--check">25. Ленивая загрузка: React.lazy, Suspense с fallback, отложенная подгрузка компонентов.</div>
          <div className="chapter__topic self--check">26. Оптимизация: React.memo для компонента, useCallback для передаваемых функций.</div>
          <div className="chapter__topic self--check">27. Render Props: компонент принимает функцию как children, пример — MouseTracker с координатами.</div>
          <div className="chapter__topic self--check">28. HOC: функция-обертка над компонентом, логирование пропсов в консоль.</div>
          <div className="chapter__topic self--check">29. Карусель: текущий индекс в useState, кнопки вперед/назад, анимации опциональны.</div>
          <div className="chapter__topic self--check">30. Форма авторизации: useState, fetch, отображение loader при ожидании и ошибки при неудаче.</div>
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
          <div className="chapter__topic self--check">31. Redux: store, reducer, actions, middleware (redux-thunk), Redux DevTools.</div>
          <div className="chapter__topic self--check">32. Zustand store: createStore, CRUD операции для задач, управление состоянием глобально.</div>
          <div className="chapter__topic self--check">33. Список с сервера: загрузка по API, сортировка, фильтрация, пагинация, useEffect, useState.</div>
          <div className="chapter__topic self--check">34. React Query/SWR: useQuery/useSWR, кеширование, refetch, loading, error состояния.</div>
          <div className="chapter__topic self--check">35. Presentational/Container: деление компонентов на UI и логику, пропсы vs хранилище.</div>
          <div className="chapter__topic self--check">36. useForm или Formik: сложная форма, валидация, error-месседжи, reset.</div>
          <div className="chapter__topic self--check">37. Тесты: React Testing Library, тест рендера, взаимодействия, проверка результата.</div>
          <div className="chapter__topic self--check">38. Таблица: список с возможностью сортировки по колонке, редактирование inline или модалкой.</div>
          <div className="chapter__topic self--check">39. Toasts: Context или Zustand, добавление уведомления из любого места, автоудаление.</div>
          <div className="chapter__topic self--check">40. SPA: React Router v6, Route, Link, несколько страниц, общие компоненты (Header, Footer).</div>
          <div className="chapter__topic self--check">41. Анимация: Framer Motion, анимация появления/исчезновения элементов.</div>
          <div className="chapter__topic self--check">42. Styled Components/Emotion: стилизация компонентов, динамические стили, темы.</div>
          <div className="chapter__topic self--check">43. Drag & Drop: библиотека dnd-kit или react-beautiful-dnd, перетаскивание элементов в списке.</div>
          <div className="chapter__topic self--check">44. Локализация: react-i18next, переключение языков, хранение строк в json.</div>
          <div className="chapter__topic self--check">45. Сложная форма: вложенные поля, динамическое добавление/удаление полей, массивы значений.</div>
          <div className="chapter__topic self--check">46. Архитектура Feature Slices: деление по фичам, общие модули, отдельные папки для компонентов, стилей, утилит.</div>
          <div className="chapter__topic self--check">47. Protected Routes: проверка авторизации, редирект на /login при отсутствии токена.</div>
          <div className="chapter__topic self--check">48. Сохранение состояния: localStorage/sessionStorage, useEffect для сохранения/восстановления.</div>
          <div className="chapter__topic self--check">49. Аналитика/логирование: context или middleware, логирование действий и отправка на сервер (mock).</div>
          <div className="chapter__topic self--check">50. Мини-дашборд: несколько виджетов, асинхронные данные, layout (grid/flex), фильтрация по дате или категории.</div>
      </div>
    </section>
  );
}