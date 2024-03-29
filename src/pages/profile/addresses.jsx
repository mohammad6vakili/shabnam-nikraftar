import React, { Fragment, useState, useEffect } from "react";
import "./addresses.css";
import { Button, Input, Radio, message } from "antd";
import { useHistory } from "react-router-dom";
import { addresses, provinces } from "../../utils/util";
import ReactMapGL, { Marker } from "react-map-gl";
import FormatHelper from "../../helper/FormatHelper";
import ProfileHeader from "../../components/profile_header";
import ModalSlide from "../../components/modal_slide";
import addIcon from "../../assets/profile/plus.svg";
import locationIcon from "../../assets/profile/location.svg";
import editIcon from "../../assets/profile/edit.svg";
import closeIcon from "../../assets/profile/closeIcon.svg";
import searchIcon from "../../assets/profile/search.svg";
import markerIcon from "../../assets/profile/location-marker.png";
import { toast } from "react-toastify";
import SelectComponent from "../../components/select";

const Addresses = () => {
  const history = useHistory();
  const [addModal, setAddModal] = useState(false);
  const [addStep, setAddStep] = useState(0);
  const [lat, setLat] = useState(35.705358555150355);
  const [lng, setLng] = useState(51.40896029286827);
  const [radioSelected, setRadioSelected] = useState(false);

  const [viewport, setViewport] = useState({
    latitude: parseFloat(lat),
    longitude: parseFloat(lng),
    width: "100%",
    height: window.outerHeight <= 700 ? "60vh" : "68vh",
    zoom: 14,
    transitionDuration: 2000,
  });

  useEffect(() => {
    if (addModal === false) {
      setAddStep(0);
    }
  }, [addModal]);

  return (
    <div className="profile-addresses">
      <ProfileHeader
        backHandler={() => history.push("/profile")}
        title={"آدرس‌های من"}
      />
      {/* addresses list */}
      <div className="profile-addresses-list">
        {addresses.map((address, index) => (
          <div key={index}>
            <div>
              <img src={locationIcon} alt="address" />
            </div>
            <div>
              {/* title */}
              <div>{address.title}</div>
              {/* code */}
              <div>
                کد پستی:
                <span className="bold" style={{ marginRight: 3 }}>
                  {FormatHelper.toPersianString(address.code)}
                </span>
              </div>
              {/* reciever */}
              <div>
                گیرنده:
                <span className="bold" style={{ marginRight: 3 }}>
                  {address.reciever}
                </span>
              </div>
              {/* mobile */}
              <div>
                شماره موبایل:
                <span className="bold" style={{ marginRight: 3 }}>
                  {FormatHelper.toPersianString(address.mobile)}
                </span>
              </div>
            </div>
            <img src={editIcon} alt="edit" />
          </div>
        ))}
      </div>
      {/* add address modal */}
      <ModalSlide
        visible={addModal}
        setVisible={setAddModal}
        hideClose
        hideCurve
      >
        <div className="profile-addresses-add-modal">
          <div className="profile-addresses-add-modal-header">
            <span>ثبت آدرس جدید</span>
            <img
              onClick={() => setAddModal(false)}
              src={closeIcon}
              alt="close"
            />
          </div>
          {/* step one */}
          {addStep === 0 && (
            <Fragment>
              {/* search location */}
              <Input
                style={{ marginBottom: 16 }}
                prefix={
                  <img
                    style={{ marginLeft: 8 }}
                    src={searchIcon}
                    alt="search"
                  />
                }
                className="mv-input"
                placeholder="جستجو آدرس"
              />
              {/* map */}
              <ReactMapGL
                mapboxApiAccessToken="pk.eyJ1IjoibW9oYW1tYWQtdmFhIiwiYSI6ImNrbDkxdWswcTA1aDYycW9vNm52MWQ1ZW0ifQ.9hKrFV_dAPja2Ch6tfH9Sg"
                {...viewport}
                onNativeClick={(val) => {
                  setLng(val.lngLat[0]);
                  setLat(val.lngLat[1]);
                  console.log(lat, lng);
                }}
                onViewportChange={(viewport) => setViewport(viewport)}
                mapStyle="mapbox://styles/mapbox/streets-v11"
              >
                <Marker
                  latitude={parseFloat(lat)}
                  longitude={parseFloat(lng)}
                  offsetLeft={-20}
                  offsetTop={-10}
                >
                  <img
                    className="map-marker"
                    style={{ width: "35px", marginTop: "-15px" }}
                    src={markerIcon}
                    alt="marker"
                  />
                </Marker>
              </ReactMapGL>
            </Fragment>
          )}
          {addStep === 1 && (
            <div className="profile-addresses-add-form">
              {/* reciever address */}
              <div className="profile-addresses-add-form-address-name">
                <div>
                  <span>آدرس گیرنده</span>
                  <span onClick={() => setAddStep(0)}>ویرایش</span>
                </div>
                <div>تهران/خیابان انقلاب/کوی دانشجو/بهار ۲۰</div>
              </div>
              {/* province */}
              <div className="profile-addresses-add-form-field">
                <div>
                  استان <span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <SelectComponent
                    searchable
                    placeHolder={"انتخاب کنید"}
                    data={provinces}
                  />
                </div>
              </div>
              {/* district */}
              <div className="profile-addresses-add-form-field">
                <div>
                  شهرستان <span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <SelectComponent
                    searchable
                    placeHolder={"انتخاب کنید"}
                    data={provinces}
                  />
                </div>
              </div>
              {/* area */}
              <div className="profile-addresses-add-form-field">
                <div>
                  محله <span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <SelectComponent
                    searchable
                    placeHolder={"انتخاب کنید"}
                    data={provinces}
                  />
                </div>
              </div>
              {/* form field half */}
              <div
                className="profile-addresses-add-form-field-half"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {/* plaque */}
                <div className="profile-addresses-add-form-field">
                  <div>
                    پلاک <span style={{ color: "red" }}>*</span>
                  </div>
                  <div>
                    <Input className="mv-input" />
                  </div>
                </div>
                {/* unit */}
                <div className="profile-addresses-add-form-field">
                  <div>واحد</div>
                  <div>
                    <Input className="mv-input" />
                  </div>
                </div>
              </div>
              {/* post code */}
              <div className="profile-addresses-add-form-field">
                <div>
                  کد پستی <span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <Input className="mv-input" />
                </div>
                <div>کدپستی ۱۰ رقمی بدون خط تیره وارد کنید</div>
              </div>
              {/* devider */}
              <div
                style={{
                  width: "100%",
                  height: 1,
                  background: "#F7F7F7",
                  marginTop: 16,
                }}
              ></div>
              <div
                onClick={() => setRadioSelected(!radioSelected)}
                className={`profile-addresses-add-form-radio ${
                  radioSelected ? "mv-radio-selected" : ""
                }`}
              >
                <div>{radioSelected && <div></div>}</div>
                <div>گیرنده محصول خودمم</div>
              </div>
              {/* reciever first name */}
              <div className="profile-addresses-add-form-field">
                <div>
                  نام گیرنده <span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <Input className="mv-input" />
                </div>
              </div>
              {/* reciever last name */}
              <div className="profile-addresses-add-form-field">
                <div>
                  نام خانوادگی گیرنده <span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <Input className="mv-input" />
                </div>
              </div>
              {/* reciever mobile */}
              <div className="profile-addresses-add-form-field">
                <div>
                  شماره موبایل گیرنده <span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <Input className="mv-input" placeholder="مثلا: ۰۹۱۲۱۲۳۴۵۶۷" />
                </div>
              </div>
            </div>
          )}
          {/* action area */}
          {addModal && (
            <div className="profile-addresses-add-modal-actions">
              <Button
                onClick={() => {
                  if (addStep === 0) {
                    setAddStep(1);
                  } else if (addStep === 1) {
                    setAddModal(false);
                    message.success("آدرس با موفقیت افزوده شد.");
                  }
                }}
                className="mv-button"
              >
                ثبت آدرس
              </Button>
              <Button
                onClick={() => {
                  if (addStep === 0) {
                    setAddModal(false);
                  } else if (addStep === 1) {
                    setAddStep(0);
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
      {/* add address button */}
      <Button
        onClick={() => setAddModal(true)}
        className="mv-button profile-addresses-add-button"
      >
        <img src={addIcon} alt="add" />
        <span>ثبت آدرس</span>
      </Button>
    </div>
  );
};

export default Addresses;
