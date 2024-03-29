import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import postImage from "../../assets/images/blogPost.svg";
import postSaved from "../../assets/images/postSaved.svg";
import postUnsaved from "../../assets/images/postUnsaved.svg";

const BlogPost = ({ index }) => {
  const history = useHistory();
  const [saved, setSaved] = useState(false);
  return (
    <div
      onClick={() => history.push("/blog/view")}
      className="blog-post"
      key={index}
    >
      <div>
        <img src={postImage} alt="post image" />
        <div onClick={() => setSaved(!saved)}>
          <img src={saved ? postUnsaved : postSaved} alt="save post" />
        </div>
      </div>
      <div>۱۰ راه طبیعی حفظ سلامت پوست بدن در خانه</div>
      <div>
        <span>۲۰ دقیقه پیش</span>
        <div></div>
        <span>۲۰۰ بازدید</span>
      </div>
    </div>
  );
};
export default BlogPost;
