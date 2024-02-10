import React from "react";
import classes from "./Hero.module.css";
import curvedLines from "../../assets/curved-lines.png";
import backgroundBox from "../../assets/background-box.png";
import photographer from "../../assets/photographer.png";
import { UploadImage } from "../UploadImage/UploadImage";

export const Hero = ({ addImage }) => {

  // passing the Selected image with other details to addImage
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        const id = Math.floor(Math.random() * 1000000);
        const descriptions = [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ];
        const description =
          descriptions[Math.floor(Math.random() * descriptions.length)];
        const likedByOptions = ["You", "John", "Alice", "Bob", "Emma", "Kate"];
        const likedByIndex = Math.floor(Math.random() * likedByOptions.length);
        const likedBy = likedByOptions[likedByIndex];
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
          likedBy,
          comments: [],
        };
        addImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={classes.hero_container}>
      <div className={classes.inputFile_wrapper}>
        <input
          type="file"
          name="file"
          id="file"
          className={classes.inputfile}
          onChange={handleFileChange}
          accept="image/*"
        />
        <label htmlFor="file">Upload Images</label>
        <img src={curvedLines} alt="" className={classes.curvedLines} />
        <img src={photographer} alt="" className={classes.photographer} />
        <img src={backgroundBox} alt="" className={classes.right_box} />
      </div>

      <img src={backgroundBox} alt="" className={classes.left_box} />
      <UploadImage handleFileChange={handleFileChange} />
    </div>
  );
};
