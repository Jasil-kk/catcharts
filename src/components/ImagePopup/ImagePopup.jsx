import React, { useEffect, useState } from "react";
import classes from "./ImagePopup.module.css";
import closeIcon from "../../assets/close.svg";
import heart from "../../assets/heart.png";
import sendIcon from "../../assets/send.svg";
import image1 from "../../assets/image-1.png";
import image2 from "../../assets/image-2.png";
import image3 from "../../assets/image-3.png";

export const ImagePopup = ({
  imageData,
  liked,
  toggleLike,
  updateComments,
  handleCancel,
}) => {
  const [commentText, setCommentText] = useState("");

  // Adding Comment Function
  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (commentText.trim() !== "") {
      const newComment = {
        commenterProfile:
          "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600",
        commenter: "You",
        date: new Date().toLocaleString(),
        text: commentText.trim(),
      };
      updateComments(newComment);
      setCommentText("");
    }
  };

  useEffect(() => {
    document.body.classList.add(classes.bodyModalOpen);
    return () => {
      document.body.classList.remove(classes.bodyModalOpen);
    };
  }, []);

  return (
    <div className={classes.imagePopup_container}>
      <div className={classes.popup}>
        <div className={classes.close_container} onClick={handleCancel}>
          <img src={closeIcon} alt="Close" />
        </div>
        <div className={classes.first_section}>
          <img
            src={imageData?.imageUrl}
            alt="Item"
            className={classes.picture}
          />
          <div className={classes.content_section}>
            <div className={classes.top_section}>
              <div className={classes.avatar}>
                <img src={imageData?.profile} alt="Profile" />
              </div>
              <div>
                <h3 className={classes.name}>{imageData?.name}</h3>
                <p className={classes.date}>{imageData?.postedDate}</p>
              </div>
              <button className={classes.report_btn}>Report</button>
            </div>
            <div className={classes.btn_container}>
              <button
                className={`${classes.card_btn} ${liked && classes.like_btn}`}
                onClick={toggleLike}
              >
                <img src={heart} alt="Heart" className={classes.heart} />
                {liked ? "Liked" : "Like"}
              </button>
              <button className={`${classes.card_btn} ${classes.comment_btn}`}>
                Comment
              </button>
            </div>
            <div className={classes.comments_container}>
              {imageData?.comments && imageData?.comments.length > 0 ? (
                <>
                  <div className={classes.all_comments}>
                    {imageData?.comments?.map((comment, index) => (
                      <React.Fragment key={index}>
                        <div className={classes.comment_wrapper}>
                          <div className={classes.commenter_details}>
                            <div className={classes.profile}>
                              <img
                                src={comment?.commenterProfile}
                                alt="Profile"
                              />
                            </div>
                            <h4 className={classes.commenter_name}>
                              {comment?.commenter}
                            </h4>
                            <p className={classes.date}>{comment?.date}</p>
                          </div>
                          <div className={classes.comment}>{comment?.text}</div>
                        </div>
                        {comment?.replies?.map((reply, index) => (
                          <div
                            key={index}
                            className={`${classes.comment_wrapper} ${classes.reply_wrapper}`}
                          >
                            <div className={classes.commenter_details}>
                              <div className={classes.profile}>
                                <img
                                  src={reply?.replierProfile}
                                  alt="Profile"
                                />
                              </div>
                              <h4 className={classes.commenter_name}>
                                {reply?.replier}
                              </h4>
                              <p className={classes.date}>{reply?.date}</p>
                            </div>
                            <div className={classes.comment}>{reply?.text}</div>
                          </div>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </>
              ) : (
                <div className={classes.noComments}>No comments</div>
              )}
              <form
                onSubmit={handleSubmitComment}
                action=""
                className={classes.input_form}
              >
                <div className={`${classes.profile} ${classes.userProfile}`}>
                  <img
                    src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Profile"
                  />
                </div>
                <input
                  type="text"
                  name="comment"
                  id="comment"
                  placeholder="Write a comment..."
                  className={classes.input}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <button type="submit" className={classes.send_button}>
                  <img
                    src={sendIcon}
                    alt="Send"
                    className={classes.send_icon}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={classes.second_section}>
          <h3 className={classes.heading}>Latest Images</h3>
          <div className={classes.image_container}>
            <img src={image1} alt="Latest" />
            <img src={image2} alt="Latest" />
            <img src={image3} alt="Latest" />
          </div>
        </div>
      </div>
      <div className={classes.popup_closer} onClick={handleCancel}></div>
    </div>
  );
};
