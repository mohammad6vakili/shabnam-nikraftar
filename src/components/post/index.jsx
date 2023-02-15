import React, { useState, useEffect } from "react";
import "./style.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setPostPreview } from "../../features/app/app_slice";
import FormatHelper from "../../helper/FormatHelper";
import postImage from "../../assets/images/post.png";
import postCommentIcon from "../../assets/images/postComment.svg";
import postUnlikeIcon from "../../assets/images/postUnlike.svg";
import postLikeIcon from "../../assets/images/postLike.svg";
import videoPlayIcon from "../../assets/images/postVideoPlay.svg";
import Env from "../../constant/env.json";

const baseImageUrl = Env.base_url + "app";
const Post = ({ index, post }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(102);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div key={index} className="post">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={loading ? "post-loading-skeleton" : ""}
      >
        {!loading &&
          post &&
          (post.attributes &&
          post.attributes.image &&
          post.attributes.image.length ? (
            <img
              onClick={() =>
                dispatch(
                  setPostPreview({
                    url: baseImageUrl + post.attributes.image[0].url,
                  })
                )
              }
              src={baseImageUrl + post.attributes.image[0].url}
              alt="post"
            />
          ) : (
            <img
              onClick={() => dispatch(setPostPreview({ url: post.doc }))}
              src={post.cover}
              alt="post"
            />
          ))}
        <div
          onClick={() =>
            dispatch(
              setPostPreview({
                url: post.doc,
              })
            )
          }
          style={{ position: "absolute", zIndex: 99999 }}
        >
          <img
            style={{ width: 40, height: 40 }}
            src={videoPlayIcon}
            alt="video"
          />
        </div>
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
