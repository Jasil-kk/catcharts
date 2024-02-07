import React from "react";
import classes from "./Hero.module.css";
import curvedLines from "../../assets/curved-lines.png"

export const Hero = () => {
  return (
    <div className={classes.hero_container}>
        <div className={classes.inputFile_wrapper}>
      <input type="file" name="file" id="file" className={classes.inputfile}/>
      <label htmlFor="file">Upload Images</label>
      <img src={curvedLines} alt="" className={classes.curvedLines} />
      </div>
    </div>
  );
};

// anchor