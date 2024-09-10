import React from "react";
import "./Popular.css";
import Slider from "../Slider/Slider";

const Popular = () => {
  return (
    <div className="popular container-md">
      <h1 className="fs-1 fw-bold mt-4">Popular products</h1>
      <p className="popular-para m-0">Trending gadgets in one Website</p>
      <Slider />
    </div>
  );
};

export default Popular;
