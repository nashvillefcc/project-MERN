import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './RightSectionStyle';
function RightSection({ eventData }) {
  console.log('event', eventData);
  const { date, time } = eventData;
  return (
    <Wrapper>
      <p>{date}</p>
      <p>{time}</p>
    </Wrapper>
  );
}

RightSection.propTypes = {};

export default RightSection;
