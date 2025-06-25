import './NavButtons.scss'
import {Link, useLocation} from "react-router-dom";

type NavButtonsProps = {
  prev:string,
  next:string,
}
export default function NavButtons(props: NavButtonsProps) {
  const {prev,next} = props
  const isPractice = useLocation().pathname.includes('practice')
  return (
    <div
      className="nav-buttons"
    >
      <Link
        to={prev}
        className={'nav-buttons__prev'}
      >
      {isPractice ? 'Предыдущая задача' : 'Предыдущий урок'}

      </Link>
      <Link
        to={next}
        className={'nav-buttons__next'}
      >
        {isPractice ? 'Следующая задача' : 'Следующий урок'}
      </Link>
    </div>
  )
}