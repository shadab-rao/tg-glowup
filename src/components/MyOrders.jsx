import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./common/Sidebar";

const MyOrders = () => {
  return (
    <>
      <section className="my-order">
        <div className="container mt-4 mb-5">
          <div className="row">
           <Sidebar/>
            <div className="col-lg-9 col-md-8 col-12">
              <div className>
                <div className>
                  <h5 className="text fw-bold mb-4">My Wishlist</h5>
                  <p className="text text-light m-0">
                    Items are saved for 90 days
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
                  <div className="comman-card">
                    <div className="heart-icon">
                      <img src="assets/img/svg/close-icon.svg" alt />
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
                      <div className="mt-3">
                        <select className="form-select bg-transparent">
                          <option value>Size: One Size</option>
                        </select>
                      </div>
                      <div className="mt-3">
                        <button className="comman-btn">Add to Bag</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
                  <div className="comman-card">
                    <div className="heart-icon">
                      <img src="assets/img/svg/close-icon.svg" alt />
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
                      <div className="mt-3">
                        <select className="form-select bg-transparent">
                          <option value>Size: One Size</option>
                        </select>
                      </div>
                      <div className="mt-3">
                        <button className="comman-btn">Add to Bag</button>
                      </div>
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

export default MyOrders;
