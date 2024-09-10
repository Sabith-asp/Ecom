import "./Navbar.css";
import React, { useContext, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { RiLoginCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { cartContext } from "../../context/CartProvider";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const { isAuth, cartCount } = useContext(cartContext);
  const { searchVal, setSearchval } = useContext(cartContext);
  const [isMenuOpen, setIsMenuOpen] = useState("home");

  const menuHandle = (section) => {
    setIsMenuOpen(section);
  };

  return (
    <nav className="navbar position-fixed w-100 navbar-expand-md bg-body-tertiary px-lg-5 px-1 py-3 fw-semibold">
      <div className="container-fluid d-flex justify-content-between ">
        <a className="navbar-brand fs-4 fw-bold" href="#">
          Ecom
        </a>
        <div>
          <Link to="/cart">
            <button
              className="navbar-toggler position-relative border-0 p-0 me-2"
              type="button"
            >
              <FaCartArrowDown className="me-1 text-secondary fs-2" />
              <span
                style={{
                  position: "absolute",
                  top: "-3px",
                  right: "-1px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "1px 3px",
                  fontSize: "8px",
                  fontWeight: "bold",
                }}
              >
                {cartCount || 0}
              </span>
            </button>
          </Link>
          <button
            className="navbar-toggler border-0 p-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header px-3 py-0">
            <h5
              className="offcanvas-title w-100 fw-bold fs-2 py-3 rounded"
              id="offcanvasNavbarLabel"
            >
              Ecom
            </h5>
            <button
              type="button"
              className="btn-close border-0"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <hr className="underline d-md-none m-0" />
          <div className="offcanvas-body align-items-center justify-content-center">
            <ul className="navbar-nav justify-content-center flex-grow-1 align-items-lg-center">
              <li className="nav-item">
                <Link to="/">
                  <button
                    className={`nav-link ${isMenuOpen === "home" ? "" : ""}`}
                    onClick={() => {
                      menuHandle("home");
                    }}
                    aria-current="page"
                    data-bs-dismiss="offcanvas"
                  >
                    Home
                  </button>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <button
                  className={`nav-link dropdown-toggle custom-dropdown ${
                    isMenuOpen === "menu" ? "active" : ""
                  }`}
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => {
                    menuHandle("menu");
                  }}
                >
                  Products <IoIosArrowDown className="mb-1" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/products/All">
                      All
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products/audio">
                      Audio
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products/gaming">
                      Gaming
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products/mobile">
                      Mobile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products/tv">
                      Tv
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className={`nav-link dropdown-toggle custom-dropdown ${
                    isMenuOpen === "cart" ? "active" : ""
                  }`}
                  onClick={() => {
                    menuHandle("cart");
                  }}
                >
                  Premium <IoIosArrowDown className="mb-1" />
                </button>
                <ul className="dropdown-menu">
                  {/* <li>
                    <Link className="dropdown-item" to="/premium/All">
                      All
                    </Link>
                  </li> */}
                  <li>
                    <Link className="dropdown-item" to="/premium/shoes">
                      Shoes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/premium/watches">
                      Watches
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/premium/sunglasses">
                      Sun glasses
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/cart">
                  <button
                    className={`nav-link ${
                      isMenuOpen === "link" ? "active" : ""
                    }`}
                    onClick={() => {
                      menuHandle("link");
                    }}
                    data-bs-dismiss="offcanvas"
                  >
                    Cart
                  </button>
                </Link>
              </li>
            </ul>
            <div className="nav-end d-flex flex-wrap flex-md-nowrap  fs-4 align-items-center justify-content-end">
              <div className="search w-100 me-3 fs-6">
                <input
                  onChange={(e) => {
                    setSearchval(e.target.value);
                  }}
                  className="w-100"
                  placeholder="Search..."
                  type="text"
                />
                <button data-bs-dismiss="offcanvas" type="submit">
                  Go
                </button>
              </div>
              <div className="position-relative in-media">
                <Link to="/cart">
                  <button
                    data-bs-dismiss="offcanvas"
                    className="cart-btn btn text-white fs-4 p-0 me-3 "
                  >
                    <FaCartArrowDown className="text-secondary" />
                  </button>

                  <span
                    style={{
                      position: "absolute",
                      top: "6px",
                      right: "12px",
                      background: "red",
                      color: "white",
                      borderRadius: "65%",
                      padding: "1px 3px",
                      fontSize: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    {cartCount || 0}
                  </span>
                </Link>
              </div>

              <button className="login-btn in-media d-flex align-items-center rounded-pill p-1 px-2 border-0 fs-6">
                {isAuth ? (
                  <CgProfile />
                ) : (
                  <span>
                    Login <RiLoginCircleFill className="ms-1" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
