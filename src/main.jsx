import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Buffer } from 'buffer'; // ✅ Ajouté ici pour le support navigateur

import './index.css';
import App from './App.jsx';

// ✅ Polyfill pour que Buffer soit défini dans le navigateur
window.Buffer = Buffer;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
