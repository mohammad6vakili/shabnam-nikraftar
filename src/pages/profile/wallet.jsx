import React, { Fragment, useState } from "react";
import "./wallet.css";
import { useHistory } from "react-router-dom";
import ProfileHeader from "../../components/profile_header";
import starIcon from "../../assets/profile/walletStar.svg";
import coinAddIcon from "../../assets/profile/coinAdd.svg";
import melliBank from "../../assets/profile/melliBank.svg";
import samanBank from "../../assets/profile/samanBank.svg";
import doneIcon from "../../assets/profile/doneQueue.svg";
import { Button, Input } from "antd";

const Wallet = () => {
  const history = useHistory();
  const array = [1, 2, 3, 4, 5, 6];
  const [tab, setTab] = useState(0);
  const [optionTab, setOptionTab] = useState(0);
  const [portActive, setPortActive] = useState(1);
  return (
    <div className="profile-wallet">
      {/* header */}
      <ProfileHeader
        backHandler={() => history.push("/profile")}
        title={"کیف پول من"}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "rgba(255,255,255,.8)",
            marginRight: "auto",
            fontSize: 12,
          }}
        >
          <span
            style={{ color: "#40B1D1", fontSize: 16, marginLeft: 5 }}
            className="bold"
          >
            ۲۵،۰۰۰
          </span>
          تومان
        </div>
      </ProfileHeader>
      {/* wallet  */}
      <div className="profile-wallet-list">
        {/* tabs */}
        <div className="profile-wallet-tabs">
          <div
            className={tab === 0 ? "tab-selected" : null}
            onClick={() => setTab(0)}
          >
            شارژ کیف پول
          </div>
          <div
            className={tab === 1 ? "tab-selected" : null}
            onClick={() => setTab(1)}
          >
            تراکنش های اخیر <div>۱۵</div>
          </div>
        </div>
        {/* payment tab */}
        {tab === 0 && (
          <Fragment>
            {/* banner */}
            <div className="profile-wallet-banner">
              <div>
                <img src={starIcon} alt="score" />
              </div>
              <div>
                به ازای هر <span className="bold">۱۰،۰۰۰</span> تومان تراکنش{" "}
                <span className="bold">۱۰ امتیاز</span> کسب کنید.
              </div>
            </div>
            {/* options */}
            <div className="profile-wallet-options">
              <Button
                onClick={() => setOptionTab(0)}
                className="mv-button"
                id={optionTab === 0 ? "option-tab-selected" : ""}
              >
                مبلغ شارژ پیشنهادی
              </Button>
              <Button
                onClick={() => setOptionTab(1)}
                className="mv-button"
                id={optionTab === 1 ? "option-tab-selected" : ""}
              >
                مبلغ شارژ دلخواه
              </Button>
            </div>
            {/* options body */}
            {optionTab === 0 && (
              <div className="profile-wallet-option-items">
                {array.map((arr, index) => (
                  <div key={index}>
                    <div>
                      <img src={coinAddIcon} alt="payment" />
                    </div>
                    <div>
                      <div>
                        <span className="bold" style={{ color: "black" }}>
                          ۱۰۰،۰۰۰
                        </span>{" "}
                        تومان
                      </div>
                      <div>۱۰۰ امتیاز</div>
                    </div>
                    <Button className="mv-button-outline">۹۲,۹۰۰ تومان</Button>
                  </div>
                ))}
              </div>
            )}
            {optionTab === 1 && (
              <div className="profile-wallet-option-custome">
                {/* input field */}
                <div className="profile-wallet-options-custome-field">
                  <div>مبلغ دلخواه</div>
                  <div>
                    <Input
                      inputMode="tel"
                      className="mv-input"
                      placeholder="۱۰۰،۰۰۰"
                    />
                    <div>تومان</div>
                  </div>
                </div>
                {/* ports */}
                <div className="profile-wallet-options-custome-port">
                  <div>پرداخت از طریق درگاه بانکی</div>
                  <div>
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
                <Button style={{ marginTop: 48 }} className="mv-button">
                  پرداخت و افزایش اعتبار
                </Button>
              </div>
            )}
          </Fragment>
        )}
        {/* transactions tab */}
        {tab === 1 && (
          <Fragment>
            {array.map((arr, index) => (
              <div className="profile-wallet-transaction-item" key={index}>
                <div>
                  <img src={doneIcon} alt="done" />
                </div>
                <div>
                  <div>
                    <span className="bold" style={{ color: "black" }}>
                      ۱۰۰،۰۰۰
                    </span>{" "}
                    تومان
                  </div>
                  <div>
                    <span>چهارشنبه ۱۸ دی</span>
                    <div></div>
                    <span>ساعت ۱۱:۲۴</span>
                  </div>
                </div>
                <div>۱۰ امتیاز</div>
              </div>
            ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Wallet;
