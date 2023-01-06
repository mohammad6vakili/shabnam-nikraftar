import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import {
  setHamburgerMenu,
  setNotifications,
} from "../../features/app/app_slice";
import { useHistory } from "react-router-dom";
import notificationIcon from "../../assets/images/notification.svg";
import headerLogo from "../../assets/images/headerLogo.svg";
import hamburgerIcon from "../../assets/images/hamburger.svg";
import HamburgerMenu from "../hamburger_menu";
import Notifications from "../notifications";

const Header = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="header">
      <HamburgerMenu />
      <Notifications />
      <div className="header-top">
        <button onClick={() => dispatch(setHamburgerMenu(true))} type="button">
          <img src={hamburgerIcon} alt="menu" />
        </button>
        <button onClick={() => history.replace("/home")} type="button">
          <img src={headerLogo} alt="shabnam nickraftar" />
        </button>
        <button onClick={() => dispatch(setNotifications(true))} type="button">
          <img src={notificationIcon} alt="notifications" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Header;
