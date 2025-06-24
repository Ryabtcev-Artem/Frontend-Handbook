import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function Storage() {
  

  return (
    <section className={'topic container'}>
      <h2>Storage: хранение данных в браузере</h2>

      <h3>1. localStorage</h3>
      <code>localStorage</code> — это встроенное хранилище, сохраняющее данные между сессиями, пока не будет очищено явно пользователем или скриптом.

      <ul>
        <li>Объём: до 5 МБ</li>
        <li>API синхронный</li>
        <li>Поддерживает только строки</li>
      </ul>

      <VsCode>{`// Сохранение
localStorage.setItem('user', 'Artem');

// Чтение
const user = localStorage.getItem('user');

// Удаление
localStorage.removeItem('user');

// Очистка всего хранилища
localStorage.clear();`}</VsCode>

      <h3>2. sessionStorage</h3>
      <p>
        <code>sessionStorage</code> сохраняет данные только на время одной вкладки. После закрытия вкладки данные удаляются.
      </p>

      <ul>
        <li>API аналогичен localStorage</li>
        <li>Объём примерно 5 МБ</li>
      </ul>

      <h4>Когда использовать sessionStorage:</h4>
      <ul>
        <li>Для хранения временных данных, чувствительных к вкладке (например, промежуточные ответы формы).</li>
      </ul>

      <h3>3. Cookies</h3>
      <code>document.cookie</code> позволяет работать с cookie — небольшими строками, отправляемыми на сервер при каждом HTTP-запросе.

      <ul>
        <li>Макс. объём: ~4 КБ</li>
        <li>Могут иметь срок жизни (expires / max-age)</li>
        <li>Могут быть доступны только серверу (HttpOnly)</li>
        <li>Могут быть защищены (Secure, SameSite)</li>
      </ul>

      <VsCode>{`// Установка cookie
document.cookie = "username=Artem; max-age=3600";

// Получение всех cookie
console.log(document.cookie); // username=Artem`}</VsCode>
      <p>
        ⚠️ Cookie — это одна строка. Для чтения/парсинга приходится вручную или через библиотеку.
      </p>

      <h2>Итого</h2>
      <ul>
        <li><code>localStorage</code> — для длительного хранения клиентских данных.</li>
        <li><code>sessionStorage</code> — для данных, которые не должны пережить вкладку.</li>
        <li><code>cookies</code> — для авторизации, трекинга, передачи данных на сервер.</li>
      </ul>
      <NavButtons prev={'/js/Classes'} next={'/js/MutationObserver'} />
    </section>
  )
}