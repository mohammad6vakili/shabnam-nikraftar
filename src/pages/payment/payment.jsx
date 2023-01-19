import React, { Fragment, useState } from "react";
import "./payment.css";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import successIcon from "../../assets/images/paymentSuccess.svg";
import failedIcon from "../../assets/images/paymentFailed.svg";

const Payment = () => {
  const history = useHistory();
  const [result, setResult] = useState(0);

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
          <Fragment>2</Fragment>
        )}
      </div>
    </div>
  );
};
export default Payment;
