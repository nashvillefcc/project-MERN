import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, GroupName, Attending } from './CenterSectionStyle';
function CenterSection({ eventData, selected }) {
  const { eventName, name, attending } = eventData;
  return (
    <Wrapper selected={selected}>
      <h4>{eventName}</h4>
      <GroupName selected={selected}>{name}</GroupName>
      <Attending selected={selected}>{attending.length} going</Attending>
    </Wrapper>
  );
}

CenterSection.propTypes = {};

export default CenterSection;
