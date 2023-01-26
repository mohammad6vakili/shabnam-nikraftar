import React from "react";
import "./style.css";
import avatarOne from "../../assets/courses/avatarOne.svg";
import avatarTwo from "../../assets/courses/avatarTwo.svg";
import avatarThree from "../../assets/courses/avatarThree.svg";

const CourseCard = ({}) => {
  return (
    <div className="course-card">
      <div>
        <img src={avatarOne} alt="course image" />
        <img src={avatarTwo} alt="course image" />
        <img src={avatarThree} alt="course image" />
      </div>
      <div className="bold">دوره آموزشی آرایشی و زیبایی</div>
      <div>استاد سمانه درخشانی</div>
      <div>
        <div>
          <span className="bold">۶,۶۹۹,۰۰۰</span>
          <span>تومان</span>
        </div>
        <div className="bold">٪۱۵</div>
      </div>
    </div>
  );
};

export default CourseCard;
