import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './EventPanelAttendingStyle';

import EventAttendeeCard from '../EventAttendee';

const EventPanelAttending = ({ attending }) => {
  console.log('attending', attending);
  const attendees = attending
    .sort((a, b) => b.connections - a.connections)
    .map(attendee => <EventAttendeeCard member={attendee} key={attendee.id} />);
  return (
    <Wrapper>
      <div>{attendees}</div>
    </Wrapper>
  );
};

EventPanelAttending.propTypes = {};

export default EventPanelAttending;
