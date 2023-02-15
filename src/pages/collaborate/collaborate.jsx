import React, { useState } from "react";
import "./collaborate.css";
import { Input, Button, message } from "antd";
import collaborateImage from "../../assets/images/collaborate.svg";
import { useHistory } from "react-router-dom";
import Header from "../../components/header";
import MobileMenu from "../../components/mobile_menu";
import { toast } from "react-toastify";
const { TextArea } = Input;

const Collaborate = () => {
  const history = useHistory();
  const [inp, setInp] = useState(null);
  const [experience, setExperience] = useState(0);
  const [file, setFile] = useState(null);

  const upload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="collaborate">
      {/* header */}
      <Header />
      <div className="collaborate-body">
        {/* intro banner */}
        <div className="collaborate-intro">
          <div className="bold">فرصت همکاری با مجموعه ما</div>
          <div>
            <img src={collaborateImage} alt="collaborate" />
          </div>
        </div>
        {/* name */}
        <div className="collaborate-form-field">
          <div>نام و نام خانوادگی</div>
          <Input placeholder="شبنم نیک رفتار" className="mv-input" />
        </div>
        {/* mobile */}
        <div className="collaborate-form-field">
          <div>شماره موبایل</div>
          <Input placeholder="۰۹۱۲۱۲۳۴۵۶۷" className="mv-input" />
        </div>
        {/* email */}
        <div className="collaborate-form-field">
          <div>ایمیل</div>
          <Input placeholder="example@gmail.com" className="mv-input" />
        </div>
        {/* instagram */}
        <div className="collaborate-form-field">
          <div>آی دی اینستاگرام</div>
          <Input placeholder="@shabnamnikraftar2023" className="mv-input" />
        </div>
        {/* years of experience */}
        <div className="collaborate-form-field">
          <div>سابقه شغلی</div>
          <div className="collaborate-experience">
            <div
              className={experience === 1 ? "year-selected" : null}
              onClick={() => setExperience(1)}
            >
              ۱ الی ۳
            </div>
            <div
              className={experience === 2 ? "year-selected" : null}
              onClick={() => setExperience(2)}
            >
              ۲ الی ۵
            </div>
            <div
              className={experience === 3 ? "year-selected" : null}
              onClick={() => setExperience(3)}
            >
              ۵ الی ۷
            </div>
            <div
              className={experience === 4 ? "year-selected" : null}
              onClick={() => setExperience(4)}
            >
              بیش از ۷
            </div>
          </div>
        </div>
        {/* resume upload */}
        <div className="collaborate-form-field">
          <div>آی دی اینستاگرام</div>
          <div className="collaborate-resume">
            <div onClick={() => console.log(file)}>{file?.name}</div>
            <Button
              onClick={() => {
                inp.click();
              }}
              className="mv-button-outline"
            >
              آپلود فایل
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
          <div>فایل به صورت PDF و حجم آن کمتر از ۵M</div>
        </div>
        {/* about */}
        <div className="collaborate-form-field">
          <div>درباره من</div>
          <TextArea
            style={{
              minHeight: 200,
            }}
            placeholder="اطلاعات خلاصه ای از خودم ..."
            className="mv-input mv-textarea"
          />
        </div>
        {/* actions */}
        <div className="collaborate-actions">
          <Button
            onClick={() => {
              history.push("/home");
              message.success("اطلاعات شما با موفقیت ارسال شد");
            }}
            className="mv-button"
          >
            ارسال درخواست
          </Button>
          <Button className="mv-button">شرایط همکاری</Button>
        </div>
      </div>
      <MobileMenu />
    </div>
  );
};
export default Collaborate;
