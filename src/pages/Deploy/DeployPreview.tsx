import { Link } from "react-router-dom";
import ChapterPreview from "../../components/ChapterPreview/ChapterPreview.tsx";

export default function DeployPreview() {
  return (
    <section className="chapter">
      <ChapterPreview
        title="Деплой"
        description="Теория развёртывания: от Docker и CI/CD до Kubernetes и NGINX. Всё, что нужно фронтендеру, чтобы выпускать проект в продакшн."
      />
      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">Docker</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.1</div>
            <Link to="/deploy/Intro">Что такое Деплой?</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.2</div>
            <Link to="/deploy/DockerIntro">Что такое Docker и зачем он нужен?</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.3</div>
            <Link to="/deploy/DockerScheme">Схема работы Docker</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.4</div>
            <Link to="/deploy/DockerSetup">Как начать пользоваться Docker?</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.5</div>
            <Link to="/deploy/DockerCommands">Базовые команды Docker</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.6</div>
            <Link to="/deploy/Dockerfile">Dockerfile</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">Git и CI/CD</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.1</div>
            <Link to="/deploy/GitIntro">Что такое Git?</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.2</div>
            <Link to="/deploy/GitStructure">Git структура</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.3</div>
            <Link to="/deploy/GitCommands">Работа с Git: pull, push, branch</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.4</div>
            <Link to="/deploy/GitlabCICD">CI/CD в GitLab</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">Kubernetes</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.1</div>
            <Link to="/deploy/KubernetesIntro">Что такое Kubernetes и зачем он нужен</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.2</div>
            <Link to="/deploy/KubernetesObjects">Pods, Deployments, Services</Link>
          </div>
        </div>

        <h3 className="chapter__block-title">Сервер и домен</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.1</div>
            <Link to="/deploy/Nginx">Что такое NGINX и как он работает</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.2</div>
            <Link to="/deploy/SSL">HTTPS, домены и Let's Encrypt</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
