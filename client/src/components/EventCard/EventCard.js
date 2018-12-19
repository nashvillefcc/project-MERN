import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventCardStyle';

function EventCard({ event }) {
  return (
    <Wrapper>
      <p>{event}</p>
    </Wrapper>
  );
}

EventCard.propTypes = {};

export default EventCard;
