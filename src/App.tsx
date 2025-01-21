// src/App.tsx
import { RouterProvider } from 'react-router-dom'
import router from './Router.tsx'
import './styles/main.scss'
import React from "react";

function App() {
  return <RouterProvider router={router} />
}

export default App