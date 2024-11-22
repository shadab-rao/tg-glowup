import React, { useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import { helpSupport } from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RaiseQuery = () => {
  const userToken = localStorage.getItem("token-user");
  const userData = JSON.parse(localStorage.getItem("glow-user"));
  const userId = userData?._id;
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      user: userId,
      type: "Query",
    };
    setLoading(true);
    try {
      if (userToken) {
        const response = await helpSupport(payload);
        console.log("Response:", response);
      }
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <>
      <Header />
      <section className="my_profile">
        <div className="container mt-4 mb-4">
          <div className="row">
            <Sidebar />
            <div className="col-lg-9 col-md-8 col-12 mt-md-0 mt-4 text-start">
              <h5 className="Checkout-main-heading">Help &amp; Support</h5>
              {userToken ? (
                <p className="text text-light col-lg-10 col-md-11">
                  We would love to hear from you and answer any questions you
                  may have. You can contact us by filling out the form below...
                </p>
              ) : (
                <p className="text text-light col-lg-10 col-md-11">
                    For adding query please login first...
                </p>
              )}
              <div className="mt-4">
                {userToken ? (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-2">
                      <div className="card-box">
                        <div className="form-design px-lg-3 px-md-4">
                          <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                              <div className="form-group">
                                <label className="form-label">Name*</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Name*"
                                  {...register("name", {
                                    required: "Name is required",
                                  })}
                                />
                                {errors.name && (
                                  <span
                                    className="text-danger ms-1"
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    {errors.name.message}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                              <div className="form-group">
                                <label className="form-label">Email ID*</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email ID*"
                                  {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                      value:
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                      message: "Invalid email format",
                                    },
                                  })}
                                />
                                {errors.email && (
                                  <span
                                    className="text-danger ms-1"
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    {errors.email.message}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                              <div className="form-group">
                                <label className="form-label">Type*</label>
                                <select
                                  className="form-select"
                                  {...register("type")}
                                  defaultValue="Query"
                                >
                                  <option value="Query">Query</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                              <div className="form-group">
                                <label className="form-label">Subject*</label>
                                <select
                                  className="form-select"
                                  {...register("subject", {
                                    required: "Subject is required",
                                  })}
                                  defaultValue="Subject"
                                >
                                  <option value="Subject">Subject</option>
                                </select>
                                {errors.subject && (
                                  <span
                                    className="text-danger ms-1"
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    {errors.subject.message}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-12">
                              <div className="form-group">
                                <label className="form-label">Message*</label>
                                <textarea
                                  className="form-control h-100"
                                  rows={2}
                                  placeholder="Please enter a brief description"
                                  {...register("message", {
                                    required: "Message is required",
                                  })}
                                />
                                {errors.message && (
                                  <span
                                    className="text-danger ms-1"
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    {errors.message.message}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 col-lg-6 col-md-8 col-12 mx-auto">
                      <button
                        type="submit"
                        className="comman-btn"
                        disabled={loading}
                      >
                        {loading ? (
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        ) : null}
                        {loading ? "Sending..." : "Send"}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="mt-5 col-lg-6 col-md-8 col-12 mx-auto">
                    <Link className="comman-btn" to={"/login"}>
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RaiseQuery;
