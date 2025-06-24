import {Link} from "react-router-dom";
import nodeJs from '../../images/Other/Preview/node-js.svg'
import react from '../../images/Other/Preview/react.svg'
import ts from '../../images/Other/Preview/ts.svg'
import docker from '../../images/Other/Preview/docker.svg'
import kubernetes from '../../images/Other/Preview/kubernetes.svg'
import gitlab from '../../images/Other/Preview/gitlab.svg'
import nginx from '../../images/Other/Preview/nginx.svg'
import js from '../../images/Other/Preview/js.svg'
import "./Other.scss"


export default function Other() {


  return (
    <section className="other container">
      <h2>Продвинутые разделы</h2>
      <p>
        Здесь будут материалы для тех, кто уже уверенно владеет JavaScript.
      </p>
      <div className="other__pages">
        <Link
          className={'other__page'}
          to={'/nodeJs'}
        >
          <div className="other__picture-container">
            <img
              className={'other__picture'}
              src={nodeJs}
              alt=""
              width="100"
              height="100"
              loading="lazy"
            />
          </div>
          <span className={'other__name'}>Node.js</span>
        </Link>
        <Link
          className={'other__page'}
          to={'/react'}
        >
          <div className="other__picture-container">
            <img
              className={'other__picture'}
              src={react}
              alt=""
              width="100"
              height="100"
              loading="lazy"
            />
          </div>
          <span className={'other__name'}>React</span>
        </Link>
        <Link
          className={'other__page'}
          to={'/ts'}
        >
          <div className="other__picture-container">
            <img
              className={'other__picture'}
              src={ts}
              alt=""
              width="100"
              height="100"
              loading="lazy"
            />
          </div>
          <span className={'other__name'}>TypeScript</span>
        </Link>
        <Link
          className={'other__page'}
          to={'/deploy'}
        >
          <div className="other__picture-container grid--2">
            <img
              className={'other__picture'}
              src={docker}
              alt=""
              width=""
              height=""
              loading="lazy"
            />
            <img
              className={'other__picture'}
              src={nginx}
              alt=""
              width=""
              height=""
              loading="lazy"
            />
            <img
              className={'other__picture'}
              src={gitlab}
              alt=""
              width=""
              height=""
              loading="lazy"
            />

            <img
              className={'other__picture'}
              src={kubernetes}
              alt=""
              width="100"
              height="100"
              loading="lazy"
            />
          </div>
          <span className={'other__name'}>Деплой</span>
        </Link>
      </div>
      <h2>Практика</h2>
      <p>Здесь будут собраны самые частые практические задания по разным разделам.</p>
      <div className="other__pages">
        <Link
          className={'other__page'}
          to={'/jsPractice'}
        >
          <div className="other__picture-container">
            <img
              className={'other__picture'}
              src={js}
              alt=""
              width="100"
              height="100"
              loading="lazy"
            />
          </div>
          <span className={'other__name'}>JavaScript</span>
        </Link>
      </div>
    </section>
  )
}
