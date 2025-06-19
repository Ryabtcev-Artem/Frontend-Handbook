import BrowserPreview from "./BrowserPreview.tsx";
import Intro from "./Intro/Intro.tsx";
import Architecture from "./Architecture/Architecture.tsx";
import Rendering from "./Rendering/Rendering.tsx";
import Cookies from "./Cookies/Cookies.tsx";
import LocalAndSession from "./LocalAndSession/LocalAndSession.tsx";
import Cors from "./Cors/Cors.tsx";
import PageRequest from "./PageRequest/PageRequest.tsx";
import EventLoop from "./EventLoop/EventLoop.tsx";
export const BrowserChildren = [
  {path: '', element: <BrowserPreview />},
  {path: 'Intro', element: <Intro />},
  {path: 'Architecture', element: <Architecture />},
  {path: 'Rendering', element: <Rendering />},
  {path: 'Cookies', element: <Cookies />},
  {path: 'LocalAndSession', element: <LocalAndSession />},
  {path: 'Cors', element: <Cors />},
  {path: 'PageRequest', element: <PageRequest />},
  {path: 'EventLoop', element: <EventLoop />},
]