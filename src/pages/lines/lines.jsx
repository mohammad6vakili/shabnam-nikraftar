import React from "react";
import "./lines.css";
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import FormatHelper from "../../helper/FormatHelper";
import { lines } from "../../utils/util";
import MobileMenu from "../../components/mobile_menu";
import Header from "../../components/header";
import Banner from "../../assets/images/headerBanner.svg";
import leftArrow from "../../assets/lines/leftArrow.svg";
import unlikeIcon from "../../assets/lines/unLike.svg";
import shareIcon from "../../assets/lines/share.svg";
import imageBackground from "../../assets/lines/imageBackground.svg";

const Lines = () => {
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
            <div>
              <div>معرفی لاین</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* posts */}
            <div>
              <div>پست های مرتبط</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* Q&A */}
            <div>
              <div>سوالات متداول</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* comments */}
            <div>
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
    </div>
  );
};
export default Lines;
