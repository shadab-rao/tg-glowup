import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addWishlist,
  productList,
  wishList,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { useDispatch } from "react-redux";
import { setProducts, setWishlist } from "../../Redux/cartSlice";
import { Paginate } from "../Pagination/Paginate";
import AllProduct from "../common/AllProduct";

const Products = () => {

  return (
    <>
      <div className="container mb-5">
        <div className="heading-wrapper">
          <h5 className="bold-heading">Beauty Must Haves</h5>
          <p className="light-heading">Bestsellers Products</p>
        </div>
       <AllProduct/>
      </div>
    </>
  );
};

export default Products;
