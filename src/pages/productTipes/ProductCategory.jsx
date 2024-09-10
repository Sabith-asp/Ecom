import React, { useCallback, useContext, useEffect, useState } from "react";
import "./ProductCategory.css";
import { MdFilterListAlt } from "react-icons/md";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchProducts } from "../../Api";
import { productContext } from "../../context/DataContext";
import { useParams } from "react-router-dom";
import { LoadingContext } from "../../context/DataContext";
import Loader from "../../components/Loader/Loader";
import { cartContext } from "../../context/CartProvider";

const ProductCategory = () => {
  const { searchVal, setSearchval } = useContext(cartContext);
  const data = useContext(productContext);
  const { loading } = useContext(LoadingContext);
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState(data);

  const categorisedProducts = data.filter((item) => item.category === category);
  const searchFilter = categoryData.filter((product) =>
    product.title.toLowerCase().includes(searchVal.toLowerCase())
  );
  useEffect(() => {
    if (searchVal === "") {
      category === "All"
        ? setCategoryData(data)
        : setCategoryData(categorisedProducts);
    } else {
      setCategoryData(searchFilter);
    }
  }, [category, data, searchVal]);

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
        {loading ? (
          <Loader />
        ) : (
          <div className="product-cards justify-content-center  row d-flex mt-2 px-2 pb-4 px-md-4">
            {/* map */}
            {categoryData.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
