import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

const MyAddress = () => {
  const navigate = useNavigate()
  return (
    <>
    <Header/>
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
                  <h5 className="text fw-bold mb-4">Default Address</h5>
                </div>
                <div className="mt-4">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                      <div className="card-box">
                        <div className="border-bottom">
                          <button className="btn btn-dark">Default</button>
                          <p className="text text-dark fw-semibold">
                            Aman Singh
                          </p>
                          <p className="text-light mb-0">
                            Al-Olaya Street, Building 15, Apartment 8Riyadh,
                            12211 Kingdom of Saudi Arabia
                          </p>
                          <p className="text-light mb-2">+971 9898978909</p>
                        </div>
                        <div className="d-flex gap-4 pt-2">
                          <button
                            className="bg-transparent text-danger fw-semibold"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Delete
                          </button>
                          <button className="bg-transparent text-primary fw-semibold" onClick={()=>navigate("/edit-address")}>
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                      <div className="card-box">
                        <div className="border-bottom">
                          <button className="btn btn-dark">Default</button>
                          <p className="text text-dark fw-semibold">
                            Aman Singh
                          </p>
                          <p className="text-light mb-0">
                            Al-Olaya Street, Building 15, Apartment 8Riyadh,
                            12211 Kingdom of Saudi Arabia
                          </p>
                          <p className="text-light mb-2">+971 9898978909</p>
                        </div>
                        <div className="d-flex gap-4 pt-2">
                          <button
                            className="bg-transparent text-danger fw-semibold"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Delete
                          </button>
                          <button className="bg-transparent text-primary fw-semibold" onClick={()=>navigate("/edit-address")}>
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="col-lg-6 col-md-8 col-12">
                    <a href className="text-primary">
                      + Add New Address
                    </a>
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

export default MyAddress;
