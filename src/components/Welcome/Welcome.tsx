import './Welcome.scss'
import {Link} from "react-router-dom";
type WelcomeProps = {}
export default function Welcome(props: WelcomeProps) {
  const {} = props

  return (
    <section
      className="welcome container"
    >
      <h2 className={'welcome__title'}>Теория для фронтендера</h2>
      <p className={'welcome__description'}>
        Сайт о фундаментальных принципах веб-разработки. Не справочник по свойствам, а объяснение ключевых концепций — от работы интернета до особенностей JavaScript. Для тех, кто хочет не просто использовать технологии, а понимать их.
      </p>
      <h3 className={'welcome__question'}>
        С чего же мне начать?
      </h3>
      <p className={'welcome__answer'}>
        Если вы совсем новичок, можете начать с изучения темы <Link to={'/internet'}>Интернет</Link> — это даст вам общее понимание, как устроена работа сети на базовом уровне. <br />
        Далее переходите к разделам: <Link to={'/browser'}>Браузер</Link>, <Link to="/html">HTML</Link>, <Link to="/css">CSS</Link> и <Link to="/javascript">JavaScript</Link>, чтобы узнать, из чего состоит любая веб-страница и как она работает. <br />
      </p>
{/*      <h3>Как оптимизировать рендеринг?</h3>*/}
{/*      <p>*/}
{/*        Чтобы страницы работали быстро и плавно, важно по возможности <strong>снизить количество и "стоимость" Reflow и Repaint</strong>. Вот ключевые приёмы:*/}
{/*      </p>*/}

{/*      <ol>*/}
{/*        <li>*/}
{/*          <strong>Изменяйте стили пакетно</strong><br />*/}
{/*          Вместо того чтобы менять по одному стилю через <code>element.style</code>, применяйте классы CSS:*/}
{/*          <br />*/}
{/*          ❌ Плохо:*/}
{/*          <pre><code>el.style.width = '200px'; el.style.height = '100px';</code></pre>*/}
{/*          ✅ Лучше:*/}
{/*          <pre><code>el.classList.add('resized')</code></pre>*/}
{/*          <p>Так браузер сделает один Reflow вместо двух.</p>*/}
{/*        </li>*/}

{/*        <li>*/}
{/*          <strong>Избегайте "принудительного Reflow"</strong><br />*/}
{/*          Некоторые действия заставляют браузер тут же пересчитать layout. Например:*/}
{/*          <code>offsetHeight</code>, <code>getBoundingClientRect()</code>, <code>scrollTop</code>.<br />*/}
{/*          Если вы вызываете их между изменениями стилей, это может «сломать» оптимизации браузера:*/}
{/*          <br />*/}
{/*          ❌ Плохо:*/}
{/*          <pre><code>el.style.width = '500px';*/}
{/*console.log(el.offsetHeight);</code></pre>*/}
{/*          ✅ Лучше:*/}
{/*          <pre><code>console.log(el.offsetHeight);*/}
{/*el.style.width = '500px';</code></pre>*/}
{/*        </li>*/}

{/*        <li>*/}
{/*          <strong>Работайте с DOM реже</strong><br />*/}
{/*          Частые операции над DOM (добавление элементов, вставки и т.п.) — это нагрузка. Лучше:*/}
{/*          <ul>*/}
{/*            <li>Собирать изменения в <code>DocumentFragment</code></li>*/}
{/*            <li>Вставлять или удалять блоки оптом, а не по одному</li>*/}
{/*            <li>Использовать <code>display: none</code> при массовых изменениях, а потом включать снова</li>*/}
{/*          </ul>*/}
{/*        </li>*/}

{/*        <li>*/}
{/*          <strong>Используйте аппаратное ускорение</strong><br />*/}
{/*          Для анимаций и трансформаций лучше использовать свойства, которые не вызывают Reflow:*/}
{/*          <ul>*/}
{/*            <li><code>transform</code></li>*/}
{/*            <li><code>opacity</code></li>*/}
{/*          </ul>*/}
{/*          Пример:*/}
{/*          <br />*/}
{/*          ✅ Лучше анимировать:*/}
{/*          <pre><code>el.style.transform = 'translateX(100px)'</code></pre>*/}
{/*          ❌ Чем:*/}
{/*          <pre><code>el.style.left = '100px'</code></pre>*/}
{/*          <p>*/}
{/*            Второй вариант запускает Reflow, а первый — только Repaint, и то с ускорением через GPU.*/}
{/*          </p>*/}
{/*        </li>*/}

{/*        <li>*/}
{/*          <strong>Дебаунс/троттлинг</strong> в событиях<br />*/}
{/*          Если вы обрабатываете, например, <code>scroll</code> или <code>resize</code> — не запускайте тяжёлые вычисления на каждое событие. Используйте <em>debounce</em> или <em>throttle</em>, чтобы ограничить частоту реакций.*/}
{/*        </li>*/}
{/*      </ol>*/}

{/*      <p>*/}
{/*        Все эти меры помогают сократить нагрузку на браузер, сделать сайт более отзывчивым и уменьшить расход энергии на мобильных устройствах.*/}
{/*      </p>*/}

    </section>
  )
}