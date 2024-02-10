import React from "react";
import classes from "./UploadImage.module.css";
import plusIcon from "../../assets/plus.svg";

export const UploadImage = ({ addImage }) => {
  const handleUploadClick = (e) => {
    e.preventDefault();
    document.getElementById("file").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        const id = Math.floor(Math.random() * 1000000);
        const descriptions = [
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        ];
        const description =
          descriptions[Math.floor(Math.random() * descriptions.length)];
        const currentDate = new Date();
        const options = {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        };
        const postedDate = currentDate.toLocaleString("en-GB", options);
        const imageData = {
          id,
          profile:
            "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600",
          name: "Asha Sunny",
          postedDate,
          imageUrl,
          description,
          likedBy: "",
          isComment: false,
        };
        addImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={classes.uploadImage_container}>
      <div className={classes.uploadImage} onClick={handleUploadClick}>
        <input
          type="file"
          name="file"
          id="file"
          className={classes.addInput}
          onChange={handleFileChange}
          accept="image/*"
        />
        <label htmlFor="file">Upload Image</label>
        <img src={plusIcon} alt="Add" />
      </div>
    </div>
  );
};
