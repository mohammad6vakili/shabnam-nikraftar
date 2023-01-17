import React, { useState } from "react";
import "./create_queue.css";
import { useHistory } from "react-router-dom";
import { beautyLines, dates, times } from "../../utils/util";
import { Swiper, SwiperSlide } from "swiper/react";
import SelectModal from "../../components/select_modal";
import backIcon from "../../assets/queue/backButton.svg";
import beautyIcon from "../../assets/queue/beautyTab.svg";
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

  return (
    <div className="queue-create">
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
      <div className="queue-create-form">
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
          <Button className="mv-button">پرداخت</Button>
          <Button className="mv-button">افزودن و نوبت جدید</Button>
        </div>
      </div>
    </div>
  );
};
export default CreateQueue;
