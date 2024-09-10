import React, { useCallback, useContext, useEffect, useState } from "react";
import "./Products.css";
import { MdFilterListAlt } from "react-icons/md";
import ProductCard from "../../components/ProductCard/ProductCard";
import { productContext } from "../../context/DataContext";
import { LoadingContext } from "../../context/DataContext";
import Loader from "../../components/Loader/Loader";
import { cartContext } from "../../context/CartProvider";
const Products = () => {
  const { loading } = useContext(LoadingContext);
  const data = useContext(productContext);
  const [filteredProducts, setFilteredProducts] = useState(data);

  useEffect(() => {
    setFilteredProducts(data);
  }, [data]);

  const itemSort = useCallback(
    (item) => {
      if (item === "Default") {
        setFilteredProducts(data);
      } else {
        const filtered = data.filter((product) => product.category === item);

        setFilteredProducts(filtered);
      }
    },
    [data]
  );

  return (
    <div className="product container-md p-0 ">
      <div className="product-head d-flex align-items-center justify-content-between py-2  px-4 mt-5">
        <h1 className="fs-1 text-white fw-bold">Products</h1>
        <div className="filter d-flex align-items-center bg-white py-1 px-2">
          <MdFilterListAlt />
          <select
            className=" border-0 bg-transparent"
            onChange={(e) => {
              itemSort(e.target.value);
            }}
            name="sort"
            id="sort"
          >
            <option value="Default">All</option>
            <option value="audio">Audio</option>
            <option value="gaming">Gaming</option>
            <option value="mobile">Mobile</option>
            <option value="tv">TV</option>
          </select>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="product-cards d-flex justify-content-center flex-wrap">
          {/* map */}

          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
