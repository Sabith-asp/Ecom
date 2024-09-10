import React from "react";
import "./Home.css";
import { Outlet, Link } from "react-router-dom";
import Popular from "../../components/Popular/Popular";
import Services from "../../components/Services/Services";
import Products from "../products/Products";

const Home = () => {
  return (
    <>
      <div className="home px-2">
        <div className="banner  container-md d-flex">
          <div className="left w-50 d-flex position-relative flex-column justify-content-center">
            <h1 className="fs-1 fw-bolder text-white">Onam Sale is On</h1>
            <p className="banner-para">
              Greate offers are going on Checkout products
            </p>
            <div>
              <Link to="/products/All">
                <button className="banner-btn text-white rounded-pill border-0">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="banner-sub d-none d-md-flex  position-absolute">
              <img
                src="https://cdn.sanity.io/images/5rsw848q/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp"
                alt=""
              />

              <img
                src="https://cdn.sanity.io/images/5rsw848q/production/17dc1e78143cf6430140d63b3e2544c1b639577a-800x800.webp"
                alt=""
              />

              <img
                src="https://cdn.sanity.io/images/5rsw848q/production/9945618cb6150813c237942a285c0af8597c7718-600x600.webp"
                alt=""
              />

              <img
                src="https://cdn.sanity.io/images/5rsw848q/production/8aa3c4242c30718c8add3cd373c2945908356f4a-600x600.webp"
                alt=""
              />
            </div>
          </div>
          <div className="right w-50 d-flex justify-content-center position-relative">
            <img
              className="position-absolute"
              src="https://cdn.sanity.io/images/5rsw848q/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <Popular />
      <Services />
      <Products />
    </>
  );
};

export default Home;
