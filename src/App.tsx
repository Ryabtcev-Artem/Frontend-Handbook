import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import ScrollToTop from "./hooks/ScrollToTop.ts";
function App() {
  ScrollToTop()
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
