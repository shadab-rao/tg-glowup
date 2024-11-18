import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12">
            <div className="banner2-wrapper">
              <div className="row">
                <div className="col-lg-10 col-md-8 col-12 mt-2 px-0">
                  <div className="mt-4">
                    <h4 className="banner2-light-heading text-start">
                      Last Change Clearance Sale
                    </h4>
                    <h3 className="banner2-bold-heading text-start">60% - 80% oFF</h3>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-12">
                  <div className="banner2-img-wrapper">
                    <img src="assets/img/products/banner2.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
