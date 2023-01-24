import React, { useState } from "react";
import "./about.css";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import Header from "../../components/header";
import MobileMenu from "../../components/mobile_menu";
import shabnamImage from "../../assets/about/shabnam.svg";
import imageBackground from "../../assets/lines/imageBackground.svg";
import leftArrow from "../../assets/lines/leftArrow.svg";

const About = () => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <div className="about">
      {/* header */}
      <Header />
      <div className="about-body">
        <div className="lines-line-item about-main">
          {/* details */}
          <div>
            <div>
              {/* index */}
              <div></div>
              {/* artists */}
              <div>
                <span style={{ color: "black" }} className="bold">
                  +۵۰
                </span>
                <span>آرتیست ماهر</span>
              </div>
              {/* customers */}
              <div>
                <span style={{ color: "black" }} className="bold">
                  +۱۰۰۰
                </span>
                <span>مشتری ماهانه</span>
              </div>
              {/* title */}
              <div>
                <span>درباره ی</span>{" "}
                <span className="bold">شبنم نیکرفتار</span>
              </div>
            </div>
            <div>
              <img src={shabnamImage} alt="line image" />
              <img src={imageBackground} alt="background" />
            </div>
          </div>
          {/* menu items */}
          <div>
            {/* intro */}
            <div
              onClick={() => {
                setModal(true);
                setStep(0);
              }}
            >
              <div>معرفی موسس</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* certificates */}
            <div
              onClick={() => {
                setModal(true);
                setStep(1);
              }}
            >
              <div>افتخارات و تقدیرنامه‌ها</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* our services */}
            <div
              onClick={() => {
                setModal(true);
                setStep(2);
              }}
            >
              <div>خدمات ما</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* teachers */}
            <div
              onClick={() => {
                setModal(true);
                setStep(3);
              }}
            >
              <div>اساتید مجرب ما</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* comments */}
            <div
              onClick={() => {
                setModal(true);
                setStep(3);
              }}
            >
              <div>نظر کاربران و هنرجویان ما</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* contacts */}
            <div
              onClick={() => {
                setModal(true);
                setStep(3);
              }}
            >
              <div>راه های ارتباطی ما</div>
              <img src={leftArrow} alt="menu" />
            </div>
          </div>
        </div>
      </div>
      <MobileMenu />
    </div>
  );
};
export default About;
