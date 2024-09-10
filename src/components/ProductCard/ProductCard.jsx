import React from "react";
import "./ProductCard.css";
import { FaStar } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartProvider";
import { useContext } from "react";
import Quantity from "../Quantity/Quantity";

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(cartContext);
  return (
    <div className="card3 p-2 m-2 m-md-3  bg-white col-5 col-sm-3 col-md-3 position-relative col-lg-2">
      <span className="offer position-absolute">
        {product.discount || 0}% off
      </span>
      <Link to={`/product-details/${product.id}`}>
        <img src={product.image} alt="" />
      </Link>

      <div className="details">
        <div className="d-flex justify-content-between">
          <h6 className="mt-1 m-0">{product.brand}</h6>
          <span className="d-flex mt-1">
            <FaStar className="text-warning mt-1 me-1" />
            <p className="m-0">{"4.6"}</p>
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="m-0 fw-bold">$ {product.price}</h5>
          <button
            onClick={() => {
              dispatch({
                type: "add_to_cart",
                product: {
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  image: product.image,
                  quantity: 1,
                },
              });
            }}
            className="plus-btn border-0 pb-1 rounded-circle"
          >
            <TiPlus className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
