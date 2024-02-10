import React, { useState } from "react";
import classes from "./Gallery.module.css";
import kababMenu from "../../assets/kebab-menu.svg";
import { ImagePopup } from "../ImagePopup/ImagePopup";

export const Gallery = ({ imageData, setImageData }) => {
  const [show, setShow] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [likedImages, setLikedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Updating the imageData's comments
  const updateImageDataComments = (newComment) => {
    const updatedImageData = imageData.map((image) => {
      if (image.id === selectedImage.id) {
        return {
          ...image,
          comments: [...(image.comments || []), newComment],
        };
      }
      return image;
    });
    setSelectedImage(
      updatedImageData.find((image) => image.id === selectedImage.id)
    );
    setImageData(updatedImageData);
  };

  // ImagePopup Handling
  const handleOpenPopup = (image) => {
    setShow(true);
    setSelectedImage(image);
  };
  const handleClosePopup = () => {
    setShow(false);
    setSelectedImage(null);
  };

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  // Like Function
  const handleLikeImage = (id) => {
    if (likedImages.includes(id)) {
      setLikedImages(likedImages.filter((imageId) => imageId !== id));
    } else {
      setLikedImages([...likedImages, id]);
    }
  };

  // Reversing the imageData
  const reversedImageData = [...imageData].reverse();

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
                {profiles?.map((profile, index) => (
                  <div key={index} className={classes.profile}>
                    <img src={profile} alt="Profile" />
                  </div>
                ))}
              </div>
              <p className={classes.liked_text}>
                {likedImages.includes(image.id)
                  ? `Liked by You and ${image.likedBy}`
                  : `Liked by ${image.likedBy}`}
              </p>
              {image?.comments && image?.comments.length > 0 && (
                <p
                  className={`${classes.liked_text} ${classes.commentCount}`}
                  onClick={handleShowComments}
                >
                  {image?.comments.length}{" "}
                  {image?.comments.length === 1 ? "Comment" : "Comments"}
                </p>
              )}
            </div>
            <div className={classes.btn_container}>
              <button
                className={`${classes.card_btn} ${classes.like_btn} ${
                  likedImages.includes(image.id) ? classes.liked : ""
                }`}
                onClick={() => handleLikeImage(image.id)}
              >
                {likedImages.includes(image.id) ? "Liked" : "Like"}
              </button>
              <button
                className={`${classes.card_btn} ${classes.comment_btn}`}
                onClick={() => handleOpenPopup(image)}
              >
                Comment
              </button>
            </div>
            {showComments && (
              <div className={classes.comments_container}>
                   {image?.comments.slice().reverse().map((comment, index) => (
                  <React.Fragment key={index}>
                    <div className={classes.comment_wrapper}>
                      <div className={classes.commenter_details}>
                        <div
                          className={`${classes.profile} ${classes.commenter}`}
                        >
                          <img src={comment?.commenterProfile} alt="Profile" />
                        </div>
                        <h4 className={classes.commenter_name}>
                          {comment?.commenter}
                        </h4>
                        <p className={classes.date}>{comment?.date}</p>
                        <img
                          src={kababMenu}
                          alt="Menu"
                          className={classes.menu}
                        />
                      </div>
                      <div className={classes.comment}>{comment?.text}</div>
                    </div>
                    {comment?.replies?.map((reply, index) => (
                      <div
                        key={index}
                        className={`${classes.comment_wrapper} ${classes.reply_wrapper}`}
                      >
                        <div className={classes.commenter_details}>
                          <div
                            className={`${classes.profile} ${classes.commenter}`}
                          >
                            <img src={reply?.replierProfile} alt="Profile" />
                          </div>
                          <h4 className={classes.commenter_name}>
                            {reply?.replier}
                          </h4>
                          <p className={classes.date}>{reply?.date}</p>
                          <img
                            src={kababMenu}
                            alt="Menu"
                            className={classes.menu}
                          />
                        </div>
                        <div className={classes.comment}>{reply?.text}</div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {show && (
        <ImagePopup
          imageData={selectedImage}
          updateComments={updateImageDataComments}
          handleCancel={handleClosePopup}
          liked={likedImages.includes(selectedImage?.id)}
          toggleLike={() => handleLikeImage(selectedImage?.id)}
        />
      )}
    </>
  );
};

const profiles = [
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=600",
];
