import React, { useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Quantity from "../../components/Quantity/Quantity";
import { productContext } from "../../context/DataContext";
import { FaStar } from "react-icons/fa";
import { cartContext } from "../../context/CartProvider";
import { LoadingContext } from "../../context/DataContext";

const ProductDetails = () => {
  const { loading, premiumProducts, premiumLoading } =
    useContext(LoadingContext);
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useContext(cartContext);
  const { id } = useParams();
  const normalProducts = useContext(productContext);
  //   console.log(products);

  //   useEffect(() => {
  //     const product = products.find((product) => product.id === parseInt(id));
  //   }, [third]);

  //   if (id <= 50) {
  //     const product = normalProducts.find(
  //       (product) => product.id === parseInt(id)
  //     );
  //   } else {
  //     const product = premiumProducts.find(
  //       (product) => product.id === parseInt(id)
  //     );
  //   }

  const product =
    id <= 50
      ? normalProducts.find((product) => product.id === parseInt(id))
      : premiumProducts.find((product) => product.id === parseInt(id));

  console.log(product);

  //   console.log(product);
  //   console.log(quantity);

  return (
    <div className="product-details container-md">
      <div className="row d-flex flex-column flex-md-row align-items-center">
        <div className="left1 p-0 p-md-3  overflow-hidden col-11 col-md-4">
          <div className="left1-sub">
            <img src={product.image} className="w-100 border-1 border-black" />
          </div>

          {/* product sub images */}
        </div>
        <div className="right1 p-0 text-start ms-0 ms-md-5 col-11 col-md-7  d-flex flex-column justify-content-center">
          <h2 className="fw-bold">{product.title}</h2>
          <div className="rating">
            {product.discount}
            <FaStar className="text-warning ms-2 mb-1" />
          </div>
          <h5 className="mt-3">Details:</h5>
          <p>{product.description}</p>
          <h4 className="rate fw-bold">$ {product.price}</h4>
          <div className="quantity">
            <Quantity qty={quantity} setQty={setQuantity} />
          </div>
          <span>
            <button
              onClick={() => {
                dispatch({
                  type: "add_to_cart",
                  product: {
                    id: product.id,
                    name: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: quantity,
                  },
                });
                setQuantity(1);
              }}
              className=" fs-5 px-3 add-to-cart-btn mt-3 border-0 float-end float-md-start rounded"
            >
              Add to Cart
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
