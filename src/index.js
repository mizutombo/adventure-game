import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'; // in _forReference folder
// import './index.css';  // in _forReference folder

//turning header into component
function Pioneer(props) {
  function goToTheZoo(e) {
    e.preventDefault();

    ReactDOM.render(
      <Zoo />,
      document.getElementById('root')
    )
  }

  function getDrink(e) {
    e.preventDefault();
    alert('You had a martini with your friend and caught up on the most recent gossip. You caught the next max to the Zoo and are a few minutes behind schedule')
  }

  return (
    <div>
      <h1>Welcome to Pioneer Square!</h1>
      <p>You ran into an old friend while running to catch the max to go to the zoo. Run for the max or have a drink with your friend and catch the next one?</p>
      <button onClick={goToTheZoo}>Go to the Zoo</button>
      <button onClick={getDrink}>Have a drink</button>
  </div>
  )
}

function Zoo(props) {
  function handleClick(e) {
    e.preventDefault();

    ReactDOM.render(
      <CouncilCrest />,
      document.getElementById('root')
    )}

    return (
      <div>
        <h1>You are at the Zoo</h1>
        <button onClick={handleClick}>Next Scene</button>
      </div>
    )
  }

function CouncilCrest (props) {
  return (
    <div>
      <h1>You are at Council Crest</h1>
    </div>
  )
}

ReactDOM.render(
  <Pioneer />,
  document.getElementById('root')
);
