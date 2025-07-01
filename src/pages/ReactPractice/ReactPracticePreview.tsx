export default function ReactPracticePreview() {
  return (
    <section className="chapter">
      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">🎯 Базовые хуки (useState, useEffect)</h3>
        <div className="chapter__topic self--check">
          <strong>1. Счетчик с кнопками</strong>
          <p>Создай компонент счетчика с тремя кнопками.</p>
          <ul>
            <li>Отображение числа (начальное значение: 0)</li>
            <li>Кнопка "+" (увеличивает на 1)</li>
            <li>Кнопка "-" (уменьшает на 1)</li>
            <li>Кнопка "Reset" (сбрасывает в 0)</li>
          </ul>
          <p><em>Цель: Освоить useState и обработку событий</em></p>
        </div>

        <div className="chapter__topic self--check">
          <strong>2. Форма ввода имени</strong>
          <p>Форма с живым обновлением приветствия.</p>
          <ul>
            <li>Input с placeholder "Введите ваше имя"</li>
            <li>При вводе сразу показывается "Привет, [имя]!"</li>
            <li>Если поле пустое: "Введите имя для приветствия"</li>
          </ul>
          <p><em>Цель: Контролируемые компоненты и условный рендеринг</em></p>
        </div>

        <div className="chapter__topic self--check">
          <strong>3. Список задач (Todo)</strong>
          <p>Простой todo-список с добавлением и удалением.</p>
          <ul>
            <li>Input для ввода новой задачи</li>
            <li>Кнопка "Добавить"</li>
            <li>Список задач (используй .map())</li>
            <li>Кнопка "Удалить" рядом с каждой задачей</li>
            <li>Input очищается после добавления</li>
          </ul>
          <p><em>Цель: Работа с массивами в state</em></p>
        </div>

        <div className="chapter__topic self--check">
          <strong>4. Цифровые часы</strong>
          <p>Часы, обновляющиеся каждую секунду.</p>
          <ul>
            <li>Отображение текущего времени (ЧЧ:ММ:СС)</li>
            <li>Обновление каждую секунду через setInterval</li>
            <li>Очистка интервала при размонтировании</li>
            <li>Используй useEffect для setup/cleanup</li>
          </ul>
          <p><em>Цель: useEffect и очистка побочных эффектов</em></p>
        </div>
      </div>

      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">🧩 Компоненты и пропсы</h3>

        <div className="chapter__topic self--check">
          <strong>5. Карточка пользователя</strong>
          <p>Переиспользуемый компонент для отображения пользователя.</p>
          <ul>
            <li>Компонент UserCard принимает props: name, age, email, avatar</li>
            <li>Красивое отображение данных в карточке</li>
            <li>Создай массив пользователей и отрендери несколько карточек</li>
            <li>Если avatar нет - показывай заглушку</li>
          </ul>
          <p><em>Цель: Передача props и переиспользование компонентов</em></p>
        </div>

        <div className="chapter__topic self--check">
          <strong>6. Кнопка с разными стилями</strong>
          <p>Универсальная кнопка с различными вариантами.</p>
          <ul>
            <li>Props: text, variant ("primary", "secondary", "danger"), onClick</li>
            <li>Разные цвета для каждого variant</li>
            <li>Используй эту кнопку в разных местах приложения</li>
            <li>Добавь prop disabled для неактивного состояния</li>
          </ul>
          <p><em>Цель: Условные стили и переиспользуемые UI компоненты</em></p>
        </div>

        <div className="chapter__topic self--check">
          <strong>7. Модальное окно</strong>
          <p>Переиспользуемое модальное окно.</p>
          <ul>
            <li>Props: isOpen, onClose, title, children</li>
            <li>Затемнение фона при открытии</li>
            <li>Закрытие по клику на фон или кнопку X</li>
            <li>Несколько кнопок для открытия разных модалок</li>
          </ul>
          <p><em>Цель: Передача JSX через children и управление видимостью</em>
          </p>
        </div>
      </div>

      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">🎣 Кастомные хуки</h3>

        <div className="chapter__topic self--check">
          <strong>8. useToggle хук</strong>
          <p>Хук для переключения булевых значений.</p>
          <ul>
            <li>Хук возвращает [value, toggle] (как useState)</li>
            <li>toggle() меняет значение на противоположное</li>
            <li>Используй для показа/скрытия элементов</li>
            <li>Создай несколько компонентов с этим хуком</li>
          </ul>
          <p><em>Цель: Создание переиспользуемой логики</em></p>
        </div>
        <div className="chapter__topic self--check">
          <strong>9. useLocalStorage хук</strong>
          <p>Хук для работы с localStorage.</p>
          <ul>
            <li>Принимает key и defaultValue</li>
            <li>Возвращает [value, setValue] (как useState)</li>
            <li>Автоматически сохраняет в localStorage при изменении</li>
            <li>Загружает значение при первом рендере</li>
          </ul>
          <p><em>Цель: Интеграция с браузерными API через хуки</em></p>
        </div>
      </div>
      <div className={'chapter__blocks container'}>
        <div className="chapter__topic self--check">
          <strong>10. useFetch хук</strong>
          <p>Кастомный React-хук для выполнения HTTP-запросов и управления состоянием загрузки.</p>
          <ul>
            <li>Принимает URL и опциональные параметры (например, метод, заголовки, тело)</li>
            <li>Возвращает:
              <ul>
                <li><code>data</code> — полученные данные</li>
                <li><code>loading</code> — индикатор загрузки</li>
                <li><code>error</code> — информация об ошибке (если есть)</li>
                <li><code>refetch</code> — функция для повторного запроса</li>
              </ul>
            </li>
            <li>Может использоваться повторно в разных компонентах</li>
            <li>Поддерживает параметр зависимостей (например, refetch при изменении)</li>
            <li>Реализует абстракцию повторяющейся логики запросов</li>
          </ul>
          <p>
            <em>Цель: Избавиться от дублирования логики загрузки данных в компонентах.</em>
          </p>
        </div>
        <div className="chapter__topic self--check">
          <strong>12. useDebounce хук</strong>
          <p>Кастомный хук для задержки выполнения действия после окончания ввода (debounce).</p>
          <ul>
            <li>Принимает:
              <ul>
                <li><code>fn</code> — значение, которое нужно "задерживать"
                </li>
                <li><code>delay</code> — время задержки в миллисекундах</li>
              </ul>
            </li>
            <li>Возвращает:
              <ul>
                <li>
                  <code>debouncedValue</code> — значение, обновляемое с задержкой
                </li>
              </ul>
            </li>
            <li>Полезен для оптимизации частых изменений (например, при поиске)</li>
            <li>Использует <code>useEffect</code> и <code>setTimeout</code> под капотом
            </li>
            <li>Очищает таймер при размонтировании или изменении value</li>
          </ul>
          <p>
            <em>Цель: избежать лишних запросов или операций при каждом изменении значения.</em>
          </p>
        </div>

      </div>
      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">🚀 Комплексные задачи</h3>

        <div className="chapter__topic self--check">
          <strong>13. Форма с валидацией</strong>
          <p>Форма регистрации с проверкой полей.</p>
          <ul>
            <li>Поля: имя (минимум 2 символа), email (валидный email), пароль (минимум 6 символов)</li>
            <li>Показ ошибок под каждым полем</li>
            <li>Кнопка "Зарегистрироваться" активна только при валидной форме</li>
            <li>Очистка формы после успешной отправки</li>
          </ul>
          <p><em>Цель: Валидация форм и управление состоянием</em></p>
        </div>

        <div className="chapter__topic self--check">
          <strong>14. Поиск по списку</strong>
          <p>Фильтрация списка в реальном времени.</p>
          <ul>
            <li>Массив объектов (например, пользователи с именем и email)</li>
            <li>Input для поискового запроса</li>
            <li>Фильтрация списка по мере ввода</li>
            <li>Показ "Ничего не найдено" если результатов нет</li>
          </ul>
          <p><em>Цель: Фильтрация данных и работа с методами массивов</em></p>
        </div>
      </div>
    </section>
  );
}