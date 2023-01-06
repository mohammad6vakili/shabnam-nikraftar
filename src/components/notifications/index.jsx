import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { setNotifications } from "../../features/app/app_slice";
import { announcements, messages } from "../../utils/util";
import menuBackButton from "../../assets/images/menuBackButton.svg";
import settingIcon from "../../assets/notifications_icon/settingBlue.svg";
import leftArrow from "../../assets/images/hamburgerItemArrow.svg";
import userBlue from "../../assets/notifications_icon/userBlue.svg";
import messageBlue from "../../assets/notifications_icon/messageBlue.svg";

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.app.notifications);

  return (
    <div
      className={`notifications ${notifications ? "notifications-open" : ""}`}
    >
      {/* menu header */}
      <div className="notifications-header">
        <button onClick={() => dispatch(setNotifications(false))}>
          <img src={menuBackButton} alt="close menu" />
          <span>پیام های من</span>
        </button>
        <div className="notifications-header-banner">
          <div>
            <img src={settingIcon} alt="setting" />
          </div>
          <div>
            <span>به پلتفرم ما خوش آمدید</span>
            <span>
              با تکمیل حساب کاربری
              <span style={{ color: "#ffa600", margin: "0 3px" }}>
                ۱۰۰ امتیاز
              </span>
              دریافت کنید
            </span>
          </div>
          <img src={leftArrow} alt="arrow" />
        </div>
      </div>
      {/* announcements */}
      <div className="notifications-body">
        <div className="notifications-body-tabs">
          <span>اعلان ها</span>
          <span>نمایش همه</span>
        </div>
        <div className="notifications-body-items">
          {announcements.map((announcement, index) => (
            <div className="notifications-announcement" key={index}>
              <div>
                <img src={userBlue} alt="user" />
              </div>
              <div>
                <strong>{announcement.title}</strong>
                <span>{announcement.content}</span>
                <span>{announcement.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* messages */}
      <div className="notifications-body">
        <div className="notifications-body-tabs">
          <span>پیام ها</span>
          <span>نمایش همه</span>
        </div>
        <div className="notifications-body-items">
          {messages.map((message, index) => (
            <div className="notifications-message" key={index}>
              <div>
                <img src={messageBlue} alt="message" />
              </div>
              <div>
                <strong>{message.title}</strong>
                <span>{message.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
