import React, { useState } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { setPostPreview } from "../../features/app/app_slice";
import { toast } from "react-toastify";
import FormatHelper from "../../helper/FormatHelper";
import backButtonIcon from "../../assets/images/storyBackButton.svg";
import likeIcon from "../../assets/images/postLike.svg";
import unLikeIcon from "../../assets/images/storyUnlike.svg";
import postCommentIcon from "../../assets/images/postCommentWhite.svg";
import queueIcon from "../../assets/images/postPreviewQueue.svg";
import menuIcon from "../../assets/images/postVerticalMenu.svg";
import postShareIcon from "../../assets/images/postShare.svg";
import postLinkIcon from "../../assets/images/postLink.svg";
import postSaveIcon from "../../assets/images/postSave.svg";
import ModalSlide from "../modal_slide";

const PostPreview = () => {
  const dispatch = useDispatch();

  const [step, setStep] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(100);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const postPreview = useSelector((state) => state.app.postPreview);

  return (
    <div className={`post-preview ${postPreview ? "post-preview-open" : ""}`}>
      <div className="post-preview-body">
        {/* back button */}
        <div
          onClick={() => dispatch(setPostPreview(false))}
          className="post-preview-back-button"
        >
          <img src={backButtonIcon} alt="back button" />
        </div>
        {/* left controls */}
        <div className="post-preview-left-controls">
          {/* post likes */}
          <div
            className="post-preview-actions-button"
            onClick={() => {
              setLiked(!liked);
              if (!liked) {
                setLikeCount(likeCount - 1);
              } else {
                setLikeCount(likeCount + 1);
              }
            }}
          >
            <img src={!liked ? likeIcon : unLikeIcon} alt="like" />
            <span>{FormatHelper.toPersianString(likeCount)}</span>
          </div>
          {/* post comments */}
          <div className="post-preview-actions-button">
            <img src={postCommentIcon} alt="comments" />
            <span>{FormatHelper.toPersianString(55)}</span>
          </div>
          {/* reserve queue */}
          <div className="post-preview-actions-button-queue">
            <div>
              <img src={queueIcon} alt="comments" />
            </div>
            <span>رزرو نوبت</span>
          </div>
        </div>
        {/* bottom controls */}
        <div className="post-preview-bottom-controls">
          <div>
            <span className="bold">عنوان پست آرایشی و زیبایی</span>
            <span>ایپسوم متن ساختگی با تولید سادگی نامفهوم بیشتر</span>
          </div>
          <img
            onClick={() => setIsSettingOpen(true)}
            src={menuIcon}
            alt="menu"
          />
          <div>لاین رنگ مو</div>
        </div>
      </div>
      {/* post setting */}
      <ModalSlide visible={isSettingOpen} setVisible={setIsSettingOpen}>
        <div className="post-preview-setting-title bold">امکانات بیشتر</div>
        <div className="post-preview-setting-items">
          <div
            onClick={() => {
              setIsSettingOpen(false);
            }}
          >
            <div>
              <img src={postShareIcon} alt="share post" />
            </div>
            <span>اشتراک گذاری</span>
          </div>
          <div
            onClick={() => {
              setIsSettingOpen(false);
              navigator.clipboard.writeText("post link copied");
            }}
          >
            <div>
              <img src={postLinkIcon} alt="get link" />
            </div>
            <span>لینک پست</span>
          </div>
          <div onClick={() => setIsSettingOpen(false)}>
            <div>
              <img src={postSaveIcon} alt="save post" />
            </div>
            <span>ذخیره کردن</span>
          </div>
        </div>
      </ModalSlide>
    </div>
  );
};
export default PostPreview;
