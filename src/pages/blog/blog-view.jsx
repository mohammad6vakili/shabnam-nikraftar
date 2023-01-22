import React from "react";
import "./blog-view.css";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "../../utils/util";
import backIcon from "../../assets/blog/backIcon.svg";
import shareIcon from "../../assets/blog/shareIcon.svg";
import likeIcon from "../../assets/blog/likeIcon.svg";
import playVideoIcon from "../../assets/blog/playVideo.svg";
import topBanner from "../../assets/blog/topBanner.svg";
import blogImage1 from "../../assets/blog/blogImage1.svg";
import blogVideo from "../../assets/blog/blogVideo.svg";
import blogImage4 from "../../assets/blog/blogImage4.svg";
import blogImage5 from "../../assets/blog/blogImage5.svg";
import blogImage6 from "../../assets/blog/blogImage6.svg";

const BlogView = () => {
  const history = useHistory();
  const array = [1, 2, 3, 4];
  return (
    <div className="blog-view">
      {/* top banner */}
      <div className="blog-view-top-banner">
        <img src={topBanner} alt="top banner" />
        <div>
          <div onClick={() => history.goBack()}>
            <img src={backIcon} alt="back" />
          </div>
          <div>
            <img src={shareIcon} alt="share" />
          </div>
          <div>
            <img src={likeIcon} alt="like" />
          </div>
        </div>
      </div>
      {/* title */}
      <div className="blog-view-title">
        <div className="bold">۱۰ راه طبیعی حفظ سلامت پوست بدن در خانه</div>
        <div>۶ دقیقه</div>
      </div>
      {/* subtitle */}
      <div className="blog-view-subtitle">
        <div>نویسنده: شبنم نیکرفتار</div>
        <div></div>
        <div>۱۵۰ بازدید</div>
      </div>
      {/* content */}
      <div className="blog-view-content">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
      </div>
      {/* slider */}
      <div className="blog-view-slider">
        <Swiper
          style={{
            width: "100%",
            direction: "rtl",
            margin: "2px 0 20px 0",
          }}
          spaceBetween={10}
          slidesPerView={2.3}
        >
          {array.map((arr, index) => (
            <SwiperSlide key={index}>
              <div href={"#"} target="_blank">
                <img src={blogImage1} alt="slider image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* article */}
      <div className="blog-view-article">
        <div className="bold">راه اول: حفظ سلامت پوست بدن در خانه</div>
        <div>
          با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
          پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </div>
      </div>
      {/* video */}
      <div className="blog-view-video">
        <img src={blogVideo} alt="video" />
        <div>
          <img src={playVideoIcon} alt="play" />
        </div>
      </div>
      {/* article */}
      <div className="blog-view-article">
        <div className="bold">راه دوم: حفظ سلامت پوست بدن در خانه</div>
        <div>
          با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
          پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </div>
      </div>
      {/* image grid */}
      <div className="blog-view-grid">
        <div>
          <img src={blogImage4} alt="post" />
          <img src={blogImage5} alt="post" />
        </div>
        <div>
          <img src={blogImage6} alt="post" />
        </div>
      </div>
      {/* article */}
      <div className="blog-view-article">
        <div className="bold">راه سوم: حفظ سلامت پوست بدن در خانه</div>
        <div>
          با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
          پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </div>
      </div>
      {/* category slider */}
      <div className="blog-view-categories">
        <Swiper
          style={{
            width: "100%",
            direction: "rtl",
            margin: "2px 0 20px 0",
          }}
          spaceBetween={10}
          slidesPerView={3}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="blog-view-categories-item">{category.title}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogView;
