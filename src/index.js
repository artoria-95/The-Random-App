import React from 'react';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import español from './Translations/es/global.json';
import ingles from './Translations/en/global.json';
import groot from './Translations/groot/global.json';
import nyan from './Translations/nyan/global.json';

i18next.init({
  interpolation: {escapeValue:false},
  lng: "en",
  resources:{
    en:{
      global: ingles,
    },
    es: {
      global: español,
    },
    ny: {
      global: nyan,
    },
    gr: {
      global: groot,
    }

  }
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
