import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './EventPanelAttendingStyle';

import EventAttendeeCard from '../EventAttendee';

const EventPanelAttending = ({ attending }) => {
  const attendees = attending
    .sort((a, b) => b.connections - a.connections)
    .map(attendee => <EventAttendeeCard member={attendee} key={attendee.id} />);
  return (
    <Wrapper>
      <header>
        <h3>Attendees</h3>
      </header>
      <div>{attendees}</div>
    </Wrapper>
  );
};

EventPanelAttending.propTypes = {};

export default EventPanelAttending;
