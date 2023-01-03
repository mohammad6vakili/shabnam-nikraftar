import React, { useState, Fragment, useEffect } from "react";
import "./login.css";
import { Form, Input, Checkbox, Button } from "antd";
import FormatHelper from "../../helper/FormatHelper";
import { toast } from "react-toastify";
import Countdown from "react-countdown";
import { PinInput } from "react-input-pin-code";
import loginLogo from "../../assets/images/loginLogo.svg";
import loginInputPrefix from "../../assets/images/loginInputPrefix.svg";
import loginNoImage from "../../assets/images/loginNoImage.svg";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";

export default function Login() {
  const [step, setStep] = useState(0);
  const [mobile, setMobile] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [code, setCode] = React.useState(["", "", "", "", ""]);
  const [isTimeout, setIsTimeout] = useState(true);
  const [timeout, setTimeout] = useState(Date.now() + 120000);
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [inp, setInp] = useState(null);
  const [file, setFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showImage, setShowImage] = useState(true);
  const [date, setDate] = useState(null);

  const upload = (e) => {
    setFile(e.target.files[0]);
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
    setShowImage(false);
  };

  const timoutRenderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return null;
    } else {
      // Render a countdown
      return (
        <span className="login-title">
          ۰{FormatHelper.toPersianString(minutes)}:
          {FormatHelper.toPersianString(seconds)}
        </span>
      );
    }
  };

  const handleLogin = () => {
    if (mobile.length === 0) {
      toast.warning("لطفا شماره موبایل خود را وارد کنید");
    } else if (mobile.length !== 11) {
      toast.warning("شماره موبایل باید ۱۱ رقم باشد");
    } else if (!accepted) {
      toast.warning("قوانین و مقررات را نپذیرفته اید");
    } else {
      setStep(1);
      setTimeout(Date.now() + 120000);
    }
  };

  useEffect(() => {
    if (!showImage) {
      setShowImage(true);
    }
  }, [showImage]);

  return (
    <div className="login">
      <div className="login-body">
        {step === 0 && (
          <Fragment>
            <img className="login-logo" src={loginLogo} alt="logo" />
            <span className="login-title">ورود / ثبت نام</span>
            <span className="login-subtitle">
              شماره تلفن خود را وارد کنید و منتظر دریافت کد تایید باشید
            </span>
            <Input
              className="mv-input"
              type="tel"
              value={mobile}
              onChange={(e) =>
                setMobile(FormatHelper.toPersianString(e.target.value))
              }
              style={{ minHeight: "50px", fontSize: "17px", margin: "10px 0" }}
              placeholder="مثلا: ۰۹۱۱۲۳۴۵۶۷"
              prefix={<img src={loginInputPrefix} alt="login" />}
            />
            <div className="login-policy">
              <Checkbox
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              >
                <a href="#">قوانین و مقررات</a>{" "}
                <span>پلتفرم شبنم نیکرفتار را می پذیرم.</span>
              </Checkbox>
            </div>
            <Button onClick={handleLogin} className="mv-button">
              دریافت کد تایید
            </Button>
          </Fragment>
        )}
        {step === 1 && (
          <Fragment>
            {!isKeyboard && (
              <img className="login-logo" src={loginLogo} alt="logo" />
            )}
            {isTimeout && (
              <Countdown
                onComplete={() => setIsTimeout(false)}
                renderer={timoutRenderer}
                date={timeout}
              />
            )}
            <span className="login-subtitle">
              کد ۵ رقمی ارسالی به شماره ۰۹۱۱۲۳۴۵۶۷۸ را وارد کنید
            </span>
            <PinInput
              values={code}
              inputMode="tel"
              containerStyle={{ direction: "ltr" }}
              onFocus={() => setIsKeyboard(true)}
              onBlur={() => setIsKeyboard(false)}
              onComplete={() => setStep(2)}
              onChange={(value, index, values) => {
                setCode(values);
              }}
              inputStyle={{
                width: "50px",
                height: "60px",
                background: "#F7F7F7",
                borderRadius: "24px 24px 16px 0px",
                border: "none",
                textAlign: "center",
              }}
              containerClassName="react-code-input"
              placeholder="-"
            />
            <div className="login-resend-area">
              <span onClick={() => setStep(0)}>ویرایش شماره</span>
              <span>|</span>
              <span
                onClick={() => {
                  if (!isTimeout) {
                    setIsTimeout(true);
                  }
                }}
                style={isTimeout ? { color: "#9E9E9E" } : null}
              >
                ارسال مجدد کد
              </span>
            </div>
          </Fragment>
        )}
        {step === 2 && (
          <Fragment>
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
            <div className="login-form-field">
              <span>نام</span>
              <Input className="mv-input" />
            </div>
            {/* family */}
            <div className="login-form-field">
              <span>نام خانوادگی</span>
              <Input className="mv-input" />
            </div>
            {/* birthday */}
            <div className="login-form-field">
              <span>تاریخ تولد</span>
              <DatePicker
                value={date}
                onChange={setDate}
                locale={"fa"}
                inputClassName="mv-input login-form-datepicker"
                inputPlaceholder="روز / ماه / سال"
              />
            </div>
            <div className="login-form-actions">
              <Button className="mv-button">تکمیل ثبت نام و ورود</Button>
              <Button className="mv-button-outline-white">بعدا</Button>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}
