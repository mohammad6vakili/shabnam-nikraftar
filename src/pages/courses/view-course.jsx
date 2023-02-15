import React, { useState, Fragment } from "react";
import "./view-course.css";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { questions } from "../../utils/util";
import { Swiper, SwiperSlide } from "swiper/react";
import FormatHelper from "../../helper/FormatHelper";
import ModalSlide from "../../components/modal_slide";
import Question from "../../components/question";
import shareIcon from "../../assets/shop/share.svg";
import rightArrowIcon from "../../assets/shop/right-arrow.svg";
import leftArrowIcon from "../../assets/shop/left-arrow.svg";
import likeIcon from "../../assets/images/postLike.svg";
import unlikeIcon from "../../assets/images/postUnlike.svg";
import courseSlider from "../../assets/courses/courseSlider.svg";
import closeIcon from "../../assets/lines/closeIcon.svg";
import blogVideo from "../../assets/blog/blogVideo.svg";
import playVideoIcon from "../../assets/blog/playVideo.svg";
import instagramIcon from "../../assets/courses/instagram.svg";
import whatsappIcon from "../../assets/courses/whatsapp.svg";
import commentImageOne from "../../assets/about/commentImage1.svg";
import commentImageTwo from "../../assets/about/commentImage2.svg";
import commentImageThree from "../../assets/about/commentImage3.svg";
import nextIcon from "../../assets/lines/nextIcon.svg";
import basketIcon from "../../assets/courses/basket.svg";
import hatIcon from "../../assets/courses/hat.svg";
import calendarIcon from "../../assets/courses/calendar.svg";
import clockIcon from "../../assets/courses/clock.svg";
import coinIcon from "../../assets/courses/coin.svg";

const ViewCourse = () => {
  const history = useHistory();
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [liked, setLiked] = useState(false);
  const [modal, setModal] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <div className="view-product">
      {/* action */}
      <div className="view-product-action">
        <Button
          onClick={() => history.push("/courses/buy")}
          className="mv-button"
        >
          خرید دوره
        </Button>
        <div style={{ alignItems: "flex-end" }}>
          <span>۴۵،۰۰۰ تومان</span>
          <span>
            <span
              className="bold"
              style={{ color: "#40B1D1", marginLeft: 5, fontSize: 18 }}
            >
              ۳۸،۹۰۰
            </span>
            تومان
          </span>
        </div>
      </div>
      {/* top section */}
      <div className="view-product-header">
        {/* header nav */}
        <div style={{ zIndex: 9999 }} className="view-product-header-nav">
          <div>
            <img
              onClick={() => {
                history.push("/courses");
              }}
              src={rightArrowIcon}
              alt="back"
            />
            <span className="bold">خرید دوره</span>
          </div>
          <div>
            <img
              onClick={() => {
                navigator.share({ title: "product" });
              }}
              src={shareIcon}
              alt="share"
            />
            <img
              style={{ marginRight: "16px" }}
              onClick={() => setLiked(!liked)}
              src={!liked ? unlikeIcon : likeIcon}
              alt="like"
            />
          </div>
        </div>
        <Swiper style={{ paddingRight: 16 }} slidesPerView={2.3}>
          {array.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                style={{ height: "30vh", marginBottom: "10px" }}
                src={courseSlider}
                alt="course images"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* description */}
      <div className="view-product-description">
        {/* title */}
        <div style={{ marginBottom: 8 }} className="view-product-title">
          <div className="bold">
            دوره پیشرفته آموزش حرفه ای اکستنشن مو و ابرو
          </div>
          <div>
            <span className="bold">٪۱۵</span>
            <span className="bold">تخفیف</span>
          </div>
        </div>
        {/* teacher name */}
        <div className="view-course-teacher">استاد سمانه درخشانی</div>
        {/* rates */}
        <div style={{ marginTop: 12 }} className="view-product-subtitle">
          <span>۵/۴ امتیاز</span>
          <svg
            width="96"
            height="16"
            viewBox="0 0 96 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7741 15.1132C11.4207 15.1132 10.9674 14.9999 10.4007 14.6665L8.4074 13.4865C8.20073 13.3665 7.80073 13.3665 7.60073 13.4865L5.60073 14.6665C4.42073 15.3665 3.7274 15.0866 3.41406 14.8599C3.1074 14.6332 2.6274 14.0532 2.94073 12.7199L3.41406 10.6732C3.4674 10.4599 3.36073 10.0932 3.20073 9.93322L1.5474 8.27988C0.720729 7.45322 0.787396 6.74655 0.90073 6.39988C1.01406 6.05322 1.37406 5.43988 2.52073 5.24655L4.6474 4.89322C4.8474 4.85988 5.13406 4.64655 5.22073 4.46655L6.40073 2.11322C6.93406 1.03988 7.63406 0.879883 8.00073 0.879883C8.3674 0.879883 9.0674 1.03988 9.60073 2.11322L10.7741 4.45988C10.8674 4.63988 11.1541 4.85322 11.3541 4.88655L13.4807 5.23988C14.6341 5.43322 14.9941 6.04655 15.1007 6.39322C15.2074 6.73988 15.2741 7.44655 14.4541 8.27322L12.8007 9.93322C12.6407 10.0932 12.5407 10.4532 12.5874 10.6732L13.0607 12.7199C13.3674 14.0532 12.8941 14.6332 12.5874 14.8599C12.4207 14.9799 12.1541 15.1132 11.7741 15.1132Z"
              fill="#FBC12E"
            />
            <path
              d="M31.7741 15.1132C31.4207 15.1132 30.9674 14.9999 30.4007 14.6665L28.4074 13.4865C28.2007 13.3665 27.8007 13.3665 27.6007 13.4865L25.6007 14.6665C24.4207 15.3665 23.7274 15.0866 23.4141 14.8599C23.1074 14.6332 22.6274 14.0532 22.9407 12.7199L23.4141 10.6732C23.4674 10.4599 23.3607 10.0932 23.2007 9.93322L21.5474 8.27988C20.7207 7.45322 20.7874 6.74655 20.9007 6.39988C21.0141 6.05322 21.3741 5.43988 22.5207 5.24655L24.6474 4.89322C24.8474 4.85988 25.1341 4.64655 25.2207 4.46655L26.4007 2.11322C26.9341 1.03988 27.6341 0.879883 28.0007 0.879883C28.3674 0.879883 29.0674 1.03988 29.6007 2.11322L30.7741 4.45988C30.8674 4.63988 31.1541 4.85322 31.3541 4.88655L33.4807 5.23988C34.6341 5.43322 34.9941 6.04655 35.1007 6.39322C35.2074 6.73988 35.2741 7.44655 34.4541 8.27322L32.8007 9.93322C32.6407 10.0932 32.5407 10.4532 32.5874 10.6732L33.0607 12.7199C33.3674 14.0532 32.8941 14.6332 32.5874 14.8599C32.4207 14.9799 32.1541 15.1132 31.7741 15.1132Z"
              fill="#FBC12E"
            />
            <path
              d="M51.7741 15.1132C51.4207 15.1132 50.9674 14.9999 50.4007 14.6665L48.4074 13.4865C48.2007 13.3665 47.8007 13.3665 47.6007 13.4865L45.6007 14.6665C44.4207 15.3665 43.7274 15.0866 43.4141 14.8599C43.1074 14.6332 42.6274 14.0532 42.9407 12.7199L43.4141 10.6732C43.4674 10.4599 43.3607 10.0932 43.2007 9.93322L41.5474 8.27988C40.7207 7.45322 40.7874 6.74655 40.9007 6.39988C41.0141 6.05322 41.3741 5.43988 42.5207 5.24655L44.6474 4.89322C44.8474 4.85988 45.1341 4.64655 45.2207 4.46655L46.4007 2.11322C46.9341 1.03988 47.6341 0.879883 48.0007 0.879883C48.3674 0.879883 49.0674 1.03988 49.6007 2.11322L50.7741 4.45988C50.8674 4.63988 51.1541 4.85322 51.3541 4.88655L53.4807 5.23988C54.6341 5.43322 54.9941 6.04655 55.1007 6.39322C55.2074 6.73988 55.2741 7.44655 54.4541 8.27322L52.8007 9.93322C52.6407 10.0932 52.5407 10.4532 52.5874 10.6732L53.0607 12.7199C53.3674 14.0532 52.8941 14.6332 52.5874 14.8599C52.4207 14.9799 52.1541 15.1132 51.7741 15.1132Z"
              fill="#FBC12E"
            />
            <path
              d="M71.7741 15.1132C71.4207 15.1132 70.9674 14.9999 70.4007 14.6665L68.4074 13.4865C68.2007 13.3665 67.8007 13.3665 67.6007 13.4865L65.6007 14.6665C64.4207 15.3665 63.7274 15.0866 63.4141 14.8599C63.1074 14.6332 62.6274 14.0532 62.9407 12.7199L63.4141 10.6732C63.4674 10.4599 63.3607 10.0932 63.2007 9.93322L61.5474 8.27988C60.7207 7.45322 60.7874 6.74655 60.9007 6.39988C61.0141 6.05322 61.3741 5.43988 62.5207 5.24655L64.6474 4.89322C64.8474 4.85988 65.1341 4.64655 65.2207 4.46655L66.4007 2.11322C66.9341 1.03988 67.6341 0.879883 68.0007 0.879883C68.3674 0.879883 69.0674 1.03988 69.6007 2.11322L70.7741 4.45988C70.8674 4.63988 71.1541 4.85322 71.3541 4.88655L73.4807 5.23988C74.6341 5.43322 74.9941 6.04655 75.1007 6.39322C75.2074 6.73988 75.2741 7.44655 74.4541 8.27322L72.8007 9.93322C72.6407 10.0932 72.5407 10.4532 72.5874 10.6732L73.0607 12.7199C73.3674 14.0532 72.8941 14.6332 72.5874 14.8599C72.4207 14.9799 72.1541 15.1132 71.7741 15.1132Z"
              fill="#FBC12E"
            />
            <path
              d="M91.7741 15.1132C91.4207 15.1132 90.9674 14.9999 90.4007 14.6665L88.4074 13.4865C88.2007 13.3665 87.8007 13.3665 87.6007 13.4865L85.6007 14.6665C84.4207 15.3665 83.7274 15.0866 83.4141 14.8599C83.1074 14.6332 82.6274 14.0532 82.9407 12.7199L83.4141 10.6732C83.4674 10.4599 83.3607 10.0932 83.2007 9.93322L81.5474 8.27988C80.7207 7.45322 80.7874 6.74655 80.9007 6.39988C81.0141 6.05322 81.3741 5.43988 82.5207 5.24655L84.6474 4.89322C84.8474 4.85988 85.1341 4.64655 85.2207 4.46655L86.4007 2.11322C86.9341 1.03988 87.6341 0.879883 88.0007 0.879883C88.3674 0.879883 89.0674 1.03988 89.6007 2.11322L90.7741 4.45988C90.8674 4.63988 91.1541 4.85322 91.3541 4.88655L93.4807 5.23988C94.6341 5.43322 94.9941 6.04655 95.1007 6.39322C95.2074 6.73988 95.2741 7.44655 94.4541 8.27322L92.8007 9.93322C92.6407 10.0932 92.5407 10.4532 92.5874 10.6732L93.0607 12.7199C93.3674 14.0532 92.8941 14.6332 92.5874 14.8599C92.4207 14.9799 92.1541 15.1132 91.7741 15.1132Z"
              fill="#E1E1E1"
            />
          </svg>
          <span style={{ color: "#CFCFCF" }}>|</span>
          <span>۲۰۰ بازدید</span>
        </div>
        {/* menus */}
        <div className="view-product-menus">
          <div
            onClick={() => {
              setModal(true);
              setStep(0);
            }}
          >
            <span className="bold">معرفی دوره</span>
            <img src={leftArrowIcon} alt="open menu" />
          </div>
          <div
            onClick={() => {
              setModal(true);
              setStep(1);
            }}
          >
            <span className="bold">معرفی جلسات برگزاری</span>
            <img src={leftArrowIcon} alt="open menu" />
          </div>
          <div
            onClick={() => {
              setModal(true);
              setStep(2);
            }}
          >
            <span className="bold">نظر هنرجویان</span>
            <img src={leftArrowIcon} alt="open menu" />
          </div>
          <div
            onClick={() => {
              setModal(true);
              setStep(3);
            }}
            style={{ borderBottom: "none" }}
          >
            <span className="bold">سوالات متداول</span>
            <img src={leftArrowIcon} alt="open menu" />
          </div>
        </div>
      </div>
      <ModalSlide visible={modal} setVisible={setModal} hideCurve hideClose>
        <div className="lines-modal-body">
          {/* header */}
          <div className="lines-modal-title">
            <img src={closeIcon} alt="close" onClick={() => setModal(false)} />
            <span className="bold">
              {step === 0 && "معرفی دوره"}
              {step === 1 && "معرفی جلسات برگزاری"}
              {step === 2 && "نظر هنرجویان ما"}
              {step === 3 && "سوالات متداول"}
            </span>
          </div>
          <div className="lines-modal-content">
            {/* intro */}
            {step === 0 && (
              <div className="view-course-intro">
                {/* video */}
                <div>
                  <img src={blogVideo} alt="video" />
                  <div>
                    <img src={playVideoIcon} alt="play" />
                  </div>
                </div>
                {/* description */}
                <div>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است کتابهای زیادی در شصت و سه
                  درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                  طلبد{" "}
                  <div
                    style={{
                      color: "#40B1D1",
                      display: "inline",
                      marginRight: 2,
                    }}
                    className="bold"
                  >
                    بیشتر
                  </div>
                </div>
                <div>
                  {/* teacher */}
                  <div>
                    <div>
                      <img src={hatIcon} alt="teacher" />
                    </div>
                    <div>
                      <div className="bold">سمانه درخشانی</div>
                      <div>مدرس دوره</div>
                    </div>
                    <div>
                      <img src={instagramIcon} alt="instagram" />
                      <img src={whatsappIcon} alt="whatsapp" />
                    </div>
                  </div>
                  {/* date */}
                  <div>
                    <div>
                      <img src={calendarIcon} alt="date" />
                    </div>
                    <div>
                      <div>
                        <div className="bold">۲۰ آبان</div>
                        <div>الی</div>
                        <div className="bold">۱۰ بهمن</div>
                      </div>
                      <div>تاریخ برگزاری</div>
                    </div>
                  </div>
                  {/* time */}
                  <div>
                    <div>
                      <img src={clockIcon} alt="time" />
                    </div>
                    <div>
                      <div>
                        <div className="bold">شنبه ها ۱۶ تا ۱۸</div>
                        <div>|</div>
                        <div className="bold">سه شنبه ها ۱۷ تا ۱۹</div>
                      </div>
                      <div>روز برگزاری</div>
                    </div>
                  </div>
                  {/* sessions */}
                  <div>
                    <div>
                      <img src={coinIcon} alt="sessions" />
                    </div>
                    <div>
                      <div className="bold">۱۰ جلسه حضوری</div>
                      <div>مدرس دوره</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* sessions */}
            {step === 1 && (
              <div className="courses-sessions">
                {array.map((arr, index) => (
                  <div key={index}>
                    <div>{FormatHelper.toPersianString(index + 1)}</div>
                    <div>
                      <div>
                        <div className="bold" style={{ color: "black" }}>
                          جلسه اول
                        </div>
                        <div>- ۲۰ آذر ۱۴۰۱</div>
                      </div>
                      <div>معرفی دوره و آشنایی با هنرجویان</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* comments */}
            {step === 2 && (
              <div className="about-comments">
                <Swiper
                  style={{
                    width: "100%",
                    direction: "rtl",
                    margin: "2px 0 20px 0",
                  }}
                  spaceBetween={10}
                  slidesPerView={1}
                >
                  {array.map((arr, index) => (
                    <SwiperSlide style={{ padding: 8 }} key={index}>
                      <div className="about-comments-slider-item">
                        {/* likes */}
                        <div>
                          <div>۱۰۰</div>
                          <img src={likeIcon} alt="like" />
                        </div>
                        {/* title */}
                        <div>
                          <div>
                            <span>
                              <span className="bold">۹</span>/۱۰
                            </span>
                          </div>
                          <div>
                            <div className="bold">سارا احمدی</div>
                            <div>هنرجوی دوره اکستنشن مو و ابرو</div>
                          </div>
                        </div>
                        {/* content */}
                        <div>
                          با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                          علی الخصوص طراحان خلاقی فرهنگ پیشرو در زبان فارسی
                          ایجاد کرد این شرایط سخت تایپ به پایان رسد و شامل حروف
                          چینی دستاوردهای اصلی است{" "}
                          <span className="bold" style={{ color: "#40B1D1" }}>
                            بیشتر
                          </span>
                        </div>
                        {/* voice */}
                        <audio className="about-comments-voice" controls>
                          <source
                            src="https://dl.behmelody.in/1401/Shahrivar/I%20m%20Good%20%28Blue%29%20-%20David%20Guetta%20%20Bebe%20Rexha%20%28128%29.mp3"
                            type="audio/mp3"
                          />
                        </audio>
                        <div>
                          <div>
                            <img src={commentImageOne} alt="image" />
                          </div>
                          <div>
                            <img src={commentImageTwo} alt="image" />
                            <img src={commentImageThree} alt="image" />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
            {/* Q&A */}
            {step === 3 && (
              <div className="lines-modal-questions">
                {questions.map((question, index) => (
                  <Question index={index} data={question} />
                ))}
              </div>
            )}
          </div>
          {/* add comment button */}
          {modal && (
            <Button
              onClick={() => history.push("/courses/buy")}
              className="courses-card-button mv-button"
            >
              <img src={basketIcon} alt="basket" />
            </Button>
          )}
          {/* actions */}
          {modal && (
            <div className="lines-modal-actions">
              {step === 3 ? (
                <div className="lines-modal-reserve-button">
                  <Button
                    onClick={() => history.push("/courses/buy")}
                    className="mv-button"
                  >
                    خرید دوره
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => {
                    setStep(step + 1);
                  }}
                  className="mv-button"
                >
                  <img src={nextIcon} alt="next" />
                  <span>
                    {step === 0 && "معرفی جلسات برگزاری"}
                    {step === 1 && "نظر هنرجویان"}
                    {step === 2 && "سوالات متداول"}
                  </span>
                </Button>
              )}
              <Button
                onClick={() => {
                  if (step === 0) {
                    setModal(false);
                  } else {
                    setStep(step - 1);
                  }
                }}
                className="mv-button"
              >
                بازگشت
              </Button>
            </div>
          )}
        </div>
      </ModalSlide>
    </div>
  );
};

export default ViewCourse;
