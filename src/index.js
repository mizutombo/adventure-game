import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'; // in _forReference folder
// import './index.css';  // in _forReference folder

//turning header into component
function Pioneer(props) {
  return (
    <h1>Welcome to Pioneer Square!</h1>
  )
}

ReactDOM.render(
  <Pioneer />,
  document.getElementById('root')
);
