import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
import biblia from '../../../images/InternetImages/HowHyperTextWork/biblia.jpg'

export default function HowHyperTextWork() {
  return (
    <section className="topic container">
      <h2 id="title">Что такое гипертекст?</h2>

      <p>
        <strong>Гипертекст</strong> — способ организации текста, при котором одни его части содержат ссылки на другие. Это позволяет читателю свободно переходить между связанными фрагментами.
      </p>

      <p>
        Идея <strong>гипертекста</strong> связана с тем, что текст устроен не линейно, а через ссылки, позволяющие переходить между разными частями. Так можно читать книгу не подряд, а выбирать интересующие куски и быстро переходить к ним. Исторически подобные перекрёстные ссылки в Библии и других религиозных текстах были одними из первых примеров нелинейной структуры текста.
      </p>

      <img
        src={biblia}
        alt="Иллюстрация: Библейский текст с перекрёстными ссылками"
        loading="lazy"
        style={{ maxWidth: '100%', height: 'auto', margin: '1em 0' }}
      />

      <h3>Что такое гиперссылка?</h3>
      <p>
        Гиперссылка — это элемент веб-страницы, который при клике переводит пользователя на другой адрес в интернете или на другой участок той же страницы. В HTML гиперссылка создаётся с помощью тега <code>{`<a>`}</code> (anchor — «якорь») с обязательным атрибутом <code>href</code>, в котором указывается адрес перехода.
      </p>
      <p>Пример гиперссылки в HTML:</p>
      <pre>
        <code>{'<a href="https://www.wikipedia.org/">Перейти на сайт Wikipedia</a>'}</code>
      </pre>
      <p>
        При отображении в браузере это будет кликабельный текст, например: <a href="https://www.wikipedia.org/" target="_blank" rel="noopener noreferrer">Перейти на сайт Wikipedia</a>.
      </p>

      <h3>Что такое URL</h3>
      <p>
        <strong>URL (Uniform Resource Locator)</strong> — уникальный адрес ресурса в интернете. Он указывается в <code>href</code>, чтобы браузер знал, куда вести пользователя.
      </p>
      <p>Структура URL:</p>
      <ul>
        <li><strong>Протокол</strong> (например, <code>https</code>) — указывает способ доступа к ресурсу.</li>
        <li><strong>Доменное имя</strong> (например, <code>example.com</code>) — адрес сервера.</li>
        <li><strong>Путь</strong> (например, <code>/page</code>) — местоположение документа или файла на сервере.</li>
      </ul>
      <p>Все эти части вместе образуют полный <strong>URL</strong> адрес, например: <code>https://example.com/page</code>, где <code>://</code> — это стандартный разделитель, который помогает браузеру понять, где заканчивается название протокола и начинается адрес ресурса.</p>
      <h3>Типы гиперссылок</h3>
      <ul>
        <li><strong>Внешняя ссылка:</strong> <a href="https://google.com" target="_blank" rel="noopener noreferrer">https://google.com</a> — ведёт на другой сайт.</li>
        <li><strong>Внутренняя ссылка:</strong> <a href="/internet">/internet</a> — ведёт на другую страницу того же сайта.</li>
        <li><strong>Якорь:</strong> <a href="#title">#title</a> — ведёт на другой фрагмент той же страницы.</li>
        <li><strong>Email-ссылка:</strong> <a href="mailto:user@example.com">mailto:user@example.com</a> — открывает почтовую программу с готовым адресом (Если она имеется).</li>
      </ul>

      <h3>Итоги</h3>
      <ul>
        <li><strong>Гипертекст</strong> — текст, устроенный так, что можно быстро переходить из одной его части в другую по ссылкам.</li>
        <li><strong>Гиперссылка</strong> — ссылка, на которую можно нажать, чтобы перейти к другому месту в тексте или на другой сайт.</li>
        <li><strong>HTML</strong> реализует гиперссылки через тег <code>&lt;a href="..."&gt;</code>.</li>
        <li><strong>URL</strong> указывает точное местоположение ресурса.</li>
      </ul>

      <NavButtons
        prev="/internet/Dns"
        next="/internet/Http"
      />
    </section>
  )
}
