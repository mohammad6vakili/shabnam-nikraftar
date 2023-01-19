import React, { useState } from "react";
import "./create_queue.css";
import { useHistory } from "react-router-dom";
import { beautyLines, dates, times, factorQueues } from "../../utils/util";
import { Swiper, SwiperSlide } from "swiper/react";
import SelectModal from "../../components/select_modal";
import ModalSlide from "../../components/modal_slide";
import backIcon from "../../assets/queue/backButton.svg";
import beautyIcon from "../../assets/queue/beautyTab.svg";
import melliBank from "../../assets/profile/melliBank.svg";
import samanBank from "../../assets/profile/samanBank.svg";
import cansulateIcon from "../../assets/queue/cansulateTab.svg";
import FormatHelper from "../../helper/FormatHelper";
import { toast } from "react-toastify";
import { Input, Button } from "antd";

const CreateQueue = () => {
  const history = useHistory();
  const [tab, setTab] = useState(0);
  const [line, setLine] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [radioSelected, setRadioSelected] = useState(false);
  const [remoteCansulate, setRemoteCansulate] = useState(0);
  const [factorModal, setFactorModal] = useState(false);
  const [discountModal, setDiscountModal] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [portModal, setPortModal] = useState(false);
  const [method, setMethod] = useState(0);
  const [portActive, setPortActive] = useState(0);

  return (
    <div className="queue-create">
      {/* status bar */}
      <div className="queue-create-status">
        <div className="bold">مبلغ رزروهای شما:</div>
        <div
          className="bold"
          style={{ color: "#40B1D1", margin: "0 3px", fontSize: 16 }}
        >
          ۵۹۰,۰۰۰
        </div>
        <div>تومان</div>
        <div>
          <span>۰۴</span>
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8501 9.94006C17.8501 10.7401 18.5001 11.4001 19.3001 11.4001C19.6801 11.4001 20.0001 11.7101 20.0001 12.0901C20.0001 15.9301 18.8401 17.0901 15.0001 17.0901H9.75009V15.5001C9.75009 15.1101 9.45009 14.7901 9.07009 14.7601C9.05009 14.7501 9.02009 14.7501 9.00009 14.7501C8.59009 14.7501 8.25009 15.0901 8.25009 15.5001V17.0901H6.49009C4.61009 17.0901 3.64009 15.6801 2.76009 13.5501L2.59009 13.1301C2.45009 12.7701 2.62009 12.3601 2.98009 12.2201C3.35009 12.0801 3.64009 11.7901 3.79009 11.4101C3.95009 11.0401 3.95009 10.6301 3.80009 10.2601C3.48009 9.49006 2.60009 9.12006 1.82009 9.43006C1.65009 9.51006 1.45009 9.51006 1.28009 9.43006C1.11009 9.36006 0.980091 9.22006 0.900091 9.04006L0.750091 8.64006C-0.739909 5.02006 -0.0899084 3.47006 3.53009 1.97006L5.98009 0.960058C6.34009 0.810058 6.75009 0.980058 6.89009 1.34006L9.07009 6.09006C8.66009 6.09006 8.25009 6.42006 8.25009 6.83006V11.1701C8.25009 11.5801 8.59009 11.9201 9.00009 11.9201C9.02009 11.9201 9.05009 11.9201 9.07009 11.9101C9.45009 11.8801 9.75009 11.5601 9.75009 11.1701V6.83006C9.75009 6.44006 9.45009 6.12006 9.07009 6.09006V1.93006H15.0001C18.8401 1.93006 20.0001 3.09006 20.0001 6.93006V7.78006C20.0001 8.17006 19.6801 8.48006 19.3001 8.48006C18.5001 8.48006 17.8501 9.13006 17.8501 9.94006Z"
              fill="#F7F7F7"
            />
          </svg>
        </div>
      </div>
      {/* header */}
      <div className="queue-create-header">
        <img onClick={() => history.push("/queue")} src={backIcon} alt="back" />
        <span className="bold">ثبت نوبت</span>
      </div>
      {/* tabs */}
      <div className="queue-create-tabs">
        <div
          onClick={() => setTab(0)}
          className={tab === 0 ? "queue-create-tab-selected" : null}
        >
          <img src={beautyIcon} alt="beauty queue" />
          <span>نوبت آرایشی</span>
        </div>
        <div
          onClick={() => setTab(1)}
          className={tab === 1 ? "queue-create-tab-selected" : null}
        >
          <img src={cansulateIcon} alt="cansulate queue" />
          <span>نوبت مشاوره</span>
        </div>
      </div>
      {/* form */}
      <div className="queue-create-form">
        {/* cansulate options */}
        {tab === 1 && (
          <div className="queue-create-remote-cansulate">
            <div
              onClick={() => setRemoteCansulate(0)}
              className={
                remoteCansulate === 0
                  ? "queue-create-remote-cansulate-selected"
                  : null
              }
            >
              <div>{remoteCansulate === 0 && <div></div>}</div>
              <div>مشاوره حضوری</div>
            </div>
            <div
              onClick={() => setRemoteCansulate(1)}
              className={
                remoteCansulate === 1
                  ? "queue-create-remote-cansulate-selected"
                  : null
              }
            >
              <div>
                <div>{remoteCansulate === 1 && <div></div>}</div>
              </div>
              <div>مشاوره آنلاین</div>
            </div>
          </div>
        )}
        {/* beauty line */}
        <div className="queue-create-form-field">
          <div>نوع لاین زیبایی</div>
          <SelectModal
            data={beautyLines}
            placeHolder={"انتخاب کنید"}
            value={line}
            setValue={setLine}
          />
        </div>
        {/* date */}
        <div className="queue-create-form-field queue-create-date-list">
          <div>انتخاب تاریخ مراجعه</div>
          <div>
            <Swiper
              style={{
                width: "100%",
                padding: "0 10px",
                direction: "rtl",
                margin: "2px 0 20px 0",
              }}
              spaceBetween={10}
              slidesPerView={4}
            >
              {dates.map((date, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => {
                      if (date.closed === false) {
                        setSelectedDate(date.id);
                      } else {
                        toast.warning(
                          "متاسفانه در روزهای تعطیل خدمت رسانی نداریم"
                        );
                      }
                    }}
                    id={
                      selectedDate === date.id
                        ? "queue-create-date-item-selected"
                        : null
                    }
                    className={`queue-create-date-item ${
                      date.closed === true
                        ? "queue-create-date-item-closed"
                        : ""
                    } ${
                      date.today === true ? "queue-create-date-item-today" : ""
                    }`}
                  >
                    <div className="bold">
                      {FormatHelper.toPersianString(date.date)}
                    </div>
                    <div>{date.title}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* time */}
        <div className="queue-create-form-field queue-create-date-list">
          <div>انتخاب ساعت مراجعه</div>
          <div>
            <Swiper
              style={{
                width: "100%",
                padding: "0 10px",
                direction: "rtl",
                margin: "2px 0 20px 0",
              }}
              spaceBetween={10}
              slidesPerView={3}
            >
              {times.map((time, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => {
                      setSelectedTime(time.id);
                    }}
                    className={`queue-create-time-item ${
                      time.id === selectedTime
                        ? "queue-create-time-item-selected"
                        : ""
                    }`}
                  >
                    <div className="bold">
                      {time.from} تا {time.to}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* devider */}
        <div
          style={{
            height: 2,
            marginLeft: 24,
            marginBottom: 24,
            marginTop: 8,
            background: "#F7F7F7",
          }}
        ></div>
        {/* checkbox myself */}
        <div
          onClick={() => setRadioSelected(!radioSelected)}
          id="queue-create-form-field-checkbox"
          className={`profile-addresses-add-form-radio ${
            radioSelected ? "mv-radio-selected" : ""
          }`}
        >
          <div>{radioSelected && <div></div>}</div>
          <div>گیرنده محصول خودمم</div>
        </div>
        {/* name */}
        <div className="queue-create-form-field">
          <div>نام زیباجو</div>
          <Input className="mv-input" />
        </div>
        {/* family */}
        <div className="queue-create-form-field">
          <div>نام خانوادگی زیباجو</div>
          <Input className="mv-input" />
        </div>
        {/* mobile */}
        <div className="queue-create-form-field">
          <div>شماره موبایل</div>
          <Input inputMode="tel" className="mv-input" />
        </div>
        {/* action area */}
        <div className="queue-create-action-area">
          <Button onClick={() => setFactorModal(true)} className="mv-button">
            پرداخت
          </Button>
          <Button onClick={() => setFactorModal(true)} className="mv-button">
            افزودن و نوبت جدید
          </Button>
        </div>
      </div>
      {/* factor modal */}
      <ModalSlide visible={factorModal} setVisible={setFactorModal}>
        <div className="queue-create-factor">
          {/* header */}
          <div className="queue-create-factor-modal-header">
            <span className="bold">فاکتور نهایی</span>
            <span>
              {FormatHelper.toPersianString(factorQueues.length)} نوبت
            </span>
          </div>
          {/* queues */}
          {factorQueues.map((queue, index) => (
            <div className="queue-create-factor-queue" key={index}>
              <div>
                <div>{FormatHelper.toPersianString(index + 1)}</div>
                <Button className="mv-button-outline">ویرایش نوبت</Button>
              </div>
              <div>
                {/* type */}
                <div>
                  <div>نوع رزرو</div>
                  <div></div>
                  <div className="bold">{queue.type}</div>
                </div>
                {/* beauty line */}
                <div>
                  <div>لاین زیبایی</div>
                  <div></div>
                  <div className="bold">{queue.beautyLine}</div>
                </div>
                {/* name */}
                <div>
                  <div>نام زیباجو</div>
                  <div></div>
                  <div className="bold">{queue.name}</div>
                </div>
                {/* date time */}
                <div>
                  <div>تاریخ رزرو</div>
                  <div></div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="bold">
                      {FormatHelper.toPersianString(queue.date)}
                    </span>
                    <span className="bold">
                      {FormatHelper.toPersianString(queue.time)}
                    </span>
                  </div>
                </div>
                {/* price */}
                <div>
                  <div>پ پرداخت</div>
                  <div></div>
                  <div>
                    <span
                      className="bold"
                      style={{ color: "#40B1D1", fontSize: 16, marginLeft: 3 }}
                    >
                      {FormatHelper.toPersianString(
                        FormatHelper.numberSeperator(queue.price)
                      )}
                    </span>
                    <span>تومان</span>
                  </div>
                </div>
                {/* discount */}
                <div>
                  <div>تخفیف</div>
                  <div></div>
                  <div>
                    <span className="bold" style={{ marginLeft: 3 }}>
                      ۰
                    </span>{" "}
                    تومان
                  </div>
                </div>
                {/* final price */}
                <div>
                  <div>مبلغ نهایی</div>
                  <div></div>
                  <div>-----------------</div>
                </div>
              </div>
            </div>
          ))}
          {/* actionbar */}
          {factorModal && (
            <div className="queue-create-factor-actions">
              <div>
                <div className="bold">مجموع مبلغ پرداختی :</div>
                <div>
                  <span
                    className="bold"
                    style={{ color: "#40B1D1", marginLeft: 3, fontSize: 16 }}
                  >
                    ۵۹۰,۰۰۰
                  </span>
                  <span>تومان</span>
                </div>
              </div>
              <div>
                <Button
                  onClick={() => setPortModal(true)}
                  className="mv-button"
                >
                  پرداخت هزینه
                </Button>
                <Button
                  onClick={() => setDiscountModal(true)}
                  className="mv-button"
                >
                  کد تخفیف
                </Button>
              </div>
            </div>
          )}
        </div>
      </ModalSlide>
      {/* discount modal */}
      <ModalSlide visible={discountModal} setVisible={setDiscountModal}>
        {/* header */}
        <div className="queue-create-factor-modal-header">
          <span className="bold">اعمال کد تخفیف</span>
        </div>
        {/* body */}
        <div className="queue-create-discount">
          <div>کد تخفیف</div>
          <div>
            <Input
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="mv-input"
            />
            <Button
              onClick={() => {
                setDiscountModal(false);
                setDiscountCode("");
              }}
              disabled={discountCode.length === 0}
              className="mv-button"
            >
              ثبت کد
            </Button>
          </div>
        </div>
      </ModalSlide>
      {/* port */}
      <ModalSlide visible={portModal} setVisible={setPortModal}>
        {/* header */}
        <div className="queue-create-factor-modal-header">
          <span className="bold">انتخاب روش پرداخت</span>
        </div>
        <div className="queue-create-port">
          <div>
            <div onClick={() => setMethod(0)}>
              <div className={method === 0 ? "method-selected" : ""}>
                {method === 0 && <div></div>}
              </div>
              <div>
                <div style={{ color: "black" }}>پرداخت از طریق کیف پول</div>
                <div>موجودی کافی نیست</div>
              </div>
              <div>
                <span style={{ color: "#40b1d1", marginLeft: 3 }}>۲۵,۰۰۰</span>
                <span>تومان</span>
              </div>
            </div>
            <div onClick={() => setMethod(1)}>
              <div className={method === 1 ? "method-selected" : ""}>
                <div>{method === 1 && <div></div>}</div>
              </div>
              <div style={{ color: "black" }}>پرداخت از طریق درگاه بانکی</div>
            </div>
            <div className="queue-create-port-ports">
              <div
                className={portActive === 0 ? "port-active" : ""}
                onClick={() => {
                  setPortActive(0);
                }}
              >
                <img src={melliBank} alt="port" />
              </div>
              <div
                className={portActive === 1 ? "port-active" : ""}
                onClick={() => {
                  setPortActive(1);
                }}
              >
                <img src={samanBank} alt="port" />
              </div>
            </div>
          </div>
          {/* actionbar */}
          {portModal && (
            <div className="queue-create-factor-actions">
              <span></span>
              <div>
                <Button
                  onClick={() => setPortModal(true)}
                  className="mv-button"
                >
                  پرداخت هزینه
                </Button>
                <Button
                  onClick={() => setPortModal(false)}
                  className="mv-button"
                >
                  بازگشت
                </Button>
              </div>
            </div>
          )}
        </div>
      </ModalSlide>
    </div>
  );
};
export default CreateQueue;
