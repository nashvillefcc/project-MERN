import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventViewStyle';

function Event({ event }) {
  return (
    <Wrapper>
      <div>Event Detail</div>
      <div>Attendees</div>
    </Wrapper>
  );
}

Event.propTypes = {};

export default Event;
