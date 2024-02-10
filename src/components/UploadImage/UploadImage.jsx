import React from "react";
import classes from "./UploadImage.module.css";
import plusIcon from "../../assets/plus.svg";

export const UploadImage = ({ handleFileChange }) => {
  const handleUploadClick = (e) => {
    e.preventDefault();
    document.getElementById("file").click();
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
