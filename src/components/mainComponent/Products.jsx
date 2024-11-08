import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="container mb-5">
        <div className="heading-wrapper">
          <h5 className="bold-heading">Beauty Must Haves</h5>
          <p className="light-heading">Bestsellers Products</p>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4" onClick={()=>navigate("/product-details")}>
            <div className="comman-card">
              <div className="heart-icon">
                <i className="fa fa-heart-o" />
              </div>
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/mac_stuio_fix.png" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4" onClick={()=>navigate("/product-details")}>
            <div className="comman-card">
              <div className="heart-icon">
                <i className="fa fa-heart-o" />
              </div>
              <div className="new-label">
                <p className>New</p>
              </div>
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/concealer.png" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4" onClick={()=>navigate("/product-details")}>
            <div className="comman-card">
              <div className="heart-icon">
                <i className="fa fa-heart-o" />
              </div>
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/glue.png" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4" onClick={()=>navigate("/product-details")}>
            <div className="comman-card">
              <div className="heart-icon">
                <i className="fa fa-heart" />
              </div>
              <div className="comman-card-header">
                <div className="img-wrapper">
                  <img src="assets/img/products/kerastase.png" alt />
                </div>
              </div>
              <div className="comman-card-body">
                <div className="d-flex justify-content-between">
                  <h3 className="title">Plum Green </h3>
                  <h3 className="price">SAR 162</h3>
                </div>
                <p className="paragraph">
                  Plum green Tea Pore Cleansing Gel Face Wash...
                </p>
                <div className="mt-4">
                  <div className="review-wrapper">
                    <i className="fa fa-star text-warning" />
                    <span className="review-points">4.9</span>
                    <span className="review-text">250+ Review</span>
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

export default Products;
