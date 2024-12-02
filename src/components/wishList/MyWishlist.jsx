import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import {
  addToCart,
  addWishlist,
  wishList,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { useDispatch } from "react-redux";
import { setWishlist } from "../../Redux/cartSlice";
import EmptyWisList from "./EmptyWisList";
import Footer from "../common/Footer";

const MyWishlist = () => {
  const [wishData, setWishData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("token-user");

  useEffect(() => {
    handleWishList();
  }, []);

  const handleWishList = async () => {
    if (userToken) {
      const response = await wishList();
      const wishlistData = response?.data?.results?.wishlist?.products || [];
      setWishData(response?.data?.results?.wishlist?.products);
      dispatch(setWishlist(wishlistData));
    }
  };

  const handleAddToCart = async ({ product, varient }) => {
    if (userToken) {
      const payload = {
        product,
        varient,
      };
      const response = await addToCart(payload);
      //  handleCart()
    } else {
      navigate("/login");
    }
  };

  const handleAddWishlist = async ({ productId = null, variantId = null }) => {
    try {
      const formData = {
        productId,
        variantId,
      };

      const response = await addWishlist(formData);
      if (response) {
        console.log("Wishlist updated successfully!");
        handleWishList();
      }
    } catch (error) {
      console.error("Failed to update wishlist:", error);
    }
  };

  return (
    <>
      <Header />
      <section className="your-recently-viewd">
        <div className="container">
          <div className="row mt-5 mb-5">
            {wishData?.length > 0 ? (
              <div className="heading-wrapper">
                <h5 className="text mb-4 text-light text-start">
                  Items are saved for 90 days
                </h5>
              </div>
            ) : null}
            {wishData?.length > 0 ? (
              wishData?.map((item) => (
                <div
                  className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4"
                  key={item?.product?._id}
                >
                  <div className="comman-card">
                    <div
                      className="heart-icon"
                      onClick={() =>
                        handleAddWishlist({
                          productId: item?.product?._id,
                          variantId: item?.product?.variantId,
                        })
                      }
                    >
                      <img src="../../../assets/img/svg/close-icon.svg" alt />
                    </div>
                    <div className="comman-card-header">
                      <div className="img-wrapper" style={{cursor:"default"}}>
                        <img src={item?.product?.imagesWeb?.[0]} alt />
                      </div>
                    </div>
                    <div className="comman-card-body">
                      <div
                        className="d-flex justify-content-between"
                        onClick={() =>
                          navigate(`/product-details/${item?.product?._id}`)
                        }
                      >
                        <h3 className="title text-start">
                          {item?.product?.name_en?.slice(0, 10) + "..."}
                        </h3>
                        <h3 className="price">
                          {item?.product?.currency} {item?.product?.price}
                        </h3>
                      </div>
                      <p className="paragraph text-start">
                        {item?.product?.description_en?.slice(0, 20) + "..."}
                      </p>
                      <div className="mt-4">
                        <div className="review-wrapper">
                          <i className="fa fa-star text-warning" />
                          <span className="review-points">4.9</span>
                          <span className="review-text">250+ Review</span>
                        </div>
                      </div>
                      {/* <div className="mt-3">
                        <select className="form-select bg-transparent">
                          <option value>Size: One Size</option>
                        </select>
                      </div> */}
                      <div className="mt-3">
                        <button
                          className="comman-btn"
                          onClick={() =>
                            handleAddToCart({
                              product: item?.product?._id,
                              varient:
                                item?.product?.varients?.[0]?.values?.[0]
                                  ?.varient_id,
                            })
                          }
                        >
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <EmptyWisList />
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MyWishlist;
