import React, { Component } from 'react';

import tourPDX from './venue.js';

import BrewPub from './BrewPub';
import CouncilCrest from './CouncilCrest';

function PickVenue(props) {
  const buttons = props.value.map(venue => {
    return (
      <p key={venue.id}>
        <button id={venue.id}>
          {venue.site}
        </button>
      </p>);
  });
  return (
    <ul>
      {buttons}
    </ul>);
}

class Option extends React.Component {
  render (props) {
    return (
    <div>
      <p id={this.props.id}>{this.props.site}</p>
      <image src={this.props.image}/>
      <ul>
        <Activities value={this.props.activities}/>
        <Destinations value={this.props.destinations}/>
      </ul>
    </div>
    );
  }
}

export default class PdxTourApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venueState: venueChoice,
    }
  }
  render() {
    const site = this.state.venueState.site;
    const message = this.state.venueState.message;
    const image = this.state.venueState.image;
    const activities = this.state.venueState.actvities;
    const destinations = this.state.venueState.destinations;
    const id = this.state.venueState.id;
    return (
      <div>
        <Option 
          site={site}
          message={message}
          image={image}
          activities={activities}
          destinations={destinations}
        />
      </div>
    ); }

//////////////////////////

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

  
  const venues = [
    {
      site: 'PDX Tour Home Page',
      message: 'placeholder msg',
      id: 0,
    },
    {
      site: 'Powell\'s Books',
      message: 'Welcome to Powell\'s Books.', 
      id: 1,
    },
    {
      site: 'Deschutes Brewery',
      message: 'Welcome to Deschutes Brewery. Have a tasty beer!',
      id: 2,
    },
    {
      site: 'Council Crest Park',
      message: 'Welcome to Council Crest Park. Have a nice picnic!',
      id: 3,
    }
  ];

  function VenueMsg(props) {
    console.log('jkl', props.venue.message);
    return
      <p>{props.venue.message}</p>
  }

  render() {
    return (
      <div>
        <ChangeVenue onVenueChange={() => {
          this.
        }};

      </div>
    );
  }  
}