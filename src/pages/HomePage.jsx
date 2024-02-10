import React, { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Gallery } from "../components/Gallery/Gallery";

export const HomePage = () => {
  const [imageData, setImageData] = useState([]);

  // Fetching the Image and Details from images.json
  useEffect(() => {
    fetch("/images.json")
      .then((response) => response.json())
      .then((data) => setImageData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  // Adding New Item to the imageData  
  const addImage = (newImage) => {
    setImageData([...imageData, newImage]);
  };

  // Page Style
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
      <Hero addImage={addImage} />
      <Gallery imageData={imageData} setImageData={setImageData}/>
    </div>
  );
};
