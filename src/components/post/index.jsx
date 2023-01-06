import React, { useState, useEffect } from "react";
import "./style.css";
import { toast } from "react-toastify";
import FormatHelper from "../../helper/FormatHelper";
import postImage from "../../assets/images/post.png";
import postCommentIcon from "../../assets/images/postComment.svg";
import postUnlikeIcon from "../../assets/images/postUnlike.svg";
import postLikeIcon from "../../assets/images/postLike.svg";
import postUnsavedIcon from "../../assets/images/postUnsaved.svg";
import postSavedIcon from "../../assets/images/postSaved.svg";

const Post = ({ index }) => {
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(102);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div key={index} className="post">
      <div className={loading ? "post-loading-skeleton" : ""}>
        <div
          onClick={() => {
            setSaved(!saved);
            if (!saved) {
              toast.success("با موفقیت ذخیره شد");
            }
          }}
          className="post-save"
        >
          <img src={saved ? postSavedIcon : postUnsavedIcon} alt="saved" />
        </div>
        {!loading && <img src={postImage} alt="post" />}
      </div>
      <div>
        <div>
          <span>۲۵</span>
          <img src={postCommentIcon} alt="comments" />
        </div>
        <div
          onClick={() => {
            setLiked(!liked);
            if (liked) {
              setLikeCount(likeCount - 1);
            } else {
              setLikeCount(likeCount + 1);
            }
          }}
        >
          <span>{FormatHelper.toPersianString(likeCount)}</span>
          <img src={liked ? postLikeIcon : postUnlikeIcon} alt="like" />
        </div>
      </div>
    </div>
  );
};

export default Post;
