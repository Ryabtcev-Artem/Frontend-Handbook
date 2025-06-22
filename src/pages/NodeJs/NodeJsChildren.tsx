import Intro from "./Intro/Intro.tsx";
import NodeJsPreview from './NodeJsPreview.tsx'
import Architecture from "./Architecture/Architecture.tsx";
import BlockingAndNonblockingIo
  from "./BlockingAndNonblockingIo/BlockingAndNonblockingIo.tsx";
import Setup from "./Setup/Setup.tsx";
import Modules from "./Modules/Modules.tsx";
import FileSystem from "./FileSystem/FileSystem.tsx";
import HttpServer from "./HttpServer/HttpServer.tsx";
import Express from "./Express/Express.tsx";
import ExpressServer from "./ExpressServer/ExpressServer.tsx";
import AsyncBasics from "./AsyncBasics/AsyncBasics.tsx";
import ErrorHandling from "./ErrorHandling/ErrorHandling.tsx";
import Timers from "./Timers/Timers.tsx";
import HttpRequests from "./HttpRequests/HttpRequests.tsx";

export const NodeJsChildren = [
  {path: '', element: <NodeJsPreview />},
  {path: 'Intro', element: <Intro />},
  {path: 'Setup', element: <Setup />},
  {path: 'Architecture', element: <Architecture />},
  {path: 'BlockingAndNonblockingIo', element: <BlockingAndNonblockingIo />},
  {path: 'Modules', element: <Modules />},
  {path: 'FileSystem', element: <FileSystem />},
  {path: 'HttpServer', element: <HttpServer />},
  {path: 'Express', element: <Express />},
  {path: 'ExpressServer', element: <ExpressServer />},
  {path: 'AsyncBasics', element: <AsyncBasics />},
  {path: 'ErrorHandling', element: <ErrorHandling />},
  {path: 'Timers', element: <Timers />},
  {path: 'HttpRequests', element: <HttpRequests/>},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
]