import './Header.scss'
import search from '../../images/Header/search.svg'
import close from '../../images/Header/close.svg'
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {allPages} from "../../allPages.ts";
import getScrollbarWidth from "../../helpers/getScrollbarWidth.ts";
import toggleTheme from "../../toggleTheme.ts";
import NavLinks from "../NavLinks/NavLinks.tsx";
import moon from '../../images/Header/moon.svg'
import sun from '../../images/Header/sun.svg'



export default function Header() {
  
  const [searchValue, setSearchValue] = useState('')
  const searchInputElement = useRef<HTMLInputElement | null>(null)
  const searchElement = useRef<HTMLDivElement | null>(null)
  const burgerMenuElement = useRef<HTMLButtonElement | null>(null)
  const headerMenuElement = useRef<HTMLElement | null>(null)
  const htmlElement = document.querySelector('html')
  const filteredPages = allPages.filter((page) =>
    page.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const currentTheme = localStorage.getItem('user-theme')
  const [currentThemeImage,setCurrentThemeImage] = useState<string>(currentTheme === 'dark' ? moon : sun)
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
  function hudeBurgerMenu(){
    if (!burgerMenuElement.current || !headerMenuElement.current) {
      return
    }
    burgerMenuElement.current.classList.remove('active')
    headerMenuElement.current.classList.remove('active')
  }
  function onWindowClick(event: MouseEvent) {
    const target = event.target as Element
    if (!target.closest('.header')) {
      hudeBurgerMenu()
    }
  }
  function onToggleThemeClick(){
    const newImage = toggleTheme()
    setCurrentThemeImage(newImage)
  }

  useEffect(() => {
    window.addEventListener('click', onWindowClick)
    return ()=> window.removeEventListener('click',onWindowClick)
  });

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
        <NavLinks onBurgerMenuClick={onBurgerMenuClick}/>
      </nav>
      <button
        className={'header__toggle-theme invert'}
        type="button"
        onClick={onToggleThemeClick}
      >
        <img
          src={currentThemeImage}
          className={'header__theme-image'}
          alt=""
          width="32"
          height="32"
          loading="lazy"
        />
      </button>
      <button
        className={'header__show-search invert'}
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
        <button
          className={'header__search-close invert'}
          type="button"
        >
          <img
            src={close}
            alt=""
            width="40"
            height="40"
            loading="lazy"
            onClick={hideSearch}
            tabIndex={0}
          />
        </button>

        <div className="header__search__content">
          <div className="header__input-wrapper">
            <input
              ref={searchInputElement}
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              className={"header__search-input"}
              type={"text"}
              id="search"
              placeholder={'Поиск по темам'}
              autoComplete="off"
            />
          </div>
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
            {filteredPages.length === 0 && (
              <div className="header__search__not-found">Ничего не найдено</div>
            )}
            <div className="header__all-results">
              {filteredPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="header__search__results__result"
                  onClick={()=> {
                    hideSearch()
                    hudeBurgerMenu()
                  }}
                >
                  <span>{page.title}</span>
                  <span>{page.chapter}</span>
                </Link>
              ))}
            </div>
          </div>}
        </div>
      </div>
    </header>
  )
}