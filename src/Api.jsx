import React from "react";
const API_URL = "https://fakestoreapi.in/api/products";

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
