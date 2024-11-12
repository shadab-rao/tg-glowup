import React from "react";

const Settings = () => {
  return (
    <>
      <section className="setting">
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
                    <a href="my_whislist.html" className="list-box">
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
            <div className="col-lg-9 col-md-8 col-12">
              <div className>
                <div className>
                  <h5 className="text fw-bold mb-4">Settings</h5>
                </div>
              </div>
              <div className="products-tabs">
                <div className="my-5 ">
                  <div className>
                    <ul
                      className="nav nav-tabs custom-tabs w-100"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item w-33" role="presentation">
                        <a
                          className="nav-link active"
                          id="makeup-tab"
                          data-toggle="tab"
                          href="#makeup"
                          role="tab"
                          aria-controls="makeup"
                          aria-selected="true"
                        >
                          Password Change
                        </a>
                      </li>
                      <li className="nav-item w-33" role="presentation">
                        <a
                          className="nav-link"
                          id="skin-tab"
                          data-toggle="tab"
                          href="#skin"
                          role="tab"
                          aria-controls="skin"
                          aria-selected="false"
                        >
                          Language
                        </a>
                      </li>
                      <li className="nav-item w-33" role="presentation">
                        <a
                          className="nav-link"
                          id="hair-tab"
                          data-toggle="tab"
                          href="#hair"
                          role="tab"
                          aria-controls="hair"
                          aria-selected="false"
                        >
                          Notification
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content mt-3" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="makeup"
                        role="tabpanel"
                        aria-labelledby="makeup-tab"
                      >
                        <div className="form-design  card-box">
                          <div className="form">
                            <div className="row">
                              <div className="col-lg-6 col-md-12 col-12">
                                <div className="form-group">
                                  <label htmlFor className="form-label">
                                    Current Password*
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Current Password"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6" />
                              <div className="col-lg-6 col-md-12 col-12">
                                <div className="form-group">
                                  <label htmlFor className="form-label">
                                    New Password**
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="New Password*"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12 col-12">
                                <div className="form-group">
                                  <label htmlFor className="form-label">
                                    Confirm New Password**
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Confirm New Password*"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="col-lg-6 col-md-8 col-12">
                            <button className="comman-btn">
                              Save Password
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="skin"
                        role="tabpanel"
                        aria-labelledby="skin-tab"
                      >
                        <div className="form-design card-box">
                          <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                              <div className="form-group">
                                <div className="card-box bg-white border border-dark rounded-3">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex gap-2 align-items-center">
                                      <img
                                        src="assets/img/saudi_enaya.png"
                                        alt
                                      />
                                      <p className="comman-small-text m-0">
                                        English
                                      </p>
                                    </div>
                                    <i className="fa fa-check" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6" />
                            <div className="col-lg-6 col-md-12 col-12">
                              <div className="card-box bg-white border rounded-3 mt-2">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex gap-2 align-items-center">
                                    <img src="assets/img/saudi_enaya.png" alt />
                                    <p className="comman-small-text m-0 text-light">
                                      Arabic
                                    </p>
                                  </div>
                                  {/* <i class="fa fa-check"></i> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="hair"
                        role="tabpanel"
                        aria-labelledby="hair-tab"
                      >
                        <div className="form-design card-box">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                              <div className>
                                <div className="card-box bg-white border-bottom rounded-0">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className>
                                      <h5 className="text m-0">
                                        Turn All Notifications
                                      </h5>
                                      <p className="comman-small-text m-0 text-light">
                                        For daily update you will get it
                                      </p>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                        defaultChecked
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexSwitchCheckDefault"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-12">
                              <div className>
                                <div className="card-box bg-white border-bottom rounded-0">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className>
                                      <h5 className="text m-0">Offers News</h5>
                                      <p className="comman-small-text m-0 text-light">
                                        For daily update you will get it
                                      </p>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                        defaultChecked
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexSwitchCheckDefault"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-12">
                              <div className>
                                <div className="card-box bg-white border-bottom rounded-0">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className>
                                      <h5 className="text m-0">Order</h5>
                                      <p className="comman-small-text m-0 text-light">
                                        Not affect any order updates
                                      </p>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                        defaultChecked
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexSwitchCheckDefault"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-12">
                              <div className>
                                <div className="card-box bg-white border-bottom rounded-0">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className>
                                      <h5 className="text m-0">Offers News</h5>
                                      <p className="comman-small-text m-0 text-light">
                                        For daily update you will get it
                                      </p>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                        defaultChecked
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexSwitchCheckDefault"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-12">
                              <div className>
                                <div className="card-box bg-white ">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className>
                                      <h5 className="text m-0">Offers News</h5>
                                      <p className="comman-small-text m-0 text-light">
                                        For daily update you will get it
                                      </p>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                        defaultChecked
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexSwitchCheckDefault"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Settings;
