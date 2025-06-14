import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

type LocalAndSessionProps = {}
export default function LocalAndSession(props: LocalAndSessionProps) {
  const {} = props

  return (
    <section className={'topic container'}>
      <h2>LocalStorage и SessionStorage</h2>

      <p>
        Помимо файлов Cookies, для хранения данных на стороне клиента в браузерах также есть <strong>LocalStorage</strong> и <strong>SessionStorage</strong>.
      </p>

      <p>
        <strong>LocalStorage</strong> — это постоянное хранилище. Данные в нём остаются даже после закрытия вкладки или перезапуска браузера. Информация удаляется только вручную (например, скриптом или очисткой кэша).
      </p>

      <p>
        <strong>SessionStorage</strong> — это временное хранилище. Данные в нём живут, пока открыта вкладка браузера. Как только пользователь её закрыл — всё исчезает.
      </p>

      <h3>Сходства</h3>
      <ol>
        <li>Обе технологии хранят данные в виде пар <code>ключ — значение</code>.
        </li>
        <li>Доступ к данным происходит через JavaScript (например, <code>localStorage.getItem('ключ')</code>).
        </li>
        <li>Обе доступны только в пределах одного домена (другие сайты их не увидят).</li>
      </ol>

      <h3>Отличия</h3>
      <ol>
        <li><strong>Время жизни:</strong>
          <code>LocalStorage</code> — навсегда, <code>SessionStorage</code> — только на время вкладки.
        </li>
        <li>
          <strong>Объём:</strong> У обоих ограничение около 5 МБ, но в некоторых браузерах для <code>SessionStorage</code> оно может быть меньше.
        </li>
        <li><strong>Область действия:</strong>
          <code>SessionStorage</code> изолирован между вкладками. <code>LocalStorage</code> общий для всех вкладок одного сайта.
        </li>
      </ol>

      <h3>Простой пример</h3>
      <p>
        Допустим, у вас интернет-магазин. Чтобы запомнить товары в корзине:
      </p>
      <ul>
        <li>Используйте <strong>LocalStorage</strong>, если хотите, чтобы корзина сохранялась даже после закрытия браузера.
        </li>
        <li>Используйте <strong>SessionStorage</strong>, если хотите, чтобы корзина обнулилась при закрытии вкладки (например, для приватных сессий).
        </li>
      </ul>

      <h3>Пример использования в коде</h3>
      <pre>
    <code>{`// Сохраняем
localStorage.setItem('username', 'Alex');
sessionStorage.setItem('sessionId', '123');

// Получаем
const name = localStorage.getItem('username');
const session = sessionStorage.getItem('sessionId');

// Удаляем
localStorage.removeItem('username');
sessionStorage.clear();`}</code>
  </pre>
      <h3>А как же Cookies?</h3>

      <p>
        Главное отличие в том, что <strong>Cookies</strong> автоматически отправляются на сервер при каждом HTTP-запросе.
        Это делает их идеальными для хранения информации, связанной с авторизацией (например, токенов или идентификаторов сессии).
      </p>

      <p>В отличие от Web Storage:</p>
      <ul>
        <li>Cookies гораздо меньше по объёму (до 4 КБ).</li>
        <li>Они доступны как на клиенте, так и на сервере.</li>
        <li>Могут иметь срок жизни, привязанный к дате или сессии.</li>
      </ul>

      <p>
        Если <strong>LocalStorage</strong> и <strong>SessionStorage</strong> больше подходят для интерфейсных данных
        (например, настроек темы или содержимого корзины), то <strong>Cookies</strong> — это инструмент для взаимодействия клиента и сервера.
      </p>
      <h3>А что такое IndexedDB?</h3>
      <p>
        <strong>IndexedDB</strong> — это более мощное и гибкое хранилище на стороне клиента, позволяющее сохранять большие объёмы структурированных данных (вплоть до половины доступной памяти устройства).
        В отличие от LocalStorage и SessionStorage, IndexedDB работает асинхронно и позволяет хранить объекты, индексы и выполнять запросы к базе.
      </p>
      <p>
        IndexedDB подходит для сложных приложений, которым нужно работать с большими объемами данных офлайн, например, прогрессивные веб-приложения (PWA).
      </p>
      <h2>Итого</h2>
      <ul>
        <li>
          <strong>LocalStorage</strong> — данные хранятся до тех пор, пока их явно не удалить.
        </li>
        <li>
          <strong>SessionStorage</strong> — данные стираются при закрытии вкладки.
        </li>
        <li>Оба работают с данными в формате "ключ — значение".</li>
        <li>Удобны для хранения пользовательских настроек, корзин, временных токенов и др.</li>
        <li>Не подходят для хранения чувствительной информации — данные доступны через JavaScript и не защищены.</li>
        <li><strong>Cookies</strong>, когда данные должны передаваться на сервер, например, при каждой загрузке страницы (токены, сессии).</li>
        <li><strong>IndexedDB</strong> — мощное асинхронное хранилище для больших объемов структурированных данных, подходит для сложных офлайн-приложений.</li>
      </ul>
      <NavButtons prev={'/browser/Cookies'} next={'/browser/Cors'} />
    </section>
  )
}