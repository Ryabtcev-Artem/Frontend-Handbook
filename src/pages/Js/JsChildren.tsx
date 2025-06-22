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
import Closures from "./Closures/Closures.tsx";
import Curry from "./Curry/Curry.tsx";
import Arrow from "./Arrow/Arrow.tsx";
import Generators from "./Generators/Generators.tsx";
import Objects from "./Objects/Objects.tsx";
import Context from "./Context/Context.tsx";
import This from "./This/This.tsx";
import New from "./New/New.tsx";
import Prototypes from "./Prototypes/Prototypes.tsx";
import PrimitivesMethods from "./PrimitivesMethods/PrimitivesMethods.tsx";
import Nums from "./Nums/Nums.tsx";
import Strings from "./Strings/Strings.tsx";
import Arrays from "./Arrays/Arrays.tsx";
import MapAndSet from "./MapAndSet/MapAndSet.tsx";
import SettimeoutAndSetinterval
  from "./SettimeoutAndSetinterval/SettimeoutAndSetinterval.tsx";
import Promises from "./Promises/Promises.tsx";
import Fetch from "./Fetch/Fetch.tsx";
import Classes from "./Classes/Classes.tsx";
import Storage from "./Storage/Storage.tsx";
import MutationObserver from "./MutationObserver/MutationObserver.tsx";

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
  { path: "Closures", element: <Closures /> },
  { path: "Curry", element: <Curry /> },
  { path: "Arrow", element: <Arrow /> },
  { path: "Generators", element: <Generators /> },
  { path: "Objects", element: <Objects /> },
  { path: "Context", element: <Context /> },
  { path: "This", element: <This /> },
  { path: "Prototypes", element: <Prototypes /> },
  { path: "New", element: <New /> },
  { path: "PrimitivesMethods", element: <PrimitivesMethods /> },
  { path: "Nums", element: <Nums /> },
  { path: "Strings", element: <Strings /> },
  { path: "Arrays", element: <Arrays /> },
  { path: "MapAndSet", element: <MapAndSet /> },
  { path: "SettimeoutAndSetinterval", element: <SettimeoutAndSetinterval /> },
  { path: "Promises", element: <Promises /> },
  { path: "Fetch", element: <Fetch /> },
  { path: "Classes", element: <Classes /> },
  { path: "Storage", element: <Storage /> },
  { path: "MutationObserver", element: <MutationObserver /> }
];