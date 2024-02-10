import React, { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Gallery } from "../components/Gallery/Gallery";

export const HomePage = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetch("/images.json")
      .then((response) => response.json())
      .then((data) => setImageData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);


  const addImage = (newImage) => {
    // Update imageData state with the new image
    setImageData([...imageData, newImage]);

    // You can also persist the updated imageData to localStorage here if needed
    // localStorage.setItem('imageData', JSON.stringify([...imageData, newImage]));
  };


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
      <Gallery imageData={imageData}/>
    </div>
  );
};
