import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";
import Test from "../../../components/Test/Test.tsx";


export default function Dockerfile() {
  

  return (
    <section className={'topic container'}>
      <h2>Dockerfile</h2>

      <h3>Что такое Dockerfile</h3>
      <p>
        Dockerfile — это текстовый файл с набором инструкций, по которым Docker строит образ контейнера.
        Он описывает, как собрать окружение и приложение, какие файлы скопировать, какие команды выполнить.
      </p>

      <h3>Как создать Dockerfile в проекте</h3>
      <p>
        Обычно Dockerfile создаётся в корне проекта. Это просто файл с именем <code>Dockerfile</code> (без расширения).
        В нем последовательно записываются инструкции, которые Docker будет выполнять во время сборки образа.
      </p>

      <h3>Основные инструкции Dockerfile</h3>
      <ul>
        <li>
          <strong>FROM</strong> — базовый образ, на котором строится ваш образ (например, <code>FROM node</code>). Когда Docker встречают эту инструкцию,
          он сначала проверяет, есть ли нужный базовый образ локально на вашем компьютере. Если образ найден — Docker использует его сразу, без скачивания.

          Если такого образа локально нет, Docker автоматически обращается к Docker Hub (это публичный реестр образов, похожий на GitHub, но для контейнеров) и скачивает его оттуда.

          После этого скачанный образ сохраняется локально, чтобы при следующих сборках использовать его повторно, без загрузки. Это помогает экономить время и трафик.
        </li>
        <li>
          <strong>WORKDIR</strong> — рабочая директория внутри контейнера, куда копируются файлы и выполняются команды. Если такой папки нет, Docker создаст её автоматически. Все последующие команды в Dockerfile будут работать относительно этой папки. Например, <code>WORKDIR /app</code> переключает текущую директорию на <code>/app</code>.
        </li>
        <li>
          <strong>COPY</strong> — копирует файлы из вашей локальной файловой системы в контейнер. Первая точка — путь в локальной системе относительно места расположения Dockerfile (например, текущая папка проекта). Вторая точка — путь внутри контейнера, куда копируются файлы. Пример: <code>COPY . /app</code> копирует всё содержимое текущей папки в папку <code>/app</code> внутри контейнера.
        </li>
        <li>
          <strong>RUN</strong> — выполняет команды в контейнере при сборке образа. Используется для установки зависимостей, компиляции кода или любых других действий, которые должны быть сделаны один раз перед запуском контейнера. Например, <code>RUN npm install</code> устанавливает npm-зависимости.
        </li>
        <li>
          <strong>CMD</strong> — команда, которая запускается при старте контейнера. Это команда по умолчанию, которую можно переопределить при запуске контейнера. Например, <code>CMD ["node", "app.js"]</code> запускает приложение с помощью Node.js.
        </li>
        <li>
          <strong>EXPOSE</strong> — объявляет порт, который будет доступен снаружи контейнера. Это не проброс порта, а просто указание, какой порт слушает приложение внутри контейнера. Для реального доступа к порту при запуске контейнера используется опция <code>-p</code>, например <code>docker run -p 3000:3000</code>.
        </li>
        <li>
          <strong>ENTRYPOINT</strong> — задаёт исполняемую команду контейнера, которая всегда будет запускаться. Она задаёт основной процесс контейнера и обычно не меняется при запуске. CMD в этом случае служит параметрами для ENTRYPOINT. Например: <VsCode>{`ENTRYPOINT ["top", "-b"]`}</VsCode> всегда запускает команду <code>top -b</code> внутри контейнера.
        </li>
      </ul>

      <h3>Пример простого Dockerfile для Node.js приложения</h3>
      <VsCode>
        {`FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]`}
      </VsCode>

      <h3>Как сделать build образа из Dockerfile</h3>
      <p>
        Для сборки образа используется команда <code>docker build</code>. Нужно находиться в папке с Dockerfile или указать путь.
      </p>
      <p>Пример:</p>
      <VsCode>
        {`docker build -t my-node-app .`}
      </VsCode>
      <p>Здесь:</p>
      <ul>
        <li><code>-t my-node-app</code> — задаёт тег (имя) образа.</li>
        <li><code>.</code> — текущая папка, где находится Dockerfile и проект.
        </li>
      </ul>

      <h3>Что происходит при build</h3>
      <p>
        Docker последовательно выполняет инструкции из Dockerfile. Для каждой создаётся слой образа. В итоге получается образ — «фотография» вашего приложения с нужным окружением.
      </p>

      <h3>Особенности</h3>
      <ul>
        <li>Каждая команда создаёт слой — это влияет на размер образа и время сборки.</li>
        <li>Рекомендуется минимизировать количество слоёв и копировать только нужные файлы.</li>
        <li>Порядок команд важен: если часто меняются файлы проекта, лучше сначала копировать package.json и устанавливать зависимости, чтобы кэширование работало эффективнее.</li>
        <li>Dockerfile должен быть максимально понятным и предсказуемым, чтобы сборка была воспроизводимой.</li>
      </ul>

      <h2>Итого</h2>
      <ul>
        <li>Dockerfile — это скрипт для автоматической сборки образа Docker.</li>
        <li>Создаётся в корне проекта и содержит инструкции типа FROM, COPY, RUN, CMD.</li>
        <li>Сборка образа — команда <code>docker build -t имя_образа .</code>.
        </li>
        <li>Образ содержит всё необходимое окружение и код приложения для запуска в контейнере.</li>
        <li>Важно оптимизировать Dockerfile для уменьшения размера и ускорения сборки.</li>
      </ul>
      <NavButtons
        prev={'/Deploy/DockerCommands'}
        next={'/Deploy/GitIntro'}
      />
      <Test
        allTasks={[
          {
            question: "Что такое Docker?",
            variants: [
              "Платформа для контейнеризации приложений",
              "Виртуальная машина для запуска ОС",
              "Система управления базами данных",
              "Язык программирования"
            ],
            explanations: [
              "Docker — это платформа, позволяющая создавать, запускать и управлять контейнерами.",
              "Виртуальная машина — это другое ПО, Docker использует контейнеры, которые легче и быстрее.",
              "Docker не связан с базами данных напрямую.",
              "Docker — не язык программирования, а инструмент для контейнеризации."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Что такое контейнер в Docker?",
            variants: [
              "Образ Docker",
              "Виртуальная машина с полным ядром ОС",
              "Изолированное окружение для запуска приложений",
              "Сервис в облаке"
            ],
            explanations: [
              "Образ — это шаблон для создания контейнеров, а не сам контейнер.",
              "Контейнеры используют ядро хоста, в отличие от виртуальных машин.",
              "Контейнер — это изолированная среда, где работает приложение с необходимыми зависимостями.",
              "Сервис в облаке — это не определение контейнера."
            ],
            correct: 2,
            isCode: false
          },
          {
            question: "Какая команда создаёт новый Docker образ из Dockerfile?",
            variants: [
              "docker create .",
              "docker build .",
              "docker run .",
              "docker pull ."
            ],
            explanations: [
              "docker create создаёт контейнер, но не образ.",
              "docker build создаёт образ из Dockerfile в текущей директории.",
              "docker run запускает контейнер из образа, не создаёт образ.",
              "docker pull скачивает образ из удалённого репозитория."
            ],
            correct: 1,
            isCode: false
          },
          {
            question: "Что делает команда docker run -p 8080:80 myimage?",
            variants: [
              "Удаляет контейнер с ID 8080",
              "Запускает контейнер из myimage, пробрасывая локальный порт 8080 на порт 80 контейнера",
              "Создаёт образ myimage с портом 8080",
              "Запускает контейнер и открывает порты 8080 и 80"
            ],
            explanations: [
              "Команда не удаляет контейнеры.",
              "Параметр -p пробрасывает порт 8080 локальной машины в порт 80 внутри контейнера.",
              "docker run не создаёт образы, а запускает контейнеры.",
              "Порты пробрасываются по одному, тут 8080:80 означает локальный:контейнер."
            ],
            correct: 1,
            isCode: false
          },
          {
            question: "Что обозначает инструкция FROM в Dockerfile?",
            variants: [
              "Базовый образ, от которого строится новый образ",
              "Команда запуска контейнера",
              "Установка рабочих директорий",
              "Объявление портов"
            ],
            explanations: [
              "FROM задаёт исходный образ, на базе которого создаётся новый.",
              "Запуск контейнера происходит через docker run, а не FROM.",
              "Рабочая директория задаётся через WORKDIR.",
              "Порты объявляются через EXPOSE."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Что делает команда RUN в Dockerfile?",
            variants: [
              "Выполняет команды при сборке образа",
              "Запускает контейнер",
              "Копирует файлы в контейнер",
              "Объявляет порты"
            ],
            explanations: [
              "RUN выполняет команды внутри образа во время сборки (например, установка пакетов).",
              "Запуск контейнера происходит после сборки через docker run.",
              "Копирование файлов — задача COPY.",
              "Объявление портов — задача EXPOSE."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "В Dockerfile, что делает инструкция COPY . /app?",
            variants: [
              "Копирует текущую директорию на локальной машине в /app внутри контейнера",
              "Копирует /app с контейнера на локальную машину",
              "Удаляет папку /app",
              "Запускает приложение из /app"
            ],
            explanations: [
              "Первая точка — текущая локальная директория, вторая — путь в контейнере, куда копируются файлы.",
              "COPY копирует файлы в контейнер, а не из него.",
              "COPY не удаляет ничего.",
              "COPY не запускает приложения."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Какой порт объявляется инструкцией EXPOSE в Dockerfile?",
            variants: [
              "Порт внутри контейнера, который будет доступен извне",
              "Порт локальной машины",
              "Порт для запуска Docker демона",
              "Порт для подключения к базе данных"
            ],
            explanations: [
              "EXPOSE сообщает, какой порт контейнер слушает внутри себя, чтобы пробросить его наружу.",
              "Локальный порт пробрасывается через docker run с -p.",
              "Порт Docker демона задаётся отдельно и не относится к EXPOSE.",
              "EXPOSE не привязан к конкретным приложениям, например базам данных."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Как остановить все запущенные контейнеры Docker одной командой?",
            variants: [
              "docker stop $(docker ps -q)",
              "docker rm -f $(docker ps -aq)",
              "docker kill all",
              "docker pause all"
            ],
            explanations: [
              "docker stop $(docker ps -q) останавливает все запущенные контейнеры, перечисляя их ID.",
              "docker rm удаляет контейнеры, а не останавливает.",
              "Команда docker kill all не существует.",
              "docker pause приостанавливает контейнеры, не останавливает."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Что делает команда docker rmi IMAGE_ID?",
            variants: [
              "Удаляет образ Docker с указанным IMAGE_ID",
              "Запускает контейнер по IMAGE_ID",
              "Останавливает контейнер по IMAGE_ID",
              "Создаёт новый образ"
            ],
            explanations: [
              "docker rmi удаляет образ по его ID или имени.",
              "Запуск контейнеров происходит через docker run.",
              "Остановка контейнеров — через docker stop.",
              "Создание образа — через docker build."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Для чего нужен файл .dockerignore?",
            variants: [
              "Чтобы исключить файлы и папки из контекста сборки Docker",
              "Чтобы указать порты для контейнера",
              "Чтобы задать рабочую директорию в контейнере",
              "Чтобы автоматически запускать контейнер"
            ],
            explanations: [
              ".dockerignore предотвращает копирование ненужных файлов в образ, ускоряя сборку.",
              "Порты задаются через EXPOSE и docker run -p.",
              "Рабочая директория задаётся в Dockerfile через WORKDIR.",
              "Автоматический запуск — через команды docker run или ENTRYPOINT."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Что обозначает команда docker pull?",
            variants: [
              "Скачивает образ из удалённого репозитория",
              "Запускает контейнер",
              "Создаёт образ из Dockerfile",
              "Удаляет образ"
            ],
            explanations: [
              "docker pull скачивает образ с Docker Hub или другого репозитория.",
              "Запуск контейнера происходит через docker run.",
              "Создание образа — через docker build.",
              "Удаление образа — через docker rmi."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Что означает команда docker ps -a?",
            variants: [
              "Показывает список всех контейнеров, включая остановленные",
              "Показывает только запущенные контейнеры",
              "Удаляет все контейнеры",
              "Показывает образы Docker"
            ],
            explanations: [
              "Опция -a расширяет список, показывая все контейнеры, не только работающие.",
              "По умолчанию показываются только запущенные контейнеры без -a.",
              "docker ps не удаляет контейнеры.",
              "docker ps показывает контейнеры, а не образы."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Что делает инструкция CMD в Dockerfile?",
            variants: [
              "Задаёт команду, которая будет выполнена при запуске контейнера",
              "Копирует файлы в контейнер",
              "Определяет базовый образ",
              "Объявляет порты"
            ],
            explanations: [
              "CMD определяет команду по умолчанию, которую контейнер выполнит при старте.",
              "Копирование файлов — задача COPY.",
              "Базовый образ задаётся в FROM.",
              "Порты объявляются через EXPOSE."
            ],
            correct: 0,
            isCode: false
          },
          {
            question: "Как создать и запустить контейнер с пробросом порта 5000 локального на 80 контейнера?",
            variants: [
              "docker run -p 5000:80 image_name",
              "docker build -p 80:5000 image_name",
              "docker create -p 80:5000 image_name",
              "docker start -p 5000:80 image_name"
            ],
            explanations: [
              "docker run с флагом -p пробрасывает локальный порт 5000 на порт 80 контейнера и запускает его.",
              "docker build используется для создания образа, не запускает контейнер.",
              "docker create создаёт контейнер, но не запускает и не пробрасывает порты.",
              "docker start запускает уже созданный контейнер, но не управляет портами."
            ],
            correct: 0,
            isCode: false
          }
        ]}
      />
      <NavButtons
        prev={'/Deploy/DockerCommands'}
        next={'/Deploy/GitIntro'}
      />
    </section>
  )
}