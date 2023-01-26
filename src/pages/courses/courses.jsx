import React from "react";
import "./courses.css";
import { Button } from "antd";
import MobileMenu from "../../components/mobile_menu";
import Header from "../../components/header";
import ProductCard from "../../components/product-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { products } from "../../utils/util";
import Banner from "../../assets/images/headerBanner.svg";
import sortIcon from "../../assets/shop/sort.svg";
import filterIcon from "../../assets/shop/filter.svg";
import CourseCard from "../../components/course_card";

const Courses = () => {
  const array = [1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="courses">
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
      {/* list action buttons */}
      <div className="courses-list-actions">
        <Button>
          <img src={filterIcon} alt="filter" />
          <span>فیلتر دوره ها</span>
        </Button>
        <Button>
          <img src={sortIcon} alt="sort" />
          <span>مرتب سازی</span>
        </Button>
      </div>
      <div className="courses-list">
        {array.map((arr, index) => (
          <div
            style={{ marginBottom: 16, width: "100%", direction: "rtl" }}
            key={index}
          >
            <CourseCard />
          </div>
        ))}
      </div>
      {/* mobile menu */}
      <MobileMenu />
    </div>
  );
};
export default Courses;
