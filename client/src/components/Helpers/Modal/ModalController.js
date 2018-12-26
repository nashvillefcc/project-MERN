import React from 'react';
import PropTypes from 'prop-types';

import EventPanel from '../../EventPanel';

function ModalController({ modalType, modalData }) {
  switch (modalType) {
    case 'event':
      return <EventPanel event={modalData}>Event</EventPanel>;
    default:
      return null;
  }
}
ModalController.propTypes = {
  modalType: PropTypes.string.isRequired,
  modalData: PropTypes.object
};
export default ModalController;
