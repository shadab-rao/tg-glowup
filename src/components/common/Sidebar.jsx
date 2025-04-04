import React, { useEffect, useState } from "react";
import { capitalize } from "../utils/CapitalLetter";
import { Link, useLocation } from "react-router-dom";
import { getUser } from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const userData = JSON.parse(localStorage.getItem("glow-user"));
  const userToken = localStorage.getItem("token-user");
  const location = useLocation();

     const { i18n } = useTranslation();
      const currentLang = i18n.language;

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
            <div className="text-center">
              <Link to="/login" className="btn btn-dark">
                {t("Login")}
              </Link>
            </div>
          ) : profileData?.fullName ? (
            <div className="user-box">
              <div className="d-flex gap-3">
                <div className="user-img">
                  <img
                    src={
                      profileData?.profileImage ||
                      "../../assets/img/user.jpg"
                    }
                    alt="image"
                  />
                </div>
                <div>
                  <h5 className="text text-white text-start">
                    {capitalize(profileData?.fullName)}
                  </h5>
                  <p className="comman-small-text">
                    {capitalize(profileData?.email)}
                  </p>
                  <div className="mt-2 text-start">
                    <div className="mt-2">
                      <Link to={"/my-profile"} className="edit-btn">
                        {t("Edit")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <Link to="/my-profile" className="btn btn-dark">
                {t("Complete Profile")}
              </Link>
            </div>
          )}

          <div className>
            <h5 className="text fw-semibold mb-1 mt-3 text-start">
              {t("My Account")}
            </h5>
            <div className="list-box-wrapper">
              <Link to={userToken ? "/my-order" : "/login"} className="list-box">
                <div className="icon">
                  <img src="../../../assets/img/svg/box.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>{t("My Order")}</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={userToken ? "/my-address" : "/login"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/location.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>{t("My Address")}</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={userToken ? "/my-wishlist" : "/login"} className="list-box mb-2">
                <div className="icon active">
                  <img src="../../../assets/img/svg/heart-light.svg" alt />
                </div>
                <div className="text-wrapper active">
                  <p className>{t("My Wishlist")}</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
            </div>
          </div>
          <div className>
            <h5 className="text fw-semibold mb-1 mt-3 text-start">{t("Others")}</h5>
            <div className="list-box-wrapper">
              <Link to= {userToken ? "/referral-program" : "/login"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/link-circle.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>{t("Referral Program")}</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to= {userToken ? "/settings" : "/login"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/setting-2.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>{t("Setting")}</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/about-us"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/file-lines.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>{t("About Us")}</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/terms-conditions"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/file-minus.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>{t("Terms & Conditions")}</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/help-support"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/call.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>{t("Help & Support")}</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/privacy-policy"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/file-sheild.svg" alt />
                </div>
                <div className="text-wrapper active">
                  <p className>{t("Privacy Policy")}</p>
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
