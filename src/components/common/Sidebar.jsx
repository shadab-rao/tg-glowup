import React, { useEffect, useState } from "react";
import { capitalize } from "../utils/CapitalLetter";
import { Link } from "react-router-dom";
import { getUser } from "../../Api Services/glowHttpServices/glowLoginHttpServices";

const Sidebar = () => {
  const userData = JSON.parse(localStorage.getItem("glow-user"));
  const userToken = localStorage.getItem("token-user");

  const [profileData, setProfileData] = useState("");

  const response = async () => {
    if (userToken) {
      const getData = await getUser(userToken);
      if (getData?.data) {
        const userData = getData?.data?.results?.user;
        setProfileData(userData);
      }
    }
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <>
      <div className="col-lg-3 col-md-4 col-12">
        <div className="my-account">
          {!userToken ? (
            // If no token, show login button
            <div className="text-center">
              <Link to="/login" className="btn btn-dark">
                Login
              </Link>
            </div>
          ) : profileData?.fullName ? (
            // If user token exists and completeProfile is true, show Complete Your Profile button
            <div className="user-box">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="text text-white">
                    {capitalize(profileData?.fullName)}
                  </h5>
                  <p className="comman-small-text">
                    {capitalize(profileData?.email)}
                  </p>
                </div>
                <div className="mt-2">
                  <Link to={"/my-profile"} className="edit-btn">
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            // If user token exists and completeProfile is false, show profile data
            <div className="text-center">
              <Link to="/my-profile" className="btn btn-dark">
                Complete Profile
              </Link>
            </div>
          )}

          <div className>
            <h5 className="text fw-semibold mb-1 mt-3 text-start">My Account</h5>
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
              <Link to={"/my-wishlist"} className="list-box mb-2">
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
          <div className>
            <h5 className="text fw-semibold mb-1 mt-3 text-start">Others</h5>
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
