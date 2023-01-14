import React from "react";
import "./addresses.css";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { addresses } from "../../utils/util";
import FormatHelper from "../../helper/FormatHelper";
import ProfileHeader from "../../components/profile_header";
import addIcon from "../../assets/profile/plus.svg";
import locationIcon from "../../assets/profile/location.svg";
import editIcon from "../../assets/profile/edit.svg";

const Addresses = () => {
  const history = useHistory();
  return (
    <div className="profile-addresses">
      <ProfileHeader
        backHandler={() => history.push("/profile")}
        title={"آدرس‌های من"}
      />
      <div className="profile-addresses-list">
        {addresses.map((address, index) => (
          <div key={index}>
            <div>
              <img src={locationIcon} alt="address" />
            </div>
            <div>
              {/* title */}
              <div>{address.title}</div>
              {/* code */}
              <div>
                کد پستی:
                <span className="bold" style={{ marginRight: 3 }}>
                  {FormatHelper.toPersianString(address.code)}
                </span>
              </div>
              {/* reciever */}
              <div>
                گیرنده:
                <span className="bold" style={{ marginRight: 3 }}>
                  {address.reciever}
                </span>
              </div>
              {/* mobile */}
              <div>
                شماره موبایل:
                <span className="bold" style={{ marginRight: 3 }}>
                  {FormatHelper.toPersianString(address.mobile)}
                </span>
              </div>
            </div>
            <img src={editIcon} alt="edit" />
          </div>
        ))}
      </div>
      <Button className="mv-button profile-addresses-add-button">
        <img src={addIcon} alt="add" />
        <span>ثبت آدرس</span>
      </Button>
    </div>
  );
};

export default Addresses;
