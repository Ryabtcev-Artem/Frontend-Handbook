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

  // HtmlPreview
  { path: "/html/Intro", title: "Что такое HTML?", chapter: "HTML" },
  { path: "/html/Structure", title: "Структура HTML-документа", chapter: "HTML" },
  { path: "/html/Meta", title: "Meta-теги", chapter: "HTML" },
  { path: "/html/Semantic", title: "Семантические теги", chapter: "HTML" },
  { path: "/html/Accessibility", title: "Доступность (Accessibility)", chapter: "HTML" },
  { path: "/html/Bem", title: "БЭМ (BEM) методология", chapter: "HTML" },

  // CssPreview
  { path: "/css/Intro", title: "Что такое CSS?", chapter: "CSS" },
  { path: "/css/Connection", title: "Как CSS подключается к HTML?", chapter: "CSS" },
  { path: "/css/FlexAndGrid", title: "Flex и Grid", chapter: "CSS" },

  // JsPreview
  { path: "/js/Intro", title: "Что такое JavaScript?", chapter: "JavaScript" },
  { path: "/js/Variables", title: "Переменные: let, const, var", chapter: "JavaScript" },
  { path: "/js/Hoisting", title: "Hoisting и типы данных", chapter: "JavaScript" },
  { path: "/js/Primitives", title: "Примитивы и NaN", chapter: "JavaScript" },
  { path: "/js/Transformation", title: "Преобразование типов", chapter: "JavaScript" },
  { path: "/js/Operators", title: "Операторы", chapter: "JavaScript" },
  { path: "/js/Switch", title: "Оператор Switch", chapter: "JavaScript" },
  { path: "/js/Loops", title: "Циклы for и while", chapter: "JavaScript" },

  { path: "/js/FunctionTypes", title: "Типы функций", chapter: "JavaScript" },
  { path: "/js/Closures", title: "Замыкания", chapter: "JavaScript" },
  { path: "/js/Curry", title: "Каррирование", chapter: "JavaScript" },
  { path: "/js/Arrow", title: "Стрелочная функция", chapter: "JavaScript" },
  { path: "/js/Generators", title: "Генераторы", chapter: "JavaScript" },

  { path: "/js/Objects", title: "Объекты", chapter: "JavaScript" },
  { path: "/js/Context", title: "Область видимости и контекст", chapter: "JavaScript" },
  { path: "/js/This", title: "Ключевое слово this", chapter: "JavaScript" },
  { path: "/js/Prototypes", title: "Прототипы", chapter: "JavaScript" },
  { path: "/js/New", title: "Оператор new", chapter: "JavaScript" },

  { path: "/js/PrimitivesMethods", title: "Методы примитивов", chapter: "JavaScript" },
  { path: "/js/Nums", title: "Числа", chapter: "JavaScript" },
  { path: "/js/Strings", title: "Строки", chapter: "JavaScript" },
  { path: "/js/Arrays", title: "Массивы", chapter: "JavaScript" },
  { path: "/js/MapAndSet", title: "Mat и Set", chapter: "JavaScript" },
  { path: "/js/SettimeoutAndSetinterval", title: "setTimeout и setInterval", chapter: "JavaScript" },

  { path: "/js/Promises", title: "Промисы: состояния и методы", chapter: "JavaScript" },
  { path: "/js/Fetch", title: "Работа с fetch", chapter: "JavaScript" },

  { path: "/js/Classes", title: "Классы и наследование", chapter: "JavaScript" },

  { path: "/js/Storage", title: "localStorage, cookies", chapter: "JavaScript" },
  { path: "/js/MutationObserver", title: "MutationObserver", chapter: "JavaScript" },
];
