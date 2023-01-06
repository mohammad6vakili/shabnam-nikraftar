import React from "react";
import "./style.css";
import { Button } from "antd";
import youtubeWhite from "../../assets/images/youtubeWhite.svg";

const LiveAlert = () => {
  return (
    <div className="live-alert">
      <span>۲ ساعت و ۲۸ دقیقه تا آغاز لایو </span>
      <Button className="mv-button-danger" style={{ width: "120px" }}>
        <img src={youtubeWhite} alt="play live" />
        <span style={{ marginRight: "10px", fontSize: 13 }}>ورود به لایو</span>
      </Button>
    </div>
  );
};

export default LiveAlert;
