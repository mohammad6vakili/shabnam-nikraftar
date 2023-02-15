import React, { useEffect, useState } from "react";
import "./home.css";
import MobileMenu from "../../components/mobile_menu";
import Header from "../../components/header";
import Post from "../../components/post";
import LiveAlert from "../../components/live_alert";
import PostPreview from "../../components/post_preview";
import StoryPreview from "../../components/story_preview";
import { useDispatch } from "react-redux";
import { setStoryPreview } from "../../features/app/app_slice";
import { categories, articles, stories, posts } from "../../utils/util";
import Banner from "../../assets/images/headerBanner.svg";
import coursesModelOne from "../../assets/images/coursesModelOne.svg";
import coursesModelTwo from "../../assets/images/courseModelTwo.svg";
import coursesModelThree from "../../assets/images/coursesModelThree.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { ApiInterface } from "../../api/usePostService";
import Env from "../../constant/env.json";
import { Spin } from "antd";

const baseImageUrl = Env.base_url + "app";

export default function Home() {
  const dispatch = useDispatch();
  const [postTab, setPostTab] = useState(1);
  const [postArray, setPostArray] = useState([]);
  const [storyArray, setStoryArray] = useState([]);
  const [bannerArray, setBannerArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const array = [1, 1, 1, 1, 1, 1, 1, 1];

  const fetchDataHandler = async () => {
    try {
      const res = await ApiInterface.getHomePosts();
      const story = await ApiInterface.getHomeStory();
      const banner = await ApiInterface.getHomeBanner();
      setPostArray(res.data);
      setStoryArray(story.data);
      setBannerArray(banner.data);
    } catch (e) {
      console.log("e ===> ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (
    <div className="home">
      {/* live alert */}
      <LiveAlert />
      {/* header */}
      <Header>
        <div className="home-header-carousel">
          <Spin spinning={loading}>
            <Swiper
              spaceBetween={10}
              modules={[Autoplay]}
              autoplay={true}
              slidesPerView={1}
            >
              {bannerArray.map((item, index) => (
                <SwiperSlide key={index}>
                  <a
                    style={{ width: "100%", height: "140px" }}
                    href={"#"}
                    target="_blank"
                  >
                    {item.attributes &&
                    item.attributes.images &&
                    item.attributes.images.length ? (
                      <img
                        style={{
                          width: "100%",
                          height: "140px",
                        }}
                        src={baseImageUrl + item.attributes.images[0].url}
                        alt="slider image"
                      />
                    ) : (
                      <img
                        style={{
                          width: "100%",
                          height: "140px",
                        }}
                        src={Banner}
                        alt="slider image"
                      />
                    )}
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </Spin>
        </div>
      </Header>
      {/* stories carousel */}
      <div>
        <Spin spinning={loading}>
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
            slidesPerView={5}
          >
            {stories.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => dispatch(setStoryPreview(true))}
                  className="home-main-carousel-item"
                  href={"#"}
                  target="_blank"
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "44px 44px 16px 0",
                    }}
                    src={item.image}
                    alt="slider image"
                  />
                </div>
                <div
                  style={{ fontSize: 10, marginTop: 8, textAlign: "center" }}
                >
                  {item.title}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Spin>
      </div>
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
      <div className="home-posts">
        {posts.map((post, index) => (
          <Post index={index} post={post} />
        ))}
      </div>
      {/* home courses slider */}
      <div className="home-courses">
        <h2 className="bold">دوره‌ها و پک‌های آموزشی ما</h2>
        <Swiper
          style={{
            width: "100%",
            padding: "0 10px",
            direction: "rtl",
            margin: "2px 0 20px 0",
          }}
          spaceBetween={30}
          modules={[Autoplay]}
          autoplay={true}
          slidesPerView={1.3}
        >
          {array.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="home-courses-carousel-item"
                href={"#"}
                target="_blank"
              >
                <div>
                  <img src={coursesModelOne} alt="courses" />
                  <img src={coursesModelTwo} alt="courses" />
                  <img src={coursesModelThree} alt="courses" />
                </div>
                <div className="bold">دوره آموزشی آرایشی و زیبایی</div>
                <div>استاد سمانه درخشانی</div>
                <div>
                  <span
                    className="bold"
                    style={{ marginLeft: "5px", color: "#40B1D1" }}
                  >
                    ۶,۶۹۹,۰۰۰
                  </span>
                  تومان
                </div>
                <div>٪۱۵</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* posts */}
      <div className="home-posts">
        {posts.map((post, index) => (
          <Post index={index} post={post} />
        ))}
      </div>
      {/* categories */}
      <div className="home-categories">
        <h2 className="bold" style={{ marginBottom: "8px" }}>
          دوره‌ها و پک‌های آموزشی ما
        </h2>
        <div className="category-items">
          {categories.map((category, index) => (
            <div key={index}>
              <div>
                <div>
                  <img src={category.icon} alt="category icon" />
                </div>
                <img src={category.icon} alt="category icon" />
              </div>
              <span className="bold">{category.title}</span>
            </div>
          ))}
        </div>
      </div>
      {/* posts */}
      <div className="home-posts">
        {posts.map((post, index) => (
          <Post index={index} post={post} />
        ))}
      </div>
      {/* articles slider */}
      <div className="home-courses">
        <h2 className="bold">دوره‌ها و پک‌های آموزشی ما</h2>
        <Swiper
          style={{
            width: "100%",
            padding: "0 10px",
            direction: "rtl",
            margin: "2px 0 20px 0",
          }}
          spaceBetween={30}
          modules={[Autoplay]}
          autoplay={true}
          slidesPerView={1.3}
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <div
                className="home-article-carousel-item"
                href={"#"}
                target="_blank"
              >
                <img src={article.image} alt="article" />
                <div className="bold">{article.title}</div>
                <div>
                  <span>{article.time}</span>
                  <div></div>
                  <span>{article.view}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* posts */}
      <div className="home-posts">
        {posts.map((post, index) => (
          <Post index={index} post={post} />
        ))}
      </div>
      {/* mobile menu component */}
      <MobileMenu />
      {/* post preview component */}
      <PostPreview />
      {/* story preview component */}
      <StoryPreview />
    </div>
  );
}
// export default Home;
