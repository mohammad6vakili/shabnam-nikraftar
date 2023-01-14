import React from "react";
import "./style.css";

const ModalSlide = ({
  visible,
  setVisible,
  hideClose,
  hideCurve,
  children,
}) => {
  return (
    <div className={`modal-slide ${visible ? "modal-slide-open" : ""}`}>
      <div
        onClick={() => setVisible(false)}
        className={`modal-slide-overlay ${
          visible ? "modal-slide-overlay-open" : ""
        }`}
      ></div>
      <div
        style={hideCurve ? { borderRadius: "unset" } : null}
        className="modal-slide-body"
      >
        {!hideClose && (
          <div className="modal-slide-close-button">
            <div onClick={() => setVisible(false)}></div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default ModalSlide;
