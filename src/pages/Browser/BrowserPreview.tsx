import {Link} from "react-router-dom";
import ChapterPreview
  from "../../components/ChapterPreview/ChapterPreview.tsx";


export default function BrowserPreview() {
  

  return (
    <section className={'chapter'}>
      <ChapterPreview
        title={'Браузер'}
        description={'Погружаемся в работу браузера: как загружается страница, хранятся данные, обрабатываются cookie и многое другое.'}
      />
      <div className="chapter__blocks container">
        <h3 className={'chapter__block-title'}>
          Введение
        </h3>
        <div className={'chapter__block'}>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>1.1</div>
            <Link to={'/browser/Intro'}>Что такое Браузер?</Link>
          </div>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>1.2</div>
            <Link to={'/browser/Architecture'}>Архитектура Браузера</Link>
          </div>
        </div>
      </div>
      <div className="chapter__blocks container">
        <h3 className={'chapter__block-title'}>
          Хранение данных
        </h3>
        <div className={'chapter__block'}>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>2.1</div>
            <Link to={'/browser/Cookies'}>Что такое Cookies?</Link>
          </div>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>2.2</div>
            <Link to={'/browser/LocalAndSession'}>Local and Session storage</Link>
          </div>
        </div>
      </div>
      <div className="chapter__blocks container">
        <h3 className={'chapter__block-title'}>
          Безопасность
        </h3>
        <div className={'chapter__block'}>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>3.1</div>
            <Link to={'/browser/Cors'}>CORS</Link>
          </div>
        </div>
      </div>
      <div className="chapter__blocks container">
        <h3 className={'chapter__block-title'}>
          Продвинутые темы
        </h3>
        <p>Для изучения тем этого блока необходимо знать основы HTML и JS</p>
        <div className={'chapter__block'}>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>4.1</div>
            <Link to={'/browser/Rendering'}>Рендеринг страницы</Link>
          </div>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>4.2</div>
            <Link to={'/browser/PageRequest'}>Что происходит при запросе страницы?</Link>
          </div>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>4.3</div>
            <Link to={'/browser/EventLoop'}>Цикл Событий Event Loop</Link>
          </div>
        </div>
      </div>
    </section>
  )
}