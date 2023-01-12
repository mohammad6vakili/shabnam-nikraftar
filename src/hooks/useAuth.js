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
      const response = await HttpService.post("api/auth", {
        username: FormatHelper.toEnglishString(mobile),
      });
      if (response?.data?.data?.sent_before === false) {
        toast.success(response?.data?.message);
      } else {
        toast.info(response?.data?.message);
      }
      setIsTimeout(true);
      setLoading(false);
      setTimeout(Date.now() + 120000);
      setStep(1);
    } catch ({ err, response }) {
      setLoading(false);
    }
  };

  const getJwtToken = async () => {
    let newCode = "";
    code.map((co) => {
      newCode += co;
    });
    console.log(newCode);
    try {
      setLoading(true);
      const response = await HttpService.post("api/auth", {
        username: FormatHelper.toEnglishString(mobile),
        code: newCode,
      });
      setLoading(false);
      if (response.data.ok === false) {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data.token);
        setStep(2);
      }
    } catch ({ err, response }) {
      setLoading(false);
    }
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
  };
  return exports;
};
export default useAuth;
