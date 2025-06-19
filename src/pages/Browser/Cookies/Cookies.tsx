import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

type CookiesProps = {}
export default function Cookies(props: CookiesProps) {
  const {} = props

  return (
    <section className={'topic container'}>
      <h2>Что такое Cookies?</h2>
      <p>
        <strong>Cookies</strong> — это небольшие текстовые файлы, которые веб-сайт сохраняет в браузере пользователя. Они служат для хранения информации между посещениями и запросами, позволяя сайтам «запомнить» вас и ваши действия.
      </p>
      <h3>Как используются Cookies в интернете?</h3>
      <ul>
        <li><strong>Авторизация и сессии:</strong> cookies помогают сохранить факт входа на сайт, чтобы не нужно было вводить пароль каждый раз.</li>
        <li><strong>Настройки и предпочтения:</strong> например, выбранный язык или тема оформления.</li>
        <li><strong>Аналитика и реклама:</strong> cookies отслеживают ваше поведение на разных сайтах, чтобы показывать персонализированную рекламу и собирать статистику.</li>
      </ul>
      <h3>Почему cookies могут быть небезопасны?</h3>
      <p>
        Несмотря на удобство, cookies имеют ряд ограничений и рисков:
      </p>
      <ul>
        <li><strong>Конфиденциальность:</strong> сторонние рекламодатели могут использовать cookies для отслеживания вас на разных сайтах без вашего ведома (т.н. «трекеры»).</li>
        <li><strong>Уязвимости:</strong> если cookies неправильно настроены, злоумышленники могут перехватить их и получить доступ к вашим сессиям (атаки типа «перехват cookie»).</li>
      </ul>
      <h3>Как делают cookies безопаснее?</h3>

      <p>Чтобы защитить cookies от перехвата или злоупотребления, можно задать специальные флаги при их установке:</p>

      <h4>1. HttpOnly</h4>
      <p>
        Такой cookie <strong>недоступен из JavaScript</strong> — его нельзя прочитать через <code>document.cookie</code>.
        Это помогает защититься от XSS-атак, при которых вредоносный скрипт пытается украсть токены.
      </p>
      <pre><code>Set-Cookie: token=abc123; HttpOnly</code></pre>

      <h4>2. Secure</h4>
      <p>
        Cookie с флагом <strong>Secure</strong> передаётся только по HTTPS, что защищает данные от перехвата в открытых сетях.
      </p>
      <pre><code>Set-Cookie: token=abc123; Secure</code></pre>

      <h4>3. SameSite</h4>
      <p>
        Этот флаг ограничивает ситуации, в которых браузер отправляет cookie вместе с запросами, происходящими с другого сайта (кросс-доменные запросы). Это помогает защититься от <strong>CSRF-атак</strong>.
      </p>
      <ul>
        <li><strong>Strict:</strong> cookie не отправляется при переходе с другого сайта вообще.</li>
        <li><strong>Lax:</strong> отправляется при переходе по ссылке или навигации.</li>
        <li><strong>None:</strong> отправляется всегда, но требует <code>Secure</code>.</li>
      </ul>
      <pre><code>Set-Cookie: token=abc123; SameSite=Strict</code></pre>

      <h3>Где указывать эти флаги?</h3>
      <p>
        Такие флаги указываются <strong>на сервере</strong> через заголовок <code>Set-Cookie</code>. Например:
      </p>
      <pre><code>Set-Cookie: sessionId=xyz789; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=3600</code></pre>

      <p>
        Если устанавливать cookie через JavaScript (на клиенте), то <strong>HttpOnly нельзя использовать</strong>, а <strong>Secure</strong> и <strong>SameSite</strong> будут работать только в современных браузерах:
      </p>
      <pre><code>document.cookie = "username=Alex; path=/; max-age=3600; secure; samesite=strict";</code></pre>


      <h2>Итого</h2>
      <ul>
        <li><strong>Cookies</strong> — это способ сохранить информацию между визитами пользователя.</li>
        <li>Широко применяются для авторизации, аналитики и персонализации интерфейса.</li>
        <li>Могут быть уязвимы без должных настроек безопасности.</li>
        <li>Для защиты используются флаги: <code>HttpOnly</code>, <code>Secure</code> и <code>SameSite</code>.</li>
        <li>Браузеры и законы дают пользователю контроль над использованием cookies.</li>
      </ul>
      <NavButtons prev={'/browser/Architecture'} next={'/browser/LocalAndSession'} />
    </section>
  )
}
