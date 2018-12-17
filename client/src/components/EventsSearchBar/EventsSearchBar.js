import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './EventSearchBarContainerStyle';

function EventsSearchBar({ onChangeHandler, searchValue, onSearchSubmit }) {
  return (
    <form onSubmit={e => onSearchSubmit(e)}>
      <input
        value={searchValue}
        onChange={e => onChangeHandler(e)}
        plaeholder="Enter City"
      />
      <button type="sumit">Search</button>
    </form>
  );
}

EventsSearchBar.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  onSearchSubmit: PropTypes.func.isRequired
};

export default EventsSearchBar;
