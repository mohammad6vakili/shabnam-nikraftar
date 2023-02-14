import React, {useState, useEffect} from "react";
import "./style.css";
import {Input} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {setStoryPreview} from "../../features/app/app_slice";
import storyImage from "../../assets/images/storyImage.svg";
import backButtonIcon from "../../assets/images/storyBackButton.svg";
import likeIcon from "../../assets/images/postLike.svg";
import unLikeIcon from "../../assets/images/storyUnlike.svg";
import sendIcon from "../../assets/images/sendStoryComment.svg";
import {ApiInterface} from "../../api/usePostService";
import Env from "../../constant/env.json";

const baseImageUrl = Env.base_url + 'app'

const StoryPreview = () => {
    const dispatch = useDispatch();

    const [step, setStep] = useState(0);
    const [liked, setLiked] = useState(false);
    const [storyArray, setStoryArray] = useState([]);

    useEffect(async () => {

        const story = await ApiInterface.getHomeStory()
        setStoryArray(story.data)
        console.log("storyArray ===> ", storyArray)
    }, []);


    const storyPreview = useSelector((state) => state.app.storyPreview);
    return (
        <div
            className={`story-preview ${storyPreview ? "story-preview-open" : ""}`}
        >
            <div className="story-preview-body">
                {/* story image */}
                {storyArray.map((item, index) => {
                        return step === index ? item.attributes && item.attributes.images && item.attributes.images.length ?
                            <img
                                src={baseImageUrl + item.attributes.images[0].url}
                                alt="slider image"/> :
                            <img src={storyImage} alt="story"/> : ''
                    }
                )
                }
                {/* back button */}
                <div
                    onClick={() => dispatch(setStoryPreview(false))}
                    className="story-preview-back-button"
                >
                    <img src={backButtonIcon} alt="back button"/>
                </div>
                {/* bottom controls */}
                <div className="story-preview-bottom-controls">
                    <div>
                        <Input
                            suffix={<img src={sendIcon} alt="send"/>}
                            placeholder="نظر خود را بنویسید"
                            className="mv-input"
                        />
                        <div
                            className="story-preview-back-button"
                            onClick={() => setLiked(!liked)}
                        >
                            <img src={!liked ? likeIcon : unLikeIcon} alt="like"/>
                        </div>
                    </div>
                    {/* steps */}
                    <div className="story-preview-steps">
                        {storyArray.map((item, index) => (
                            <div className={step >= index ? "step-fill" : ""}></div>
                        ))}
                    </div>
                </div>
                {/* direction controls */}
                <div
                    onClick={() => {
                        if (step !== storyArray.length) {
                            setStep(step + 1);
                        } else {
                            dispatch(setStoryPreview(false));
                        }
                    }}
                    className="story-next"
                ></div>
                <div
                    onClick={() => {
                        if (step !== 0) {
                            setStep(step - 1);
                        }
                    }}
                    className="story-prev"
                ></div>
            </div>
        </div>
    );
};
export default StoryPreview;
