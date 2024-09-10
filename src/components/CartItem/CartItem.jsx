import React, { useContext, useEffect } from "react";
import Quantity from "../../components/Quantity/Quantity";
import { ImCross } from "react-icons/im";
import "./CartItem.css";
import { useState } from "react";
import { cartContext } from "../../context/CartProvider";

const CartItem = ({ product, states }) => {
  const { dispatch, state } = useContext(cartContext);
  //   console.log(state);

  const [quantity, setQuantity] = useState(states.quantity);

  useEffect(() => {
    dispatch({
      type: "already_in_cart",
      product: {
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
        quantity: quantity,
      },
    });
  }, [quantity]);

  return (
    <div className="cart-item py-2 px-4 p-md-4 py-md-0 mb-3 bg-secondary-subtle">
      <div className="row ms- align-items-center position-relative">
        <div className="cart-item-img my-2 col-4 col-md-5 col-lg-3 p-0">
          <img src={product.image} alt="" />
        </div>
        <div className="cart-item-details ms-2 col-6 ">
          <h5 className="ellipsis fw-bold">{product.name}</h5>
          <div>
            <p>
              ₹{product.price} * {quantity}
              <span className="ms-2">₹{`${product.price}` * quantity}</span>
            </p>
            <Quantity qty={quantity} setQty={setQuantity} />
          </div>
        </div>
        <span className="position-absolute pt-0 pe-0 pt-md-3 pe-md-2 top-0 text-end">
          <button
            onClick={() => {
              dispatch({ type: "remove_from_cart", id: product.id });
            }}
            className="rounded border-1 border-danger pb-1 bg-white"
          >
            <ImCross className="text" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
