import React from "react";
import { Link } from "react-router-dom";

const MyOrders = () => {
  return (
    <>
      <section className="my-order">
        <div className="container mt-4 mb-5">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="my-account">
                <div className="user-box">
                  <div className="d-flex gap-3">
                    <div className="user-img">
                      <img src="assets/img/user.jpg" alt />
                    </div>
                    <div>
                      <h5 className="text text-white">Aman Singh</h5>
                      <p className="comman-small-text">
                        amansingh.miller@email.com
                      </p>
                      <div className="mt-2">
                        <a href="my_profile.html" className="edit-btn">
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="text fw-semibold mb-4">My Account</h5>
                  <div className="list-box-wrapper">
                    <Link to={"/my-order"} className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/box.svg" alt />
                      </div>
                      <div className="text-wrapper border-bottom border-2">
                        <p className>My Order</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </Link>
                    <Link to={"/my-address"} className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/location.svg" alt />
                      </div>
                      <div className="text-wrapper border-bottom border-2">
                        <p className>My address</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </Link>
                    <Link to={"/my-wishlist"} className="list-box">
                      <div className="icon active">
                        <img src="assets/img/svg/heart-light.svg" alt />
                      </div>
                      <div className="text-wrapper active">
                        <p className>My Wishlist</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <h5 className="text fw-semibold mb-4">Others</h5>
                  <div className="list-box-wrapper">
                    <a href="refrral_program.html" className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/link-circle.svg" alt />
                      </div>
                      <div className="text-wrapper border-bottom border-2">
                        <p className>Referral Program</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                    <a href="setting.html" className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/setting-2.svg" alt />
                      </div>
                      <div className="text-wrapper border-bottom border-2">
                        <p className>Settings</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                    <a href="about_us.html" className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/file-lines.svg" alt />
                      </div>
                      <div className="text-wrapper border-bottom border-2">
                        <p className>About us</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                    <a href="terms_and_condition.html" className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/file-minus.svg" alt />
                      </div>
                      <div className="text-wrapper border-bottom border-2">
                        <p className>Terms &amp; Conditions</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                    <a href="need_help.html" className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/call.svg" alt />
                      </div>
                      <div className="text-wrapper border-bottom border-2">
                        <p className>Help &amp; Support</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                    <a href="privacy_policy.html" className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/file-sheild.svg" alt />
                      </div>
                      <div className="text-wrapper">
                        <p className>Privacy Policy</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
