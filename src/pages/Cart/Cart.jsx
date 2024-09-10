import React, { useEffect, useState } from "react";
import "./Cart.css";
import CartItem from "../../components/CartItem/CartItem";
import { cartContext } from "../../context/CartProvider";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

const Cart = () => {
  const { state, totalPrices, cartCount } = useContext(cartContext);
  //   console.log(state);
  //   const [totalPrices, setTotalPrices] = useState();
  //   const totalPrice = state.reduce((total, item) => {
  //     return total + item.price * item.quantity;
  //   }, 0);
  //   useEffect(() => {
  //     setTotalPrices(totalPrice);
  //   }, [state]);

  return (
    <div className="cart container-md">
      <div className="row">
        <div className="left3 pt-0 p-3 col-12 col-sm-7">
          {cartCount === 0 ? (
            <div>
              <h3 className="fw-bold">No items in cart</h3>
            </div>
          ) : (
            <div>
              {state.map((item) => (
                <CartItem key={item.id} product={item} states={item} />
              ))}
            </div>
          )}

          {/* map */}
        </div>
        <div className="p-3 p-md-0 col-12 col-sm-4">
          <div className="right3 p-4 ms-0 ms-md-3 bg-secondary-subtle">
            <h4>Cart Summary</h4>
            <p>Total Price : </p>
            <h1 className="fw-bold">₹{totalPrices}</h1>
            <Link to="/checkout">
              <button
                className={`checkout-btn w-100 border-0 text-white rounded-2 py-2`}
                disabled={cartCount === 0}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
