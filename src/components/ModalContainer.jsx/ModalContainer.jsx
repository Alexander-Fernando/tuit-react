import React from 'react';
import { Modal } from '@material-ui/core';

import './ModalContainer.scss';

const ModalContainer = ({ isOpenModal, closeModal, children }) => {
  return (
    <Modal
      className="modal-container"
      open={isOpenModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  );
};

export default ModalContainer;
