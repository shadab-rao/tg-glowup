import React from "react";
import Sidebar from "./common/Sidebar";

const ReferalProgram = () => {
  return (
    <>
      <section className="my-order">
        <div className="container mt-4 mb-5">
          <div className="row">
          <Sidebar/>
            <div className="col-lg-9 col-md-8 col-12">
              <div className>
                <div className>
                  <h5 className="text fw-bold mb-4">Referral Program</h5>
                </div>
                <div className="ref-box">
                  <div className="text-center">
                    <div className="img-wrapper mx-auto">
                      <img src="assets/img/email.png" alt />
                    </div>
                    <h3 className="comman-heading text-white">
                      Invite your friends
                    </h3>
                    <p className="text text-white">
                      Introduce your friends and family to Glow <br /> Up and
                      earn money
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="col-lg-6 col-md-8 col-12 mx-auto">
                    <div className="mt-4 text-center">
                      <h6 className="text fw-semibold">Your referral link:</h6>
                      <p className="text text-light">
                        Introduce your friends and family to Glow Up and <br />{" "}
                        earn money
                      </p>
                      <div className="bg-white mt-4 py-3 px-3 rounded-3">
                        <div className="d-flex justify-content-between">
                          <p className="text fw-semibold">
                            https://glowup-beauty.com
                          </p>
                          <a href className="text text-primary">
                            Copy Link
                          </a>
                        </div>
                      </div>
                    </div>
                    <button className="comman-btn mt-5">
                      Share With Friend
                    </button>
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

export default ReferalProgram;
