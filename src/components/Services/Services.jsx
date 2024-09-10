import React from "react";
import "./Services.css";
import { FaShippingFast, FaMoneyBillAlt, FaRegClock } from "react-icons/fa";
import { TiArrowRepeat } from "react-icons/ti";

const Services = () => {
  return (
    <div className="services container-md">
      <h1 className="fs-1 fw-bold mt-4">Our services</h1>
      <div className="row pt-4 px-0 px-md-4 gap-3 d-flex justify-content-center justify-content-md-between">
        <div className="card2 pt-4 cd2-1 col-5 col-md-2 text-center">
          <a className="rounded-circle rounded-circle service-icon">
            <FaShippingFast className="text-white fs-4" />
          </a>
          <h6 className="mt-4 fw-semibold">Free shipping</h6>
          <p className="fw-light mb-1">Free shipping on all orders.</p>
        </div>
        <div className="card2 pt-4 cd2-1 col-5 col-md-2 text-center">
          <a className="rounded-circle rounded-circle service-icon">
            <FaMoneyBillAlt className="text-white fs-4" />
          </a>
          <h6 className="mt-4 fw-semibold">Cash On Delivery</h6>
          <p className="fw-lighter fw mb-1">Pay upon delivery in cash.</p>
        </div>
        <div className="card2 pt-4 cd2-1 col-5 col-md-2 text-center">
          <a className="rounded-circle rounded-circle service-icon">
            <FaRegClock className="text-white fs-4" />
          </a>
          <h6 className="mt-4 fw-semibold">Fast Delivery</h6>
          <p className="fw-light mb-1">Quick & reliable delivery</p>
        </div>
        <div className="card2 pt-4 cd2-1 col-5 col-md-2 text-center">
          <a className="rounded-circle rounded-circle service-icon">
            <TiArrowRepeat className="text-white fs-4" />
          </a>
          <h6 className="mt-4 fw-semibold">Return Available</h6>
          <p className="fw-light mb-1">Easy returns within 7 days.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
