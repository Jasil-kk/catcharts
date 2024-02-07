import React from "react";
import classes from "./CustomButton.module.css";

export const CustomButton = ({ className, children }) => {
  return (
    <button className={`${classes.customButton} ${className}`}>
      {children}
    </button>
  );
};
