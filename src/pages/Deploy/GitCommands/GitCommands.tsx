import VsCode from "../../../components/VsCode/VsCode.tsx";
import NavButtons from "../../../components/NavButtons/NavButtons.tsx";

export default function GitCommands() {
  

  return (
    <section className="topic container">
      <h2>Основные команды Git для разработки</h2>

      <h3>1. git init</h3>
      <p>Инициализация нового локального Git-репозитория в текущей папке.</p>
      <p>Создаёт скрытую папку <code>.git</code>, где хранится вся история и данные Git.</p>
      <VsCode>{`git init`}</VsCode>

      <h3>2. git clone &lt;url&gt;</h3>
      <p>Клонирование (скачивание) удалённого репозитория на ваш компьютер.</p>
      <p>Скопирует весь проект и историю изменений.</p>
      <VsCode>{`git clone https://github.com/user/project.git`}</VsCode>

      <h3>3. git status</h3>
      <p>Показывает текущее состояние репозитория: изменённые, добавленные или удалённые файлы, а также файлы, подготовленные к коммиту.</p>
      <VsCode>{`git status`}</VsCode>

      <h3>4. git add &lt;file|.&gt;</h3>
      <p>Добавляет указанные файлы в индекс (staging area), подготавливая их к коммиту.</p>
      <p>Можно добавить отдельный файл, например <code>git add app.js</code>, или все изменения сразу — <code>git add .</code></p>
      <VsCode>{`git add README.md`}</VsCode>

      <h3>5. git commit -m "message"</h3>
      <p>Фиксирует изменения из индекса в историю репозитория с сообщением <code>message</code>.</p>
      <p>Каждый коммит — отдельный снимок состояния проекта с описанием изменений. Обычно сообщение пишут на английском языке.</p>
      <VsCode>{`git commit -m "Add login functional"`}</VsCode>

      <h3>6. git branch</h3>
      <p>Показывает список веток в репозитории. Текущая активная ветка отмечена звёздочкой <code>*</code>.</p>
      <VsCode>{`git branch`}</VsCode>

      <h3>7. git checkout -b &lt;branch-name&gt;</h3>
      <p>Создаёт новую ветку с именем <code>branch-name</code> и переключается на неё.</p>
      <VsCode>{`git checkout -b feature/auth`}</VsCode>

      <h3>8. git checkout &lt;branch-name&gt;</h3>
      <p>Переключение на уже существующую ветку.</p>
      <VsCode>{`git checkout main`}</VsCode>

      <h3>9. git merge &lt;branch-name&gt;</h3>
      <p>Сливает ветку <code>branch-name</code> в текущую ветку, объединяя изменения.</p>
      <p>Используется для объединения завершённых функций в основную ветку.</p>
      <VsCode>{`git merge feature/auth`}</VsCode>

      <h3>10. git pull</h3>
      <p>Получает и автоматически сливает изменения из удалённого репозитория в текущую ветку.</p>
      <p>Обновляет локальный код, синхронизируя его с сервером.</p>
      <VsCode>{`git pull origin main`}</VsCode>

      <h3>11. git push</h3>
      <p>Отправляет ваши локальные коммиты в удалённый репозиторий.</p>
      <p>Таким образом вы делитесь изменениями с командой или сохраняете их в облаке.</p>
      <VsCode>{`git push origin feature/auth`}</VsCode>

      <h3>12. git log</h3>
      <p>Показывает журнал коммитов с их сообщениями, авторами и датами.</p>
      <p>Полезно для отслеживания истории изменений.</p>
      <VsCode>{`git log`}</VsCode>

      <h3>13. git reset --hard</h3>
      <p>Отменяет все локальные изменения и возвращает проект к последнему коммиту.</p>
      <p>Будьте осторожны: все несохранённые изменения будут потеряны.</p>
      <VsCode>{`git reset --hard`}</VsCode>

      <h3>14. git remote</h3>
      <p>Показывает список подключённых удалённых репозиториев.</p>
      <VsCode>{`git remote -v`}</VsCode>

      <h3>15. git remote add &lt;name&gt; &lt;url&gt;</h3>
      <p>Добавляет новый удалённый репозиторий с именем <code>name</code> и ссылкой <code>url</code>.</p>
      <VsCode>{`git remote add origin https://github.com/user/project.git`}</VsCode>

      <h3>16. git stash</h3>
      <p>Временно сохраняет незакоммиченные изменения, чтобы переключиться на другую ветку без потери прогресса.</p>
      <VsCode>{`git stash`}</VsCode>
      <p>Вернуть сохранённые изменения можно командой <code>git stash pop</code>.</p>
      <NavButtons prev={'/Deploy/GitStructure'} next={'/Deploy/GitlabCICD'} />
    </section>
  )
}
