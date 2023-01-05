import React, { useState } from "react";
import "./home.css";
import { Button } from "antd";
import MobileMenu from "../../components/mobile_menu";
import Header from "../../components/header";
import Banner from "../../assets/images/headerBanner.svg";
import homeMainCarouselIMage from "../../assets/images/homeMainCarouselIMage.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Home = () => {
  const [postTab, setPostTab] = useState(1);
  const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
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
              <SwiperSlide>
                <a
                  style={{ width: "100%", height: "140px" }}
                  href={"#"}
                  target="_blank"
                  key={index}
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
      {/* main carousel */}
      <Swiper
        style={{
          width: "100%",
          padding: "0 10px",
          direction: "ltr",
          margin: "2px 0 20px 0",
        }}
        spaceBetween={10}
        modules={[Autoplay]}
        autoplay={true}
        slidesPerView={6}
      >
        {array.map((item, index) => (
          <SwiperSlide>
            <div
              className="home-main-carousel-item"
              href={"#"}
              target="_blank"
              key={index}
            >
              <img
                style={
                  {
                    // width: "100px",
                    // height: "70px",
                  }
                }
                src={homeMainCarouselIMage}
                alt="slider image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* posts */}
      <div className="home-post-tabs">
        <div>
          <button
            className={postTab === 0 ? "mv-button" : ""}
            onClick={() => setPostTab(0)}
          >
            جدیدترین
          </button>
          <button
            className={postTab === 1 ? "mv-button" : ""}
            onClick={() => setPostTab(1)}
          >
            محبوب ترین
          </button>
        </div>
      </div>
      <MobileMenu />
    </div>
  );
};
export default Home;
