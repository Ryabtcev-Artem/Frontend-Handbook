import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function DockerCommands() {
  

  return (
    <section className={'topic container'}>
      <h2>Базовые команды Docker</h2>

      <h3>Введение</h3>
      <p>
        Docker — мощный инструмент, и команд для работы с ним очень много. Здесь мы рассмотрим только самые основные, которые помогут начать использовать Docker эффективно.
      </p>

      <h3>1. docker --version</h3>
      <p>
        Показывает установленную версию Docker. Быстрая проверка, что Docker доступен в системе.
      </p>
      <VsCode>{`docker --version`}</VsCode>

      <h3>2. docker pull &lt;image&gt;</h3>
      <p>
        Скачивает образ из Docker Hub или другого репозитория. Образы — это шаблоны для запуска контейнеров.
      </p>
      <VsCode>{`docker pull nginx`}</VsCode>

      <h3>3. docker run &lt;image&gt;</h3>
      <p>
        Запускает контейнер на основе указанного образа. Например, можно быстро запустить веб-сервер nginx.
      </p>
      <VsCode>{`docker run nginx`}</VsCode>

      <h3>4. docker ps</h3>
      <p>
        Показывает список запущенных контейнеров.
      </p>
      <VsCode>{`docker ps`}</VsCode>

      <h3>5. docker ps -a</h3>
      <p>
        Показывает все контейнеры — и запущенные, и остановленные.
      </p>
      <VsCode>{`docker ps -a`}</VsCode>

      <h3>6. docker stop &lt;container_id&gt;</h3>
      <p>
        Останавливает работающий контейнер по его ID или имени.
      </p>
      <VsCode>{`docker stop 123abc`}</VsCode>

      <h3>7. docker rm &lt;container_id&gt;</h3>
      <p>
        Удаляет остановленный контейнер. Нельзя удалить контейнер, если он запущен.
      </p>
      <VsCode>{`docker rm 123abc`}</VsCode>

      <h3>8. docker images</h3>
      <p>
        Показывает список всех загруженных образов на вашем компьютере.
      </p>
      <VsCode>{`docker images`}</VsCode>

      <h3>9. docker rmi &lt;image_id&gt;</h3>
      <p>
        Удаляет образ по ID или имени.
      </p>
      <VsCode>{`docker rmi nginx`}</VsCode>

      <h3>Итого</h3>
      <ul>
        <li>Команд Docker много, но основные позволяют запускать, останавливать, удалять контейнеры и работать с образами.</li>
        <li>Сначала полезно освоить команды: <code>docker run</code>, <code>docker ps</code>, <code>docker stop</code>, <code>docker rm</code>, <code>docker images</code>.</li>
        <li>Понимание базовых команд — основа для эффективной работы с Docker.</li>
      </ul>
      <NavButtons prev={'/Deploy/DockerSetup'} next={'/Deploy/Dockerfile'} />
    </section>
  )
}
