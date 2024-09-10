import React, { useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import "./Checkout.css";

const Checkout = () => {
  const { totalPrices, cartCount } = useContext(cartContext);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag",
      amount: totalPrices * 100,
      currency: "INR",
      name: "Ecom",
      description: "Checkout Payment",
      image:
        "https://static.vecteezy.com/system/resources/previews/024/044/746/original/shopping-cart-logo-design-cart-icon-ecommerce-logo-vector.jpg",
      handler: function (response) {
        alert(`Payment successful!`);
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="checkout container-md d-flex justify-content-center">
      <div className="bg-secondary-subtle p-4 rounded-5">
        <h2 className="fw-bold">Total Amount: ₹{totalPrices}</h2>
        <p>{cartCount} items in purchase</p>
        <button
          onClick={handlePayment}
          className="pay-btn rounded-3 px-3 py-2 fs-5 w-100 text-white border-success-subtle"
          disabled={cartCount === 0}
        >
          Proceed for payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
