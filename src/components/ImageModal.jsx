import React from "react";

export default function ImageModal({ src, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
        <span className="close-icon">X</span>
        </button>
        <img src={src} alt="enlarged" />
      </div>
    </div>
  );
}
