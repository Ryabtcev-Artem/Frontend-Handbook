type Page = {
  path: string,
  title: string,
  chapter: string,  // Название раздела, например "Интернет" или "Браузер"
}

export const allPages: Page[] = [
  // InternetPreview
  { path: "/internet/Intro", title: "Что такое интернет?", chapter: "Интернет" },
  { path: "/internet/HowInternetWork", title: "Как работает интернет?", chapter: "Интернет" },
  { path: "/internet/Connection", title: "Как устроено подключение к Интернету?", chapter: "Интернет" },
  { path: "/internet/IpAddress", title: "IP-адрес", chapter: "Интернет" },
  { path: "/internet/Dns", title: "DNS", chapter: "Интернет" },
  { path: "/internet/HowHyperTextWork", title: "Что такое гипертекст?", chapter: "Интернет" },
  { path: "/internet/Http", title: "Что такое HTTP?", chapter: "Интернет" },
  { path: "/internet/HttpsAndTls", title: "HTTPS и TLS", chapter: "Интернет" },
  { path: "/internet/ModelOsi", title: "Модель OSI", chapter: "Интернет" },
  { path: "/internet/ModelTcpIp", title: "Модель TCP/IP", chapter: "Интернет" },
  { path: "/internet/RestApi", title: "Rest API", chapter: "Интернет" },
  { path: "/internet/WebSocket", title: "WebSocket", chapter: "Интернет" },
  { path: "/internet/GraphQl", title: "GraphQL", chapter: "Интернет" },

  // BrowserPreview
  { path: "/browser/Intro", title: "Что такое Браузер?", chapter: "Браузер" },
  { path: "/browser/Architecture", title: "Архитектура Браузера", chapter: "Браузер" },
  { path: "/browser/Cookies", title: "Что такое Cookies?", chapter: "Браузер" },
  { path: "/browser/LocalAndSession", title: "Local and Session storage", chapter: "Браузер" },
  { path: "/browser/Cors", title: "CORS", chapter: "Браузер" },
  { path: "/browser/Rendering", title: "Рендеринг страницы", chapter: "Браузер" },
  { path: "/browser/PageRequest", title: "Что происходит при запросе страницы?", chapter: "Браузер" },
  { path: "/browser/EventLoop", title: "Цикл Событий Event Loop", chapter: "Браузер" },
];
