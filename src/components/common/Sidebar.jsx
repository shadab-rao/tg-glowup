import React from "react";
import { capitalize } from "../utils/CapitalLetter";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const userData = JSON.parse(localStorage.getItem("glow-user"));
  console.log(userData);

  return (
    <>
      <div className="col-lg-3 col-md-4 col-12">
        <div className="my-account">
          <div className="user-box">
            <div className="d-flex gap-3">
              <div className="user-img">
                <img
                  src={userData?.profileImage || "assets/img/user.jpg"}
                  alt="image"
                />
              </div>
              <div>
                <h5 className="text text-white text-start">
                  {capitalize(userData?.fullName)}
                </h5>
                <p className="comman-small-text">
                  {capitalize(userData?.email)}
                </p>
                <div className="mt-2">
                  <Link to={"/my-profile"} className="edit-btn">
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text fw-semibold mb-4">My Account</h5>
            <div className="list-box-wrapper">
              <Link to={"/my-order"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/box.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>My Order</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/my-address"} className="list-box">
                <div className="icon">
                  <img src="../../../assets/img/svg/location.svg" alt />
                </div>
                <div className="text-wrapper border-bottom border-2">
                  <p className>My address</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/my-wishlist"} className="list-box">
                <div className="icon">
                  <img src="../../../assets/img/svg/heart-light.svg" alt />
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
              <Link to={"/referral-program"} className="list-box">
                <div className="icon">
                  <img src="../../../assets/img/svg/link-circle.svg" alt />
                </div>
                <div className="text-wrapper border-bottom border-2">
                  <p className>Referral Program</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/settings"} className="list-box">
                <div className="icon">
                  <img src="../../../assets/img/svg/setting-2.svg" alt />
                </div>
                <div className="text-wrapper border-bottom border-2">
                  <p className>Settings</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/about-us"} className="list-box">
                <div className="icon">
                  <img src="../../../assets/img/svg/file-lines.svg" alt />
                </div>
                <div className="text-wrapper border-bottom border-2">
                  <p className>About us</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/terms-conditions"} className="list-box">
                <div className="icon">
                  <img src="../../../assets/img/svg/file-minus.svg" alt />
                </div>
                <div className="text-wrapper border-bottom border-2">
                  <p className>Terms &amp; Conditions</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/help-support"} className="list-box">
                <div className="icon">
                  <img src="../../../assets/img/svg/call.svg" alt />
                </div>
                <div className="text-wrapper border-bottom border-2">
                  <p className>Help &amp; Support</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/privacy-policy"} className="list-box">
                <div className="icon">
                  <img src="../../../assets/img/svg/file-sheild.svg" alt />
                </div>
                <div className="text-wrapper">
                  <p className>Privacy Policy</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
