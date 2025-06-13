import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Buffer } from 'buffer'; // ✅ Support navigateur

import './index.css';
import App from './App.jsx';

// ✅ Polyfill pour que Buffer soit défini dans le navigateur
window.Buffer = Buffer;

// ✅ Injection du script Google AdSense
const script = document.createElement("script");
script.async = true;
script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8454277155705140";
script.crossOrigin = "anonymous";
document.head.appendChild(script);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
