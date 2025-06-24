import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function DockerSetup() {
  

  return (
    <section className={'topic container'}>
      <h2>Как установить Docker?</h2>

      <h3>Что такое Docker</h3>
      <p>
        Docker — это платформа для создания, доставки и запуска приложений в изолированных контейнерах.
        Контейнеры содержат всё необходимое для работы приложения и запускаются одинаково на любой системе.
      </p>

      <h3>Установка Docker</h3>
      <p>
        Чтобы начать работать с Docker, его нужно установить на ваш компьютер.
        Процесс установки зависит от операционной системы.
      </p>
      <p>
        Для Windows и Mac перейдите на официальный сайт Docker: <a href="https://www.docker.com/get-started" target="_blank" rel="noreferrer">docker.com/get-started</a>,
        скачайте установочный файл и запустите его. Следуйте инструкциям установщика.
      </p>
      <p>
        Для Linux установка обычно происходит через пакетный менеджер. Например, в Ubuntu команда для установки Docker:
      </p>
      <VsCode>
        {`sudo apt update
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker`}
      </VsCode>
      <p>
        После установки Docker запускается как сервис на вашем компьютере.
      </p>

      <h3>Проверка установки Docker через командную строку</h3>
      <p>
        Чтобы убедиться, что Docker установлен и работает, нужно открыть командную строку (cmd в Windows или терминал в Linux/Mac) и выполнить команду:
      </p>
      <VsCode>{`docker --version`}</VsCode>
      <p>
        Эта команда выведет установленную версию Docker. Если вы видите информацию о версии, значит Docker установлен и доступен.
      </p>
      <p>
        Также можно проверить, что Docker запущен и готов к работе, выполнив:
      </p>
      <VsCode>{`docker run hello-world`}</VsCode>
      <p>
        Эта команда загрузит и запустит тестовый контейнер, который выведет приветственное сообщение, подтверждающее правильную работу Docker.
      </p>

      <h3>Итого</h3>
      <ul>
        <li>Docker — платформа для контейнеризации приложений.</li>
        <li>Устанавливается через официальный сайт или пакетный менеджер, в зависимости от ОС.</li>
        <li>Проверить установку можно командой <code>docker --version</code>.</li>
        <li>Запуск тестового контейнера <code>docker run hello-world</code> подтверждает работоспособность.</li>
      </ul>
      <NavButtons prev={'/Deploy/DockerScheme'} next={'/Deploy/DockerCommands'} />
    </section>
  )
}
