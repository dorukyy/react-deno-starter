// src/router.tsx
import { createBrowserRouter } from 'react-router-dom'
import Home from "./pages/Home.tsx"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
])

export default Router