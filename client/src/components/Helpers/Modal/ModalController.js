import React from 'react';
import PropTypes from 'prop-types';

import EventView from '../../EventView';

function ModalController({ modalType, modalData }) {
  switch (modalType) {
    case 'event':
      return <EventView event={modalData}>Event</EventView>;
    default:
      return null;
  }
}
ModalController.propTypes = {
  modalType: PropTypes.string.isRequired,
  modalData: PropTypes.object
};
export default ModalController;
