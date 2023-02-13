import React, { useState, useEffect } from "react";
import "./queue.css";
import { Button, Spin, message } from "antd";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedBranch } from "../../features/user/user_slice";
import useHttp from "../../hooks/useHttp";
import { dates, times } from "../../utils/util";
import FormatHelper from "../../helper/FormatHelper";
import MobileMenu from "../../components/mobile_menu";
import Header from "../../components/header";
import ModalSlide from "../../components/modal_slide";
import warningIcon from "../../assets/queue/warning.svg";
import emptyIcon from "../../assets/queue/emptyList.svg";
import addIcon from "../../assets/queue/plusWhite.svg";
import editIcon from "../../assets/queue/edit.svg";

const Queue = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { HttpService } = useHttp();
  const userQueue = useSelector((state) => state.user.userQueue);
  const selectedBranch = useSelector((state) => state.user.selectedBranch);

  const [loading, setLoading] = useState(false);
  const [branches, setBranches] = useState([]);

  const [privacyModal, setPrivacyModal] = useState(false);
  const [branchModal, setBranchModal] = useState(false);

  const getBranches = async () => {
    try {
      setLoading(true);
      const response = await HttpService.get("api/branches");
      console.log(response.data.data);
      setBranches(response.data.data);
      setLoading(false);
    } catch ({ err, response }) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (branchModal) {
      getBranches();
    }
  }, [branchModal]);

  return (
    <div className="queue">
      {/* privacy modal */}
      <ModalSlide visible={privacyModal} setVisible={setPrivacyModal}>
        <div className="queue-privacy-title bold">شرایط و قوانین رزرو نوبت</div>
        <div className="queue-privacy-body">
          استفاده شما از فروشگاه اینترنتی “هما” و سفارش کالا از این پایگاه به
          معنی توافق کامل شما با شرایط و ضوابط ذیل تلقی می گردد: خرید کالا از
          فروشگاه اینترنتی “هما” بر مبنای قوانین و آئین نامه های موجود در مورد
          تجارت الکترونیک و با رعایت کامل تمام قوانین جمهوری اسلامی ایران صورت
          می پذیرد. اطلاعات و مشخصات کالاهای عرضه شده در فروشگاه اینترنتی “هما”
          از منابع زیر تامین می‌شود: 1- اطلاعاتی که توسط نمایندگی های کالا ارائه
          می‌شوند. 2- اطلاعاتی که از سایت‌های معتبر خارجی ترجمه می‌شوند. از این
          رو فروشگاه اینترنتی “هما” هیچ مسوولیتی در قبال اطلاعات و محتوای مبهم و
          یا خطاهای نگارشی احتمالی برعهده نخواهد داشت. ولی با هدف ارائه خدمات
          بهتر و آگاه‌سازی مشتریان، خود را در بروزرسانی مداوم اطلاعات و محتویات
          متعهد می‌داند. فروشگاه اینترنتی “هما” هیچ گونه مسئولیتی را در مورد
          کارکرد سایت که می تواند ناشى از عواملی که خارج از سیطره مدیریت این
          فروشگاه می باشند (همانند نقص اینترنت، مسائل مخابراتى، تجهیزات سخت
          افزاری و غیره) نمی پذیرد. فروشگاه اینترنتی “هما” به هیچ وجه اطلاعات
          منحصر بفرد کاربران را به اشخاص و طرفین غیر، واگذار نخواهد کرد و ضمنا
          با استفاده از آخرین فن آوری ها متعهد است حتی المقدور از حریم شخصی
          کاربران دفاع کند. خدمات و محتویات سایت، صرفا براى استفاده شخصى و غیر
          تجارى شما عرضه شده است. هر گونه سوء استفاده از این اطلاعات پیگرد
          قانونی خواهد داشت و هیچ فرد حقیقی، حقوقی یا سایتی به هیچ عنوان نمی
          تواند از اطلاعات و محتویات موجود در سایت براى فروش، تولید مجدد یا
          ایجاد ترافیک در سایت خود استفاده نماید. اگر مایلید از سرویسها و
          محتویات سایت جهت مقاصد تجارى استفاده نمایید ، لازم است از قبل به ما
          اطلاع دهید. براى این کار لطفا با ما تماس بگیرید. کاربران باید هنگام
          سفارش کالای مورد نظر خود، فرم سفارش را با اطلاعات صحیح و به طور کامل
          پر نمایند. بدیهی است درصورت ورود اطلاعات ناقص یا نادرست، سفارش کاربر
          قابل پیگیری و تحویل نخواهد بود. مالکیت معنوی محتویات فروشگاه اینترنتی
          “هما” شامل قانون حق تکثیر بوده و متعلق به فروشگاه اینترنتی “هما”می
          باشد. فروش و تحویل سفارش در صورتی که هما به دلایلی خارج از اراده و
          اختیار خود، توان تحویل کالا در موعد مقرر را نداشته باشد و طرفین درباره
          یک موعد جدید به توافق نرسند، خریدار حق دارد بدون هیچگونه هزینه ای
          سفارش را فسخ نماید. ارزش کالا یا کالاهای سفارش داده شده طبق فهرست قیمت
          سایت محاسبه شده و شامل کلیه مالیات ها و عوارض فروش خواهد بود. هزینه
          مالیات بر ارزش افزوده در صورت عدم قید شدن در سایت صفر ریال محاسبه
          خواهئ شد. تنها مبلغی که در موارد معین به ارزش کالا اضافه می شود، هزینه
          ارسال و بیمه کالا خواهد بود. مدت گارانتی و نام شرکت ارائه دهنده خدمات
          پس از فروش در قسمت توضیحات هر کالا ذکر شده است. در صورت عدم درج موارد
          مذکور در این قسمت، گارانتی برای آن کالا وجود ندارد. شرایط برگشت کالا:
          هرگونه نقص و عیب فنی کالا، باید در مدت 48 ساعت پس از دریافت کالا حتی
          در روزهای تعطیل از طریق تلفن “91004025-021 “و یا ایمیل info@homais.com
          یا “فرم برگشت از فروش” (این فرم در کنترل پنل شما موجود است) به مرکز
          ارتباط مشتریان فروشگاه اطلاع داده شود تا مشکل فوراً بررسی و در صورت
          اثبات نقص، تعمیر یا جایگزین گردد. بدیهی است پس از 48 ساعت هیچ اعتراضی
          پذیرفتنی نیست.(خاطرنشان می سازد این بند فقط برای کالاهای فاقد گارانتی
          صدق خواهد کرد و کالاهای دارای گارانتی از لحظه فروش مشمول ضمانت بوده و
          نقایص احتمالی توسط شرکت ارائه کننده گارانتی پیگیری میگردد) در صورتی که
          فرد خریدار بخواهد وجه کالا را به طور ناقص پرداخت کند کالا بدون
          هماهنگی، توسط پیک برگشت خواهد خورد و هزینه ارسال نیز عودت داده نخواهد
          شد. خریدار به مدت 7 روز کاری فرصت دارد از سفارش خود انصراف دهد، به شرط
          آنکه بسته بندی کالایی باز نشده و از آن هیچ گونه استفاده‌ای نشده باشد.
          لازم به ذکر است هزینه پست و بیمه به عهده خریدار میباشد. این انصراف
          برای کالاهای زیر امکان پذیر نمی باشد: – کالاهایی که قیمت آنها توسط
          نوسانات بازارهای مالی و ارزی تعیین می شود. – کالا های ابزار دقیق و
          اندازه گیری که از حساسیت خاصی برخوردار هستند. – با توجه به شرایط کالا،
          کالا های با قیمت بالای 500000 تومان برای این گروه از کالا نیاز به
          دریافت پیش پرداخت می باشد. پس از دریافت پیش پرداخت و تایید سفارش امکان
          انصراف از خرید تحت هیچ شرایطی مقدور نمی باشد. و در صورت انصراف از
          خرید، بیعانه به مشتری عودت داده نخواهد شد.
        </div>
        {privacyModal && (
          <div className="queue-privacy-actions">
            <Button
              onClick={() => setPrivacyModal(false)}
              className="mv-button"
            >
              شراط شما را می پذیرم
            </Button>
            <Button
              onClick={() => setPrivacyModal(false)}
              className="mv-button"
            >
              بازگشت
            </Button>
          </div>
        )}
      </ModalSlide>
      {/* branch modal */}
      <ModalSlide visible={branchModal} setVisible={setBranchModal}>
        {/* title */}
        <div className="queue-privacy-title bold">انتخاب شعبه</div>
        {/* branches */}
        <div className="queue-branches">
          {loading ? (
            <Spin style={{ margin: "10px auto" }} size="large" />
          ) : (
            branches.map((branch, index) => (
              <div
                key={index}
                onClick={() => {
                  dispatch(setSelectedBranch(branch.id));
                }}
                className={
                  selectedBranch == branch.id ? "queue-branch-selected" : null
                }
              >
                <div>{selectedBranch == branch.id && <div></div>}</div>
                <div>
                  <div className="bold">شعبه {branch.attributes.name}</div>
                  <div>
                    {branch.attributes.name} / {branch.attributes.title}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* action */}
        <div className="queue-branches-action">
          <Button
            onClick={() => {
              if (!selectedBranch) {
                message.warning("لطفا شعبه مورد نظر را انتخاب کنید");
              } else {
                history.push("/queue/create");
              }
            }}
            className="mv-button"
          >
            رزرو نوبت
          </Button>
          <Button onClick={() => setBranchModal(false)} className="mv-button">
            بازگشت
          </Button>
        </div>
      </ModalSlide>
      {/* header */}
      <Header>
        <div className="queue-header-banner">
          <div>
            <img src={warningIcon} alt="warning" />
          </div>
          <div>
            قبل رزرو نوبت حتما{" "}
            <span onClick={() => setPrivacyModal(true)} className="bold">
              قوانین و شرایط
            </span>{" "}
            رزرو را بخوانید
          </div>
        </div>
      </Header>
      <div className="queue-list">
        {/* empty queue list */}
        {userQueue?.length === 0 && (
          <div className="queue-list-empty">
            <div>
              <img src={emptyIcon} alt="empty" />
            </div>
            <div>متاسفانه، نوبتی برای شما ثبت نشده است.</div>
            <Button onClick={() => setBranchModal(true)} className="mv-button">
              ثبت‌ نوبت جدید
            </Button>
          </div>
        )}
        {/* filled queue list */}
        {userQueue?.length > 0 && (
          <div className="queue-list-filled">
            <div className="queue-list-header bold">نوبت های ثبت شده من</div>
            {userQueue.map((queue, index) => (
              <div className="queue-queue-item" key={index}>
                <div className="bold">
                  {FormatHelper.toPersianString(index + 1)}
                </div>
                <div>
                  <div className="bold">{queue.line}</div>
                  <div>
                    <div>
                      {dates.map((dd) => {
                        if (dd.id == queue.date) {
                          return (
                            dd.full_title +
                            " " +
                            FormatHelper.toPersianString(dd.date) +
                            " " +
                            dd.month
                          );
                        }
                      })}
                    </div>
                    <div style={{ margin: "0 3px" }}>|</div>
                    <div>
                      {times.map((tt) => {
                        if (tt.id == queue.time) {
                          return "ساعت " + tt.from + " تا " + tt.to;
                        }
                      })}
                    </div>
                  </div>
                  {queue.isPayed === false && (
                    <Button className="mv-button-outline">پرداخت نشده</Button>
                  )}
                </div>
                <img src={editIcon} alt="edit" />
              </div>
            ))}
            <Button onClick={() => setBranchModal(true)} className="mv-button">
              <img src={addIcon} alt="add" />
              <span>نوبت جدید</span>
            </Button>
          </div>
        )}
      </div>
      <MobileMenu />
    </div>
  );
};
export default Queue;
