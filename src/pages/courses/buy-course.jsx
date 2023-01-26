import React, { Fragment, useState, useRef, useCallback } from "react";
import "./buy-course.css";
import { Button, Input } from "antd";
import { useHistory } from "react-router-dom";
import ModalSlide from "../../components/modal_slide";
import { Swiper, SwiperSlide } from "swiper/react";
import FormatHelper from "../../helper/FormatHelper";
import backIcon from "../../assets/courses/backButton.svg";
import personalIcon from "../../assets/courses/personalTab.svg";
import docsIcon from "../../assets/courses/docsTab.svg";
import factorIcon from "../../assets/courses/factorTab.svg";
import alertIcon from "../../assets/courses/alert.svg";
import melliBank from "../../assets/profile/melliBank.svg";
import samanBank from "../../assets/profile/samanBank.svg";

const BuyCourse = () => {
  const history = useHistory();
  const sliderRef = useRef(null);
  const [step, setStep] = useState(1);
  const [inputOne, setInputOne] = useState(null);
  const [inputTwo, setInputTwo] = useState(null);
  const [inputThree, setInputThree] = useState(null);
  const [fileOne, setFileOne] = useState(null);
  const [fileTwo, setFileTwo] = useState(null);
  const [fileThree, setFileThree] = useState(null);
  const [modal, setModal] = useState(false);
  const [method, setMethod] = useState(0);
  const [portActive, setPortActive] = useState(0);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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
            ref={sliderRef}
          >
            {/* step 1 */}
            <SwiperSlide
              onClick={() => {
                setStep(1);
                if (step > 1) {
                  handlePrev();
                }
              }}
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
            {/* step 2 */}
            <SwiperSlide
              onClick={() => {
                setStep(2);
                if (step === 3) {
                  handlePrev();
                }
                if (step === 1) {
                  handleNext();
                }
              }}
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
            {/* step 3 */}
            <SwiperSlide
              onClick={() => {
                setStep(3);
                handleNext();
              }}
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
                onClick={() => {
                  setStep(2);
                  handleNext();
                }}
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
                onClick={() => {
                  setStep(3);
                  handleNext();
                }}
                className="mv-button buy-course-next-button"
              >
                مرحله بعد
              </Button>
            </Fragment>
          )}
          {/* step 3 */}
          {step === 3 && (
            <Fragment>
              <div className="buy-course-factor">
                <div>
                  <div>نام دوره</div>
                  <div></div>
                  <div className="bold">
                    دوره پیشرفته آموزش حرفه ای اکستنشن مو و ابرو
                  </div>
                </div>
                <div>
                  <div>مدرس دوره</div>
                  <div></div>
                  <div className="bold">سمانه درخشانی</div>
                </div>
                <div>
                  <div>تاریخ برگزاری</div>
                  <div></div>
                  <div className="bold">۲۰ آبان الی ۱۰ بهمن</div>
                </div>
                <div>
                  <div>روز برگزاری</div>
                  <div></div>
                  <div>
                    <div className="bold">شنبه‌ها ۱۶ تا ۱۸</div>
                    <div className="bold">سه شنبه‌ها ۱۷ تا ۱۹</div>
                  </div>
                </div>
                <div>
                  <div>مبلغ دوره</div>
                  <div></div>
                  <div className="bold">۷,۰۰۰,۰۰۰ تومان</div>
                </div>
                <div>
                  <div>تخفیف دوره</div>
                  <div></div>
                  <div className="bold">۴۹۰,۰۰۰ تومان</div>
                </div>
                <div>
                  <div>مبلغ پرداختی</div>
                  <div></div>
                  <div className="bold">
                    <span
                      className="bold"
                      style={{ color: "#40B1D1", fontSize: 17 }}
                    >
                      ۶,۵۱۰,۰۰۰
                    </span>{" "}
                    تومان
                  </div>
                </div>
              </div>
              <div className="buy-course-factor-action">
                <Button
                  onClick={() => {
                    setModal(true);
                    handleNext();
                  }}
                  className="mv-button"
                >
                  پرداخت هزینه
                </Button>
                <Button className="mv-button">کد تخفیف</Button>
              </div>
            </Fragment>
          )}
        </div>
        <ModalSlide visible={modal} setVisible={setModal}>
          {/* header */}
          <div className="queue-create-factor-modal-header">
            <span className="bold">انتخاب روش پرداخت</span>
          </div>
          <div className="queue-create-port">
            <div>
              <div onClick={() => setMethod(0)}>
                <div className={method === 0 ? "method-selected" : ""}>
                  {method === 0 && <div></div>}
                </div>
                <div>
                  <div style={{ color: "black" }}>پرداخت از طریق کیف پول</div>
                  <div>موجودی کافی نیست</div>
                </div>
                <div>
                  <span style={{ color: "#40b1d1", marginLeft: 3 }}>
                    ۲۵,۰۰۰
                  </span>
                  <span>تومان</span>
                </div>
              </div>
              <div onClick={() => setMethod(1)}>
                <div className={method === 1 ? "method-selected" : ""}>
                  <div>{method === 1 && <div></div>}</div>
                </div>
                <div style={{ color: "black" }}>پرداخت از طریق درگاه بانکی</div>
              </div>
              <div className="queue-create-port-ports">
                <div
                  className={portActive === 0 ? "port-active" : ""}
                  onClick={() => {
                    setPortActive(0);
                  }}
                >
                  <img src={melliBank} alt="port" />
                </div>
                <div
                  className={portActive === 1 ? "port-active" : ""}
                  onClick={() => {
                    setPortActive(1);
                  }}
                >
                  <img src={samanBank} alt="port" />
                </div>
              </div>
            </div>
            {/* actionbar */}
            {modal && (
              <div className="queue-create-factor-actions">
                <span></span>
                <div>
                  <Button className="mv-button">پرداخت هزینه</Button>
                  <Button onClick={() => setModal(false)} className="mv-button">
                    بازگشت
                  </Button>
                </div>
              </div>
            )}
          </div>
        </ModalSlide>
      </div>
    </div>
  );
};

export default BuyCourse;
