import React, { Fragment, useState } from "react";
import "./payment.css";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import successIcon from "../../assets/images/paymentSuccess.svg";
import failedIcon from "../../assets/images/paymentFailed.svg";

const Payment = () => {
  const history = useHistory();
  const [result, setResult] = useState(1);

  return (
    <div className="payment">
      <div className="payment-body">
        {result === 0 ? (
          <div className="payment-successfull">
            <div>
              <img src={successIcon} alt="payment result" />
            </div>
            <div className="bold">پرداخت موفق</div>
            <div>نوبت شما با موفقیت ثبت شد.</div>
            <div>کسب ۲۰۰ امتیاز</div>
            <Button
              className="mv-button"
              onClick={() => history.push("/queue")}
            >
              لیست نوبت ها
            </Button>
          </div>
        ) : (
          <div className="payment-failed">
            <div>
              <img src={failedIcon} alt="payment result" />
            </div>
            <div className="bold">پرداخت ناموفق</div>
            <div>نوبت شما با موفقیت ثبت نشد.</div>
            <Button className="mv-button">مجددا تلاش کنید</Button>
            <Button className="mv-button" onClick={() => history.push("/home")}>
              صفحه اصلی
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Payment;
