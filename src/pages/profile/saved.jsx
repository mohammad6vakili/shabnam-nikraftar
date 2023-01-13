import React, { useState } from "react";
import "./saved.css";
import { useHistory } from "react-router-dom";
import ProfileHeader from "../../components/profile_header";
import Post from "../../components/post";
import PostPreview from "../../components/post_preview";
import BlogPost from "../../components/blog_post";

const Saved = () => {
  const history = useHistory();
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [tab, setTab] = useState(0);

  return (
    <div className="saved">
      <PostPreview />
      {/* header */}
      <ProfileHeader
        backHandler={() => history.push("/profile")}
        title={"تاریخچه ذخیره‌های من"}
      />
      {/* tabs */}
      <div className="profile-saved-list">
        <div className="profile-saved-tabs">
          <div
            className={tab === 0 ? "tab-selected" : null}
            onClick={() => setTab(0)}
          >
            پست ها <div>۲۴</div>
          </div>
          <div
            className={tab === 1 ? "tab-selected" : null}
            onClick={() => setTab(1)}
          >
            بلاگ ها <div>۱۵</div>
          </div>
        </div>
        {/* posts */}
        {tab === 0 && (
          <div className="profile-saved-posts">
            {array.map((arr, index) => (
              <Post index={index} />
            ))}
          </div>
        )}
        {/* blog posts  */}
        {tab === 1 && (
          <div className="profile-saved-posts">
            {array.map((arr, index) => (
              <BlogPost index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Saved;
