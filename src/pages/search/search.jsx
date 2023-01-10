import React, { useState, useEffect } from "react";
import "./search.css";
import { searchResult, categories } from "../../utils/util";
import { Swiper, SwiperSlide } from "swiper/react";
import { Input } from "antd";
import MobileMenu from "../../components/mobile_menu";
import Header from "../../components/header";
import searchIcon from "../../assets/images/searchTabIcon.svg";
import clearInputIcon from "../../assets/images/clearSearchInput.svg";

const Search = () => {
  const [query, setQuery] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(-1);

  useEffect(() => {
    if (query.length > 0) {
      setShowResult(true);
    }
  }, [query]);

  return (
    <div className="search">
      {/* header */}
      <Header>
        <div className="search-input-wrapper">
          <Input
            style={query.length > 0 ? { width: "80%" } : { width: "100%" }}
            prefix={
              <img
                onClick={() => setShowResult(true)}
                style={{ marginLeft: "8px" }}
                src={searchIcon}
                alt="search"
              />
            }
            suffix={
              query.length > 0 && (
                <img
                  onClick={() => setQuery("")}
                  src={clearInputIcon}
                  alt="clear input"
                />
              )
            }
            className="mv-input"
            placeholder="جستجو کن ..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query.length > 0 && (
            <div
              onClick={() => {
                setShowResult(false);
                setQuery("");
              }}
            >
              بستن
            </div>
          )}
        </div>
      </Header>
      {/* categories carousel */}
      <div className="search-categories">
        <Swiper
          style={{
            width: "100%",
            padding: "0 10px",
            direction: "rtl",
            margin: "2px 0 20px 0",
          }}
          spaceBetween={10}
          slidesPerView={3.2}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => setSelectedCategory(index)}
                className={`search-catgory-item ${
                  index === selectedCategory ? "search-category-selected" : null
                }`}
              >
                {category.title}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* search result */}
      {showResult && (
        <div className="search-show-result">
          {searchResult.map((result, index) => (
            <div key={index}>
              <img src={searchIcon} alt="search result" />
              <div>
                <div>{result.title}</div>
                <div>
                  در دسته بندی <span>{result.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* mobile menu */}
      <MobileMenu />
    </div>
  );
};
export default Search;
