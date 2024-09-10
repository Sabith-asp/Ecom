import React from "react";
import Slider from "react-slick";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";
import { useContext } from "react";
import { productContext } from "../../context/DataContext";

const Sliders = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const data = useContext(productContext);

  const popular = data.filter((item) => item.popular === true);
  //   console.log(popular, "popular");

  return (
    <div className="slider-container overflow-visible">
      <Slider {...settings}>
        {popular.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
