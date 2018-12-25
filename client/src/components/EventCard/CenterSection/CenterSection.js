import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, GroupName, Attending } from './CenterSectionStyle';
function CenterSection({ eventData }) {
  const { eventName, name, attending } = eventData;
  return (
    <Wrapper>
      <h4>{eventName}</h4>
      <GroupName>{name}</GroupName>
      <Attending>{attending.length} going</Attending>
    </Wrapper>
  );
}

CenterSection.propTypes = {};

export default CenterSection;
