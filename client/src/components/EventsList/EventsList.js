import React from 'react';
import PropTypes from 'prop-types';
import sampleEvents from './sampleData';

import Wrapper from './EventsListStyle';
import EventCard from '../EventCard';

function EventsList({ selected, selectEventHandler }) {
  const events = sampleEvents.map((event, i) => {
    const isSelected = i === selected;
    return (
      <EventCard
        key={event._id}
        event={event}
        isSelected={isSelected}
        selectEventHandler={selectEventHandler}
        eventIndex={i}
      />
    );
  });

  return <Wrapper>{events}</Wrapper>;
}

EventsList.propTypes = {};

export default EventsList;
