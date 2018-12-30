import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './EventsResultsStyle';
import { colors } from '../../styles/variables';

import Heading from '../Helpers/Heading/Heading';
import EventsSearchBarContainer from '../EventsSearchBar/EventsSearchBarContainer';
import EventsList from '../EventsList/EventsList';

function EventsResult(props) {
  return (
    <Wrapper>
      <Heading color={colors.thirdColor}>
        Find your kindred spirts from Meetup.com
      </Heading>
      <EventsSearchBarContainer />
      <div>sort</div>
      <EventsList {...props} />
    </Wrapper>
  );
}

EventsResult.propTypes = {};

export default EventsResult;
