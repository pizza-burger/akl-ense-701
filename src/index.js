import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import homePage from './homePage.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <homePage />
  </React.StrictMode>,
  document.getElementById('root')
);