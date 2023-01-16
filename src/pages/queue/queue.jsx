import React from "react";
import "./queue.css";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileMenu from "../../components/mobile_menu";
import Header from "../../components/header";
import warningIcon from "../../assets/queue/warning.svg";
import emptyIcon from "../../assets/queue/emptyList.svg";

const Queue = () => {
  const history = useHistory();
  const userQueue = useSelector((state) => state.user.userQueue);
  return (
    <div className="queue">
      {/* header */}
      <Header>
        <div className="queue-header-banner">
          <div>
            <img src={warningIcon} alt="warning" />
          </div>
          <div>
            قبل رزرو نوبت حتما <span className="bold">قوانین و شرایط</span> رزرو
            را بخوانید
          </div>
        </div>
      </Header>
      <div className="queue-list">
        {userQueue?.length === 0 && (
          <div className="queue-list-empty">
            <div>
              <img src={emptyIcon} alt="empty" />
            </div>
            <div>متاسفانه، نوبتی برای شما ثبت نشده است.</div>
            <Button className="mv-button">ثبت‌ نوبت جدید</Button>
          </div>
        )}
      </div>
      <MobileMenu />
    </div>
  );
};
export default Queue;
