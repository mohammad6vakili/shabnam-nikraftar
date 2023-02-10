import React, { useState } from "react";
import "./account.css";
import { Button, Input, message } from "antd";
import { useHistory } from "react-router-dom";
import ProfileHeader from "../../components/profile_header";
import PostPreview from "../../components/post_preview";
import loginNoImage from "../../assets/images/loginNoImage.svg";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import editIcon from "../../assets/profile/edit.svg";
import { toast } from "react-toastify";

const Account = () => {
  const history = useHistory();
  const [file, setFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [inp, setInp] = useState(null);
  const [showImage, setShowImage] = useState(true);
  const [date, setDate] = useState(null);
  const [engage, setEngage] = useState(null);

  const upload = (e) => {
    setFile(e.target.files[0]);
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
    setShowImage(false);
  };

  return (
    <div className="account">
      <PostPreview />
      {/* header */}
      <ProfileHeader
        backHandler={() => history.push("/profile")}
        title={"حساب کاربری"}
      />
      {/* tabs */}
      <div className="profile-account-body">
        {/* upload file */}
        <div className="login-upload">
          <div>
            {!file ? (
              <img src={loginNoImage} alt="no file" />
            ) : (
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "62px 62px 32px 0px",
                  objectFit: "cover",
                }}
                src={uploadedImage}
                alt="uploaded file"
              />
            )}
          </div>
          <Button
            onClick={() => {
              inp.click();
            }}
            className="mv-button-outline"
          >
            انتخاب تصویر
          </Button>
          <input
            onChange={upload}
            type="file"
            name="filefield"
            multiple="multiple"
            style={{ display: "none" }}
            ref={(fileInput) => setInp(fileInput)}
          />
        </div>
        {/* name */}
        <div className="account-form-field">
          <div>نام</div>
          <div>
            <Input className="mv-input" />
            <img src={editIcon} alt="edit" />
          </div>
        </div>
        {/* family */}
        <div className="account-form-field">
          <div>نام خانوادگی</div>
          <div>
            <Input className="mv-input" />
            <img src={editIcon} alt="edit" />
          </div>
        </div>
        {/* mobile */}
        <div className="account-form-field">
          <div>شماره موبایل</div>
          <div>
            <Input inputMode="tel" className="mv-input" />
            <div>
              <svg
                width="17"
                height="12"
                viewBox="0 0 17 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6L6 11L16 1"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* email */}
        <div className="account-form-field account-full-input">
          <div>ایمیل</div>
          <div>
            <Input inputMode="email" className="mv-input" />
          </div>
        </div>
        {/* birthday */}
        <div className="account-form-field account-full-input">
          <div>تاریخ تولد</div>
          <DatePicker
            value={date}
            onChange={setDate}
            locale={"fa"}
            colorPrimary="#40b1d1"
            calendarClassName="responsive-calendar"
            inputClassName="mv-input login-form-datepicker"
            inputPlaceholder="روز / ماه / سال"
          />
        </div>
        {/* engagement date */}
        <div className="account-form-field account-full-input">
          <div>تاریخ ازدواج</div>
          <DatePicker
            value={engage}
            onChange={setEngage}
            locale={"fa"}
            colorPrimary="#40b1d1"
            calendarClassName="responsive-calendar"
            inputClassName="mv-input login-form-datepicker"
            inputPlaceholder="روز / ماه / سال"
          />
        </div>
        {/* action */}
        <Button
          style={{ marginTop: 24 }}
          onClick={() => {
            history.push("/profile");
            message.success("اطلاعات با موفقیت ثبت شد.");
          }}
          className="mv-button"
        >
          ذخیره
        </Button>
      </div>
    </div>
  );
};
export default Account;
