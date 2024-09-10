import React, { useState } from "react";
import "./Card.css";
import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card1 m-2 m-md-3 p-1 p-md-2 position-relative overflow-hidden">
      <Link to={`/product-details/${item.id}`}>
        <div className="d-flex flex-column align-items-center">
          <img src={item.image} alt="" />
        </div>
      </Link>

      <div>
        <p className="slider-caption m-0 mt-3 fw-bold text-center">
          {item.category}
        </p>
        {/* <p className="description">{""}</p>
        <div className="d-flex justify-content-between"></div> */}
      </div>
    </div>
  );
};

export default Card;
