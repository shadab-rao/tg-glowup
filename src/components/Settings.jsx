import React, { useEffect, useState } from "react";
import Sidebar from "./common/Sidebar";
import Header from "./common/Header";
import { useTranslation } from "react-i18next";
import Footer from "./common/Footer";
import {
  allNotification,
  getUser,
  orderNotifi,
} from "../Api Services/glowHttpServices/glowLoginHttpServices";

const Settings = () => {
  const { t, i18n } = useTranslation();
  const [profileData, setProfileData] = useState("");
  const [allNoti, setAllNotifi] = useState();
  const [orderNotification, setOrderNotifiaction] = useState();
  const userToken = localStorage.getItem("token-user");

  useEffect(() => {
    response();
  }, []);

  const response = async () => {
    if (userToken) {
      const getData = await getUser(userToken);
      if (getData?.data) {
        const userData = getData?.data?.results?.user;
        setProfileData(userData);
        setAllNotifi(userData?.allNotification);
        setOrderNotifiaction(userData?.orderNotification);
      }
    }
  };

  console.log(allNoti);
  

  const handleAllNotification = async () => {
    const { data } = await allNotification(profileData?._id);
  };
  const handleOrderNotifi = async () => {
    const response = await orderNotifi(profileData?._id);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <section className="setting">
        <Header />
        <div className="container mt-4 mb-5">
          <div className="row">
            <Sidebar />
            <div className="col-lg-9 col-md-8 col-12">
              <div className>
                <div className>
                  <h5 className="text fw-bold mb-4">{t("Setting")}</h5>
                </div>
              </div>
              <div className="products-tabs">
                <div className="my-5 ">
                  <div className>
                    <ul
                      className="nav nav-tabs custom-tabs w-100"
                      id="myTab"
                      role="tablist"
                    >
                      {/* <li className="nav-item w-33" role="presentation">
                        <a
                          className="nav-link active"
                          id="makeup-tab"
                          data-toggle="tab"
                          href="#makeup"
                          role="tab"
                          aria-controls="makeup"
                          aria-selected="true"
                        >
                          {t("Password Change")}
                        </a>
                      </li> */}
                      <li className="nav-item w-33" role="presentation">
                        <a
                          className="nav-link active"
                          id="skin-tab"
                          data-toggle="tab"
                          href="#skin"
                          role="tab"
                          aria-controls="skin"
                          aria-selected="true"
                        >
                          {t("Language")}
                        </a>
                      </li>
                      <li className="nav-item w-33" role="presentation">
                        <a
                          className="nav-link"
                          id="hair-tab"
                          data-toggle="tab"
                          href="#hair"
                          role="tab"
                          aria-controls="hair"
                          aria-selected="false"
                        >
                          {t("Notification")}
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content mt-3" id="myTabContent">
                      {/* <div
                        className="tab-pane fade show active"
                        id="makeup"
                        role="tabpanel"
                        aria-labelledby="makeup-tab"
                      >
                        <div className="form-design  card-box">
                          <div className="form">
                            <div className="row">
                              <div className="col-lg-6 col-md-12 col-12">
                                <div className="form-group">
                                  <label htmlFor className="form-label">
                                    {t("Current Password")}*
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder={t("Current Password")}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6" />
                              <div className="col-lg-6 col-md-12 col-12">
                                <div className="form-group">
                                  <label htmlFor className="form-label">
                                    {t("New Password")}**
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder={t("New Password")}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12 col-12">
                                <div className="form-group">
                                  <label htmlFor className="form-label">
                                    {t("Confirm New Password")}**
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder={t("Confirm New Password")}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="col-lg-6 col-md-8 col-12">
                            <button className="comman-btn">
                              {t("Save Password")}
                            </button>
                          </div>
                        </div>
                      </div> */}
                      <div
                        className="tab-pane fade show active"
                        id="skin"
                        role="tabpanel"
                        aria-labelledby="skin-tab"
                      >
                        <div className="form-design card-box">
                          <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                              <div className="form-group">
                                <div
                                  className={`card-box bg-white border rounded-3 p-2 ${
                                    i18n.language === "en" ? "border-dark" : ""
                                  }`}
                                  onClick={() => i18n.changeLanguage("en")}
                                  style={{ cursor: "pointer" }}
                                >
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex gap-2 align-items-center">
                                      <img
                                        src="assets/img/eng-flag.png"
                                        alt="English"
                                        width="30"
                                      />
                                      <p className="comman-small-text m-0">
                                        English
                                      </p>
                                    </div>
                                    {i18n.language === "en" && (
                                      <i className="fa fa-check" />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6" />
                            <div className="col-lg-6 col-md-12 col-12">
                              <div
                                className={`card-box bg-white border rounded-3 p-2 ${
                                  i18n.language === "ar" ? "border-dark" : ""
                                }`}
                                onClick={() => i18n.changeLanguage("ar")}
                                style={{ cursor: "pointer" }}
                              >
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex gap-2 align-items-center">
                                    <img src="assets/img/saudi_enaya.png" alt />
                                    <p className="comman-small-text m-0 text-dark">
                                      Arabic
                                    </p>
                                  </div>
                                  {i18n.language === "ar" && (
                                    <i className="fa fa-check" />
                                  )}
                                  {/* <i class="fa fa-check"></i> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="hair"
                        role="tabpanel"
                        aria-labelledby="hair-tab"
                      >
                        <div className="form-design card-box">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                              <div className>
                                <div className="card-box bg-white border-bottom rounded-0">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className>
                                      <h5 className="text m-0">
                                        {t("Turn All Notifications")}
                                      </h5>
                                      <p className="comman-small-text m-0 text-light">
                                        {t("For daily update you will get it")}
                                      </p>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                        defaultChecked={allNoti == true}
                                        onClick={() => handleAllNotification()}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexSwitchCheckDefault"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div className="col-lg-12 col-md-12 col-12">
                              <div className>
                                <div className="card-box bg-white border-bottom rounded-0">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className>
                                      <h5 className="text m-0">Offers News</h5>
                                      <p className="comman-small-text m-0 text-light">
                                        For daily update you will get it
                                      </p>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                        defaultChecked
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexSwitchCheckDefault"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                            <div className="col-lg-12 col-md-12 col-12">
                              <div className>
                                <div className="card-box bg-white border-bottom rounded-0">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className>
                                      <h5 className="text m-0">{t("Order")}</h5>
                                      <p className="comman-small-text m-0 text-light">
                                        {t("Not affect any order updates")}
                                      </p>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                        defaultChecked={orderNotification}
                                        onClick={() => handleOrderNotifi()}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexSwitchCheckDefault"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div className="col-lg-12 col-md-12 col-12">
                              <div className>
                                <div className="card-box bg-white border-bottom rounded-0">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className>
                                      <h5 className="text m-0">Offers News</h5>
                                      <p className="comman-small-text m-0 text-light">
                                        For daily update you will get it
                                      </p>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                        defaultChecked
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexSwitchCheckDefault"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                            {/* <div className="col-lg-12 col-md-12 col-12">
                              <div className>
                                <div className="card-box bg-white ">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className>
                                      <h5 className="text m-0">Offers News</h5>
                                      <p className="comman-small-text m-0 text-light">
                                        For daily update you will get it
                                      </p>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                        defaultChecked
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexSwitchCheckDefault"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Settings;
