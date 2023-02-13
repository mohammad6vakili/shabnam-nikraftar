import axios from "axios";
import Env from "../constant/env.json";
import { toast } from "react-toastify";
import { message } from "antd";
import { useHistory } from "react-router-dom";

const useHttp = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const HttpService = axios.create({
    baseURL: Env.base_url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  HttpService.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  HttpService.defaults.headers.common.Accept = "application/json";

  if (token) {
    HttpService.defaults.headers.common.Authorization = "Bearer " + token;
  }

  HttpService.interceptors.response.use(
    (response) => response,
    async ({ error, response }) => {
      console.log("HttpService error", error);
      console.log("HttpService response", response);
      console.log("HttpService response.data", response?.data);
      if (response.status === 401) {
        localStorage.removeItem("token");
        history.push("/");
        message.error("شما از برنامه خارج شدید.");
      } else if (response.status === 422) {
        message.error(response.data.message);
      } else {
        if (response?.data?.message) {
          message.error(response?.data?.message);
        } else {
          message.error("خطا در برقراری ارتباط");
        }
      }
    }
  );

  const exports = { HttpService };
  return exports;
};
export default useHttp;
