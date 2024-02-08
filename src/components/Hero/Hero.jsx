import React from "react";
import classes from "./Hero.module.css";
import curvedLines from "../../assets/curved-lines.png";
import backgroundBox from "../../assets/background-box.png";
import photographer from "../../assets/photographer.png";

export const Hero = () => {
  return (
    <div className={classes.hero_container}>
      <div className={classes.inputFile_wrapper}>
        <input
          type="file"
          name="file"
          id="file"
          className={classes.inputfile}
        />
        <label htmlFor="file">Upload Images</label>
        <img src={curvedLines} alt="" className={classes.curvedLines} />
        <img src={photographer} alt="" className={classes.photographer} />
      <img src={backgroundBox} alt="" className={classes.right_box} />

      </div>

      <img src={backgroundBox} alt="" className={classes.left_box} />

    </div>
  );
};

// anchor
