import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { glowLogin } from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { useForm } from "react-hook-form";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("91");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token-user")) {
      navigate("/login");
    }
  }, []);
  const onSubmit = async (data, event) => {
    setLoading(true);
    console.log(data);
    event.preventDefault();

    const requestData = {
      ...data,
      countryCode,
    };

    const response = await glowLogin(requestData);
    if (response?.data) {
      localStorage.setItem("user-otp",response?.data?.results?.otp)
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
              <div className="input-group mb-3 flex-nowrap">
                <button
                  className="btn border d-flex align-items-center gap-2 dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="dropdowm-img">
                    <img src="assets/img/saudi_enaya.png" alt />
                  </div>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item d-flex gap-3" href="#">
                      <div className="dropdowm-img">
                        <img src="assets/img/saudi_enaya.png" alt />
                      </div>
                      {countryCode}
                    </a>
                  </li>
                </ul>
                <input
                  type="text"
                  className="form-control"
                  placeholder="+971 505 789 9890"
                  {...register("phoneNumber", { required: "Phone number is required" })}
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
