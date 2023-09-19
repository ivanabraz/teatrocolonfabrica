import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import i18n from './config/i18n';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
=======

import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
>>>>>>> 3927ea4a8d894d1c0d886d97b751677aef046e0f

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
<<<<<<< HEAD
      <Router>
        <Suspense fallback='loading'>
          <App />
        </Suspense>
      </Router>
    </I18nextProvider>
=======
      <Suspense fallback='loading'>
        <App />
        </Suspense>
      </I18nextProvider>
>>>>>>> 3927ea4a8d894d1c0d886d97b751677aef046e0f
  </React.StrictMode>
);

reportWebVitals();