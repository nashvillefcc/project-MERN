import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventAttendeeStyle';
const EventAttendee = ({ member }) => {
  const connections = member.connections ? member.connections : 0;
  const name = member.name.split(' ');
  return (
    <Wrapper connections={connections}>
      <div>
        <img
          src={`https://source.unsplash.com/60x60/?face,${member.name}`}
          alt="user profile"
        />
      </div>
      <div>
        <p>{name[0]}</p>
        <p>{name[1]}</p>
        <p>{connections} shared groups</p>
      </div>
    </Wrapper>
  );
};

EventAttendee.propTypes = {};

export default EventAttendee;
