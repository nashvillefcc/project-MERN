import React, { Component } from 'react';
import { breakPoints } from '../../styles/variables';
import EventPanel from '../EventPanel';
import EventsResult from '../EventsResult';
import ModalContainer from '../Helpers/Modal';
import Wrapper from './EventsStyle';
import sampleData from './sampleData';

class Events extends Component {
  state = {
    events: [],
    showModal: false,
    selectedEventIndex: 0,
    windowWidth: 'mid-size'
  };

  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
      showModal: !prevState.showModal
    }));
  };

  selectEventHandler = (e, eventIndex) => {
    e.stopPropagation();
    if (this.state.windowWidth === 'full-size') {
      this.setState(prevState => ({
        ...prevState,
        selectedEventIndex: eventIndex
      }));
    } else if (this.state.windowWidth !== 'full-size') {
      this.setState(prevState => ({
        ...prevState,
        selectedEventIndex: eventIndex
      }));
      this.toggleModal();
    }
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
  async componentDidMount() {
    //get events data
    //set width of window to state
    this.widthBreakpointHandler();
    window.addEventListener('resize', this.widthBreakpointHandler.bind(this));
    this.setState(prevState => ({
      ...prevState,
      events: sampleData
    }));
    const url_string = window.location;
    const url = new URL(url_string);
    const token = url.searchParams.get('code');
    if (token) {
      const events = await fetch(`/${token}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log(events);
      // TODO update component props to match returned fields of events
      // this.setState(prevState => ({
      //   ...prevState,
      //   events
      // }));
    }
  }
  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.widthBreakpointHandler.bind(this)
    );
  }
  render() {
    const { events, showModal, selectedEventIndex, windowWidth } = this.state;
    return (
      <Wrapper>
        <EventsResult
          events={events}
          selected={selectedEventIndex}
          selectEventHandler={this.selectEventHandler}
          fullWidth={windowWidth === 'full-size'}
        />
        {windowWidth === 'full-size' ? (
          <EventPanel event={events[selectedEventIndex] || null} />
        ) : (
          <ModalContainer showModal={showModal} toggleModal={this.toggleModal}>
            <EventPanel event={events[selectedEventIndex] || null} />
          </ModalContainer>
        )}
      </Wrapper>
    );
  }
}

Events.propTypes = {};

export default Events;
