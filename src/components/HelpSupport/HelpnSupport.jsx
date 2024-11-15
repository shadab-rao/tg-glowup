import React from "react";
import Sidebar from "../common/Sidebar";

const HelpnSupport = () => {
  return (
    <>
      <section className="about-us">
        <div className="container mt-4 mb-5">
          <div className="row">
          <Sidebar/>
            <div className="col-lg-9 col-md-8 col-12">
              <div className>
                <div className="d-flex justify-content-between">
                  <h5 className="text fw-bold mb-0">Need help with orders? </h5>
                  <button className="filter-btn w-fit px-3 fw-semibold text-dark">
                    <img src="assets/img/svg/sort.svg" alt className="as" />
                    Filter
                  </button>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-lg-5 col-md-6 col-12">
                  <div className="card-box">
                    <div className="row border-bottom pb-2">
                      <div className="col-lg-5 col-md-6">
                        <p className="comman-small-text m-0 text-light">
                          Order ID
                        </p>
                        <h5 className="text fw-semibold">GTU79477BN9J908</h5>
                      </div>
                      <div className="col-lg-5 col-md-6">
                        <p className="comman-small-text m-0 text-light">
                          Status
                        </p>
                        <h5 className="text fw-semibold text-success">
                          Delivered
                        </h5>
                      </div>
                      <div className="col-lg-2 col-md-6">
                        <div className="d-flex justify-content-end">
                          <i className="fa fa-angle-right text-light" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-6">
                          <img
                            src="assets/img/products/lipstick.png"
                            className="w-100 h-100"
                            alt
                          />
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                          <img
                            src="assets/img/products/face-powder.png"
                            className="w-100 h-100"
                            alt
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12">
                  <div className="card-box">
                    <div className="row border-bottom pb-2">
                      <div className="col-lg-5 col-md-6">
                        <p className="comman-small-text m-0 text-light">
                          Order ID
                        </p>
                        <h5 className="text fw-semibold">GTU79477BN9J908</h5>
                      </div>
                      <div className="col-lg-5 col-md-6">
                        <p className="comman-small-text m-0 text-light">
                          Status
                        </p>
                        <h5 className="text fw-semibold text-success">
                          Delivered
                        </h5>
                      </div>
                      <div className="col-lg-2 col-md-6">
                        <div className="d-flex justify-content-end">
                          <i className="fa fa-angle-right text-light" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-6">
                          <img
                            src="assets/img/products/lipstick.png"
                            className="w-100 h-100"
                            alt
                          />
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                          <img
                            src="assets/img/products/face-powder.png"
                            className="w-100 h-100"
                            alt
                          />
                        </div>
                      </div>
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

export default HelpnSupport;
