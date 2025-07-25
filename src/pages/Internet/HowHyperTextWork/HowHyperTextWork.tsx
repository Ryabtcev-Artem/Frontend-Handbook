import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
import biblia from '../../../images/InternetImages/HowHyperTextWork/biblia.jpg'

export default function HowHyperTextWork() {
  return (
    <section className="topic container">
      <h2 id="title">Что такое гипертекст?</h2>

      <p>
        <strong>Гипертекст</strong> — это способ организации текста, при котором одни его части содержат ссылки на другие. Приставка <em>гипер</em> в переводе с греческого означает «сверх», «выше» или «за пределами». То есть <strong>гипертекст</strong> — это не просто текст, а <em>сверхтекст</em>, который выходит за рамки обычного линейного чтения. Это позволяет читателю свободно переходить между связанными фрагментами — как в интерактивной энциклопедии.
      </p>

      <p>
        Вместо того чтобы читать от начала до конца, как в книге, вы можете переходить по связанным фрагментам с помощью ссылок. Это как если бы в учебнике вы ткнули на слово — и сразу перешли на нужную главу или другую книгу.
      </p>

      <p>
        Идея гипертекста стара как мир: в древних религиозных текстах, например, в Библии, уже использовались перекрёстные ссылки между главами. Это помогало быстро находить связанное содержание.
      </p>

      <img
        src={biblia}
        alt="Иллюстрация: Библейский текст с перекрёстными ссылками"
        loading="lazy"
        style={{ maxWidth: '100%', height: 'auto', margin: '1em 0' }}
      />
      <p>
        Однако термин <strong>«гипертекст»</strong> появился только в 1960-х годах. Его предложил американский исследователь <em>Тед Нельсон</em>, описывая новую концепцию нелинейного чтения с помощью компьютеров.
      </p>
      <h3>Что такое гиперссылка?</h3>
      <p>
        <strong>Гиперссылка</strong> — это элемент гипертекста, который позволяет перейти к другому месту: на страницу, файл или внутри того же документа. По сути, гиперссылка — это практическое воплощение идеи гипертекста.
      </p>
      <p>
        В интернете гиперссылки реализуются с помощью языка <strong>HTML</strong>. Если вы не знакомы с HTML — ничего страшного, сейчас важно просто понять, откуда берутся ссылки.
      </p>

      <p>Вот как выглядит гиперссылка в коде:</p>
      <pre>
        <code>{'<a href="https://www.wikipedia.org/">Перейти на Wikipedia</a>'}</code>
      </pre>
      <p>
        В браузере это отображается как кликабельный текст, например: <a href="https://www.wikipedia.org/" target="_blank" rel="noopener noreferrer">Перейти на Wikipedia</a>.
      </p>

      <h3>Примеры гиперссылок</h3>
      <ul>
        <li><strong>Внешняя ссылка:</strong> <a href="https://google.com" target="_blank" rel="noopener noreferrer">https://google.com</a> — ведёт на другой сайт.</li>
        <li><strong>Внутренняя ссылка:</strong> <a href="/internet">/internet</a> — ведёт на другую страницу того же сайта.</li>
        <li><strong>Якорь:</strong> <a href="#title">#title</a> — ведёт на конкретный фрагмент текущей страницы.</li>
        <li><strong>Email-ссылка:</strong> <a href="mailto:user@example.com">mailto:user@example.com</a> — открывает почтовое приложение с готовым адресом (если оно установлено).</li>
      </ul>

      <h3>Итого</h3>
      <ul>
        <li><strong>Гипертекст</strong> — это способ организации текста через ссылки между его частями.</li>
        <li><strong>Гиперссылка</strong> — это кликабельный элемент гипертекста, который ведёт на другую страницу, часть текста или внешний ресурс.</li>
        <li><strong>HTML</strong> реализует гиперссылки через тег <code>&lt;a href="..."&gt;</code>.</li>
        <li><strong>URL</strong> в гиперссылке указывает точный адрес ресурса, куда будет идти переход.</li>
      </ul>

      <NavButtons
        prev="/internet/Dns"
        next="/internet/ClientAndServer"
      />
    </section>
  )
}
