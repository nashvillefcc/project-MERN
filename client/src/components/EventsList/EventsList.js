import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventsListStyle';
import EventCard from '../EventCard';

function EventsList({ selected, selectEventHandler, events }) {
  const eventsCards = events.map((event, i) => {
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

  return <Wrapper>{eventsCards}</Wrapper>;
}

EventsList.propTypes = {};

export default EventsList;
