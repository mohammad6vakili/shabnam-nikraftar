import React from "react";
import "./style.css";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setHamburgerMenu } from "../../features/app/app_slice";
import menuBackButton from "../../assets/images/menuBackButton.svg";
import menuBanner from "../../assets/images/menuBanner.svg";
import hamburgerItemArrow from "../../assets/images/hamburgerItemArrow.svg";
import locationIcon from "../../assets/ham_menu_icons/location.svg";
import whatsappIcon from "../../assets/ham_menu_icons/whatsapp.svg";
import telegram from "../../assets/ham_menu_icons/telegram.svg";
import facebook from "../../assets/ham_menu_icons/facebook.svg";
import youtube from "../../assets/ham_menu_icons/youtube.svg";
import instagram from "../../assets/ham_menu_icons/instagram.svg";
import { menuItems } from "../../utils/util";

const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const hamburgerMenu = useSelector((state) => state.app.hamburgerMenu);

  return (
    <div
      className={`hamburger-menu ${hamburgerMenu ? "hamburger-menu-open" : ""}`}
    >
      {/* menu header */}
      <div className="hamburger-menu-header">
        <button onClick={() => dispatch(setHamburgerMenu(false))}>
          <img src={menuBackButton} alt="close menu" />
          <span>لیست منوها</span>
        </button>
        <img src={menuBanner} alt="banner" />
      </div>
      {/* menu items */}
      <div className="hamburger-menu-menus">
        {menuItems.map((item, index) => (
          <div key={index}>
            <div>
              <img src={item.icon} alt="item icon" />
              <span>{item.title}</span>
            </div>
            <img src={hamburgerItemArrow} alt="arrow" />
          </div>
        ))}
      </div>
      {/* menu buttons */}
      <div className="hamburger-menu-buttons">
        <div>
          <Button className="mv-button">
            <img src={locationIcon} alt="location" />
            <span>نشانی سالن ما</span>
          </Button>
          <Button className="mv-button">
            <img src={whatsappIcon} alt="phone number" />
            <span>پشتیبانی ما</span>
          </Button>
        </div>
        <div className="hamburger-menu-buttons-social">
          <a href="#">
            <img src={telegram} alt="telegram" />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
