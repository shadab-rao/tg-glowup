import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./common/Header";

const MyWishlist = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className="your-recently-viewd">
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="heading-wrapper">
              <h5 className="text mb-4 text-light text-start">
                Items are saved for 90 days
              </h5>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
              <div className="comman-card">
                <div className="heart-icon">
                  <img src="assets/img/svg/close-icon.svg" alt />
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
                  <p className="paragraph text-start">
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
                    <button className="comman-btn" onClick={()=>navigate("/login")}>Add to Bag</button>
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
                    <img src="assets/img/products/concealer.png" alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div className="d-flex justify-content-between">
                    <h3 className="title">Plum Green </h3>
                    <h3 className="price">SAR 162</h3>
                  </div>
                  <p className="paragraph text-start">
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
                  <p className="paragraph text-start">
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
                    <img src="assets/img/products/glow_stick.jpg" alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div className="d-flex justify-content-between">
                    <h3 className="title">Plum Green </h3>
                    <h3 className="price">SAR 162</h3>
                  </div>
                  <p className="paragraph text-start">
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
                    <img src="assets/img/products/frizz_oil.jpg" alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div className="d-flex justify-content-between">
                    <h3 className="title">Plum Green </h3>
                    <h3 className="price">SAR 162</h3>
                  </div>
                  <p className="paragraph text-start">
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
                    <img src="assets/img/products/scalp_oil.jpg" alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div className="d-flex justify-content-between">
                    <h3 className="title">Plum Green </h3>
                    <h3 className="price">SAR 162</h3>
                  </div>
                  <p className="paragraph text-start">
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
                    <img src="assets/img/products/glue.png" alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div className="d-flex justify-content-between">
                    <h3 className="title">Plum Green </h3>
                    <h3 className="price">SAR 162</h3>
                  </div>
                  <p className="paragraph text-start">
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
                    <img src="assets/img/products/tocobo.jpg" alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div className="d-flex justify-content-between">
                    <h3 className="title">Plum Green </h3>
                    <h3 className="price">SAR 162</h3>
                  </div>
                  <p className="paragraph text-start">
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
      </section>
    </>
  );
};

export default MyWishlist;
