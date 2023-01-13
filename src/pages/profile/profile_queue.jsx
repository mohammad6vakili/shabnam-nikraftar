import React, { useState } from "react";
import "./profile_queue.css";
import { useHistory } from "react-router-dom";
import { queues } from "../../utils/util";
import FormatHelper from "../../helper/FormatHelper";
import ProfileHeader from "../../components/profile_header";
import editIcon from "../../assets/profile/editIcon.svg";
import doneQueue from "../../assets/profile/doneQueue.svg";
import rejectQueue from "../../assets/profile/rejectQueue.svg";

const ProfileQueue = () => {
  const history = useHistory();
  const [tab, setTab] = useState(0);
  return (
    <div className="profile-queue">
      {/* header */}
      <ProfileHeader
        backHandler={() => history.push("/profile")}
        title={"تاریخچه نوبت"}
      />
      {/* queue list */}
      <div className="profile-queue-list">
        {/* tabs */}
        <div className="profile-queue-tabs">
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
            انجام شده <div>۵</div>
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
          queues.map((queue, index) => {
            if (queue.status === "doing") {
              return (
                <div className="queue-doing queue-item" key={index}>
                  <div>{FormatHelper.toPersianString(index + 1)}</div>
                  <div>
                    <div className="bold">{queue.title}</div>
                    <div>
                      <span>{queue.date}</span>
                      <div></div>
                      <span>{queue.time}</span>
                    </div>
                  </div>
                  <img src={editIcon} alt="edit" />
                </div>
              );
            }
          })}
        {/* done */}
        {tab === 1 &&
          queues.map((queue, index) => {
            if (queue.status === "done") {
              return (
                <div className="queue-done queue-item" key={index}>
                  <div>
                    <img src={doneQueue} alt="done" />
                  </div>
                  <div>
                    <div>{queue.title}</div>
                    <div>
                      <span>{queue.date}</span>
                      <div></div>
                      <span>{queue.time}</span>
                    </div>
                    <div>
                      هزینه لاین:{" "}
                      <span
                        style={{ marginLeft: 3, color: "black" }}
                        className="bold"
                      >
                        {FormatHelper.toPersianString(
                          FormatHelper.numberSeperator(queue.price)
                        )}
                      </span>
                      تومان
                    </div>
                  </div>
                  <div>{FormatHelper.toPersianString(queue.score)} امتیاز</div>
                </div>
              );
            }
          })}
        {/* reject */}
        {tab === 2 &&
          queues.map((queue, index) => {
            if (queue.status === "reject") {
              return (
                <div className="queue-reject queue-item" key={index}>
                  <div>
                    <img src={rejectQueue} alt="reject" />
                  </div>
                  <div>
                    <div className="bold">{queue.title}</div>
                    <div>
                      <span>{queue.date}</span>
                      <div></div>
                      <span>{queue.time}</span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};
export default ProfileQueue;
