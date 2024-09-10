import React, { useState } from "react";
import "./Quantity.css";

const Quantity = ({ qty, setQty }) => {
  const decrement = () => {
    setQty((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const increment = () => {
    setQty((prev) => prev + 1);
  };

  return (
    <div className="d-flex">
      <h6 className=" d-flex">
        Quantity:
        <div className=" ms-2">
          <div className="d-flex align-items-center">
            <button
              className="qty-btn decrement border-0 text-white px-2 rounded"
              onClick={decrement}
            >
              -
            </button>
            <span className="fw-bold px-2 m-0">{qty}</span>
            <button
              className="qty-btn increment border-0 text-white px-2 rounded"
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>
      </h6>
    </div>
  );
};

export default Quantity;
