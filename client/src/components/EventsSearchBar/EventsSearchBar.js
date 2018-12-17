import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventSearchBarContainerStyle';

function EventsSearchBar({ onChangeHandler, searchValue, onSearchSubmit }) {
  return (
    <form onSubmit={onSearchSubmit}>
      <input
        value={searchValue}
        onChange={e => onChangeHandler(e)}
        plaeholder="Enter City"
      />
      <button type="sumit">Search</button>
    </form>
  );
}

EventsSearchBar.propTypes = {};

export default EventsSearchBar;
