import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'; 

import PdxTourApp from './PdxTourApp';
import BrewPub from './BrewPub';
import CouncilCrest from './CouncilCrest';

let app = <PdxTourApp/>;

ReactDOM.render(
  <div>
    <h1>PDX React Tour</h1>
    {app}
  </div>,
  document.getElementById('root')
);
