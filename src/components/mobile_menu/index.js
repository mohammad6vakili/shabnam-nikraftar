import React from "react";
import "./style.css";
import { useLocation, useHistory } from "react-router-dom";
import homeOutline from "../../assets/mobile_menu_icons/home_outline.svg";
import queueOutline from "../../assets/mobile_menu_icons/queue_outline.svg";
import shopOutline from "../../assets/mobile_menu_icons/shop_outline.svg";
import searchOutline from "../../assets/mobile_menu_icons/search_outline.svg";
import profileOutline from "../../assets/mobile_menu_icons/profile_outline.svg";
import homeFill from "../../assets/mobile_menu_icons/home_fill.svg";
import queueFill from "../../assets/mobile_menu_icons/queue_fill.svg";
import shopFill from "../../assets/mobile_menu_icons/shop_fill.svg";
import searchFill from "../../assets/mobile_menu_icons/search_fill.svg";
import profileFill from "../../assets/mobile_menu_icons/profile_fill.svg";

const MobileMenu = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <div className="mobile-menu">
      <div
        onClick={() => history.push("/home")}
        className={location.pathname === "/home" ? "mobile-menu-active" : ""}
      >
        {location.pathname === "/home" && (
          <div className="active-menu-fill">
            <div>
              <img src={homeFill} alt="home selected" />
            </div>
          </div>
        )}
        {location.pathname !== "/home" ? (
          <img src={homeOutline} alt="home" />
        ) : (
          <span>خانه</span>
        )}
      </div>
      <div
        onClick={() => history.push("/queue")}
        className={location.pathname === "/queue" ? "mobile-menu-active" : ""}
      >
        {location.pathname === "/queue" && (
          <div className="active-menu-fill">
            <div>
              <img src={queueFill} alt="queue selected" />
            </div>
          </div>
        )}
        {location.pathname !== "/queue" ? (
          <img src={queueOutline} alt="queue" />
        ) : (
          <span>رزرو نوبت</span>
        )}
      </div>
      <div
        onClick={() => history.push("/shop")}
        className={location.pathname === "/shop" ? "mobile-menu-active" : ""}
      >
        {location.pathname === "/shop" && (
          <div className="active-menu-fill">
            <div>
              <img src={shopFill} alt="shop selected" />
            </div>
          </div>
        )}
        {location.pathname !== "/shop" ? (
          <img src={shopOutline} alt="shop" />
        ) : (
          <span>فروشگاه</span>
        )}
      </div>
      <div
        onClick={() => history.push("/search")}
        className={location.pathname === "/search" ? "mobile-menu-active" : ""}
      >
        {location.pathname === "/search" && (
          <div className="active-menu-fill">
            <div>
              <img src={searchFill} alt="search selected" />
            </div>
          </div>
        )}
        {location.pathname !== "/search" ? (
          <img src={searchOutline} alt="search" />
        ) : (
          <span>جستجو</span>
        )}
      </div>
      <div
        onClick={() => history.push("/profile")}
        className={location.pathname === "/profile" ? "mobile-menu-active" : ""}
      >
        {location.pathname === "/profile" && (
          <div className="active-menu-fill">
            <div>
              <img src={profileFill} alt="profile selected" />
            </div>
          </div>
        )}
        {location.pathname !== "/profile" ? (
          <img src={profileOutline} alt="profile" />
        ) : (
          <span>پروفایل</span>
        )}
      </div>
    </div>
  );
};
export default MobileMenu;
