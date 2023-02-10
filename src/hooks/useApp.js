import { useState } from "react";
import axios from "axios";
import Env from "../constant/env.json";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import FormatHelper from "../helper/FormatHelper";

const useApp = () => {
  const history = useHistory();
  const { HttpService } = useHttp();
  const [loading, setLoading] = useState(false);

  const exports = {};
  return exports;
};
export default useApp;
