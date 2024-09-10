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
  const [categoryData, setCategoryData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [premiumLoading, setPremiumLoading] = useState(true);
  useEffect(() => {
    const premiumProductFetch = async () => {
      try {
        const response = await fetch("/premium.json");
        const data = await response.json();
        setCategoryData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setPremiumLoading(false);
      }
    };
    premiumProductFetch();
  }, []);

  console.log(categoryData);

  const { searchVal, setSearchval } = useContext(cartContext);

  const { category } = useParams();

  const categorisedProducts = categoryData.filter(
    (item) => item.category === category
  );
  const searchFilter = categoryData.filter((product) =>
    product.title.toLowerCase().includes(searchVal.toLowerCase())
  );
  useEffect(() => {
    if (searchVal === "") {
      category === "All"
        ? setFilteredProducts(categoryData)
        : setFilteredProducts(categorisedProducts);
    } else {
      setFilteredProducts(searchFilter);
    }
  }, [category, filteredProducts]);

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
