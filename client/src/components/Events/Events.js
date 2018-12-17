import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventsStyle';
import { colors } from '../../styles/variables';
import Heading from '../Helpers/Heading';
import EventsSearchBarContainer from '../EventsSearchBar';
const Events = props => {
  return (
    <Wrapper>
      <div>
        <Heading color={colors.thirdColor}>
          Find your kindred spirts from Meetup.com
        </Heading>
        <EventsSearchBarContainer />
        <div>sort</div>
        <div>events list</div>
      </div>
    </Wrapper>
  );
};

Events.propTypes = {};

export default Events;