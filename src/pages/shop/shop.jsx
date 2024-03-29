import React from "react";
import "./shop.css";
import { Button } from "antd";
import MobileMenu from "../../components/mobile_menu";
import Header from "../../components/header";
import ProductCard from "../../components/product-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { products } from "../../utils/util";
import Banner from "../../assets/images/headerBanner.svg";
import cartIcon from "../../assets/shop/cartIcon.svg";
import sortIcon from "../../assets/shop/sort.svg";
import filterIcon from "../../assets/shop/filter.svg";

const Shop = () => {
  const array = [1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="shop">
      {/* cart card */}
      <div className="shop-cart">
        <span className="bold">
          مبلغ سبد خرید شما: <span className="bold">۱,۵۹۰,۰۰۰</span>{" "}
          <span style={{ color: "white" }}>تومان</span>
        </span>
        <Button
          className="mv-button"
          style={{
            width: "80px",
            border: "none",
          }}
        >
          <span style={{ marginLeft: "8px", fontSize: 16 }}>۲</span>
          <img src={cartIcon} alt="play live" />
        </Button>
      </div>
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
      <div className="shop-list">
        {products.map((product, index) => (
          <ProductCard product={product} index={index} />
        ))}
      </div>
      {/* mobile menu */}
      <MobileMenu />
    </div>
  );
};
export default Shop;
