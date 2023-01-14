import React, { Fragment, useState } from "react";
import "./addresses.css";
import { Button, Input } from "antd";
import { useHistory } from "react-router-dom";
import { addresses } from "../../utils/util";
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

const Addresses = () => {
  const history = useHistory();
  const [addModal, setAddModal] = useState(false);
  const [addStep, setAddStep] = useState(0);
  const [lat, setLat] = useState(35.705358555150355);
  const [lng, setLng] = useState(51.40896029286827);

  const [viewport, setViewport] = useState({
    latitude: parseFloat(lat),
    longitude: parseFloat(lng),
    width: "100%",
    height: window.outerHeight <= 700 ? "60vh" : "68vh",
    zoom: 14,
    transitionDuration: 2000,
  });

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
                style={{ margin: "16px 0" }}
                prefix={
                  <img
                    style={{ marginLeft: 8 }}
                    src={searchIcon}
                    alt="search"
                  />
                }
                className="mv-input"
                placeholder="جستو جو آدرس"
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
          {addStep === 1 && <div>s</div>}
          {/* action area */}
          {addModal && (
            <div className="profile-addresses-add-modal-actions">
              <Button
                onClick={() => {
                  if (addStep === 0) {
                    setAddStep(1);
                  } else if (addStep === 1) {
                    setAddModal(false);
                    setAddStep(0);
                    toast.success("آدرس با موفقیت افزوده شد.");
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
