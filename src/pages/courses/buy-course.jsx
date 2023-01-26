import React, { Fragment, useState } from "react";
import "./buy-course.css";
import { Button, Input } from "antd";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import FormatHelper from "../../helper/FormatHelper";
import backIcon from "../../assets/courses/backButton.svg";
import personalIcon from "../../assets/courses/personalTab.svg";
import docsIcon from "../../assets/courses/docsTab.svg";
import factorIcon from "../../assets/courses/factorTab.svg";

const BuyCourse = () => {
  const history = useHistory();
  const [step, setStep] = useState(1);
  return (
    <div className="buy-course">
      {/* header */}
      <div className="buy-course-header">
        <img onClick={() => history.goBack()} src={backIcon} alt="back" />
        <div className="bold">خرید دوره</div>
        <div>۳/{FormatHelper.toPersianString(step)}</div>
      </div>
      <div className="buy-course-body">
        {/* steps slider */}
        <div>
          <Swiper
            style={{ padding: "0 24px" }}
            spaceBetween={0}
            slidesPerView={2}
          >
            <SwiperSlide
              onClick={() => setStep(1)}
              style={{ paddingBottom: 30 }}
            >
              <div className="buy-course-step-slide">
                <img src={personalIcon} alt="step" />
                <div>مشخصات هنرجو</div>
                <div
                  className={step >= 1 ? "buy-course-line-selected" : ""}
                  style={{
                    width: "50%",
                    marginRight: "auto",
                    justifyContent: "flex-start",
                  }}
                >
                  {step >= 1 ? (
                    <div
                      className="buy-course-radio-selected"
                      style={{ bottom: "-12px", right: "-12px" }}
                    >
                      <div></div>
                    </div>
                  ) : (
                    <div style={{ right: "-16px" }}>۱</div>
                  )}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={() => setStep(2)}
              style={{ paddingBottom: 30 }}
            >
              <div className="buy-course-step-slide">
                <img src={docsIcon} alt="step" />
                <div>آپلود مدارک</div>
                <div className={step >= 2 ? "buy-course-line-selected" : ""}>
                  {step >= 2 ? (
                    <div
                      className="buy-course-radio-selected"
                      style={{ bottom: "-12px" }}
                    >
                      <div></div>
                    </div>
                  ) : (
                    <div>۲</div>
                  )}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              onClick={() => setStep(3)}
              style={{ paddingBottom: 30 }}
            >
              <div className="buy-course-step-slide">
                <img src={factorIcon} alt="step" />
                <div>فاکتور نهایی</div>
                <div
                  className={step == 3 ? "buy-course-line-selected" : ""}
                  style={{
                    width: "50%",
                    marginLeft: "auto",
                    justifyContent: "flex-start",
                  }}
                >
                  {step == 3 ? (
                    <div
                      className="buy-course-radio-selected"
                      style={{ bottom: "-12px", left: "-12px" }}
                    >
                      <div></div>
                    </div>
                  ) : (
                    <div style={{ left: "-16px" }}>۳</div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* form */}
        <div>
          {step === 1 && (
            <Fragment>
              {/* first name */}
              <div className="buy-course-form-field">
                <div>نام هنرجو</div>
                <div>
                  <Input className="mv-input" />
                </div>
              </div>
              {/* last name */}
              <div className="buy-course-form-field">
                <div>نام خانوادگی هنرجو</div>
                <div>
                  <Input className="mv-input" />
                </div>
              </div>
              {/* national code */}
              <div className="buy-course-form-field">
                <div>کد ملی</div>
                <div>
                  <Input className="mv-input" />
                </div>
              </div>
              {/* mobile */}
              <div className="buy-course-form-field">
                <div>شماره موبایل</div>
                <div>
                  <Input className="mv-input" />
                </div>
              </div>
              <Button
                onClick={() => setStep(2)}
                className="mv-button buy-course-next-button"
              >
                مرحله بعد
              </Button>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyCourse;
