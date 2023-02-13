import { useState, useEffect } from "react";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import FormatHelper from "../helper/FormatHelper";

const useAuth = () => {
  const history = useHistory();
  const { HttpService } = useHttp();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [isTimeout, setIsTimeout] = useState(true);
  const [mobile, setMobile] = useState("");
  const [timeout, setTimeout] = useState(Date.now() + 120000);
  const [code, setCode] = useState(["", "", "", "", ""]);

  const getVerificationCode = async () => {
    try {
      setLoading(true);
      const response = await HttpService.post("api/login-register", {
        id: FormatHelper.toEnglishString(mobile),
      });
      if (response.status === 200) {
        setLoading(false);
        setIsTimeout(true);
        setTimeout(Date.now() + 120000);
        setStep(1);
        message.success("کد تایید با موفقیت ارسال شد");
      } else {
        message.error("مشکلی پیش آمده است");
      }
    } catch ({ err, response }) {
      setLoading(false);
    }
  };

  const getJwtToken = async () => {
    let newCode = "";
    code.map((co) => {
      newCode += co;
    });
    try {
      setLoading(true);
      const response = await HttpService.post("api/login-Confirm", {
        id: FormatHelper.toEnglishString(mobile),
        otp: newCode,
      });
      setLoading(false);
      if (response.status == 200) {
        message.success("با موفقیت وارد شدید");
        localStorage.setItem("token", response.data.token);
        setStep(2);
      } else {
        message.error("کد وارد شده صحیح نیست");
      }
    } catch ({ err, response }) {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    message.error("شما از برنامه خارج شدید.");
    setTimeout(() => {
      window.location.replace("/");
    }, 1000);
  };

  useEffect(() => {
    if (step == 0) {
      setCode(["", "", "", "", ""]);
    }
  }, [step]);

  const exports = {
    getVerificationCode,
    loading,
    step,
    setStep,
    mobile,
    setMobile,
    timeout,
    setTimeout,
    isTimeout,
    setIsTimeout,
    code,
    setCode,
    getJwtToken,
    handleLogout,
  };
  return exports;
};
export default useAuth;
