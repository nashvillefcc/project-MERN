import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventAttendeeStyle';
const EventAttendee = ({ member }) => {
  console.log('member', member.name);
  const connections = member.connections ? member.connections : 0;
  const name = member.name.split(' ');
  return (
    <Wrapper>
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
