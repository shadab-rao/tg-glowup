import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import {
  getSubject,
  getType,
  helpSupport,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { useForm, useWatch } from "react-hook-form";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RaiseQuery = () => {
  const userToken = localStorage.getItem("token-user");
  const userData = JSON.parse(localStorage.getItem("glow-user"));
  const userId = userData?._id;
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState([]);
  const [subject, setSubject] = useState([]);
  const { i18n,t } = useTranslation();
  const currentLang = i18n.language;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const selectedType = watch("type");

  useEffect(() => {
    console.log(currentLang);
    
    handleType();
  }, [currentLang]);

  
useEffect(() => {
  if (selectedType) {
    handleSubject(selectedType);
  }
}, [selectedType]);

  const handleSubject = async (typeId) => {
    const response = await getSubject({ typeId: typeId });
    setSubject(response?.data?.results?.subject);
  };
  
  const handleType = async () => {
    const response = await getType();
    setType(response?.data?.results?.type);
  };

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      user: userId,
      type: selectedType,
      // typeId: selectedType,
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
              <h5 className="Checkout-main-heading">{t("Help & Support")}</h5>
              {userToken ? (
                <p className="text text-light col-lg-10 col-md-11">
                  {t("We would love to hear from you and answer any questions you may have. You can contact us by filling out the form below...")}
                </p>
              ) : (
                <p className="text text-light col-lg-10 col-md-11">
                  {t("For adding query please login first...")}
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
                                <label className="form-label">{t("Name")}*</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={t("Name")}
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
                                <label className="form-label">{t("Email ID")}*</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder={t("Email ID")}
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
                                <label className="form-label">{t("Type")}*</label>
                                <select
                                  className="form-select"
                                  {...register("type", {
                                    required: "Type is required",
                                  })}
                                  defaultValue=""
                                >
                                  <option value="" disabled>
                                    {t("Select Type")}
                                  </option>
                                  {type?.map((item, index) => (
                                    <option key={index} value={item._id}>
                                      {currentLang == "en" ? item?.type_en : item?.type_ar}
                                    </option>
                                  ))}
                                </select>
                                {errors.type && (
                                  <span
                                    className="text-danger ms-1"
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    {errors.type.message}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-12 col-12">
                              <div className="form-group">
                                <label className="form-label">{t("Subject")}*</label>
                                <select
                                  className="form-select"
                                  {...register("subject", {
                                    required: "Subject is required",
                                  })}
                                  defaultValue=""
                                >
                                  <option value="" disabled>
                                    {t("Select Subject")}
                                  </option>
                                  {subject?.map((item, index) => (
                                    <option key={index} value={item._id}>
                                      {item.subject_en}
                                    </option>
                                  ))}
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
                                <label className="form-label">{t("Message")}*</label>
                                <textarea
                                  className="form-control h-100"
                                  rows={2}
                                  placeholder={t("Please enter a brief description")}
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
                        {loading ? t("Sending...") : t("Send")}
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
