import Intro from "./Intro/Intro.tsx";
import GitPreview from "./GitPreview.tsx";
import Config from "./Config/Config.tsx";
import Save from "./Save/Save.tsx";
import GoodCommit from "./GoodCommit/GoodCommit.tsx";
import Branches from "./Branches/Branches.tsx";

export const GitChildren = [
  {path: '', element: <GitPreview />},
  {path: 'Intro', element: <Intro />},
  {path: 'Config', element: <Config />},
  {path: 'Save', element: <Save />},
  {path: 'GoodCommit', element: <GoodCommit />},
  {path: 'Branches', element: <Branches />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
  {path: 'Intro', element: <Intro />},
]