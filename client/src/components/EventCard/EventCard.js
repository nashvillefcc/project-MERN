import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventCardStyle';

import LeftSection from './LeftSection';
import CenterSection from './CenterSection';
import RightSection from './RightSection';

function EventCard({ event }) {
  const { attending } = event;
  return (
    <Wrapper>
      <LeftSection>{attending.length}</LeftSection>
      <CenterSection eventData={event} />
      <RightSection eventData={event} />
    </Wrapper>
  );
}

EventCard.propTypes = {};

export default EventCard;
