import { useState } from "react";
import axios from "axios";
import Env from "../constant/env.json";
import { toast } from "react-toastify";
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
        toast.success("کد تایید با موفقیت ارسال شد");
      } else {
        toast.error("مشکلی پیش آمده است");
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
        toast.success("با موفقیت وارد شدید");
        localStorage.setItem("token", response.data.token);
        setStep(2);
      } else {
        toast.error("کد وارد شده صحیح نیست");
      }
    } catch ({ err, response }) {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.error("شما از برنامه خارج شدید.");
    setTimeout(() => {
      window.location.replace("/");
    }, 1000);
  };

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
