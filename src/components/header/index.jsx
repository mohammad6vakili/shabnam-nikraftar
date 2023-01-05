import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setHamburgerMenu } from "../../features/app/app_slice";
import notificationIcon from "../../assets/images/notification.svg";
import headerLogo from "../../assets/images/headerLogo.svg";
import hamburgerIcon from "../../assets/images/hamburger.svg";
import HamburgerMenu from "../hamburger_menu";

const Header = ({ children }) => {
  const dispatch = useDispatch();
  const hamburgerMenu = useSelector((state) => state.app.hamburgerMenu);

  return (
    <div className="header">
      <HamburgerMenu />
      <div className="header-top">
        <button onClick={() => dispatch(setHamburgerMenu(true))} type="button">
          <img src={hamburgerIcon} alt="menu" />
        </button>
        <button type="button">
          <img src={headerLogo} alt="shabnam nickraftar" />
        </button>
        <button type="button">
          <img src={notificationIcon} alt="notifications" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Header;
