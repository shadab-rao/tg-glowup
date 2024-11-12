import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { useNavigate } from "react-router-dom";

const Bag = () => {
  const navigate = useNavigate()
  return (
    <>
    <Header/>
      <section className>
        <div className="container">
          <div className="d-flex gap-4 mt-4">
            <div className="fs-6 fw-semibold text-capitalize">your Bag</div>
            <div className="fs-6 fw-light">2 Items</div>
          </div>
          <div className="row mt-md-0 mt-0 mb-4">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="bg-white">
                <div className="Checkout-box border-0 mt-3">
                  <div className="row">
                    <div className="col-md-auto col-4">
                      <div className="Checkout-box-img">
                        <img src="assets/img/products/face-powder.png" alt />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-7 col-8 px-lg-auto px-md-0">
                      <h6 className="Checkout-box-head">Sunday Rain</h6>
                      <p className="normal-text">Rose Body Scrub 25 ML</p>
                      <h5 className="checkbox-price">SAR 130</h5>
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
                      <p className="text">Remove</p>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <i className="fa fa-heart-o trash-icon" />
                      <p className="text">Add To Wishlist</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white mt-3">
                <div className="Checkout-box border-0 mt-3">
                  <div className="row">
                    <div className="col-md-auto col-4">
                      <div className="Checkout-box-img">
                        <img src="assets/img/products/face-powder.png" alt />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-7 col-8 px-lg-auto px-md-0">
                      <h6 className="Checkout-box-head">Sunday Rain</h6>
                      <p className="normal-text">Rose Body Scrub 25 ML</p>
                      <h5 className="checkbox-price">SAR 130</h5>
                      <div className="checkbox-span-text">
                        <div className="row mt-3">
                          <div className="col-md-8 col-12 ">
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
                      <p className="text">Remove</p>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <i className="fa fa-heart-o trash-icon" />
                      <p className="text">Add To Wishlist</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-8 col-12 mx-auto mt-md-5 mt-3">
                <button className="comman-btn">Continue Shopping</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-md-0 mt-4">
              <h5 className="text fw-bold">Payment Methods</h5>
              <div className="d-flex justify-content-around">
                <div className="payment-img-wrapper">
                  <img src="assets/img/Visa2.png" alt />
                </div>
                <div className="payment-img-wrapper">
                  <img src="assets/img/cart2.png" alt />
                </div>
                <div className="payment-img-wrapper">
                  <img src="assets/img/applePay2.png" alt />
                </div>
                <div className="payment-img-wrapper">
                  <img src="assets/img/paypal2.png" alt />
                </div>
              </div>
              <div className="mt-3">
                <h5 className="text fw-bold">Price Details</h5>
                <div className="Checkout-box mt-3 px-3 py-3 bg-white">
                  <div className="row">
                    <div className="col-6">
                      <p className="light-text">Subtotal</p>
                    </div>
                    <div className="col-6">
                      <p className="bold-text">SAR 260</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="light-text">Tax</p>
                    </div>
                    <div className="col-6">
                      <p className="bold-text">SAR 60</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="light-text">Grand Total</p>
                    </div>
                    <div className="col-6">
                      <p className="bold-text">SAR 250</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="mb-4">
                    <button className="comman-btn" onClick={()=>navigate("/checkout")}>Checkout Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="heading-wrapper">
              <h5 className="bold-heading mb-4">Suggested items for you</h5>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
              <div className="comman-card">
                <div className="heart-icon">
                  <i className="fa fa-heart-o" />
                </div>
                <div className="comman-card-header">
                  <div className="img-wrapper">
                    <img src="assets/img/products/mac_stuio_fix.png" alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div className="d-flex justify-content-between">
                    <h3 className="title">Plum Green </h3>
                    <h3 className="price">SAR 162</h3>
                  </div>
                  <p className="paragraph">
                    Plum green Tea Pore Cleansing Gel Face Wash...
                  </p>
                  <div className="mt-4">
                    <div className="review-wrapper">
                      <i className="fa fa-star text-warning" />
                      <span className="review-points">4.9</span>
                      <span className="review-text">250+ Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
              <div className="comman-card">
                <div className="new-label">
                  <p className>New</p>
                </div>
                <div className="heart-icon">
                  <i className="fa fa-heart" />
                </div>
                <div className="comman-card-header">
                  <div className="img-wrapper">
                    <img src="assets/img/products/concealer.png" alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div className="d-flex justify-content-between">
                    <h3 className="title">Plum Green </h3>
                    <h3 className="price">SAR 162</h3>
                  </div>
                  <p className="paragraph">
                    Plum green Tea Pore Cleansing Gel Face Wash...
                  </p>
                  <div className="mt-4">
                    <div className="review-wrapper">
                      <i className="fa fa-star text-warning" />
                      <span className="review-points">4.9</span>
                      <span className="review-text">250+ Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
              <div className="comman-card">
                <div className="heart-icon">
                  <i className="fa fa-heart-o" />
                </div>
                <div className="comman-card-header">
                  <div className="img-wrapper">
                    <img src="assets/img/products/glow_screen.png" alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div className="d-flex justify-content-between">
                    <h3 className="title">Plum Green </h3>
                    <h3 className="price">SAR 162</h3>
                  </div>
                  <p className="paragraph">
                    Plum green Tea Pore Cleansing Gel Face Wash...
                  </p>
                  <div className="mt-4">
                    <div className="review-wrapper">
                      <i className="fa fa-star text-warning" />
                      <span className="review-points">4.9</span>
                      <span className="review-text">250+ Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
              <div className="comman-card">
                <div className="heart-icon">
                  <i className="fa fa-heart-o" />
                </div>
                <div className="comman-card-header">
                  <div className="img-wrapper">
                    <img src="assets/img/products/glow_stick.jpg" alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div className="d-flex justify-content-between">
                    <h3 className="title">Plum Green </h3>
                    <h3 className="price">SAR 162</h3>
                  </div>
                  <p className="paragraph">
                    Plum green Tea Pore Cleansing Gel Face Wash...
                  </p>
                  <div className="mt-4">
                    <div className="review-wrapper">
                      <i className="fa fa-star text-warning" />
                      <span className="review-points">4.9</span>
                      <span className="review-text">250+ Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
              <div className="comman-card">
                <div className="heart-icon">
                  <i className="fa fa-heart-o" />
                </div>
                <div className="comman-card-header">
                  <div className="img-wrapper">
                    <img src="assets/img/products/frizz_oil.jpg" alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div className="d-flex justify-content-between">
                    <h3 className="title">Plum Green </h3>
                    <h3 className="price">SAR 162</h3>
                  </div>
                  <p className="paragraph">
                    Plum green Tea Pore Cleansing Gel Face Wash...
                  </p>
                  <div className="mt-4">
                    <div className="review-wrapper">
                      <i className="fa fa-star text-warning" />
                      <span className="review-points">4.9</span>
                      <span className="review-text">250+ Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
              <div className="comman-card">
                <div className="new-label">
                  <p className>New</p>
                </div>
                <div className="heart-icon">
                  <i className="fa fa-heart-o" />
                </div>
                <div className="comman-card-header">
                  <div className="img-wrapper">
                    <img src="assets/img/products/scalp_oil.jpg" alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div className="d-flex justify-content-between">
                    <h3 className="title">Plum Green </h3>
                    <h3 className="price">SAR 162</h3>
                  </div>
                  <p className="paragraph">
                    Plum green Tea Pore Cleansing Gel Face Wash...
                  </p>
                  <div className="mt-4">
                    <div className="review-wrapper">
                      <i className="fa fa-star text-warning" />
                      <span className="review-points">4.9</span>
                      <span className="review-text">250+ Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
              <div className="comman-card">
                <div className="heart-icon">
                  <i className="fa fa-heart-o" />
                </div>
                <div className="comman-card-header">
                  <div className="img-wrapper">
                    <img src="assets/img/products/glue.png" alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div className="d-flex justify-content-between">
                    <h3 className="title">Plum Green </h3>
                    <h3 className="price">SAR 162</h3>
                  </div>
                  <p className="paragraph">
                    Plum green Tea Pore Cleansing Gel Face Wash...
                  </p>
                  <div className="mt-4">
                    <div className="review-wrapper">
                      <i className="fa fa-star text-warning" />
                      <span className="review-points">4.9</span>
                      <span className="review-text">250+ Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
              <div className="comman-card">
                <div className="heart-icon">
                  <i className="fa fa-heart-o" />
                </div>
                <div className="comman-card-header">
                  <div className="img-wrapper">
                    <img src="assets/img/products/tocobo.jpg" alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div className="d-flex justify-content-between">
                    <h3 className="title">Plum Green </h3>
                    <h3 className="price">SAR 162</h3>
                  </div>
                  <p className="paragraph">
                    Plum green Tea Pore Cleansing Gel Face Wash...
                  </p>
                  <div className="mt-4">
                    <div className="review-wrapper">
                      <i className="fa fa-star text-warning" />
                      <span className="review-points">4.9</span>
                      <span className="review-text">250+ Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Bag;
