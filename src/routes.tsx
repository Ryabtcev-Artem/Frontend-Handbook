import Main from './pages/Main/Main'
import Internet from './pages/Internet/Internet'
import {InternetChildren} from "./pages/Internet/InternetChildren.tsx";
import Browser from "./pages/Browser/Browser.tsx";
import {BrowserChildren} from "./pages/Browser/BrowserChildren.tsx";
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
  }
]
