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
import alertIcon from "../../assets/courses/alert.svg";

const BuyCourse = () => {
  const history = useHistory();
  const [step, setStep] = useState(2);
  const [inputOne, setInputOne] = useState(null);
  const [inputTwo, setInputTwo] = useState(null);
  const [inputThree, setInputThree] = useState(null);
  const [fileOne, setFileOne] = useState(null);
  const [fileTwo, setFileTwo] = useState(null);
  const [fileThree, setFileThree] = useState(null);

  const uploadOne = (e) => {
    setFileOne(e.target.files[0]);
  };

  const uploadTwo = (e) => {
    setFileTwo(e.target.files[0]);
  };

  const uploadThree = (e) => {
    setFileThree(e.target.files[0]);
  };

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
          {/* step 1 */}
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
              {/* next button */}
              <Button
                onClick={() => setStep(2)}
                className="mv-button buy-course-next-button"
              >
                مرحله بعد
              </Button>
            </Fragment>
          )}
          {/* step 2 */}
          {step === 2 && (
            <Fragment>
              {/* alert box */}
              <div className="buy-course-alert">
                <div>
                  <img src={alertIcon} alt="alert" />
                </div>
                <div>فایل به صورت JPG, PNG و حجم آن کمتر از ۱M</div>
              </div>
              {/* upload one */}
              <div className="buy-course-upload">
                <div>آپلود کارت ملی</div>
                <div>
                  <div>{fileOne?.name?.substring(0, 25)}</div>
                  <Button
                    onClick={() => {
                      if (fileOne) {
                        setFileOne(null);
                      } else {
                        inputOne.click();
                      }
                    }}
                    className="mv-button-outline-white"
                    id={fileOne ? "buy-course-remove-file-button" : null}
                  >
                    {fileOne ? "حذف کردن" : "آپلود فایل"}
                  </Button>
                  <input
                    onChange={uploadOne}
                    type="file"
                    name="filefield"
                    style={{ display: "none" }}
                    ref={(fileInput) => setInputOne(fileInput)}
                  />
                </div>
              </div>
              {/* upload two */}
              <div className="buy-course-upload">
                <div>آپلود عکس هنرجو</div>
                <div>
                  <div>{fileTwo?.name?.substring(0, 25)}</div>
                  <Button
                    onClick={() => {
                      if (fileTwo) {
                        setFileTwo(null);
                      } else {
                        inputTwo.click();
                      }
                    }}
                    className="mv-button-outline-white"
                    id={fileTwo ? "buy-course-remove-file-button" : null}
                  >
                    {fileTwo ? "حذف کردن" : "آپلود فایل"}
                  </Button>
                  <input
                    onChange={uploadTwo}
                    type="file"
                    name="filefield"
                    style={{ display: "none" }}
                    ref={(fileInput) => setInputTwo(fileInput)}
                  />
                </div>
              </div>
              {/* upload three */}
              <div className="buy-course-upload">
                <div>آپلودشناسنامه (صفحه اول)</div>
                <div>
                  <div>{fileThree?.name?.substring(0, 25)}</div>
                  <Button
                    onClick={() => {
                      if (fileThree) {
                        setFileThree(null);
                      } else {
                        inputThree.click();
                      }
                    }}
                    className="mv-button-outline-white"
                    id={fileThree ? "buy-course-remove-file-button" : null}
                  >
                    {fileThree ? "حذف کردن" : "آپلود فایل"}
                  </Button>
                  <input
                    onChange={uploadThree}
                    type="file"
                    name="filefield"
                    style={{ display: "none" }}
                    ref={(fileInput) => setInputThree(fileInput)}
                  />
                </div>
              </div>
              {/* next button */}
              <Button
                onClick={() => setStep(3)}
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
