import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventsListStyle';
function EventsList({ events }) {
  const sampleEvents = [
    { name: 'lorem', id: 0 },
    { name: 'ipsum' },
    { name: 'Nash Smash' }
  ];
  events = sampleEvents.map(event => <p>{event.name}</p>);

  return <Wrapper>{events}</Wrapper>;
}

EventsList.propTypes = {};

export default EventsList;
