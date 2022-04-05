import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import './fonts/Geometria/Geometria-Bold.ttf';
import './fonts/Geometria/Geometria-ExtraBold.ttf';
import './fonts/Geometria/Geometria-Light.ttf';
import { App } from './App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
