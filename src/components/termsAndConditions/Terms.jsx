import React from "react";

const Terms = () => {
  return (
    <>
      <section className="about-us">
        <div className="container mt-4 mb-5">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="my-account">
                <div className="user-box">
                  <div className="d-flex gap-3">
                    <div className="user-img">
                      <img src="assets/img/user.jpg" alt />
                    </div>
                    <div>
                      <h5 className="text text-white">Aman Singh</h5>
                      <p className="comman-small-text">
                        amansingh.miller@email.com
                      </p>
                      <div className="mt-2">
                        <a href="my_profile.html" className="edit-btn">
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="text fw-semibold mb-4">My Account</h5>
                  <div className="list-box-wrapper">
                    <a href="my_order.html" className="list-box">
                      <div className="icon active">
                        <img src="assets/img/svg/box.svg" alt />
                      </div>
                      <div className="text-wrapper active border-bottom border-2">
                        <p className>My Order</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                    <a href="my_address.html" className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/location.svg" alt />
                      </div>
                      <div className="text-wrapper border-bottom border-2">
                        <p className>My address</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                    <a href className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/heart-light.svg" alt />
                      </div>
                      <div className="text-wrapper">
                        <p className>My Wishlist</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <h5 className="text fw-semibold mb-4">Others</h5>
                  <div className="list-box-wrapper">
                    <a href="refrral_program.html" className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/link-circle.svg" alt />
                      </div>
                      <div className="text-wrapper border-bottom border-2">
                        <p className>Referral Program</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                    <a href="setting.html" className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/setting-2.svg" alt />
                      </div>
                      <div className="text-wrapper border-bottom border-2">
                        <p className>Settings</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                    <a href="about_us.html" className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/file-lines.svg" alt />
                      </div>
                      <div className="text-wrapper border-bottom border-2">
                        <p className>About us</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                    <a href="terms_and_condition.html" className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/file-minus.svg" alt />
                      </div>
                      <div className="text-wrapper border-bottom border-2">
                        <p className>Terms &amp; Conditions</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                    <a href="need_help.html" className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/call.svg" alt />
                      </div>
                      <div className="text-wrapper border-bottom border-2">
                        <p className>Help &amp; Support</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                    <a href="privacy_policy.html" className="list-box">
                      <div className="icon">
                        <img src="assets/img/svg/file-sheild.svg" alt />
                      </div>
                      <div className="text-wrapper">
                        <p className>Privacy Policy</p>
                        <i className="fa fa-angle-right" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className>
                <div className>
                  <h5 className="text fw-bold mb-4">Teams &amp; Conditions </h5>
                </div>
              </div>
              <div className="card-box mt-3">
                <div className>
                  <h5 className="text fw-bold mb-4">
                    Teams &amp; Conditions of Glow Up{" "}
                  </h5>
                  <p className="text  text-light">Last Updated: 20 May, 2024</p>
                </div>
                <div className="mt-3">
                  <div className>
                    <p className="text  text-light">
                      Personalized Recommendations: Based on user preferences,
                      skin type, concerns, and previous purchases, the app
                      suggests products suited to individual needs.
                    </p>
                    <p className="text  text-light mt-3">
                      <b className="text-dark"> Virtual Try-On:</b> Using
                      augmented reality (AR), some apps allow users to "try on"
                      makeup products virtually, including lipsticks,
                      eyeshadows, and foundation shades. Skincare Analysis: Apps
                      with AI-powered tools analyze your skin through selfies to
                      recommend routines and products for specific skin concerns
                      like acne, wrinkles, or dryness
                    </p>
                    <h5 className="text fw-bold mt-3">Acceptance of Terms </h5>
                    <ol className="text text-light">
                      <li className="mb-3">
                        By downloading, installing, or using [App Name], you
                        agree to these Terms &amp; Conditions. If you do not
                        agree, do not use the app.
                      </li>
                      <li className="mb-3">
                        You agree to use the app for personal, non-commercial
                        purposes only. You are prohibited from using the app to
                        engage in any unlawful or harmful activity.
                      </li>
                      <li className="mb-3">
                        You agree to use the app for personal, non-commercial
                        purposes only. You are prohibited from using the app to
                        engage in any unlawful or harmful activity.
                      </li>
                      <li className="mb-3">
                        We strive to ensure that the information provided about
                        products is accurate and up-to-date. However, we do not
                        guarantee the accuracy or completeness of product
                        descriptions, pricing, or availability.
                      </li>
                    </ol>
                    <div className="mt-3">
                      <h5 className="text fw-bold mt-3">
                        Service; Order, Pricing &amp; Payment{" "}
                      </h5>
                      <ol className="text text-light">
                        <li className="mb-3">
                          By downloading, installing, or using [App Name], you
                          agree to these Terms &amp; Conditions. If you do not
                          agree, do not use the app.
                        </li>
                        <li className="mb-3">
                          You agree to use the app for personal, non-commercial
                          purposes only. You are prohibited from using the app
                          to engage in any unlawful or harmful activity.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
