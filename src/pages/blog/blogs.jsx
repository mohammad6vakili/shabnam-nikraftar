import React from "react";
import "./blogs.css";
import { Button } from "antd";
import MobileMenu from "../../components/mobile_menu";
import Header from "../../components/header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import BlogPost from "../../components/blog_post";
import Banner from "../../assets/images/headerBanner.svg";
import sortIcon from "../../assets/shop/sort.svg";
import filterIcon from "../../assets/shop/filter.svg";

const Blogs = () => {
  const array = [1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="shop blogs">
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
      <div className="shop-list-actions">
        <Button>
          <img src={filterIcon} alt="filter" />
          <span>فیلتر محصولات</span>
        </Button>
        <Button>
          <img src={sortIcon} alt="sort" />
          <span>مرتب سازی</span>
        </Button>
      </div>
      <div className="blogs-post">
        {array.map((arr, index) => (
          <BlogPost index={index} />
        ))}
      </div>
      <MobileMenu />
    </div>
  );
};
export default Blogs;
