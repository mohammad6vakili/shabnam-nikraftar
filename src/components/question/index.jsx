import React, { useState } from "react";
import "./style.css";
import plusIcon from "../../assets/lines/plus.svg";
import minesIcon from "../../assets/lines/mines.svg";

const Question = ({ data, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} key={index} className="question">
      <div>
        {open ? (
          <img src={minesIcon} alt="close" />
        ) : (
          <img src={plusIcon} alt="open" />
        )}
        <div className="bold">{data.question}</div>
      </div>
      <div className={open ? "answer-open" : null}>{data.answer}</div>
    </div>
  );
};

export default Question;
