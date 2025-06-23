import {Link} from "react-router-dom";
import nodeJs from '../../images/Other/Preview/node-js.svg'
import react from '../../images/Other/Preview/react.svg'
import ts from '../../images/Other/Preview/ts.svg'
import "./Other.scss"
type OtherProps = {}

export default function Other(props: OtherProps) {
  const {} = props

  return (
    <section className="other container">
      <h2>Продвинутые разделы</h2>
      <p>
        Здесь будут материалы для тех, кто уже уверенно владеет JavaScript.
      </p>
      <div className="other__pages">
        <Link className={'other__page'} to={'/nodeJs'}>
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
        <Link className={'other__page'} to={'/react'}>
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
        <Link className={'other__page'} to={'/ts'}>
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
      </div>
    </section>
  )
}
