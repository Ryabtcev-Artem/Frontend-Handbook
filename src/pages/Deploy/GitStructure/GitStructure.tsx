import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function GitCommands() {
  

  return (
    <section className="topic container">
      <h2>Структура Git-проекта и основные понятия</h2>
      <p>
        В Git проекте есть несколько ключевых элементов:
      </p>
      <ul>
        <li><strong>Репозиторий</strong> — папка с проектом, где Git хранит всю историю изменений.</li>
        <li><strong>Ветки (branches)</strong> — независимые линии разработки, позволяющие работать над разными функциями параллельно.</li>
        <li><strong>Коммиты (commits)</strong> — зафиксированные изменения в проекте с описанием.</li>
        <li><strong>Удалённый репозиторий (remote)</strong> — копия вашего репозитория в облаке (GitHub, GitLab и т.д.) для совместной работы.</li>
      </ul>

      <h3>Ветки и их роль</h3>
      <p>
        Основная ветка в большинстве проектов — <code>main</code> или <code>master</code>. Для разработки новых функций или исправления багов создают отдельные ветки, например, <code>feature/login</code> или <code>bugfix/navbar</code>.
      </p>
      <p>Это позволяет параллельно работать над разными частями проекта без конфликтов.</p>

      <h3>Пример: создание и переключение ветки</h3>
      <VsCode>{`// Создать новую ветку и перейти на неё
git checkout -b feature/login

// Проверить текущую ветку
git branch`}</VsCode>

      <h3>Pull и merge</h3>
      <p>
        Когда работа над веткой закончена, её нужно слить с основной (например, main). Для этого используется команда <code>merge</code>. Чтобы получить актуальные изменения из удалённого репозитория — используют <code>git pull</code>.
      </p>

      <h3>Пример: обновление и слияние ветки</h3>
      <VsCode>{`// Перейти на основную ветку
git checkout main

// Обновить её из удалённого репозитория
git pull origin main

// Слить в main ветку свою feature-ветку
git merge feature/login

// Отправить обновлённую ветку main в удалённый репозиторий
git push origin main`}</VsCode>

      <h3>Пример структуры проекта (Node.js backend + React frontend)</h3>
      <p>В реальном проекте могут быть разные папки для backend и frontend. Например:</p>
      <VsCode>{`my-project/
├── backend/        // Node.js сервер
│   ├── app.js
│   ├── package.json
│   └── routes/
└── frontend/       // React приложение
    ├── src/
    ├── package.json
    └── public/`}</VsCode>

      <p>Вы можете вести ветки, которые касаются только фронтенда или бэкенда, например <code>feature/frontend-ui</code> или <code>feature/backend-api</code>, и потом сливать их с основной веткой после проверки.</p>
      <NavButtons prev={'/Deploy/GitIntro'} next={'/Deploy/GitCommands'} />
    </section>
  )
}
