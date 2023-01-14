import React, { Fragment, useState } from "react";
import "./messages.css";
import { Button, Input } from "antd";
import { useHistory } from "react-router-dom";
import ProfileHeader from "../../components/profile_header";
import ModalSlide from "../../components/modal_slide";
import addIcon from "../../assets/profile/plus.svg";
import closeIcon from "../../assets/profile/closeIcon.svg";
import messageIcon from "../../assets/profile/message.svg";
import telegramIcon from "../../assets/profile/telegram.svg";
import { toast } from "react-toastify";
const { TextArea } = Input;

const ProfileMessages = () => {
  const history = useHistory();
  const array = [1, 2, 3, 4, 5, 6];
  const secondArray = [1, 2, 3];
  const [tab, setTab] = useState(0);
  const [addModal, setAddModal] = useState(false);

  return (
    <div className="profile-addresses">
      <ProfileHeader
        backHandler={() => history.push("/profile")}
        title={"پیام‌های من"}
      />
      {/* addresses list */}
      <div className="profile-saved-list">
        <div className="profile-saved-tabs">
          <div
            className={tab === 0 ? "tab-selected" : null}
            onClick={() => setTab(0)}
          >
            پیام دریافتی <div>۲۴</div>
          </div>
          <div
            className={tab === 1 ? "tab-selected" : null}
            onClick={() => setTab(1)}
          >
            پیام ارسالی <div>۱۵</div>
          </div>
        </div>
        {tab === 0 && (
          <Fragment>
            {array.map((arr, index) => (
              <div className="profile-messages-item" key={index}>
                <img src={messageIcon} alt="message" />
                <div>
                  <div className="bold">عنوان پیام ارسالی</div>
                  <div>۲ روز پیش</div>
                </div>
              </div>
            ))}
          </Fragment>
        )}
        {tab === 1 && (
          <Fragment>
            {secondArray.map((arr, index) => (
              <div className="profile-messages-item" key={index}>
                <img src={telegramIcon} alt="message" />
                <div>
                  <div className="bold">عنوان پیام ارسالی</div>
                  <div>۲ روز پیش</div>
                </div>
              </div>
            ))}
          </Fragment>
        )}
      </div>
      {/* add address modal */}
      <ModalSlide
        visible={addModal}
        setVisible={setAddModal}
        hideClose
        hideCurve
      >
        <div className="profile-addresses-add-modal">
          <div className="profile-addresses-add-modal-header">
            <span>ثبت پیام جدید</span>
            <img
              onClick={() => setAddModal(false)}
              src={closeIcon}
              alt="close"
            />
          </div>
          {/* message title */}
          <div className="profile-addresses-add-form-field">
            <div>عنوان پیام</div>
            <div>
              <Input className="mv-input" />
            </div>
          </div>
          {/* message content */}
          <div className="profile-addresses-add-form-field">
            <div>متن پیام</div>
            <div>
              <TextArea
                style={{
                  minHeight: 200,
                }}
                placeholder="متن خود را بنویسید"
                className="mv-input mv-textarea"
              />
            </div>
          </div>
          {/* action area */}
          {addModal && (
            <div className="profile-addresses-add-modal-actions">
              <Button
                onClick={() => {
                  setAddModal(false);
                  toast.success("پیام با موفقیت ارسال شد.");
                }}
                className="mv-button"
              >
                ارسال پیام
              </Button>
              <Button
                onClick={() => {
                  setAddModal(false);
                }}
                className="mv-button"
              >
                بازگشت
              </Button>
            </div>
          )}
        </div>
      </ModalSlide>
      {/* add address button */}
      <Button
        onClick={() => setAddModal(true)}
        className="mv-button profile-addresses-add-button"
      >
        <img src={addIcon} alt="add" />
        <span>ایجاد پیام</span>
      </Button>
    </div>
  );
};

export default ProfileMessages;
