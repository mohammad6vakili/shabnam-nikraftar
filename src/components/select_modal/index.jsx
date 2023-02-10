import React, { Fragment, useState } from "react";
import "./style.css";
import ModalSlide from "../modal_slide";

const SelectModal = ({ value, setValue, data, placeHolder }) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <Fragment>
      <ModalSlide visible={isModal} setVisible={setIsModal}>
        <div className="select-modal-header bold">لاین های زیبایی</div>
        <div style={{ paddingBottom: "24px" }}>
          {data.map((dd, index) => (
            <div
              className="select-modal-option"
              onClick={() => {
                setIsModal(false);
                setValue(dd.title);
              }}
              key={index}
            >
              <div
                className={
                  value === dd.title ? "select-modal-option-selected" : null
                }
              >
                {value === dd.title && <div></div>}
              </div>
              <div>{dd.title}</div>
            </div>
          ))}
        </div>
      </ModalSlide>
      <div className="select-modal" onClick={() => setIsModal(!isModal)}>
        {value ? (
          <span>{value}</span>
        ) : (
          <span style={{ color: "#626262" }}>{placeHolder}</span>
        )}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9188 8.17993H11.6888H6.07877C5.11877 8.17993 4.63877 9.33993 5.31877 10.0199L10.4988 15.1999C11.3288 16.0299 12.6788 16.0299 13.5088 15.1999L15.4788 13.2299L18.6888 10.0199C19.3588 9.33993 18.8788 8.17993 17.9188 8.17993Z"
            fill="#626262"
          />
        </svg>
      </div>
    </Fragment>
  );
};
export default SelectModal;
