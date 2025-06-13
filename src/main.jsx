import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // ✅ ajoute cette ligne
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ ajoute cette balise autour de <App /> */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
