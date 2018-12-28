import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventAttendeeStyle';
const EventAttendee = ({ member }) => {
  console.log('member', member);
  const connections = member.connections ? member.connections : 0;
  return (
    <Wrapper>
      <div>
        <p>{member.name}</p>
        <p>{connections} shared groups</p>
      </div>
    </Wrapper>
  );
};

EventAttendee.propTypes = {};

export default EventAttendee;
