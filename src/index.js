import React from 'react';
import ReactDOM from 'react-dom';

import tourPDX from './venue.js';
import PdxTourApp from '.PdxTourApp.js';

import './index.css'; 



let app = <PdxTourApp/>;

ReactDOM.render(
  <div>
    <h1>PDX React Tour</h1>
    {app}
  </div>,
  document.getElementById('root')
);
