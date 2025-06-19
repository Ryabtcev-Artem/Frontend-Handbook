import {NavLink} from "react-router-dom";

type NavLinksProps = {
  onBurgerMenuClick: () => void;
}
export default function NavLinks(props: NavLinksProps) {
  const {onBurgerMenuClick} = props

  return (
    <>
      <NavLink
        to={'/'}
        className={'header__link'}
        onClick={onBurgerMenuClick}
      >
        Главная
      </NavLink>
      <NavLink
        to={'/internet'}
        className={'header__link'}
        onClick={onBurgerMenuClick}
      >
        Интернет
      </NavLink><NavLink
      to={'/browser'}
      className={'header__link'}
      onClick={onBurgerMenuClick}
    >
      Браузер
    </NavLink>
      <NavLink
        to={'/html'}
        className={'header__link'}
        onClick={onBurgerMenuClick}
      >
        HTML
      </NavLink><NavLink
      to={'/css'}
      className={'header__link'}
      onClick={onBurgerMenuClick}
    >
      CSS
    </NavLink>
      <NavLink
        to={'/js'}
        className={'header__link'}
        onClick={onBurgerMenuClick}
      >
        JavaScript
      </NavLink>
      <NavLink
        to={'/other'}
        className={'header__link'}
        onClick={onBurgerMenuClick}
      >
        Другое
      </NavLink>
    </>
  )
}