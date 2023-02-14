import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import "./ant.css";
import "swiper/css";
import "swiper/css/autoplay";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import PWAPrompt from "react-ios-pwa-prompt";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer position="top-left" autoClose={5000} />
      <PWAPrompt />
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
