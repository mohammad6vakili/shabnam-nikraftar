import React, { useState } from "react";
import "./lines.css";
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useHistory } from "react-router-dom";
import FormatHelper from "../../helper/FormatHelper";
import { lines, postComments } from "../../utils/util";
import ModalSlide from "../../components/modal_slide";
import MobileMenu from "../../components/mobile_menu";
import Post from "../../components/post";
import PostComment from "../../components/post_comment";
import Header from "../../components/header";
import Banner from "../../assets/images/headerBanner.svg";
import leftArrow from "../../assets/lines/leftArrow.svg";
import unlikeIcon from "../../assets/lines/unLike.svg";
import shareIcon from "../../assets/lines/share.svg";
import imageBackground from "../../assets/lines/imageBackground.svg";
import closeIcon from "../../assets/lines/closeIcon.svg";
import nextIcon from "../../assets/lines/nextIcon.svg";
import reserveIcon from "../../assets/lines/reserveIcon.svg";

const Lines = () => {
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [modal, setModal] = useState(false);
  const [comments, setComments] = useState(postComments);

  const array = [1, 2, 3, 4, 5, 6];
  return (
    <div className="home">
      {/* header */}
      <Header>
        <div className="home-header-carousel">
          <Swiper
            spaceBetween={10}
            modules={[Autoplay]}
            autoplay={true}
            slidesPerView={1}
          >
            {array.map((item, index) => (
              <SwiperSlide key={index}>
                <a
                  style={{ width: "100%", height: "140px" }}
                  href={"#"}
                  target="_blank"
                >
                  <img
                    style={{
                      width: "100%",
                      height: "140px",
                    }}
                    src={Banner}
                    alt="slider image"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Header>
      {lines.map((line, index) => (
        <div key={index} className="lines-line-item">
          {/* details */}
          <div>
            <div>
              {/* index */}
              <div className="bold">
                {index + 1 < 10 && "۰"}
                {FormatHelper.toPersianString(index + 1)}
              </div>
              {/* artists */}
              <div>
                <span style={{ color: "black" }} className="bold">
                  {line.artists}
                </span>
                <span>آرتیست ماهر</span>
              </div>
              {/* customers */}
              <div>
                <span style={{ color: "black" }} className="bold">
                  {line.customers}
                </span>
                <span>مشتری ماهانه</span>
              </div>
              {/* title */}
              <div>
                <span>لاین</span> <span className="bold">{line.title}</span>
              </div>
            </div>
            <div>
              <img src={line.image} alt="line image" />
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
              <div>معرفی لاین</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* posts */}
            <div
              onClick={() => {
                setModal(true);
                setStep(1);
              }}
            >
              <div>پست های مرتبط</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* Q&A */}
            <div
              onClick={() => {
                setModal(true);
                setStep(2);
              }}
            >
              <div>سوالات متداول</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* comments */}
            <div
              onClick={() => {
                setModal(true);
                setStep(3);
              }}
            >
              <div>نظرات کاربران</div>
              <img src={leftArrow} alt="menu" />
            </div>
          </div>
          {/* actions */}
          <div>
            <Button className="mv-button">رزرو نوبت</Button>
            <div>
              <img src={unlikeIcon} alt="like" />
            </div>
            <div>
              <img src={shareIcon} alt="share" />
            </div>
          </div>
        </div>
      ))}
      {/* mobile menu */}
      <MobileMenu />
      {/* line modal */}
      <ModalSlide visible={modal} setVisible={setModal} hideCurve hideClose>
        <div className="lines-modal-body">
          {/* header */}
          <div className="lines-modal-title">
            <img src={closeIcon} alt="close" onClick={() => setModal(false)} />
            <span className="bold">
              {step === 0 && "معرفی لاین"}
              {step === 1 && "پست مرتبط"}
              {step === 2 && "سوالات متداول"}
              {step === 3 && "نظر کاربران"}
            </span>
          </div>
          <div className="lines-modal-content">
            {/* posts */}
            {step === 1 && (
              <div className="home-posts">
                {array.map((post, index) => (
                  <Post index={index} />
                ))}
              </div>
            )}
            {/* comments */}
            {step === 3 && (
              <div className="lines-modal-comments">
                <div></div>
                {comments.map((comment, index) => (
                  <PostComment comment={comment} index={index} />
                ))}
              </div>
            )}
          </div>
          {/* actions */}
          {modal && (
            <div className="lines-modal-actions">
              {step === 3 ? (
                <div className="lines-modal-reserve-button">
                  <Button
                    onClick={() => {
                      history.push("/queue/create");
                    }}
                    className="mv-button"
                  >
                    رزرو نوبت
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
                    {step === 0 && "پست مرتبط"}
                    {step === 1 && "سوالات متداول"}
                    {step === 2 && "نظر کاربران"}
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
              <div
                className="lines-modal-actions-reserve-button"
                onClick={() => history.push("/queue/create")}
              >
                <img src={reserveIcon} alt="reserve" />
              </div>
            </div>
          )}
        </div>
      </ModalSlide>
    </div>
  );
};
export default Lines;
