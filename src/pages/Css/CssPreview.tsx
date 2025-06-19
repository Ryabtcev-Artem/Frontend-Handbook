import {Link} from "react-router-dom";
import ChapterPreview from "../../components/ChapterPreview/ChapterPreview.tsx";

export default function CssPreview() {
  return (
    <section className="chapter">
      <ChapterPreview
        title="CSS"
        description="CSS от базовых свойств до гибких и современных подходов к стилям."
      />
      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">Основы</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.1</div>
            <Link to="/css/Intro">Что такое CSS?</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.2</div>
            <Link to="/css/Connection">Как CSS подключается к HTML?</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.3</div>
            <Link to="/css/FlexAndGrid">Flex и Grid</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
