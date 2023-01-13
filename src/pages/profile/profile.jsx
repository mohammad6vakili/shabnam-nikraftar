import React from "react";
import "./profile.css";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import MobileMenu from "../../components/mobile_menu";
import Header from "../../components/header";
import profileAvatar from "../../assets/profile/profileImage.svg";
import queueIcon from "../../assets/profile/queue.svg";
import ordersIcon from "../../assets/profile/orders.svg";
import savedIcon from "../../assets/profile/saved.svg";
import coursesIcon from "../../assets/profile/courses.svg";
import walletIcon from "../../assets/profile/wallet.svg";
import scoresIcon from "../../assets/profile/scores.svg";
import addressesIcon from "../../assets/profile/addresses.svg";
import messagesIcon from "../../assets/profile/messages.svg";
import accountIcon from "../../assets/profile/account.svg";
import exitIcon from "../../assets/profile/exitIcon.svg";

const Profile = () => {
  const history = useHistory();
  const { handleLogout } = useAuth();
  return (
    <div className="profile">
      {/* header */}
      <Header>
        <div className="profile-avatar">
          <div>
            <img src={profileAvatar} alt="avatar" />
            <div>
              <span className="bold">شبنم نیکرفتار</span>
              <span>۰۹۱۲۱۲۳۴۵۶۷</span>
            </div>
          </div>
          <Button className="mv-button">ویرایش حساب</Button>
        </div>
      </Header>
      {/* menu */}
      <div className="profile-body">
        <div className="profile-menu">
          {/* queue */}
          <div
            onClick={() => history.push("/profile/queue")}
            className="border-left-gray"
          >
            <img src={queueIcon} alt="queue" />
            <div className="profile-menu-item-badge">۵</div>
            <span>نوبت ها</span>
          </div>
          {/* orders */}
          <div className="border-left-gray">
            <img src={ordersIcon} alt="orders" />
            <span>سفارشات</span>
            <div className="profile-menu-item-badge">۱۰</div>
          </div>
          {/* saved items */}
          <div onClick={() => history.push("/profile/saved")}>
            <img src={savedIcon} alt="saved" />
            <span>ذخیره ها</span>
            <div className="profile-menu-item-badge">۲۹</div>
          </div>
          {/* courses */}
          <div className="border-left-gray border-top-gray border-bottom-gray">
            <img src={coursesIcon} alt="courses" />
            <span>دوره ها</span>
            <div className="profile-menu-item-badge">۳</div>
          </div>
          {/* wallet */}
          <div className="border-left-gray border-top-gray border-bottom-gray">
            <img src={walletIcon} alt="wallet" />
            <span>کیف پول</span>
            <div style={{ right: "35%" }} className="profile-menu-item-badge">
              <span
                className="bold"
                style={{ color: "#40B1D1", fontSize: 12, marginLeft: 3 }}
              >
                ۲۵،۰۰۰
              </span>
              ت
            </div>
            <div className="profile-clippath clippath-left-top"></div>
            <div className="profile-clippath clippath-right-top"></div>
            <div className="profile-clippath clippath-right-bottom"></div>
            <div className="profile-clippath clippath-left-bottom"></div>
          </div>
          {/* scores */}
          <div className="border-top-gray border-bottom-gray">
            <img src={scoresIcon} alt="scores" />
            <span>امتیازات</span>
            <div
              style={{ background: "#FBC12E" }}
              className="profile-menu-item-badge"
            >
              ۵۰۰
            </div>
          </div>
          {/* addresses */}
          <div>
            <img src={addressesIcon} alt="addresses" />
            <span>آدرس ها</span>
            <div className="profile-menu-item-badge">۱</div>
          </div>
          {/* messages */}
          <div className="border-left-gray border-right-gray">
            <img src={messagesIcon} alt="messages" />
            <span>پیغام ها</span>
            <div className="profile-menu-item-badge">۸</div>
          </div>
          {/* account */}
          <div>
            <img src={accountIcon} alt="account" />
            <span>حساب کاربری</span>
            <div className="profile-menu-item-badge">۰۴/۲۲</div>
          </div>
        </div>
        <div onClick={handleLogout} className="profile-menu profile-exit">
          <img src={exitIcon} alt="exit" />
          <span>خروج از حساب کاربری</span>
        </div>
      </div>
      {/* mobile menu */}
      <MobileMenu />
    </div>
  );
};
export default Profile;
