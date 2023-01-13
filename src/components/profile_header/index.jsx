import React from "react";
import "./style.css";
import backIcon from "../../assets/profile/rightArrow.svg";

const ProfileHeader = ({ title, backHandler, children }) => {
  return (
    <div className="profile-header">
      <div onClick={backHandler}>
        <img src={backIcon} alt="back" />
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
};
export default ProfileHeader;
