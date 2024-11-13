import React from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";

const Otp = () => {
  return (
    <>
      <Header />
      <div className="login-box-wrapper">
        <div className="header-img-wrapper2 bg-gradient-pink">
          <img src="../../../assets/img/approved_1.png" className alt />
        </div>
        <div className="login-box-body">
          <h5 className="heading">OTP Verification</h5>
          <p className="text-light mb-0 comman-small-text">
            Your One Time Password (OTP) has been sent via SMS to your
            registered <br /> mobile number.
          </p>
          <div className="form-design">
            <div className="form-group">
              <div className="row">
                <div className="col-2">
                  <input type="text" cols={4} className="form-control" />
                </div>
                <div className="col-2">
                  <input type="text" cols={4} className="form-control" />
                </div>
                <div className="col-2">
                  <input type="text" cols={4} className="form-control" />
                </div>
                <div className="col-2">
                  <input type="text" cols={4} className="form-control" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <p className="comman-small-text text-light">
                Resend OTP in:{" "}
                <span href className="text-primary">
                  00
                </span>{" "}
                :{" "}
                <span href className="text-primary">
                  00
                </span>
              </p>
            </div>
            <div className="form-group">
              <div className="mt-4">
                <Link to={"/login/otp/success"} className="comman-btn">
                  Verify
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
