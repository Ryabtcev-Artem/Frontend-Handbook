import Intro from "./Intro/Intro.tsx";
import JsPreview from "./JsPreview.tsx";
import Variables from "./Variables/Variables.tsx";
import Hoisting from "./Hoisting/Hoisting.tsx";
import Primitives from "./Primitives/Primitives.tsx";
import Transformation from "./Transformation/Transformation.tsx";
import Operators from "./Operators/Operators.tsx";
import Switch from "./Switch/Switch.tsx";
import Loops from "./Loops/Loops.tsx";
import FunctionTypes from "./FunctionTypes/FunctionTypes.tsx";
import Objects from "./Objects/Objects.tsx";
// import ArrowVsClassic from "./ArrowVsClassic/ArrowVsClassic.tsx";
// import Closures from "./Closures/Closures.tsx";
// import Numbers from "./Numbers/Numbers.tsx";
// import Strings from "./Strings/Strings.tsx";
// import Objects from "./Objects/Objects.tsx";
// import Arrays from "./Arrays/Arrays.tsx";
// import Promises from "./Promises/Promises.tsx";
// import Fetch from "./Fetch/Fetch.tsx";
// import Classes from "./Classes/Classes.tsx";
// import Constructor from "./Constructor/Constructor.tsx";
// import DOM from "./DOM/DOM.tsx";
// import Storage from "./Storage/Storage.tsx";
// import MutationObserver from "./MutationObserver/MutationObserver.tsx";

export const JsChildren = [
  { path: "", element: <JsPreview /> },
  { path: "Intro", element: <Intro /> },
  { path: "Variables", element: <Variables /> },
  { path: "Hoisting", element: <Hoisting /> },
  { path: "Primitives", element: <Primitives /> },
  { path: "Transformation", element: <Transformation /> },
  { path: "Operators", element: <Operators /> },
  { path: "Switch", element: <Switch /> },
  { path: "Loops", element: <Loops /> },
  { path: "FunctionTypes", element: <FunctionTypes /> },
  { path: "Objects", element: <Objects /> },
  // { path: "ArrowVsClassic", element: <ArrowVsClassic /> },
  // { path: "Closures", element: <Closures /> },
  // { path: "Numbers", element: <Numbers /> },
  // { path: "Strings", element: <Strings /> },
  // { path: "Objects", element: <Objects /> },
  // { path: "Arrays", element: <Arrays /> },
  // { path: "Promises", element: <Promises /> },
  // { path: "Fetch", element: <Fetch /> },
  // { path: "Classes", element: <Classes /> },
  // { path: "Constructor", element: <Constructor /> },
  // { path: "DOM", element: <DOM /> },
  // { path: "Storage", element: <Storage /> },
  // { path: "MutationObserver", element: <MutationObserver /> }
];