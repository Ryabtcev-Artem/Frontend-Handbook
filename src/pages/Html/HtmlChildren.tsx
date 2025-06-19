import HtmlPreview from "./HtmlPreview.tsx";
import Intro from "./Intro/Intro.tsx";
import Structure from "./Structure/Structure.tsx";
import Meta from "./Meta/Meta.tsx";
import Semantic from "./Semantic/Semantic.tsx";
import Accessibility from "./Accessibility/Accessibility.tsx";
import Bem from "./Bem/Bem.tsx";

export const HtmlChildren = [
  {path: '', element: <HtmlPreview />},
  {path: 'intro', element: <Intro />},
  {path: 'Structure', element: <Structure />},
  {path: 'Meta', element: <Meta />},
  {path: 'Semantic', element: <Semantic />},
  {path: 'Accessibility', element: <Accessibility />},
  {path: 'Bem', element: <Bem />},
]