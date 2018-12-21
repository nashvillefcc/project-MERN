import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventSearchBarContainerStyle';

import EventsSearchBar from './EventsSearchBar';

class EventsSearchBarContainer extends Component {
  state = { searchValue: '' };
  onChangeHandler = e => {
    e.preventDefault();
    const searchValue = e.target.value;
    this.setState(prevState => ({
      searchValue
    }));
  };

  onSearchSubmit = e => {
    e.preventDefault();
    console.log('Searching for ', this.state.searchValue);
  };

  render() {
    return (
      <Wrapper>
        <EventsSearchBar
          searchValue={this.state.searchValue}
          onChangeHandler={this.onChangeHandler}
          onSearchSubmit={this.onSearchSubmit}
        />
      </Wrapper>
    );
  }
}

EventsSearchBarContainer.propTyes = {};

export default EventsSearchBarContainer;
