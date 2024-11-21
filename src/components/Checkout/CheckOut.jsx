import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const CheckOut = () => {
  return (
    <>
    <Header/>
      <section className="Checkout">
        <div className="bg-white">
          <div className="container pt-4">
            <div className="d-flex justify-content-center">
              <div className="mt-4">
                <h3 className="Checkout-heading">Checkout</h3>
                <div className="d-flex rounded-box-wrapper">
                  <div className="rounded-box">1</div>
                  <div className="rounded-box">2</div>
                  <div className="rounded-box">3</div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 col-md-4 col-12 mt-md-0 mt-4 text-start">
                <h5 className="Checkout-main-heading">
                  1. Delivery Information
                </h5>
                <p className="Checkout-paragraph">
                  Select address from your address book or enter new address.
                </p>
                <div className="form-design">
                  <div className="form-group">
                    <label htmlFor className="form-label">
                      Full name*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor className="form-label">
                      Phone Number*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <div className="d-flex gap-1 align-items-end">
                      <img
                        src="assets/img/icon/direction.png"
                        alt
                        className="direction-img"
                      />
                      <a href className="comman-link">
                        Use My Current location
                      </a>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor className="form-label">
                      Address (House number, Street name, Area)*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor className="form-label">
                      City*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor className="form-label">
                      State*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                    />
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      defaultChecked
                    />
                    <span className="form-label m-0">Save in address book</span>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      defaultChecked
                    />
                    <span className="form-label m-0">Save in my profile </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 mt-md-0 mt-4 text-start">
                <h5 className="Checkout-main-heading">
                  2. Payment Information
                </h5>
                <p className="Checkout-paragraph">Select Payment mode</p>
                <div className="form-design">
                  <input
                    type="radio"
                    id="test1"
                    name="radio-group"
                    defaultChecked
                  />
                  <label
                    htmlFor="test1"
                    className="form-label fs-6 fw-semibold text-dark"
                  >
                    Credit/Debit Card
                  </label>
                </div>
                <div className="form-design">
                  <div className="form-group">
                    <div className="d-flex gap-4">
                      <div className="cart-img-wrapper">
                        <img src="assets/img/Visa.png" alt />
                      </div>
                      <div className="cart-img-wrapper">
                        <img src="assets/img/card-img.png" alt />
                      </div>
                      <div className="cart-img-wrapper">
                        <img src="assets/img/american_express.png" alt />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Card Number"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <div className>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Valid Thru"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="d-flex gap-2 align-items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        defaultChecked
                      />
                      <span className="form-label m-0">
                        Securely save details for future purchases.{" "}
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-design">
                      <input type="radio" id="test1" name="radio-group" />
                      <label
                        htmlFor="test1"
                        className="form-label fs-6 fw-semibold text-dark"
                      >
                        Apple Pay
                      </label>
                      <img src="assets/img/a-pay.png" alt className="pay-img" />
                    </div>
                    <div className="form-design">
                      <input type="radio" id="test1" name="radio-group" />
                      <label
                        htmlFor="test1"
                        className="form-label fs-6 fw-semibold text-dark"
                      >
                        PayPal
                      </label>
                      <img
                        src="assets/img/paypal.png"
                        alt
                        className="pay-pal-img"
                      />
                    </div>
                    <div className="form-design">
                      <input type="radio" id="test1" name="radio-group" />
                      <label
                        htmlFor="test1"
                        className="form-label fs-6 fw-semibold text-dark"
                      >
                        Cash On Delivery
                      </label>
                      <p className="ps-4 light-text">
                        The additional fee fo this service is SAR 50
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 mt-md-0 mt-4 text-start">
                <h5 className="Checkout-main-heading">3. Order Review</h5>
                <p className="Checkout-paragraph">Review your order here</p>
                <div className="Checkout-box">
                  <div className="row">
                    <div className="col-md-auto col-4">
                      <div className="Checkout-box-img">
                        <img src="assets/img/products/face-powder.png" alt />
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-6 col-8 px-lg-auto px-md-0">
                      <h6 className="Checkout-box-head">Sunday Rain</h6>
                      <p className="normal-text">Rose Body Scrub 25 ML</p>
                      <h5 className="checkbox-price">SAR 130</h5>
                      <div className="checkbox-span-text">
                        <span className="normal-text border-end pe-1">
                          Size: 25 ML
                        </span>
                        <span className="normal-text ps-1">Quantity: 02</span>
                      </div>
                      <p className="normal-text">Subtotal: SAR 260</p>
                    </div>
                  </div>
                </div>
                <div className="Checkout-box mt-3">
                  <div className="row">
                    <div className="col-md-auto col-4">
                      <div className="Checkout-box-img">
                        <img src="assets/img/products/lipstick.png" alt />
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-6 col-8 px-lg-auto px-md-0">
                      <h6 className="Checkout-box-head">Sunday Rain</h6>
                      <p className="normal-text">Rose Body Scrub 25 ML</p>
                      <h5 className="checkbox-price">SAR 130</h5>
                      <div className="checkbox-span-text">
                        <span className="normal-text border-end pe-1">
                          Size: 25 ML
                        </span>
                        <span className="normal-text ps-1">Quantity: 02</span>
                      </div>
                      <p className="normal-text">Subtotal: SAR 260</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h5 className="Checkout-main-heading">Price Details</h5>
                  <div className="Checkout-box mt-3 px-3 py-3">
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
                      <button className="comman-btn">Checkout Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
