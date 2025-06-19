import {Link} from "react-router-dom";
import ChapterPreview
  from "../../components/ChapterPreview/ChapterPreview.tsx";

type InternetPreviewProps = {}
export default function InternetPreview(props: InternetPreviewProps) {
  const {} = props
  return (
    <section className={'chapter'}>
      <ChapterPreview
        title={'Интернет'}
        description={'В этом разделе я расскажу, как работает интернет простыми словами и с интересными примерами, чтобы вы смогли понять его магию и возможности без сложных терминов и скучной теории.'}
      />
      <div className="chapter__blocks container">
        <h3 className={'chapter__block-title'}>Введение</h3>
        <div className={'chapter__block'}>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>1.1</div>
            <Link to={'/internet/Intro'}>Что такое интернет?</Link>
          </div>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>1.2</div>
            <Link to={'/internet/HowInternetWork'}>Как работает интернет?</Link>
          </div>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>1.3</div>
            <Link to={'/internet/Connection'}>Как устроено подключение к Интернету?</Link>
          </div>
        </div>
      </div>
      <div className="chapter__blocks container">
        <h3 className={'chapter__block-title'}>Адреса и навигация</h3>
        <div className={'chapter__block'}>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>2.1</div>
            <Link to={'/internet/IpAddress'}>IP-адрес</Link>
          </div>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>2.2</div>
            <Link to={'/internet/Dns'}>DNS</Link>
          </div>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>2.3</div>
            <Link to={'/internet/HowHyperTextWork'}>Что такое гипертекст?</Link>
          </div>
        </div>
      </div>
      <div className="chapter__blocks container">
        <h3 className={'chapter__block-title'}>Взаимодействие клиента и сервера</h3>
        <div className={'chapter__block'}>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>3.1</div>
            <Link to={'/internet/ClientAndServer'}>Клиент-Серверное взаимодействие</Link>
          </div>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>3.2</div>
            <Link to={'/internet/Http'}>Что такое HTTP?</Link>
          </div>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>3.3</div>
            <Link to={'/internet/HttpsAndTls'}>HTTPS и TLS</Link>
          </div>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>3.4</div>
            <Link to={'/internet/RestApi'}>Rest API</Link>
          </div>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>3.5</div>
            <Link to={'/internet/WebSocket'}>WebSocket</Link>
          </div>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>3.6</div>
            <Link to={'/internet/GraphQl'}>GraphQL</Link>
          </div>
        </div>
      </div>
      <div className="chapter__blocks container">
        <h3 className={'chapter__block-title'}>Темы по желанию</h3>
        <div className={'chapter__block'}>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>4.1</div>
            <Link to={'/internet/ModelOsi'}>Модель OSI</Link>
          </div>
          <div className={'chapter__topic'}>
            <div className={'chapter__topic-id'}>4.2</div>
            <Link to={'/internet/ModelTcpIp'}>Модель TCP/IP</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
