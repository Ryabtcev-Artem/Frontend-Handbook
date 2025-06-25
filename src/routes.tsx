import Main from './pages/Main/Main'
import Internet from './pages/Internet/Internet'
import {InternetChildren} from "./pages/Internet/InternetChildren.tsx";
import Browser from "./pages/Browser/Browser.tsx";
import {BrowserChildren} from "./pages/Browser/BrowserChildren.tsx";
import Html from "./pages/Html/Html.tsx";
import {HtmlChildren} from './pages/Html/HtmlChildren.tsx'
import Css from "./pages/Css/Css.tsx";
import {CssChildren} from "./pages/Css/CssChildren.tsx";
import Js from "./pages/Js/Js.tsx";
import {JsChildren} from "./pages/Js/JsChildren.tsx";
import Other from "./pages/Other/Other.tsx";
import NodeJs from "./pages/NodeJs/NodeJs.tsx";
import {NodeJsChildren} from "./pages/NodeJs/NodeJsChildren.tsx";
import React from "./pages/React/React.tsx";
import {ReactChildren} from "./pages/React/ReactChildren.tsx";
import Deploy from "./pages/Deploy/Deploy.tsx";
import {DeployChildren} from "./pages/Deploy/DeployChildren.tsx";
import JsPractice from "./pages/JsPractice/JsPractice.tsx";
import {JsPracticeChildren} from "./pages/JsPractice/JsPracticeChildren.tsx";
export const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/internet',
    element: <Internet />,
    children: InternetChildren,
  },
  {
    path: '/browser',
    element: <Browser />,
    children: BrowserChildren,
  },
  {
    path: '/html',
    element: <Html />,
    children: HtmlChildren,
  },
  {
    path: '/css',
    element: <Css />,
    children: CssChildren,
  },
  {
    path: '/js',
    element: <Js />,
    children: JsChildren,
  },
  {
    path: '/other',
    element: <Other />,
  },
  {
    path: '/nodeJs',
    element: <NodeJs/>,
    children: NodeJsChildren,
  },
  {
    path: '/react',
    element: <React />,
    children: ReactChildren,
  },
  {
    path: '/deploy',
    element: <Deploy />,
    children: DeployChildren,
  },
  {
    path: '/js-practice',
    element: <JsPractice />,
    children: JsPracticeChildren,
  }
]
