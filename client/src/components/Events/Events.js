import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventsStyle';
import { breakPoints } from '../../styles/variables';
import EventsResult from '../EventsResult';
import EventView from '../EventView/EventView';
import ModalContainer from '../Helpers/Modal';
class Events extends Component {
  state = {
    events: [],
    showModal: false,
    selectedEvent: {},
    windowWidth: 'mid-size'
  };

  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
      showModal: !prevState.showModal
    }));
  };

  widthBreakpointHandler() {
    //sets state.windowWidth if width of window moves over breakpoint
    if (this.state.windowWidth === 'mid-size') {
      if (window.innerWidth > breakPoints.mid) {
        this.setState(prevState => {
          return { ...prevState, windowWidth: 'full-size' };
        });
        return;
      }
    } else if (this.state.windowWidth === 'full-size') {
      if (window.innerWidth < breakPoints.mid) {
        this.setState(prevState => {
          return { ...prevState, windowWidth: 'mid-size' };
        });
        return;
      }
    }
  }
  componentDidMount() {
    //get events data
    //set width of window to state
    this.widthBreakpointHandler();
    window.addEventListener('resize', this.widthBreakpointHandler.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.widthBreakpointHandler.bind(this)
    );
  }
  render() {
    const { events, showModal, selectedEvent, windowWidth } = this.state;
    return (
      <Wrapper>
        <EventsResult events={events} />
        {windowWidth === 'full-size' ? (
          <EventView eventData={selectedEvent || null} />
        ) : (
          <ModalContainer showModal={showModal} toggleModal={this.toggleModal}>
            <EventView eventData={selectedEvent || null} />
          </ModalContainer>
        )}
      </Wrapper>
    );
  }
}

Events.propTypes = {};

export default Events;
