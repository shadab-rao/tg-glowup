import React from "react";
import { Link } from "react-router-dom";

const MyWishlist = () => {
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
                      <div className="icon active">
                        <img src="assets/img/svg/box.svg" alt />
                      </div>
                      <div className="text-wrapper active border-bottom border-2">
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
                      <div className="icon">
                        <img src="assets/img/svg/heart-light.svg" alt />
                      </div>
                      <div className="text-wrapper">
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
                  <h5 className="text fw-bold mb-4">Your latest Order</h5>
                </div>
                <div className="mt-4">
                  <div className="card-box">
                    <div className="card-box-header">
                      <div className="container">
                        <div className="row border-bottom pb-2">
                          <div className="col-lg-9 col-md-11 col-11">
                            <div className="row">
                              <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0">
                                <p className="comman-small-text m-0 text-light">
                                  Order Date
                                </p>
                                <p className="comman-small-text m-0 text-dark fw-semibold">
                                  18 Sept, 2024
                                </p>
                              </div>
                              <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0">
                                <p className="comman-small-text m-0 text-light">
                                  Price
                                </p>
                                <p className="comman-small-text m-0 text-dark fw-semibold">
                                  SAR 260
                                </p>
                              </div>
                              <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0">
                                <p className="comman-small-text m-0 text-light">
                                  Order
                                </p>
                                <p className="comman-small-text m-0 text-dark fw-semibold">
                                  #56YFJHE377549
                                </p>
                              </div>
                              <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0">
                                <p className="comman-small-text m-0 text-light">
                                  Status
                                </p>
                                <p className="comman-small-text m-0 text-success fw-semibold">
                                  Delivered
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-1 col-1 px-0 text-end">
                            <i className="fa fa-angle-right " />
                          </div>
                        </div>
                        <div className=" mt-4">
                          <div className="row">
                            <div className="col-lg-2 col-md-3 col-4">
                              <img
                                src="assets/img/products/face-powder.png"
                                alt
                                className="w-100 h-fit"
                              />
                            </div>
                            <div className="col-lg-2 col-md-3 col-4">
                              <img
                                src="assets/img/products/lipstick.png"
                                alt
                                className="w-100 h-fit"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="text fw-bold">Past Order</h5>
                  <button className="filter-btn">
                    <img src="assets/img/svg/sort.svg" alt /> From last 6 months
                  </button>
                </div>
                <div className="mt-4">
                  <div className="card-box">
                    <div className="card-box-header">
                      <div className="container">
                        <div className="row border-bottom pb-2">
                          <div className="col-lg-9 col-md-11 col-11">
                            <div className="row">
                              <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0">
                                <p className="comman-small-text m-0 text-light">
                                  Order Date
                                </p>
                                <p className="comman-small-text m-0 text-dark fw-semibold">
                                  18 Sept, 2024
                                </p>
                              </div>
                              <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0">
                                <p className="comman-small-text m-0 text-light">
                                  Price
                                </p>
                                <p className="comman-small-text m-0 text-dark fw-semibold">
                                  SAR 260
                                </p>
                              </div>
                              <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0">
                                <p className="comman-small-text m-0 text-light">
                                  Order
                                </p>
                                <p className="comman-small-text m-0 text-dark fw-semibold">
                                  #56YFJHE377549
                                </p>
                              </div>
                              <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0">
                                <p className="comman-small-text m-0 text-light">
                                  Status
                                </p>
                                <p className="comman-small-text m-0 text-danger fw-semibold">
                                  Cancel
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-1 col-1 text-end px-0">
                            <i className="fa fa-angle-right " />
                          </div>
                        </div>
                        <div className=" mt-4">
                          <div className="row">
                            <div className="col-lg-2 col-md-3 col-4">
                              <img
                                src="assets/img/products/face-powder.png"
                                alt
                                className="w-100 h-fit"
                              />
                            </div>
                            <div className="col-lg-2 col-md-3 col-4">
                              <img
                                src="assets/img/products/lipstick.png"
                                alt
                                className="w-100 h-fit"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className>
                  <div className="mt-4">
                    <div className="card-box">
                      <div className="card-box-header">
                        <div className="container">
                          <div className="row border-bottom pb-2">
                            <div className="col-lg-9 col-md-11 col-11">
                              <div className="row">
                                <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0">
                                  <p className="comman-small-text m-0 text-light">
                                    Order Date
                                  </p>
                                  <p className="comman-small-text m-0 text-dark fw-semibold">
                                    18 Sept, 2024
                                  </p>
                                </div>
                                <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0">
                                  <p className="comman-small-text m-0 text-light">
                                    Price
                                  </p>
                                  <p className="comman-small-text m-0 text-dark fw-semibold">
                                    SAR 260
                                  </p>
                                </div>
                                <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0">
                                  <p className="comman-small-text m-0 text-light">
                                    Order
                                  </p>
                                  <p className="comman-small-text m-0 text-dark fw-semibold">
                                    #56YFJHE377549
                                  </p>
                                </div>
                                <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0">
                                  <p className="comman-small-text m-0 text-light">
                                    Status
                                  </p>
                                  <p className="comman-small-text m-0 text-warning fw-semibold">
                                    Pending
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-1 col-1 text-end px-0 ">
                              <i className="fa fa-angle-right " />
                            </div>
                          </div>
                          <div className=" mt-4">
                            <div className="row">
                              <div className="col-lg-2 col-md-3 col-4">
                                <img
                                  src="assets/img/products/face-powder.png"
                                  alt
                                  className="w-100 h-fit"
                                />
                              </div>
                              <div className="col-lg-2 col-md-3 col-4">
                                <img
                                  src="assets/img/products/lipstick.png"
                                  alt
                                  className="w-100 h-fit"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
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

export default MyWishlist;
