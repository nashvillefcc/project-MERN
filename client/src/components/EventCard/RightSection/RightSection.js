import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './RightSectionStyle';
function RightSection({ eventData, selected }) {
  const { date, time } = eventData;
  return (
    <Wrapper selected={selected}>
      <p>{date}</p>
      <p>{time}</p>
    </Wrapper>
  );
}

RightSection.propTypes = {};

export default RightSection;
