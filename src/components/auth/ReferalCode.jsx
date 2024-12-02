import React from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";

const ReferalCode = () => {
  return (
    <>
      <Header />
      <div className="login-box-wrapper">
        <div className="header-img-wrapper3 bg-gradient-pink">
          <img src="assets/img/refral-img.png" className alt />
        </div>
        <div className="login-box-body ">
          <h5 className="heading">referral code</h5>
          <p className="text-light mb-0 comman-small-text">
            Please enter your referral code below
          </p>
          <div className="form-design">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Referral Code"
              />
            </div>
            <div className="form-group">
              <p className="comman-small-text text-light">
                Don’t have a referral code?{" "}
                <Link
                  to={"/"}
                  className="text-primary"
                  style={{}}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  Skip this step
                </Link>
              </p>
            </div>
            <div className="form-group">
              <div className="mt-4">
                <Link to={"#"} className="comman-btn">
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferalCode;
