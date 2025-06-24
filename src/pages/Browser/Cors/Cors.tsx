import NavButtons from "../../../components/NavButtons/NavButtons.tsx";


export default function Cors() {
  

  return (
    <section className={'topic container'}>
      <h2>Что такое Same-Origin и CORS?</h2>

      <h3>Origin — основа политики безопасности</h3>
      <p>
        <strong>Origin</strong> — это источник, откуда пришёл запрос. Он состоит из трёх частей: <code>схема (protocol)</code>, <code>домен (hostname)</code> и <code>порт</code>.
        Например:
      </p>
      <pre><code>https://example.com:443</code></pre>
      <p>
        Два URL считаются <strong>одинаковыми origin</strong>, только если все три части совпадают. Иначе — это <strong>разные origin</strong>.
      </p>

      <h3>Что такое Same-Origin Policy?</h3>
      <p>
        <strong>Same-Origin Policy (SOP)</strong> — политика безопасности браузера, которая запрещает скриптам на странице обращаться к данным с другого origin.
        Это защищает пользователей от атак типа <strong>XSS</strong> и <strong>CSRF</strong>.
      </p>

      <h4>Пример:</h4>
      <p>
        Страница с <code>https://site-a.com</code> не может просто так получить данные с <code>https://api.site-b.com</code>, даже если оба сайта принадлежат вам. Это считается нарушением политики same-origin.
      </p>
      <h3>Что такое CORS?</h3>

      <p>
        <strong>CORS (Cross-Origin Resource Sharing)</strong> — это механизм безопасности в браузерах, который управляет доступом к ресурсам с другого домена.
        По умолчанию браузеры блокируют такие запросы, чтобы защитить пользователя от вредоносных действий.
      </p>
      <p>
        Чтобы разрешить <strong>кросс-доменные запросы</strong> — браузеры используют CORS.
        Он позволяет серверу указать, каким сайтам можно обращаться к его ресурсам.
      </p>

      <h4>Пример запроса через fetch:</h4>
      <pre>
        <code>{`fetch('https://api.site-b.com/data')
  .then(response => response.json())
  .then(data => console.log(data));`}</code>
      </pre>

      <p>Такой запрос сработает только если сервер вернёт заголовок:</p>
      <pre>
        <code>Access-Control-Allow-Origin: https://site-a.com</code>
      </pre>

      <h3>Как работает CORS?</h3>
      <ol>
        <li>Браузер делает запрос к другому origin.</li>
        <li>Перед основным запросом (например, <code>POST</code>) может быть отправлен предварительный <strong>preflight-запрос</strong> методом <code>OPTIONS</code>.</li>
        <li>Сервер должен ответить нужными заголовками: <code>Access-Control-Allow-Origin</code>, <code>Allow-Methods</code> и т.д.</li>
        <li>Если заголовки отсутствуют — браузер блокирует ответ.</li>
      </ol>

      <h3>Дополнительные параметры CORS</h3>
      <ul>
        <li><strong>Access-Control-Allow-Credentials:</strong> нужен для передачи cookies и токенов между origin-ами.</li>
        <li><strong>Access-Control-Allow-Headers:</strong> список разрешённых заголовков (например, <code>Content-Type</code>).</li>
        <li><strong>Access-Control-Allow-Methods:</strong> какие методы разрешены (GET, POST и т.д.).</li>
      </ul>

      <h2>Итого</h2>
      <ul>
        <li><strong>Origin</strong> — это протокол + домен + порт. Браузер применяет строгую политику доступа между разными origin-ами.</li>
        <li><strong>Same-Origin Policy</strong> — защита от небезопасных запросов между сайтами.</li>
        <li><strong>CORS</strong> — способ дать разрешение на доступ к API с другого сайта.</li>
      </ul>
      <NavButtons prev={'/browser/LocalAndSession'} next={'/browser/Rendering'} />
    </section>
  )
}
