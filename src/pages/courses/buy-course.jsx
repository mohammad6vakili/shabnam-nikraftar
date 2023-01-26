import React, { useState } from "react";
import "./buy-course.css";
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
        <div>
          <Swiper
            style={{ padding: "0 24px" }}
            spaceBetween={0}
            slidesPerView={2}
          >
            <SwiperSlide style={{ paddingBottom: 30 }}>
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
            <SwiperSlide style={{ paddingBottom: 30 }}>
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
            <SwiperSlide style={{ paddingBottom: 30 }}>
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
        <div>2</div>
      </div>
    </div>
  );
};

export default BuyCourse;
