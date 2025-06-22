import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

type SetupProps = {}
export default function Setup(props: SetupProps) {
  const {} = props

  return (
    <section className={'topic container'}>
      <h2>Установка и настройка Node.js</h2>

      <p>
        Чтобы начать работать с Node.js, сначала необходимо его установить. Node.js включает в себя и сам движок для запуска JavaScript вне браузера, и менеджер пакетов <code>npm</code>, который используется для установки библиотек и управления зависимостями.
      </p>

      <h3>Шаг 1. Установка Node.js</h3>
      <p>
        Перейдите на официальный сайт <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">https://nodejs.org/</a> и скачайте установочный файл для вашей операционной системы (Windows, macOS, Linux).
      </p>
      <p>
        Рекомендуется выбрать <strong>LTS (Long Term Support)</strong> версию — она стабильнее и подходит для большинства проектов.
      </p>

      <h3>Шаг 2. Проверка установки</h3>
      <p>После установки откройте терминал (командную строку) и выполните команды:</p>
      <pre>
        <code>
          node -v
        </code>
      </pre>
      <p>Эта команда выведет установленную версию Node.js, например <code>v22.16.0</code>.</p>
      <pre>
        <code>
          npm -v
        </code>
      </pre>
      <p>Эта команда покажет версию менеджера пакетов npm, который устанавливается вместе с Node.js.</p>

      <h3>Шаг 3. Основы использования npm</h3>
      <p>npm — это менеджер пакетов, с помощью которого можно устанавливать сторонние библиотеки и управлять зависимостями вашего проекта.</p>
      <p>Основные команды:</p>
      <ul>
        <li><code>npm init</code> — инициализация нового проекта. Создаёт файл <code>package.json</code> с основными настройками.</li>
        <li><code>npm install &lt;package&gt;</code> — установка пакета (например, <code>npm install express</code>).</li>
        <li><code>npm install</code> — установка всех пакетов, перечисленных в <code>package.json</code>.</li>
        <li><code>npm uninstall &lt;package&gt;</code> — удаление пакета из проекта.</li>
        <li><code>npm run &lt;script&gt;</code> — запуск скрипта, прописанного в разделе <code>scripts</code> файла <code>package.json</code>.</li>
      </ul>

      <h3>Советы</h3>
      <ul>
        <li>Лучше использовать <code>npm init -y</code> для быстрой инициализации проекта с настройками по умолчанию.</li>
        <li>Если в проекте есть <code>package.json</code> и <code>package-lock.json</code>, просто запускайте <code>npm install</code>, чтобы установить все зависимости.</li>
        <li>Для запуска JavaScript-файлов из командной строки используйте: <code>node имя_файла.js</code>.</li>
      </ul>

      <p>
        Теперь вы готовы писать серверный код на Node.js и использовать богатую экосистему npm!
      </p>
      <NavButtons prev={'/nodeJs/Intro'} next={'/nodeJs/Architecture'} />
    </section>
  )
}
