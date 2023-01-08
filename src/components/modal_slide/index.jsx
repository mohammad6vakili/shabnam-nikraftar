import React from "react";
import "./style.css";

const ModalSlide = ({ visible, setVisible, children }) => {
  return (
    <div className={`modal-slide ${visible ? "modal-slide-open" : ""}`}>
      <div
        onClick={() => setVisible(false)}
        className={`modal-slide-overlay ${
          visible ? "modal-slide-overlay-open" : ""
        }`}
      ></div>
      <div className="modal-slide-body">
        <div className="modal-slide-close-button">
          <div onClick={() => setVisible(false)}></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalSlide;
