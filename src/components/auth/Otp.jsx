import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import { glowLogin, verifyOTP } from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import Swal from "sweetalert2";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  const [timer, setTimer] = useState(120);

  const localOtp = localStorage.getItem("user-otp")

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);


    return () => clearInterval(countdown);
  }, []);


  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = { ...state, otp };
    try {
      const response = await verifyOTP(formData);
      if (response?.data?.error) {
        console.log("error");
      } else if (response?.data) {
        navigate("/login/otp/success")
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await glowLogin(state);
      setTimer(120);
      if (response?.data) {
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
    }
  };

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
            Your One Time Password (OTP) is <span className="text-primary">{localOtp}</span>
             {/* been sent via SMS to your
            registered <br /> mobile number. */}
          </p>
          <form
            className="theme-form theme-form-2 mega-form"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="form-design">
              <div className="form-group">
                <div className="otp-input-box">
                  <OTPInput
                    inputType="tel"
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    onChangeRegex={/^([0-9]{0,})$/}
                    renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                    isInputNum
                    inputStyle="otp-field__input"
                    containerStyle="form-group"
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
              </div>
              <div className="mb-2 mt-2 col-12 text-center">
                  <p>Resend OTP in {formatTime()} minutes</p>
                </div>
                <div className="mb-1 col-12">
                  {timer === 0 && (
                    <button
                      type="button"
                      className="text-primary"
                      onClick={handleResendOTP}
                      style={{ border: "none", background: "none" }}
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
              <div className="form-group">
                <div className="mt-4">
                  <button type="submit" className="comman-btn">
                    Verify
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Otp;
