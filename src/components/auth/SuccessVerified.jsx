import React from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";

const SuccessVerified = () => {
  return (
    <>
    <Header/>
      <div className="login-box-wrapper">
        <div className="header-img-wrapper2 bg-gradient-green">
          <img src="../../../assets/img/Checkmark.png" className alt />
        </div>
        <div className="login-box-body">
          <h5 className="heading">Successfully Verified</h5>
          <p className="text-light comman-small-text mb-5">
            Your Account has been successfully verified with Glow <br /> Up.
            Please enjoy shopping.
          </p>
          <div className="form-group mt-5">
            <div className="mt-4">
              <Link to={"/referral-code"} className="comman-btn">
                Okay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessVerified;
