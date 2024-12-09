import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import Header from "../../components/common/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { glowLogin } from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("966");
  const [phoneNumber, setPhoneNumber] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handlePhoneChange = (value, data) => {
    setPhoneNumber(value); 
    setCountryCode(data?.dialCode); 
  };

  useEffect(() => {
    if (!localStorage.getItem("token-user")) {
      navigate("/login");
    }
  }, [navigate]);
  const onSubmit = async (data, event) => {
    setLoading(true);
    event.preventDefault();

    const rawPhoneNumber = phoneNumber.replace(countryCode, "").trim();

    const requestData = {
      ...data,
      countryCode,
      phoneNumber: rawPhoneNumber,
    };

    const response = await glowLogin(requestData);
    if (response?.data) {
      localStorage.setItem("user-otp", response?.data?.results?.otp);
      localStorage.setItem("user-phone", response?.data?.results?.phoneNumber);
      localStorage.setItem(
        "user-countryCode",
        response?.data?.results?.countryCode
      );
      navigate("/login/otp", { state: requestData });
    }
    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="login-box-wrapper">
        <div className="header-img-wrapper">
          <img src="assets/img/login_img.png" alt />
        </div>
        <div className="login-box-body">
          <h5 className="heading">Login</h5>
          <div className="form-design">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <div className="form-group">
                  <label className="form-label">Phone Number (Optional)</label>
                  <PhoneInput
                    containerClass="react-tel-input text-start"
                    inputClass="form-control"
                    country="sa"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    enableSearch={true}
                    disableSearchIcon={false}
                    buttonClass="phone-input-button"
                    inputProps={{
                      name: "phoneNumber",
                      required: true,
                      autoFocus: true,
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <p className="text d-flex gap-1">
                  By continuing, i agree to the{" "}
                  <a href className="text-primary">
                    Term of Use
                  </a>{" "}
                  &amp;{" "}
                  <a href className="text-primary">
                    Privacy Policy
                  </a>
                </p>
              </div>
              <div className="form-group">
                <div className="mt-4">
                  <button className="comman-btn" type="submit">
                    Send OTP
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
