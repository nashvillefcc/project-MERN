import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventCardStyle';

import LeftSection from './LeftSection';
import CenterSection from './CenterSection';
import RightSection from './RightSection';

function EventCard({ event }) {
  const { name, eventName, date, time, attending } = event;
  return (
    <Wrapper>
      <LeftSection>{attending.length} ◊</LeftSection>
      <CenterSection>{eventName}</CenterSection>
      <RightSection>{date}</RightSection>
    </Wrapper>
  );
}

EventCard.propTypes = {};

export default EventCard;
