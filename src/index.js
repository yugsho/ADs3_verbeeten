import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './donatie.css';
import './home.css';
import Main from './main';
import Doneer from './doneer';
import Dbdon from './dbdon'

ReactDOM.render(
  <React.StrictMode>
  <Doneer/>
  </React.StrictMode>,
  document.getElementById('root')
);
