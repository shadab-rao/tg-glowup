import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Profile = () => {
  return (
    <>
      <Header />
      <section className="my_profile">
        <div className="container mt-4 mb-4">
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
                    <a href="my_order.html" className="list-box">
                      <div className="icon active">
                        <img src="assets/img/svg/box.svg" alt />
                      </div>
                      <div className="text-wrapper active border-bottom border-2">
                        <p className>My Order</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                    <a href="my_address.html" className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/location.svg" alt />
                      </div>
                      <div className="text-wrapper border-bottom border-2">
                        <p className>My address</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                    <a href className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/heart-light.svg" alt />
                      </div>
                      <div className="text-wrapper">
                        <p className>My Wishlist</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
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
            <div className="col-lg-9 col-md-8 col-12 mt-md-0 mt-4">
              <h5 className="Checkout-main-heading">Your Profile Photo</h5>
              <div className="position-relative w-fit h-fit">
                <div className="profile-img-wrapper">
                  <img src="assets/img/user.jpg" alt />
                </div>
                <div className="upload-img">
                  <input type="file" />
                  <img src="assets/img/icon/cam.png" alt />
                </div>
              </div>
              <div className="mt-4">
                <h5 className="Checkout-main-heading">My Information's</h5>
                <div className="mt-2">
                  <div className="card-box">
                    <div className="form-design px-lg-3 px-md-4">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                          <div className="form-group">
                            <label htmlFor className="form-label">
                              First Name*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name*"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                          <div className="form-group">
                            <label htmlFor className="form-label">
                              Last name*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last name*"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                          <div className="form-group">
                            <label htmlFor className="form-label">
                              Mail Address*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Amansingh34@gmail.com"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                          <div className="form-group">
                            <label htmlFor className="form-label">
                              Date of Birth*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your date of birth"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-12 mt-md-0 mt-4">
                          <div className="form-group">
                            <label htmlFor className="form-label">
                              Gender*
                            </label>
                            <div className="d-flex gap-3">
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
                                  Male
                                </label>
                              </div>
                              <div className="form-design">
                                <input
                                  type="radio"
                                  id="test1"
                                  name="radio-group"
                                />
                                <label
                                  htmlFor="test1"
                                  className="form-label fs-6 fw-semibold text-light"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-box rounded-3 mt-4">
                  <p className="text text-dark m-0 fw-semibold">
                    Delete Account{" "}
                  </p>
                  <p className="comman-small-text text-light m-0">
                    Delete your account and data permanently
                  </p>
                </div>
                <div className="mt-4 col-lg-6 col-md-8 col-12">
                  <button className="comman-btn">Update</button>
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

export default Profile;
