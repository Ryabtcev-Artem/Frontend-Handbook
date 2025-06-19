import { Link } from "react-router-dom";
import ChapterPreview from "../../components/ChapterPreview/ChapterPreview.tsx";

export default function HtmlPreview() {
  return (
    <section className="chapter">
      <ChapterPreview
        title="HTML"
        description="Основы HTML: структура документа, семантика, теги и многое другое."
      />
      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">Основы</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.1</div>
            <Link to="/html/Intro">Что такое HTML?</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.2</div>
            <Link to="/html/Structure">Структура HTML-документа</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.3</div>
            <Link to="/html/Meta">Meta-теги</Link>
          </div>
        </div>
      </div>
      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">Качественный HTML</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.1</div>
            <Link to="/html/Semantic">Семантические теги</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.2</div>
            <Link to="/html/Accessibility">Доступность (Accessibility)</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">2.3</div>
            <Link to="/html/Bem">БЭМ (BEM) методология</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
