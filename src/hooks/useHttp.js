import axios from "axios";
import Env from "../constant/env.json";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const useHttp = () => {
  const history = useHistory();

  const HttpService = axios.create({
    baseURL: Env.base_url,
    // headers: {
    //   // Authorization: "Bearer " + localStorage.getItem("token"),
    //   "Content-Type": "application/json",
    //   Accept: "application/json",
    // },
  });

  HttpService.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  HttpService.defaults.headers.common.Accept = "application/json";
  HttpService.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  HttpService.defaults.withCredentials = true;

  HttpService.interceptors.response.use(
    (response) => response,
    async ({ error, response }) => {
      console.log("HttpService error", error);
      console.log("HttpService response", response);
      console.log("HttpService response.data", response?.data);
      if (response.status === 401) {
        localStorage.removeItem("token");
        history.push("/");
        toast.error("شما از برنامه خارج شدید.");
      } else if (response.status === 422) {
        toast.error(response.data.message);
      } else {
        if (response?.data?.message) {
          toast.error(response?.data?.message);
        } else {
          toast.error("خطا در برقراری ارتباط");
        }
      }
    }
  );

  const exports = { HttpService };
  return exports;
};
export default useHttp;
