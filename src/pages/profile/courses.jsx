import React, { useState } from "react";
import "./courses.css";
import { Button } from "antd";
import { courses } from "../../utils/util";
import FormatHelper from "../../helper/FormatHelper";
import { useHistory } from "react-router-dom";
import ProfileHeader from "../../components/profile_header";
import courseImageOne from "../../assets/profile/courseImageOne.svg";
import courseImageTwo from "../../assets/profile/courseImageTwo.svg";
import courseImageSmall from "../../assets/profile/courseImageSmall.svg";

const ProfileCourses = () => {
  const history = useHistory();
  const [tab, setTab] = useState(0);
  return (
    <div className="profile-courses">
      {/* header */}
      <ProfileHeader
        backHandler={() => history.push("/profile")}
        title={"دوره های من"}
      />
      {/* courses list */}
      <div className="profile-courses-list">
        {/* tabs */}
        <div className="profile-courses-tabs">
          <div
            className={tab === 0 ? "tab-selected" : null}
            onClick={() => setTab(0)}
          >
            جاری <div>۳</div>
          </div>
          <div
            className={tab === 1 ? "tab-selected" : null}
            onClick={() => setTab(1)}
          >
            اتمام شده <div>۲</div>
          </div>
          <div
            className={tab === 2 ? "tab-selected" : null}
            onClick={() => setTab(2)}
          >
            لغو شده <div>۲</div>
          </div>
        </div>
        {tab === 0 &&
          courses.map((course, index) => {
            if (course.status === "doing") {
              return (
                <div
                  key={index}
                  className="profile-courses-item profile-doing-item"
                >
                  <div>
                    <img src={courseImageOne} alt="courses" />
                    <img src={courseImageTwo} alt="courses" />
                    <img src={courseImageSmall} alt="courses" />
                  </div>
                  <div>
                    <div>
                      <div className="bold">{course.title}</div>
                      <div>{course.teacher}</div>
                    </div>
                    <div>
                      <span className="bold">
                        {FormatHelper.toPersianString(course.sessions)}
                      </span>
                      <span>جلسه</span>
                    </div>
                  </div>
                  <div>
                    {course.active === true ? (
                      <Button className="mv-button">
                        <span>ورود به جلسه</span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.57043 18.8201C9.38043 18.8201 9.19043 18.7501 9.04043 18.6001L2.97043 12.5301C2.68043 12.2401 2.68043 11.7601 2.97043 11.4701L9.04043 5.40012C9.33043 5.11012 9.81043 5.11012 10.1004 5.40012C10.3904 5.69012 10.3904 6.17012 10.1004 6.46012L4.56043 12.0001L10.1004 17.5401C10.3904 17.8301 10.3904 18.3101 10.1004 18.6001C9.96043 18.7501 9.76043 18.8201 9.57043 18.8201Z"
                            fill="white"
                          />
                          <path
                            d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z"
                            fill="white"
                          />
                        </svg>
                      </Button>
                    ) : (
                      <div>{course.dateTime}</div>
                    )}
                  </div>
                </div>
              );
            }
          })}
        {tab === 1 &&
          courses.map((course, index) => {
            if (course.status === "done") {
              return (
                <div
                  key={index}
                  className="profile-courses-item profile-done-item"
                >
                  <div>
                    <img src={courseImageOne} alt="courses" />
                    <img src={courseImageTwo} alt="courses" />
                    <img src={courseImageSmall} alt="courses" />
                  </div>
                  <div>
                    <div>
                      <div className="bold">{course.title}</div>
                      <div>{course.teacher}</div>
                    </div>
                    <div>
                      <span>اتمام</span>
                      <span>دوره</span>
                    </div>
                  </div>
                  <div>
                    <Button className="mv-button">مشاهده مدرک</Button>
                    <Button className="mv-button-outline">نظر بده</Button>
                  </div>
                </div>
              );
            }
          })}
        {tab === 2 &&
          courses.map((course, index) => {
            if (course.status === "reject") {
              return (
                <div
                  key={index}
                  className="profile-courses-item profile-reject-item"
                >
                  <div>
                    <img src={courseImageOne} alt="courses" />
                    <img src={courseImageTwo} alt="courses" />
                    <img src={courseImageSmall} alt="courses" />
                  </div>
                  <div>
                    <div>
                      <div className="bold">{course.title}</div>
                      <div>{course.teacher}</div>
                    </div>
                    <div>
                      <span>لغو</span>
                      <span>دوره</span>
                    </div>
                  </div>
                  <div>
                    <Button className="mv-button-outline">مشاهده دوره</Button>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};
export default ProfileCourses;
