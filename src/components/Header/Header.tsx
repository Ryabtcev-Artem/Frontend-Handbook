import './Header.scss'
import search from '../../images/Header/search.svg'
import close from '../../images/Header/close.svg'
import {Link, NavLink} from "react-router-dom";
import {useRef, useState} from "react";
import {allPages} from "../../allPages.ts";

type HeaderProps = {}
export default function Header(props: HeaderProps) {
  const {} = props
  const [searchValue, setSearchValue] = useState('')
  const searchInputElement = useRef<HTMLInputElement | null>(null)
  const searchElement = useRef<HTMLDivElement | null>(null)
  const burgerMenuElement = useRef<HTMLButtonElement | null>(null)
  const headerMenuElement = useRef<HTMLElement | null>(null)
  const htmlElement = document.querySelector('html')

  function showSearch() {
    if (!searchElement.current || !searchInputElement.current || !htmlElement) return
    searchElement.current.classList.add('active')
    searchInputElement.current.focus()
    const scrollWidth = getScrollbarWidth()
    htmlElement.style.paddingRight = `${scrollWidth}px`
    htmlElement.classList.add('stop-scroll')
    document.addEventListener(('keydown'), (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        hideSearch()
      }
    })
  }

  function getScrollbarWidth(): number {
    const div = Object.assign(document.createElement('div'), {
      style: `
      width: 100px;
      height: 100px;
      overflow: scroll;
      position: absolute;
      top: -9999px;
    `
    });
    document.body.appendChild(div);
    const width = div.offsetWidth - div.clientWidth;
    div.remove();
    return width;
  }

  function hideSearch() {
    if (!searchElement.current || !htmlElement) return
    searchElement.current.classList.remove('active')
    htmlElement.style.paddingRight = `0px`
    htmlElement.classList.remove('stop-scroll')
  }

  function onSearchClick(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement
    if (target.className !== 'header__search active' || !searchElement.current) return
    hideSearch()
  }

  function hideBurgerMenu(event: MouseEvent) {
    const target = event.target as Element
    if (!target.closest('.header')) {
      if (!burgerMenuElement.current || !headerMenuElement.current) {
        return
      }
      burgerMenuElement.current.classList.remove('active')
      headerMenuElement.current.classList.remove('active')
    }
  }

  window.addEventListener('click', hideBurgerMenu)

  function onBurgerMenuClick() {
    if (!burgerMenuElement.current || !headerMenuElement.current) {
      return
    }
    burgerMenuElement.current.classList.toggle('active')
    headerMenuElement.current.classList.toggle('active')
  }

  return (
    <header
      className="header"
    >
      {<button
        onClick={onBurgerMenuClick}
        ref={burgerMenuElement}
        className={'header__burger-menu mobile-above-hidden'}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>}
      <h1 className={"header__logo"}>
        <a
          className={"header__link--main"}
          href="/"
        >
          &lt;/&gt;
        </a>
      </h1>
      <nav
        ref={headerMenuElement}
        className={"header__menu"}
      >
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
          to={'/js'}
          className={'header__link'}
          onClick={onBurgerMenuClick}
        >
          Другое
        </NavLink>
      </nav>
      <button
        className={'header__show-search'}
        type="button"
        onClick={showSearch}
      >
        <img
          className={'header__show-search__image'}
          src={search}
          alt="search"
          width="30"
          height="30"
          loading="lazy"
        />
      </button>
      <div
        className={'header__search'}
        ref={searchElement}
        onClick={onSearchClick}
      >
        <img
          className={'header__search-close'}
          src={close}
          alt=""
          width="40"
          height="40"
          loading="lazy"
          onClick={hideSearch}
        />
        <div className="header__search__content">
          <input
            ref={searchInputElement}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className={"header__search__input"}
            type={"text"}
            id="search"
            placeholder={'Поиск по темам'}
          />
          {!searchValue && (
            <>
              <div className={'header__search__results__top'}>
                <span>Название темы</span>
                <span>Раздел</span>
              </div>
              <div className={'header__search__not-found'}>Ничего не найдено</div>
            </>
          )}
          {searchValue && <div className={'header__search__results'}>
            <div className={'header__search__results__top'}>
              <span>Название темы</span>
              <span>Раздел</span>
            </div>
            <div className={'header__all-results'}>
              {allPages.filter((page) => page.title.toLowerCase().includes(searchValue.toLowerCase())).map((page, index) => {
                return (<div
                  key={index}
                >
                  <Link
                    to={page.path}
                    className={'header__search__results__result'}
                    onClick={hideSearch}
                  >
                    <span>{page.title}</span>
                    <span>{page.chapter}</span>
                  </Link>
                </div>)
              })}
            </div>
          </div>}
        </div>
      </div>
    </header>
  )
}