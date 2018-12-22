import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './CenterSectionStyle';
function CenterSection({ eventData }) {
  const { eventName, name, attending } = eventData;
  return (
    <Wrapper>
      <h4>{eventName}</h4>
      <p>{name}</p>
      <p>{attending.length} going</p>
    </Wrapper>
  );
}

CenterSection.propTypes = {};

export default CenterSection;
