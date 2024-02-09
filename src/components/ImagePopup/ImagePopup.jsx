import React, { useEffect } from "react";
import classes from "./ImagePopup.module.css";
import closeIcon from "../../assets/close.svg";
import desert from "../../assets/desert.png";
import heart from "../../assets/heart.png";
import sendIcon from "../../assets/send.svg";
import image1 from "../../assets/image-1.png";
import image2 from "../../assets/image-2.png";
import image3 from "../../assets/image-3.png";

export const ImagePopup = ({ handleCancel }) => {
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
          <img src={desert} alt="Item" className={classes.picture} />
          <div className={classes.content_section}>
            <div className={classes.top_section}>
              <div className={classes.avatar}>
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Profile"
                />
              </div>
              <div>
                <h3 className={classes.name}>Asha Sunny</h3>
                <p className={classes.date}>2 Days ago</p>
              </div>
              <button className={classes.report_btn}>Report</button>
            </div>
            <div className={classes.btn_container}>
              <button className={`${classes.card_btn} ${classes.like_btn}`}>
                <img src={heart} alt="Heart" className={classes.heart} /> Like
              </button>
              <button className={`${classes.card_btn} ${classes.comment_btn}`}>
                Comment
              </button>
            </div>
            <div className={classes.comments_container}>
              <div className={classes.all_comments}>
                <div className={classes.comment_wrapper}>
                  <div className={classes.commenter_details}>
                    <div className={classes.profile}>
                      <img
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Profile"
                      />
                    </div>
                    <h4 className={classes.commenter_name}>Srutheesh</h4>
                    <p className={classes.date}>1 Week ago</p>
                  </div>
                  <div className={classes.comment}>
                    Nice Images....Good Work
                  </div>
                </div>
                <div
                  className={`${classes.comment_wrapper} ${classes.reply_wrapper}`}
                >
                  <div className={classes.commenter_details}>
                    <div className={classes.profile}>
                      <img
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Profile"
                      />
                    </div>
                    <h4 className={classes.commenter_name}>Anitta K C</h4>
                    <p className={classes.date}>1 Week ago</p>
                  </div>
                  <div className={classes.comment}>Thankuu....</div>
                </div>
                <div className={classes.comment_wrapper}>
                  <div className={classes.commenter_details}>
                    <div className={classes.profile}>
                      <img
                        src="https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Profile"
                      />
                    </div>
                    <h4 className={classes.commenter_name}>Simi K Sunny</h4>
                    <p className={classes.date}>1 Week ago</p>
                  </div>
                  <div className={classes.comment}>
                    Nice Work....{" "}
                    <span className={classes.reply_btn}>Reply</span>
                  </div>
                </div>
              </div>
              <form action="" className={classes.input_form}>
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
                />
                <img src={sendIcon} alt="Send" className={classes.send_icon} />
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
