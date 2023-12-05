import React from "react";

function Modal({ isOpen, onClose, content }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button>test</button>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
}

export default Modal;
