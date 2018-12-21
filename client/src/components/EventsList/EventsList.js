import React from 'react';
import PropTypes from 'prop-types';
import sampleEvents from './sampleData';

import Wrapper from './EventsListStyle';
import EventCard from '../EventCard';

function EventsList({ events }) {
  events = sampleEvents.map(event => (
    <EventCard key={event._id} event={event} />
  ));

  return <Wrapper>{events}</Wrapper>;
}

EventsList.propTypes = {};

export default EventsList;
