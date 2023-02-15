import React, { useState, Fragment } from "react";
import "./about.css";
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { useHistory } from "react-router-dom";
import Header from "../../components/header";
import MobileMenu from "../../components/mobile_menu";
import ModalSlide from "../../components/modal_slide";
import shabnamImage from "../../assets/about/shabnam.svg";
import imageBackground from "../../assets/lines/imageBackground.svg";
import leftArrow from "../../assets/lines/leftArrow.svg";
import closeIcon from "../../assets/lines/closeIcon.svg";
import nextIcon from "../../assets/lines/nextIcon.svg";
import playVideoIcon from "../../assets/blog/playVideo.svg";
import blogImage1 from "../../assets/blog/blogImage1.svg";
import blogVideo from "../../assets/blog/blogVideo.svg";
import blogImage4 from "../../assets/blog/blogImage4.svg";
import blogImage5 from "../../assets/blog/blogImage5.svg";
import blogImage6 from "../../assets/blog/blogImage6.svg";
import certificateImage from "../../assets/about/certificate.svg";
import certificateBgImage from "../../assets/about/certificateBg.svg";
import servicesVector from "../../assets/about/servicesVector.svg";
import teacherImage from "../../assets/about/teacher.svg";
import instagram from "../../assets/about/instagram.svg";
import facebook from "../../assets/about/facebook.svg";
import telegram from "../../assets/about/telegram.svg";
import map from "../../assets/about/map.svg";
import mapBg from "../../assets/about/mapBg.svg";
import telegramIcon from "../../assets/about/telegramContact.svg";
import facebookIcon from "../../assets/about/facebookContact.svg";
import youtubeIcon from "../../assets/about/youtubeContact.svg";
import instagramIcon from "../../assets/about/instagramContact.svg";
import locationIcon from "../../assets/about/loaction.svg";
import phoneIcon from "../../assets/about/phone.svg";
import mobileIcon from "../../assets/about/mobile.svg";
import emailIcon from "../../assets/about/email.svg";
import plusIcon from "../../assets/about/plus.svg";
import likeIcon from "../../assets/about/likeIcon.svg";
import commentImageOne from "../../assets/about/commentImage1.svg";
import commentImageTwo from "../../assets/about/commentImage2.svg";
import commentImageThree from "../../assets/about/commentImage3.svg";

const About = () => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [step, setStep] = useState(0);

  const array = [1, 2, 3, 4, 5, 6];

  return (
    <div className="about">
      {/* header */}
      <Header />
      <div className="about-body">
        <div className="lines-line-item about-main">
          {/* details */}
          <div>
            <div>
              {/* index */}
              <div></div>
              {/* artists */}
              <div>
                <span style={{ color: "black" }} className="bold">
                  +۵۰
                </span>
                <span>آرتیست ماهر</span>
              </div>
              {/* customers */}
              <div>
                <span style={{ color: "black" }} className="bold">
                  +۱۰۰۰
                </span>
                <span>مشتری ماهانه</span>
              </div>
              {/* title */}
              <div>
                <span>درباره ی</span>{" "}
                <span className="bold">شبنم نیک رفتار</span>
              </div>
            </div>
            <div>
              <img src={shabnamImage} alt="line image" />
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
              <div>معرفی موسس</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* certificates */}
            <div
              onClick={() => {
                setModal(true);
                setStep(1);
              }}
            >
              <div>افتخارات و تقدیرنامه‌ها</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* our services */}
            <div
              onClick={() => {
                setModal(true);
                setStep(2);
              }}
            >
              <div>خدمات ما</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* teachers */}
            <div
              onClick={() => {
                setModal(true);
                setStep(3);
              }}
            >
              <div>اساتید مجرب ما</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* comments */}
            <div
              onClick={() => {
                setModal(true);
                setStep(4);
              }}
            >
              <div>نظر کاربران و هنرجویان ما</div>
              <img src={leftArrow} alt="menu" />
            </div>
            {/* contacts */}
            <div
              onClick={() => {
                setModal(true);
                setStep(5);
              }}
            >
              <div>راه های ارتباطی ما</div>
              <img src={leftArrow} alt="menu" />
            </div>
          </div>
        </div>
      </div>
      <MobileMenu />
      {/* line modal */}
      <ModalSlide visible={modal} setVisible={setModal} hideCurve hideClose>
        <div className="lines-modal-body">
          {/* header */}
          <div className="lines-modal-title">
            <img src={closeIcon} alt="close" onClick={() => setModal(false)} />
            <span className="bold">
              {step === 0 && "معرفی مؤسس"}
              {step === 1 && "افتخارات و تقدیرنامه‌ها"}
              {step === 2 && "خدمات ما "}
              {step === 3 && "اساتید مجرب ما"}
              {step === 4 && "نظر هنرجویان ما"}
              {step === 5 && "راه‌های ارتباطی ما"}
            </span>
          </div>
          <div className="lines-modal-content">
            {/* intro */}
            {step === 0 && (
              <Fragment>
                {/* title */}
                <div className="blog-view-title" style={{ marginBottom: 8 }}>
                  <div className="bold">معرفی شبنم نیک رفتار</div>
                </div>
                {/* content */}
                <div className="blog-view-content">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                </div>
                {/* slider */}
                <div className="lines-slider">
                  <Swiper
                    style={{
                      width: "100%",
                      direction: "rtl",
                      margin: "2px 0 20px 0",
                    }}
                    spaceBetween={10}
                    slidesPerView={2}
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
                  <div className="bold">حفظ سلامت پوست بدن در خانه</div>
                  <div>
                    با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                    الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                    در این صورت می توان امید داشت که تمام و دشواری موجود در
                    ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                    نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                    اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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
                  <div className="bold">حفظ سلامت پوست بدن در خانه</div>
                  <div>
                    با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                    الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                    در این صورت می توان امید داشت که تمام و دشواری موجود در
                    ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                    نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                    اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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
                  <div className="bold">حفظ سلامت پوست بدن در خانه</div>
                  <div>
                    با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                    الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                    در این صورت می توان امید داشت که تمام و دشواری موجود در
                    ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                    نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                    اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </div>
                </div>
              </Fragment>
            )}
            {/* certificates */}
            {step === 1 && (
              <div className="about-certificates">
                <div>
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
                      <SwiperSlide key={index}>
                        <div className="about-certificates-slider-item">
                          <img src={certificateBgImage} alt="certificate" />
                          <img src={certificateImage} alt="certificate" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div>
                  <div className="bold">برترین سالن زیبایی استان</div>
                  <div>در سال ۱۴۰۲</div>
                  <div>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است.
                  </div>
                </div>
              </div>
            )}
            {/* our services */}
            {step === 2 && (
              <div className="about-services">
                <div>
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
                      <SwiperSlide
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          paddingBottom: "24px",
                        }}
                      >
                        <div className="about-services-slider-item">
                          <img src={servicesVector} alt="services" />
                          <div className="bold">۱۰</div>
                          <div>لاین زیبایی</div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div>
                  <div>
                    <div className="bold">۴۰۰</div>
                    <div>هنرجویان جوان</div>
                  </div>
                  <div>
                    <div className="bold">۵۰</div>
                    <div style={{ color: "black" }}>آرتیست ماهر</div>
                  </div>
                  <div>
                    <div className="bold">+۵۰۰۰</div>
                    <div>مشتری ماهانه</div>
                  </div>
                </div>
              </div>
            )}
            {/* teachers */}
            {step === 3 && (
              <div className="about-teachers">
                <Swiper
                  style={{
                    width: "100%",
                    direction: "rtl",
                    margin: "2px 0 20px 0",
                  }}
                  spaceBetween={24}
                  slidesPerView={1.5}
                >
                  {array.map((arr, index) => (
                    <SwiperSlide style={{ paddingBottom: 32 }} key={index}>
                      <div className="about-teachers-slider-item">
                        <img src={teacherImage} alt="teachers" />
                        <div className="bold">سمانه حق شناس</div>
                        <div>۷ سال سابقه کاری</div>
                        {/* social */}
                        <div>
                          <div>
                            <img src={instagram} alt="instagram" />
                          </div>
                          <div>
                            <img src={facebook} alt="facebook" />
                          </div>
                          <div>
                            <img src={telegram} alt="telegram" />
                          </div>
                        </div>
                        <div>
                          <div>تخصص</div>
                        </div>
                        <div>
                          <div>رنگ مو و ابرو</div>
                          <div>لاک ناخن</div>
                          <div>هیرکات</div>
                          <div>پاکسازی پوست</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
            {/* comments */}
            {step === 4 && (
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
            {/* contacts */}
            {step === 5 && (
              <div className="about-contacts">
                <div>
                  <div>
                    <img src={telegramIcon} alt="telegram" />
                    <img src={facebookIcon} alt="facebook" />
                    <img src={youtubeIcon} alt="youtube" />
                    <img src={instagramIcon} alt="instagram" />
                  </div>
                  <div>
                    <img src={mapBg} alt="background" />
                    <img src={map} alt="map" />
                  </div>
                </div>
                <div>
                  {/* address */}
                  <div>
                    <div>
                      <img src={locationIcon} alt="address" />
                    </div>
                    <div>
                      اهواز - پادادشهر - خ جواد الائمه نبش 17 شرقی- ساختمان
                      ارسلان - طبقه دوم- واحد سوم
                    </div>
                  </div>
                  {/* phone */}
                  <div>
                    <div>
                      <img src={phoneIcon} alt="phone" />
                    </div>
                    <div>۰۶۱۳۵۷۲۰۸۰۹ - ۰۶۱۳۵۷۲۰۷۹۳</div>
                  </div>
                  {/* mobile */}
                  <div>
                    <div>
                      <img src={mobileIcon} alt="mobile" />
                    </div>
                    <div>۰۹۱۶۳۱۱۴۴۶۹</div>
                  </div>
                  {/* email */}
                  <div>
                    <div>
                      <img src={emailIcon} alt="email" />
                    </div>
                    <div>info@shabnamnikraftar.com</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* add comment button */}
          {step === 4 && (
            <Button className="about-add-comment-button mv-button">
              <img src={plusIcon} alt="plus" />
              <span>ثبت نظر</span>
            </Button>
          )}
          {/* actions */}
          {modal && (
            <div className="lines-modal-actions">
              {step === 5 ? (
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
                    {step === 0 && "افتخارات و تقدیرنامه ها"}
                    {step === 1 && "خدمات ما"}
                    {step === 2 && "اساتید مجرب ما"}
                    {step === 3 && "نظر هنرجویان ما"}
                    {step === 4 && "راه های ارتباطی ما"}
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
export default About;
