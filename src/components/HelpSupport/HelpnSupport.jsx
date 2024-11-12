import React from "react";

const HelpnSupport = () => {
  return (
    <>
      <section className="about-us">
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
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Logout
              </button>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className>
                <div className="d-flex justify-content-between">
                  <h5 className="text fw-bold mb-0">Need help with orders? </h5>
                  <button className="filter-btn w-fit px-3 fw-semibold text-dark">
                    <img src="assets/img/svg/sort.svg" alt className="as" />
                    Filter
                  </button>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-lg-5 col-md-6 col-12">
                  <div className="card-box">
                    <div className="row border-bottom pb-2">
                      <div className="col-lg-5 col-md-6">
                        <p className="comman-small-text m-0 text-light">
                          Order ID
                        </p>
                        <h5 className="text fw-semibold">GTU79477BN9J908</h5>
                      </div>
                      <div className="col-lg-5 col-md-6">
                        <p className="comman-small-text m-0 text-light">
                          Status
                        </p>
                        <h5 className="text fw-semibold text-success">
                          Delivered
                        </h5>
                      </div>
                      <div className="col-lg-2 col-md-6">
                        <div className="d-flex justify-content-end">
                          <i className="fa fa-angle-right text-light" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-6">
                          <img
                            src="assets/img/products/lipstick.png"
                            className="w-100 h-100"
                            alt
                          />
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                          <img
                            src="assets/img/products/face-powder.png"
                            className="w-100 h-100"
                            alt
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12">
                  <div className="card-box">
                    <div className="row border-bottom pb-2">
                      <div className="col-lg-5 col-md-6">
                        <p className="comman-small-text m-0 text-light">
                          Order ID
                        </p>
                        <h5 className="text fw-semibold">GTU79477BN9J908</h5>
                      </div>
                      <div className="col-lg-5 col-md-6">
                        <p className="comman-small-text m-0 text-light">
                          Status
                        </p>
                        <h5 className="text fw-semibold text-success">
                          Delivered
                        </h5>
                      </div>
                      <div className="col-lg-2 col-md-6">
                        <div className="d-flex justify-content-end">
                          <i className="fa fa-angle-right text-light" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-6">
                          <img
                            src="assets/img/products/lipstick.png"
                            className="w-100 h-100"
                            alt
                          />
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                          <img
                            src="assets/img/products/face-powder.png"
                            className="w-100 h-100"
                            alt
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
      </section>
    </>
  );
};

export default HelpnSupport;
