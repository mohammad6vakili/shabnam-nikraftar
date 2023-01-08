import React from "react";
import "./style.css";
import commentLikeIcon from "../../assets/images/postPreviewCommentlike.svg";
import commentUnlikeIcon from "../../assets/images/postPreviewCommentUnlike.svg";
import userIcon from "../../assets/post_preview/commentUser.svg";
import replyIcon from "../../assets/post_preview/commentReply.svg";

const PostComment = ({ comment, index }) => {
  return (
    <div key={index} className="post-preview-comments-comment">
      <img
        src={comment.liked ? commentLikeIcon : commentUnlikeIcon}
        alt="liked"
      />
      <div>
        <div>
          <img src={userIcon} alt="user" />
        </div>
      </div>
      <div>
        <span>{comment.user}</span>
        <span>{comment.content}</span>
        {comment.replies.length === 0 ? (
          <button type="button">پاسخ دادن</button>
        ) : (
          comment.replies.map((reply, i) => (
            <div key={i} className="post-preview-comments-comment-reply">
              <span>{reply.user}</span>
              <span>{reply.content}</span>
              <img src={replyIcon} alt="reply" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostComment;
