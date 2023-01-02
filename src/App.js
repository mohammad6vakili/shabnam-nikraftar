import React from "react";
import "./App.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <span>hello world!</span>
      <ToastContainer position="bottom-left" autoClose={5000} />
    </Provider>
  );
}

export default App;
