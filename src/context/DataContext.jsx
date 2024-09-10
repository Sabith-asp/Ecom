import React, { Children, createContext } from "react";
import { fetchProducts } from "../Api";

import { useState, useEffect } from "react";

export const productContext = createContext();
export const LoadingContext = createContext();

const DataContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
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
  //   console.log(products);

  return (
    <productContext.Provider value={products}>
      <LoadingContext.Provider value={loading}>
        {children}
      </LoadingContext.Provider>
    </productContext.Provider>
  );
};

export default DataContext;
