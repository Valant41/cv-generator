import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Buffer } from 'buffer';

import './index.css';
import App from './App.jsx';

// ✅ Définit Buffer dans le navigateur
window.Buffer = Buffer;

// ✅ Injecte dynamiquement le script AdSense dès que possible
(function insertAdSenseScript() {
  const existingScript = document.querySelector(
    'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
  );

  if (!existingScript) {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8454277155705140";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }
})();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
