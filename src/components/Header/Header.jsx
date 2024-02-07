import React from "react";
import classes from "./Header.module.css";
import searchIcon from "../../assets/search-icon.svg";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="CatchArts" className={classes.logo} />
      <form action="" className={classes.seach_form}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className={classes.seach_input}
        />
        <img src={searchIcon} alt="Search" className={classes.search_icon} />
      </form>
      <div className={classes.profile_card}>
        <img
          src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Profile"
        />{" "}
        Asha Sunny
      </div>
      <button className={`${classes.profile_card} ${classes.logout_btn}`}>Logout</button>
    </header>
  );
};
