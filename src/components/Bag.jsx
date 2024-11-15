import React, { useEffect, useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Link, useNavigate } from "react-router-dom";
import { getCart, removeCartItem } from "../Api Services/glowHttpServices/glowLoginHttpServices";
import EmptyBag from "./cart/EmptyBag";

const Bag = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    handleCart();
  }, []);

  const handleCart = async () => {
    const response = await getCart();
    setData(response?.data?.results?.cart?.inventory || []);
    setCount(response?.data?.results?.cart?.totalProducts || 0);
  };

  const handleRemove = async (id) => {
    await removeCartItem(id);
    handleCart();
  };

  if (data.length === 0) {
    // Render EmptyBag if the cart is empty
    return (
      <>
        <Header />
        <div className="container">
          <div className="empty-bag-full-width">
            <EmptyBag />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="bag-section">
        <div className="container">
          <div className="d-flex gap-4 mt-4 mb-3">
            <div className="fs-6 fw-semibold text-capitalize text-start">Your Bag</div>
            <div className="fs-6 fw-light">{count || "0"} Items</div>
          </div>
          <div className="row mt-md-0 mt-0 mb-4">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="bg-white">
                {data.map((item, index) => (
                  <div className="Checkout-box border-0 mt-3" key={index}>
                    <div className="row">
                      <div className="col-md-auto col-4">
                        <div className="Checkout-box-img">
                          <img src={item?.product?.imagesWeb?.[0]} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-7 col-8 px-lg-auto px-md-0">
                        <h6 className="Checkout-box-head">{item?.product?.name_en}</h6>
                        <p className="normal-text">{item?.product?.description_en}</p>
                        <h5 className="checkbox-price">SAR {item?.product?.price}</h5>
                        <div className="checkbox-span-text">
                          <div className="row mt-3">
                            <div className="col-md-8 col-12">
                              <select className="form-select">
                                <option value>Size: One Size</option>
                              </select>
                            </div>
                            <div className="col-md-4 col-12 mt-md-0 mt-4">
                              <select className="form-select">
                                <option value>Qty: 2</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-top mt-4 pt-2 ps-2 mb-2 d-flex gap-4">
                      <div className="d-flex gap-2 align-items-center">
                        <i className="fa fa-trash trash-icon" />
                        <p
                          className="text"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleRemove(item?.product?._id)}
                        >
                          Remove
                        </p>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <i className="fa fa-heart-o trash-icon" />
                        <p className="text">Add To Wishlist</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-6 col-md-8 col-12 mx-auto mt-md-5 mt-3">
                <Link to="/" className="comman-btn">
                  Continue Shopping
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-md-0 mt-4">
              <h5 className="text fw-bold text-start">Payment Methods</h5>
              <div className="d-flex justify-content-around">
                <div className="payment-img-wrapper">
                  <img src="assets/img/Visa2.png" alt="" />
                </div>
                <div className="payment-img-wrapper">
                  <img src="assets/img/cart2.png" alt="" />
                </div>
                <div className="payment-img-wrapper">
                  <img src="assets/img/applePay2.png" alt="" />
                </div>
                <div className="payment-img-wrapper">
                  <img src="assets/img/paypal2.png" alt="" />
                </div>
              </div>
              <div className="mt-3">
                <h5 className="text fw-bold text-start">Price Details</h5>
                <div className="Checkout-box mt-3 px-3 py-3 bg-white">
                  <div className="row">
                    <div className="col-6">
                      <p className="light-text text-start">Subtotal</p>
                    </div>
                    <div className="col-6">
                      <p className="bold-text">SAR 260</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="light-text text-start">Tax</p>
                    </div>
                    <div className="col-6">
                      <p className="bold-text">SAR 60</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="light-text text-start">Grand Total</p>
                    </div>
                    <div className="col-6">
                      <p className="bold-text">SAR 250</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="mb-4">
                    <button
                      className="comman-btn"
                      onClick={() => navigate("/checkout")}
                    >
                      Checkout Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Bag;
