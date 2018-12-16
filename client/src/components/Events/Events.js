import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventsStyle';

const Events = props => {
  return (
    <Wrapper>
      <div>
        <div>search</div>
        <div>sort</div>
        <div>events list</div>
      </div>
    </Wrapper>
  );
};

Events.propTypes = {};

export default Events;
