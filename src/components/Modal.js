import React from 'react';
import './Modal.css';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {children}
        <Tooltip title="Close Popup" arrow>
          <IconButton type="submit" color="primary" aria-label="search" onClick={onClose}>
            <CloseOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Modal;
