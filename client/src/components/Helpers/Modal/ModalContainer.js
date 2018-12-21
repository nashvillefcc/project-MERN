import React from 'react';
import PropTypes from 'prop-types';

import ModalController from './ModalController';
import Wrapper from './style/ModalContainerStyle';
import CloseButton from './style/CloseModalButtonStyle';

function ModalContainer(props) {
  //opens modal depending on ModalType

  const { showModal, toggleModal, children } = props;
  console.log('this.props.children', children);
  return !showModal ? null : (
    <Wrapper>
      <CloseButton onClick={toggleModal} role="button">
        X
      </CloseButton>
      {children}
    </Wrapper>
  );
}

ModalContainer.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.object
};

export default ModalContainer;
