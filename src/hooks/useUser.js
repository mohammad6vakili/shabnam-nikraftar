import React, { useState } from "react";
import useHttp from "./useHttp";
import { message } from "antd";
import { useHistory } from "react-router-dom";

const useUser = () => {
  const history = useHistory();
  const { HttpService } = useHttp();
  const [profileLoading, setProfileLoading] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    birthday_at: "",
    marriage_at: "",
    email: "",
  });
  const [file, setFile] = useState(null);

  const updateUserProfile = async () => {
    setProfileLoading(true);
    setTimeout(() => {
      history.push("/home");
      setProfileLoading(false);
      message.success("تبریک! کیف پول شما ۵۰۰ هزار تومان شارژ شد.");
    }, 1500);
    // const postData = new FormData();
    // if (formData.first_name.length > 0) {
    //   postData.append("first_name", formData.first_name);
    // }
    // if (formData.last_name.length > 0) {
    //   postData.append("last_name", formData.last_name);
    // }
    // if (formData.mobile.length > 0) {
    //   postData.append("mobile", formData.mobile);
    // }
    // if (formData.birthday_at.length > 0) {
    //   postData.append("birthday_at", formData.birthday_at);
    // }
    // if (formData.marriage_at.length > 0) {
    //   postData.append("marriage_at", formData.marriage_at);
    // }
    // if (formData.email.length > 0) {
    //   postData.append("email", formData.email);
    // }
    // if (file) {
    //   postData.append("image", file);
    // }
    // try {
    //   setProfileLoading(true);
    //   const response = await HttpService.post("/users/profile", postData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   console.log(response.data);
    //   setProfileLoading(false);
    // } catch ({ err, response }) {
    //   setProfileLoading(false);
    // }
  };

  const exports = {
    profileLoading,
    setProfileLoading,
    formData,
    setFormData,
    updateUserProfile,
    file,
    setFile,
  };
  return exports;
};

export default useUser;
