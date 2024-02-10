import React, { useState } from "react";
import classes from "./Gallery.module.css";
import kababMenu from "../../assets/kebab-menu.svg";
import { ImagePopup } from "../ImagePopup/ImagePopup";

export const Gallery = ({ imageData }) => {
  const [show, setShow] = useState(false);

  const handleOpenPopup = () => {
    setShow(true);
  };
  const handleClosePopup = () => {
    setShow(false);
  };

  const reversedImageData = [...imageData].reverse();

  console.log(reversedImageData);
  return (
    <>
      <div className={classes.gallery_container}>
        {reversedImageData?.map((image) => (
          <div key={image?.id} className={classes.item_card}>
            <div className={classes.top_section}>
              <div className={classes.avatar}>
                <img src={image?.profile} alt="Profile" />
              </div>
              <div>
                <h3 className={classes.name}>{image?.name}</h3>
                <p className={classes.date}>{image?.postedDate}</p>
              </div>
              <button className={classes.report_btn}>Report</button>
            </div>
            <p className={classes.description}>{image?.description}</p>
            <img src={image?.imageUrl} alt="Item" className={classes.picture} />
            <div className={classes.likes_container}>
              <div className={classes.profile_group}>
                <div className={classes.profile}>
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Profile"
                  />
                </div>
                <div className={classes.profile}>
                  <img
                    src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Profile"
                  />
                </div>
                <div className={classes.profile}>
                  <img
                    src="https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Profile"
                  />
                </div>
              </div>
              <p className={classes.liked_text}>{image?.likedBy}</p>
              <p className={`${classes.liked_text} ${classes.commentCount}`}>
                3 Comments
              </p>
            </div>
            <div className={classes.btn_container}>
              <button className={`${classes.card_btn} ${classes.like_btn}`}>
                Like
              </button>
              <button
                className={`${classes.card_btn} ${classes.comment_btn}`}
                onClick={handleOpenPopup}
              >
                Comment
              </button>
            </div>
            {image?.isComment && (
              <div className={classes.comments_container}>
                <div className={classes.comment_wrapper}>
                  <div className={classes.commenter_details}>
                    <div className={`${classes.profile} ${classes.commenter}`}>
                      <img
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Profile"
                      />
                    </div>
                    <h4 className={classes.commenter_name}>Srutheesh</h4>
                    <p className={classes.date}>1 Week ago</p>
                    <img src={kababMenu} alt="Menu" className={classes.menu} />
                  </div>
                  <div className={classes.comment}>
                    Nice Images....Good Work
                  </div>
                </div>
                <div
                  className={`${classes.comment_wrapper} ${classes.reply_wrapper}`}
                >
                  <div className={classes.commenter_details}>
                    <div className={`${classes.profile} ${classes.commenter}`}>
                      <img
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Profile"
                      />
                    </div>
                    <h4 className={classes.commenter_name}>Anitta K C</h4>
                    <p className={classes.date}>1 Week ago</p>
                    <img src={kababMenu} alt="Menu" className={classes.menu} />
                  </div>
                  <div className={classes.comment}>Thankuu....</div>
                </div>
                <div className={classes.comment_wrapper}>
                  <div className={classes.commenter_details}>
                    <div className={`${classes.profile} ${classes.commenter}`}>
                      <img
                        src="https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Profile"
                      />
                    </div>
                    <h4 className={classes.commenter_name}>Simi K Sunny</h4>
                    <p className={classes.date}>1 Week ago</p>
                    <img src={kababMenu} alt="Menu" className={classes.menu} />
                  </div>
                  <div className={classes.comment}>
                    Nice Work....{" "}
                    <span className={classes.reply_btn}>Reply</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {show && <ImagePopup handleCancel={handleClosePopup} />}
    </>
  );
};
