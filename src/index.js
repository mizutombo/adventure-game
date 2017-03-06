import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'; // in _forReference folder
// import './index.css';  // in _forReference folder

//turning header into component
function Pioneer(props) {
  function handleClick(e) {
    e.preventDefault();

    ReactDOM.render(
      <Zoo />,
      document.getElementById('root')
    )
  }

  return (
    <div>
      <h1>Welcome to Pioneer Square!</h1>
      <button onClick={handleClick}>Next Scene</button>
  </div>
  )
}

function Zoo(props) {
  return (
    <div>
      <h1>You are at the Zoo</h1>
    </div>
  )
}

ReactDOM.render(
  <Pioneer />,
  document.getElementById('root')
);
