import React, { Children, createContext } from "react";
import { fetchProducts } from "../Api";

import { useState, useEffect } from "react";

export const productContext = createContext();
export const LoadingContext = createContext();

const DataContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [premiumProducts, setPremiumProducts] = useState([]);
  const [premiumLoading, setPremiumLoading] = useState(true);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState();
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        // setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const premiumProductFetch = async () => {
      try {
        const response = await fetch("/premium.json");
        const premiumData = await response.json();
        setPremiumProducts(premiumData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setPremiumLoading(false);
      }
    };
    premiumProductFetch();
  }, []);
  //   console.log(products);

  return (
    <productContext.Provider value={products}>
      <LoadingContext.Provider
        value={{ loading, premiumProducts, premiumLoading }}
      >
        {children}
      </LoadingContext.Provider>
    </productContext.Provider>
  );
};

export default DataContext;
