import React from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Gallery } from "../components/Gallery/Gallery";

export const HomePage = () => {
  const style = {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  return (
    <div style={style}>
      <Header />
      <Hero />
      <Gallery/>
    </div>
  );
};
