import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from './routes.tsx'
import NotFound from "./pages/NotFound/NotFound.tsx";
const currentTheme = localStorage.getItem('user-theme')
if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark')
}
const router = createBrowserRouter([
  {
  element: <App />,
  path: '/',
  children: routes,
  },
  {
    path: '*',
    element: <NotFound />
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
