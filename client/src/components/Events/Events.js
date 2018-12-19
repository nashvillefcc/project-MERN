import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventsStyle';

import EventsResult from '../EventsResult';
import EventView from '../EventView/EventView';
class Events extends Component {
  state = { events: [] };

  componentDidMount() {
    //get events data
  }

  render() {
    const { events } = this.state;
    return (
      <Wrapper>
        <EventsResult events={events} />
        <EventView />
      </Wrapper>
    );
  }
}

Events.propTypes = {};

export default Events;
