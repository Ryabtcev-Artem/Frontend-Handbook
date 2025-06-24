import { Link } from "react-router-dom";
import "./NotFound.scss"


export default function NotFound() {
  ;

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404 — Страница не найдена</h1>
        <p className="not-found__description">
          Возможно, страница была удалена или вы перешли по неверной ссылке.
        </p>
        <Link to="/" className="not-found__link">
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
}
