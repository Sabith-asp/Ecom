import React, { useCallback, useContext, useEffect, useState } from "react";
import "./Premium.css";
import { MdFilterListAlt } from "react-icons/md";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchProducts } from "../../Api";
import { productContext } from "../../context/DataContext";
import { useParams } from "react-router-dom";
import { LoadingContext } from "../../context/DataContext";
import Loader from "../../components/Loader/Loader";
import { cartContext } from "../../context/CartProvider";
// import premium from "../../../public/premium.json";

const Premium = () => {
  //   const [categoryData, setCategoryData] = useState([]);

  const { loading, premiumProducts, premiumLoading } =
    useContext(LoadingContext);
  const [filteredProducts, setFilteredProducts] = useState(premiumProducts);

  console.log(filteredProducts);

  const { searchVal, setSearchval } = useContext(cartContext);

  const { category } = useParams();

  const categorisedProducts = premiumProducts.filter(
    (item) => item.category === category
  );
  const searchFilter = premiumProducts.filter((product) =>
    product.title.toLowerCase().includes(searchVal.toLowerCase())
  );
  useEffect(() => {
    if (searchVal === "") {
      category === "All"
        ? setFilteredProducts(premiumProducts)
        : setFilteredProducts(categorisedProducts);
    } else {
      setFilteredProducts(searchFilter);
    }
  }, [category]);

  //   console.log(searchVal);
  //   console.log(category);
  //   console.log(searchFilter);
  //   console.log(categoryData);

  return (
    <div className="fdghfdgh">
      <div className="product-category container-md">
        <div className="product-head d-flex align-items-center justify-content-between py-2  px-4 mt-5">
          <h1 className="fs-1 text-white fw-bold text-capitalize">
            {category}
          </h1>
        </div>
        {premiumLoading ? (
          <Loader />
        ) : (
          <div className="product-cards justify-content-center  row d-flex mt-2 px-2 pb-4 px-md-4">
            {/* map */}
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Premium;
