import { Link } from "react-router-dom";
import ChapterPreview from "../../components/ChapterPreview/ChapterPreview.tsx";

;

export default function JsPreview() {
  ;
  return (
    <section className="chapter">
      <ChapterPreview
        title="JavaScript"
        description="Этот раздел рассчитан на тех, кто уже имеет базовое понимание JavaScript. Материал подаётся плотно: максимум конкретики и практики. Если вы только начинаете — лучше сперва пройти Learn JS или посмотреть вводные уроки по JavaScript на YouTube. Подойдёт тем, кто хочет освежить знания и может даже узнать для себя что-то новое."
      />

      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">Основы</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.1</div>
            <Link to="/js/Intro">Что такое JavaScript?</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.2</div>
            <Link to="/js/Variables">Переменные: let, const, var</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.3</div>
            <Link to="/js/Hoisting">Hoisting и типы данных</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.4</div>
            <Link to="/js/Primitives">Примитивы и NaN</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.5</div>
            <Link to="/js/Transformation">Преобразование типов</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.6</div>
            <Link to="/js/Operators">Операторы</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.7</div>
            <Link to="/js/Switch">Оператор Switch</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.8</div>
            <Link to="/js/Loops">Циклы for и while</Link>
          </div>
        </div>
      </div>

      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">Функции</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.1</div>
            <Link to="/js/FunctionTypes">Типы функций</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.2</div>
            <Link to="/js/Closures">Замыкания</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.3</div>
            <Link to="/js/Curry">Каррирование</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.4</div>
            <Link to="/js/Arrow">Стрелочная функция</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.5</div>
            <Link to="/js/Generators">Генераторы</Link>
          </div>
        </div>
      </div>
      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">Объекты</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.1</div>
            <Link to="/js/Objects">Объекты</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.2</div>
            <Link to="/js/Context">Область видимости и контекст</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.3</div>
            <Link to="/js/This">Ключевое слово this</Link>
          </div>

          <div className="chapter__topic">
            <div className="chapter__topic-id">3.4</div>
            <Link to="/js/Prototypes">Прототипы</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">3.4</div>
            <Link to="/js/New">Оператор new</Link>
          </div>
        </div>
      </div>
      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">Типы данных</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.1</div>
            <Link to="/js/PrimitivesMethods">Методы примитивов</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.2</div>
            <Link to="/js/Nums">Числа</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.3</div>
            <Link to="/js/Strings">Строки</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.4</div>
            <Link to="/js/Arrays">Массивы</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.5</div>
            <Link to="/js/MapAndSet">Mat и Set</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">4.6</div>
            <Link to="/js/SettimeoutAndSetinterval">setTimeout и setInterval</Link>
          </div>
        </div>
      </div>
      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">Асинхронность</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.1</div>
            <Link to="/js/Promises">Промисы: состояния и методы</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.2</div>
            <Link to="/js/Fetch">Работа с fetch</Link>
          </div>
        </div>
      </div>

      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">ООП</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">5.1</div>
            <Link to="/js/Classes">Классы и наследование</Link>
          </div>
        </div>
      </div>

      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">Хранилище и наблюдатели</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">6.1</div>
            <Link to="/js/Storage">localStorage, cookies</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">6.2</div>
            <Link to="/js/MutationObserver">MutationObserver</Link>
          </div>
        </div>
      </div>
    </section>
  );
}