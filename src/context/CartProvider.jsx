import React, { createContext, useEffect, useReducer, useState } from "react";

// Create a cart context
export const cartContext = createContext();

const initialState = [];

// Reducer function to handle cart actions
const reducer = (state, action) => {
  //   console.log(action.product.id);

  switch (action.type) {
    case "add_to_cart":
      const existingInCartProduct = state.findIndex(
        (item) => item.id === action.product.id
      );
      if (existingInCartProduct >= 0) {
        return state.map((item, index) =>
          index === existingInCartProduct
            ? { ...item, quantity: item.quantity + action.product.quantity }
            : item
        );
      } else {
        return [
          ...state,
          { ...action.product, quantity: action.product.quantity },
        ];
      }
    case "already_in_cart":
      const existingInCartProducts = state.findIndex(
        (item) => item.id === action.product.id
      );
      if (existingInCartProducts >= 0) {
        return state.map((item, index) =>
          index === existingInCartProducts
            ? { ...item, quantity: action.product.quantity }
            : item
        );
      } else {
        return [
          ...state,
          { ...action.product, quantity: action.product.quantity },
        ];
      }

    case "remove_from_cart":
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};

// CartProvider component
const CartProvider = ({ children }) => {
  const [searchVal, setSearchval] = useState("");
  const [isAuth, setIsAuth] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cartCount, setCartCount] = useState(0);
  //   console.log(state); // To monitor the cart state

  const [totalPrices, setTotalPrices] = useState();
  const totalPrice = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    setCartCount(state.length);
    setTotalPrices(totalPrice);
  }, [state]);

  //   console.log(cartCount);

  return (
    <cartContext.Provider
      value={{
        state,
        dispatch,
        isAuth,
        cartCount,
        totalPrices,
        searchVal,
        setSearchval,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
