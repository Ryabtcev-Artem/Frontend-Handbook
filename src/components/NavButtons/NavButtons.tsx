import './NavButtons.scss'
import {Link} from "react-router-dom";

type NavButtonsProps = {
  prev:string,
  next:string,
}
export default function NavButtons(props: NavButtonsProps) {
  const {prev,next} = props

  return (
    <div
      className="nav-buttons"
    >
      <Link
        to={prev}
        className={'nav-buttons__prev'}
      >
        Предыдущий урок
      </Link>
      <Link
        to={next}
        className={'nav-buttons__next'}
      >
        Следующий урок
      </Link>
    </div>
  )
}