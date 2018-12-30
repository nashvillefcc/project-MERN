import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventCardStyle';

import LeftSection from './LeftSection';
import CenterSection from './CenterSection';
import RightSection from './RightSection';

function EventCard({ event, isSelected, selectEventHandler, eventIndex }) {
  const { attending } = event;
  return (
    <Wrapper
      selected={isSelected}
      onClick={e => selectEventHandler(e, eventIndex)}
    >
      <LeftSection selected={isSelected}>{attending.length}</LeftSection>
      <CenterSection eventData={event} selected={isSelected} />
      <RightSection eventData={event} selected={isSelected} />
    </Wrapper>
  );
}

EventCard.propTypes = {};

export default EventCard;
