import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'; // in _forReference folder
// import './index.css';  // in _forReference folder

//turning header into component
function Pioneer(props) {
  return (
    <div>
      <h1>Welcome to Pioneer Square!</h1>
      <button>Click me</button>
  </div>
  )
}

ReactDOM.render(
  <Pioneer />,
  document.getElementById('root')
);
