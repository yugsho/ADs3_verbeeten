import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './donatie.css';
import './home.css';
import Main from './main';
import Doneer from './doneer';
import Donatie from './donatie';
import Home from './home';

ReactDOM.render(
  <React.StrictMode>
  <Donatie/>
  </React.StrictMode>,
  document.getElementById('root')
);
