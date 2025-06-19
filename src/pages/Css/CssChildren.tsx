import CssPreview from "./CssPreview.tsx";
import Intro from "./Intro/Intro.tsx";
import Connection from "./Connection/Connection.tsx";
import FlexAndGrid from "./FlexAndGrid/FlexAndGrid.tsx";


export const CssChildren = [
  {path: '', element: <CssPreview />},
  {path: 'Intro', element: <Intro />},
  {path: 'Connection', element: <Connection />},
  {path: 'FlexAndGrid', element: <FlexAndGrid />},
]