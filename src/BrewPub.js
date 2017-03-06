import React, { Component } from 'react';

import;
import;

export default class BrewPub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }  
}

const ChangeVenueCCP = props => {
  return (
    <button onClick={props.onVenueChange}>
      Go to Council Crest Park
    </button>
  );
};
const ChangeVenuePB = props => {
  return (
    <button onClick={props.onVenueChange}>
      Go to Powell's Books
    </button>
  );
};
const ChangeVenueHome = props => {
  return (
    <button onClick={props.onVenueChange}>
      Go to Home Page
    </button>
  );
};

render() {
  return (
    <div>
      <p>ChangeVenueCCP</p>
      <p>ChangeVenuePB</p>
      <p>ChangeVenueHome</p>
    </div>
  )
}