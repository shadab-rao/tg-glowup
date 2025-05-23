import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();
  return (
    <>
      <footer>
        {/* help Start  */}
        <section className="bg-white py-5">
          <div className="container mb-5">
            <div className="row justify-content-around">
              <div className="col-md-3 col-12 mt-md-0 mt-4">
                <div className="d-flex gap-3 align-items-center">
                  <div className="img-wrapper">
                    <img src="../../../assets/img/svg/bunny.svg" alt />
                  </div>
                  <p className="text">{t("No tests on animals")}</p>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-md-0 mt-4">
                <div className="d-flex gap-3 align-items-center">
                  <div className="img-wrapper">
                    <img src="../../../assets/img/svg/leave.svg" alt />
                  </div>
                  <p className="text">{t("No animal-derived ingredients")}</p>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-md-0 mt-4">
                <div className="d-flex gap-3 align-items-center">
                  <div className="img-wrapper">
                    <img src="../../../assets/img/svg/leaves.svg" alt />
                  </div>
                  <p className="text">{t("No gluten, or gluten byproducts")}</p>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-md-0 mt-4">
                <div className="d-flex gap-3 align-items-center">
                  <div className="img-wrapper">
                    <img src="../../../assets/img/svg/bulp.svg" alt />
                  </div>
                  <p className="text">{t("Recyclable packaging")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  help Start */}
        <div className="footer position-relative">
          <div className>
            <div className="subscribe mx-auto">
              <div className="row">
                <div className="col-lg-7 col-md-6">
                  <div className="h-parent w-100 d-flex align-items-center">
                    <div className>
                      <p className="subscribe-heading text-start">
                        {t("Subscribe To latest updates")}
                      </p>
                      <p className="subscribe-text">
                        {t("Stay connected for exclusive offers & lates updates, delivered straight to your inbox")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <div className="d-flex gap-2 mt-md-4 mt-0 pt-1">
                    <input
                      type="text"
                      className="subscribe-input"
                      placeholder="Enter your email"
                    />
                    <button className="subscribe-btn">{t("Subscribe Now")}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-4 mt-4">
                <div className="logo-wrapper">
                  <img src="../../../assets/img/Glow Up.png" alt />
                </div>
                <p className="footer-paragraph mt-3 text-start">
                  Lorem ipsum dolor sit amet consectetur. Mi <br /> nibh
                  venenatis in suscipit turpis enim cursus <br />
                  vulputate amet. Lobortis mi platea aliquam <br /> senectus
                  tempus mauris neque.
                </p>
              </div>
              <div className="col-lg-2 col-md-2 col-6 mt-lg-0 mt-md-4 mt-4">
                <div className>
                  <h5 className="footer-heading text-start">Product</h5>
                  <ul className="footer-list text-start">
                    <li>
                      <a href>Makeup</a>
                    </li>
                    <li>
                      <a href>Skincare</a>
                    </li>
                    <li>
                      <a href>Haircare</a>
                    </li>
                    <li>
                      <a href>Fragrance</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 mt-lg-0 mt-md-4 mt-4">
                <div className>
                  <h5 className="footer-heading text-start">Popular Search</h5>
                  <ul className="footer-list text-start">
                    <li>
                      <a href>Foundation</a>
                    </li>
                    <li>
                      <a href>Primer</a>
                    </li>
                    <li>
                      <a href>Eyeliner</a>
                    </li>
                    <li>
                      <a href>lipstick</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 mt-lg-0 mt-md-4 mt-4 mb-lg-0 mb-md-4 mb-4">
                <div className>
                  <h5 className="footer-heading text-start">{t("Experience App On Mobile")}</h5>
                </div>
                <div className="d-flex gap-md-3 gap-1 mt-4">
                  <a href className="download-link">
                    <img src="../../../assets/img/apple.png" alt />
                  </a>
                  <a href className="download-link">
                    <img src="../../../assets/img/google.png" alt />
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-4 border-top">
              <p className="end-footer-text">
                © 2024 Glow Up. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
