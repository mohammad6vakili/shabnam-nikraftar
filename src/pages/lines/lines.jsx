import React, { Fragment, useState } from "react";
import "./lines.css";
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useHistory } from "react-router-dom";
import FormatHelper from "../../helper/FormatHelper";
import { lines, postComments, questions } from "../../utils/util";
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
import commentsSortIcon from "../../assets/images/postPreviewSortComments.svg";
import Question from "../../components/question";
import playVideoIcon from "../../assets/blog/playVideo.svg";
import blogImage1 from "../../assets/blog/blogImage1.svg";
import blogVideo from "../../assets/blog/blogVideo.svg";
import blogImage4 from "../../assets/blog/blogImage4.svg";
import blogImage5 from "../../assets/blog/blogImage5.svg";
import blogImage6 from "../../assets/blog/blogImage6.svg";

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
            {/* intro */}
            {step === 0 && (
              <Fragment>
                {/* title */}
                <div className="blog-view-title" style={{ marginBottom: 8 }}>
                  <div className="bold">
                    معرفی لاین زیبایی اکستنشن مو و ابرو
                  </div>
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
            {/* posts */}
            {step === 1 && (
              <div className="home-posts">
                {array.map((post, index) => (
                  <Post index={index} />
                ))}
              </div>
            )}
            {/* Q&A */}
            {step === 2 && (
              <div className="lines-modal-questions">
                {questions.map((question, index) => (
                  <Question index={index} data={question} />
                ))}
              </div>
            )}
            {/* comments */}
            {step === 3 && (
              <div className="lines-modal-comments">
                <div>
                  <Button className="mv-button">
                    <img src={commentsSortIcon} alt="sort" />
                    <span>مرتب سازی</span>
                  </Button>
                  <Button className="mv-button-outline">ثبت نظر شما</Button>
                </div>
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
