import old from '../../../images/HtmlImages/Structure/old.jpg'
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function Structure() {
  

  return (
    <section className={'topic container'}>
      <h2>Структура HTML-документа</h2>

      <h3>Что такое <code>&lt;!DOCTYPE&gt;</code> и зачем он нужен?</h3>
      <p>
        <code>&lt;!DOCTYPE html&gt;</code> — это первая строка в HTML-коде, которая <strong>не является HTML-тегом</strong>. Она сообщает браузеру, что перед ним документ в формате <strong>HTML5</strong> (5 — последняя версия HTML, выпущена в 2014 году).
      </p>
      <p>
        Без этой строки браузеры могут перейти в так называемый <em>quirks mode</em> — "режим совместимости", в котором страница может отображаться нестандартно, как в старых браузерах 90-х. Это как если бы сайт оделся в винтажную одежду и решил притвориться сайтом 1997 года.
      </p>
      <img
        src={old}
        alt=""
        width=""
        height=""
        loading="lazy"
      />
      <p>
        Раньше (до HTML5) объявление <code>DOCTYPE</code> выглядело страшно:
      </p>

      <pre>
    {`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
  "http://www.w3.org/TR/html4/loose.dtd">`}
  </pre>

      <p>
        Сейчас всё просто:
      </p>

      <pre>
    {`<!DOCTYPE html>`}
  </pre>

      <p>
        Это стало стандартом, и достаточно одной строки, чтобы браузер понял: "Окей, работаем по современным правилам".
      </p>

      <h3><code>&lt;html&gt;</code> — корень документа</h3>
      <p>
        Всё содержимое страницы должно находиться внутри тега <code>&lt;html&gt;</code>. Это как основная коробка, в которую упакован весь документ.
      </p>

      <h3><code>&lt;head&gt;</code> — голова страницы</h3>
      <p>
        Содержит <strong>не то, что видит пользователь</strong>, а то, что нужно браузеру, поисковикам и другим системам. Это как инструкция к сериалу: кто в ролях, где происходит действие, сколько серий и т. д.
      </p>

      <p>Что обычно находится внутри <code>&lt;head&gt;</code>:</p>
      <ul>
        <li><code>&lt;meta&gt;</code> — хранится краткое описание страницы (подробнее про этот тег в следующем уроке).</li>
        <li><code>&lt;title&gt;</code> — заголовок страницы, который виден во вкладке браузера.</li>
        <li><code>&lt;link&gt;</code> — подключение CSS-стилей или иконок сайта.</li>
        <li><code>&lt;script&gt;</code> — подключение JavaScript.</li>
      </ul>
      <h3><code>&lt;body&gt;</code> — тело страницы</h3>
      <p>
        Всё, что пользователь видит на странице: заголовки, текст, изображения, кнопки и т.д. — находится внутри тега <code>&lt;body&gt;</code>. Это как сцена в театре, а <code>&lt;head&gt;</code> — закулисье.
      </p>

      <h2>Итого</h2>
      <ul>
        <li><strong><code>&lt;!DOCTYPE html&gt;</code></strong> говорит браузеру использовать HTML5 и современную разметку.</li>
        <li><strong><code>&lt;html&gt;</code></strong> — корень документа, всё находится внутри него.</li>
        <li><strong><code>&lt;head&gt;</code></strong> содержит метаинформацию, заголовок и подключения.</li>
        <li><strong><code>&lt;body&gt;</code></strong> — всё визуальное, что пользователь видит на странице.</li>
      </ul>
      <NavButtons prev={'/html/Intro'} next={'/html/Meta'} />
    </section>
  )
}