import {Link} from "react-router-dom";

type OtherProps = {}

export default function Other(props: OtherProps) {
  const {} = props

  return (
    <section className="container">
      <h2>Продвинутые разделы</h2>
      <p>
        Здесь будут материалы для тех, кто уже уверенно владеет JavaScript:
        Node.js, React, TypeScript, Git и другие технологии.
      </p>
      <Link to={'/nodeJs'}>NodeJs</Link>
    </section>
  )
}
