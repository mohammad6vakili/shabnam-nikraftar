import React, { useState } from "react";
import "./courses.css";
import { Button } from "antd";
import { courses } from "../../utils/util";
import FormatHelper from "../../helper/FormatHelper";
import { useHistory } from "react-router-dom";
import ProfileHeader from "../../components/profile_header";
import ModalSlide from "../../components/modal_slide";
import courseImageOne from "../../assets/profile/courseImageOne.svg";
import courseImageTwo from "../../assets/profile/courseImageTwo.svg";
import courseImageSmall from "../../assets/profile/courseImageSmall.svg";
import documentImage from "../../assets/profile/document.svg";

const ProfileCourses = () => {
  const history = useHistory();
  const [tab, setTab] = useState(0);
  const [viewDoc, setViewDoc] = useState(false);
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
        {/* doing */}
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
        {/* done */}
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
                    <Button
                      onClick={() => setViewDoc(true)}
                      className="mv-button"
                    >
                      مشاهده مدرک
                    </Button>
                    <Button className="mv-button-outline">نظر بده</Button>
                  </div>
                </div>
              );
            }
          })}
        {/* reject */}
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
      {/* document modal */}
      <ModalSlide visible={viewDoc} setVisible={setViewDoc}>
        <div className="profile-courses-certificate">
          <img src={documentImage} alt="certificate" />
          <div>
            <Button className="mv-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2605 22.2503H8.74047C3.83047 22.2503 1.73047 20.1503 1.73047 15.2403V15.1103C1.73047 10.6703 3.48047 8.53027 7.40047 8.16027C7.80047 8.13027 8.18047 8.43027 8.22047 8.84027C8.26047 9.25027 7.96047 9.62027 7.54047 9.66027C4.40047 9.95027 3.23047 11.4303 3.23047 15.1203V15.2503C3.23047 19.3203 4.67047 20.7603 8.74047 20.7603H15.2605C19.3305 20.7603 20.7705 19.3203 20.7705 15.2503V15.1203C20.7705 11.4103 19.5805 9.93027 16.3805 9.66027C15.9705 9.62027 15.6605 9.26027 15.7005 8.85027C15.7405 8.44027 16.0905 8.13027 16.5105 8.17027C20.4905 8.51027 22.2705 10.6603 22.2705 15.1303V15.2603C22.2705 20.1503 20.1705 22.2503 15.2605 22.2503Z"
                  fill="white"
                />
                <path
                  d="M12 15.63C11.59 15.63 11.25 15.29 11.25 14.88V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V14.88C12.75 15.3 12.41 15.63 12 15.63Z"
                  fill="white"
                />
                <path
                  d="M11.9998 16.7498C11.8098 16.7498 11.6198 16.6798 11.4698 16.5298L8.11984 13.1798C7.82984 12.8898 7.82984 12.4098 8.11984 12.1198C8.40984 11.8298 8.88984 11.8298 9.17984 12.1198L11.9998 14.9398L14.8198 12.1198C15.1098 11.8298 15.5898 11.8298 15.8798 12.1198C16.1698 12.4098 16.1698 12.8898 15.8798 13.1798L12.5298 16.5298C12.3798 16.6798 12.1898 16.7498 11.9998 16.7498Z"
                  fill="white"
                />
              </svg>
              <span>دانلود مدرک</span>
            </Button>
            <Button onClick={() => setViewDoc(false)} className="mv-button">
              بازگشت
            </Button>
          </div>
        </div>
      </ModalSlide>
    </div>
  );
};
export default ProfileCourses;
