import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Importación necesaria
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* BrowserRouter debe ser el padre de App para que Sidebar funcione */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)