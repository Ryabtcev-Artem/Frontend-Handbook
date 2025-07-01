import {Link} from "react-router-dom";
import ChapterPreview from "../../components/ChapterPreview/ChapterPreview.tsx";

export default function GitPreview() {
  return (
    <section className="chapter">
      <ChapterPreview
        title="Git"
        description="В этом разделе мы расскажем вам что такое гит, для чего он нужен и как с ним работать."
      />
      <div className="chapter__blocks container">
        <h3 className="chapter__block-title">Git основы</h3>
        <div className="chapter__block">
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.1</div>
            <Link to="/git/Intro">Что такое Git?</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.2</div>
            <Link to="/git/Config">Конфигурация и инициализация Git</Link>
          </div>
          <div className="chapter__topic">
            <div className="chapter__topic-id">1.3</div>
            <Link to="/git/Save">Сохранение файлов</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
