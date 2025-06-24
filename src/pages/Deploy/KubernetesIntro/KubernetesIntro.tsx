import VsCode from "../../../components/VsCode/VsCode.tsx";
type KubernetesIntroProps = {}
export default function KubernetesIntro(props: KubernetesIntroProps) {
  const {} = props

  return (
    <section className="topic container">
      <h2>Что такое Kubernetes?</h2>
      <p>
        <strong>Kubernetes</strong> (или <strong>K8s</strong>) — это система оркестрации контейнеров, которая автоматизирует развёртывание, масштабирование и управление контейнеризированными приложениями.
        Она позволяет управлять множеством контейнеров так, как будто это один логический блок.
      </p>

      <h3>Зачем нужен Kubernetes?</h3>
      <ul>
        <li><strong>Автоматизация:</strong> автоматический перезапуск упавших контейнеров, балансировка нагрузки, масштабирование.</li>
        <li><strong>Управляемость:</strong> удобно управлять разными версиями приложений (rolling updates, rollback и пр.).</li>
        <li><strong>Масштабируемость:</strong> легко увеличивать или уменьшать количество ресурсов.</li>
        <li><strong>Надёжность:</strong> приложения остаются доступными даже при падении части инфраструктуры.</li>
      </ul>

      <h3>Как это работает</h3>
      <p>
        Kubernetes управляет <strong>кластерами</strong> — группами машин (узлов), на которых развёрнуты контейнеры.
        Контейнеры группируются в <strong>Pods</strong> — минимальные единицы, которые Kubernetes масштабирует, разворачивает и удаляет.
      </p>

      <h3>Пример: фронт + бэкенд</h3>
      <p>
        Допустим, у тебя есть фронтенд на <strong>React</strong> и бэкенд на <strong>Node.js</strong>. Ты обернул оба сервиса в Docker-контейнеры. Kubernetes позволяет тебе:
      </p>
      <ul>
        <li>Запускать каждый контейнер в отдельном Pod'е.</li>
        <li>Настроить автосоздание и перезапуск, если какой-то из них упал.</li>
        <li>Настроить балансировщик нагрузки между несколькими копиями фронтенда.</li>
        <li>Настроить внутреннюю сеть (Service), чтобы фронт знал, где искать бэкенд.</li>
      </ul>

      <h3>Часто используемые объекты Kubernetes:</h3>
      <ul>
        <li><strong>Pod</strong> — минимальная единица запуска.</li>
        <li><strong>Deployment</strong> — описывает, как должны быть запущены Pod'ы (кол-во реплик, обновления).</li>
        <li><strong>Service</strong> — абстракция для связи между Pod'ами (например, фронт ↔ бэкенд).</li>
        <li><strong>Ingress</strong> — прокси, принимающий внешние запросы и направляющий их в кластер.</li>
        <li><strong>ConfigMap / Secret</strong> — конфигурации и секреты (например, API ключи).</li>
      </ul>

      <h3>Простой YAML-файл Deployment'а</h3>
      <VsCode>
        {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
spec:
  replicas: 2
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
        - name: react-app
          image: my-react-app:latest
          ports:
            - containerPort: 3000`}
      </VsCode>

      <p>
        Такой манифест говорит Kubernetes: запусти два экземпляра React-приложения из образа <code>my-react-app</code> на порту 3000.
      </p>

      <h3>Всё ещё сложно?</h3>
      <p>
        Kubernetes — мощный инструмент, но не стоит бояться. Он пригодится, если твой проект растёт и требует надёжного и масштабируемого развёртывания. Пока ты просто изучаешь CI/CD или Docker — знай, что Kubernetes будет следующим логичным шагом.
      </p>
    </section>
  )
}
