import React from "react";
import BestSellerProduct from "./BestSellerProduct";

const Products = () => {

  return (
    <>
      <div className="container mb-5">
        <div className="heading-wrapper">
          <h5 className="bold-heading georgia-heading">Beauty Must Haves</h5>
          <p className="light-heading nunito-text">Bestsellers Products</p>
        </div>
       <BestSellerProduct/>
      </div>
    </>
  );
};

export default Products;
