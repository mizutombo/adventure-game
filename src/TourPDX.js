import React from 'react';

const home = {
  site: 'PDX Tour Home Page',
  message: 'Welcome to Portland. Take a tour!',
  image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Portland,_Oregon_by_Bill_Young.jpg',
  destinations: [books, brews, park],
  id: 1,
};

const books = {
  site: 'Powell\'s Books',
  message: 'Welcome to Powell\'s Books. Read a book!',
  image:  'http://www.relaxghost.com/wp-content/uploads/2014/04/Portland2014-00362.jpg',
  activities: [read],
  destinations: [brews, parks, home],
  id: 2,
};

const brews = {
  site: 'Deschutes Brewery',
  message: 'Welcome to Deschutes Brewery. Have a tasty beer!',
  image: 'https://chicksdigbeer.files.wordpress.com/2011/12/deschutes-beer-w-mustard-in-bckgrd.jpg',
  activities: [drink],
  destinations: [books, parks, home],
  id: 3,
};

const park = {
  site: 'Council Crest Park',
  message: 'Welcome to Council Crest Park. Have a nice picnic or play frisbee!',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Portland,_Oregon_from_Council_Crest_Park.jpg',
  activities: [picnic, frisbee],
  destinations: [books, brews, home],
  id: 4,
};

const venueOptions = [home, books, brews, park];

function TourPDX(props) {
  const venueChoice = venueOptions.filter(venue => {
    if (props === venue.id) {
      return venue;
    }
  });
  return venueChoice[0];
}

export default TourPDX;