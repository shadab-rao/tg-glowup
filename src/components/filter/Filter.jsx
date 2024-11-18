import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import FilterSidebar from "./FilterSidebar";
import { getCategory } from "../../Api Services/glowHttpServices/glowLoginHttpServices";

const Filter = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    handleCategory();
  }, []);

  const handleCategory = async () => {
    try {
      const response = await getCategory();
      setCategories(response?.data?.results?.categories || []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="custom-breadcrum mt-4">
          <div className="custom-breadcrum-list">Home</div>
          <div className="custom-breadcrum-list active">skincare</div>
        </div>
        <div className="row">
          <FilterSidebar />
          <div className="col-lg-9 col-md-8 col-12 mt-md-0 mt-4">
            <div className="d-md-block d-none">
                <div className="row mt-4  ">
              {categories?.map((item) => (
                  <div className="col-auto text-start ">
                    <div className="cate-img-slider-wrapper ">
                      <img style={{width:"50px",objectFit:"cover"}}  src={item?.image} alt />
                    </div>
                    <p className="small-slider-text">{item?.name_en}</p>
                  </div>
              ))}
                </div>
            </div>
            <div className="d-md-none d-block mt-3">
              <div className="category-slider">
                <div className="category-slider-wrapper mx-auto">
                  <div className="swiper-container-category overflow-hidden">
                    <div className="swiper-wrapper">
                      {/* Slides (total 9) */}
                      <div className="swiper-slide">
                        <div className="cate-img-slider-wrapper">
                          <img src="assets/img/products/makeup.png" alt />
                        </div>
                        <p className="slider-text">Makeup</p>
                      </div>
                      <div className="swiper-slide">
                        <div className="cate-img-slider-wrapper">
                          <img src="assets/img/products/Skincare.png" alt />
                        </div>
                        <p className="slider-text">Skincare</p>
                      </div>
                      <div className="swiper-slide">
                        <div className="cate-img-slider-wrapper">
                          <img src="assets/img/products/Haircare.png" alt />
                        </div>
                        <p className="slider-text">Haircare</p>
                      </div>
                      <div className="swiper-slide">
                        <div className="cate-img-slider-wrapper">
                          <img src="assets/img/products/Fragrance.png" alt />
                        </div>
                        <p className="slider-text">Fragrance</p>
                      </div>
                      <div className="swiper-slide">
                        <div className="cate-img-slider-wrapper">
                          <img src="assets/img/products/Bath_Body.png" alt />
                        </div>
                        <p className="slider-text">Bath &amp; Body</p>
                      </div>
                      <div className="swiper-slide">
                        <div className="cate-img-slider-wrapper">
                          <img src="assets/img/products/Wellness.png" alt />
                        </div>
                        <p className="slider-text">Wellness</p>
                      </div>
                      <div className="swiper-slide">
                        <div className="cate-img-slider-wrapper">
                          <img src="assets/img/products/Men.png" alt />
                        </div>
                        <p className="slider-text">Men</p>
                      </div>
                      <div className="swiper-slide">
                        <div className="cate-img-slider-wrapper">
                          <img src="assets/img/products/Combo.png" alt />
                        </div>
                        <p className="slider-text">Combo</p>
                      </div>
                      <div className="swiper-slide">
                        <div className="cate-img-slider-wrapper">
                          <img src="assets/img/products/Mom_Baby.png" alt />
                        </div>
                        <p className="slider-text">Mom &amp; Baby</p>
                      </div>
                      <div className="swiper-slide">
                        <div className="cate-img-slider-wrapper">
                          <img src="assets/img/products/Wellness.png" alt />
                        </div>
                        <p className="slider-text">Wellness</p>
                      </div>
                      <div className="swiper-slide">
                        <div className="cate-img-slider-wrapper">
                          <img src="assets/img/products/Men.png" alt />
                        </div>
                        <p className="slider-text">Men</p>
                      </div>
                      <div className="swiper-slide">
                        <div className="cate-img-slider-wrapper">
                          <img src="assets/img/products/Combo.png" alt />
                        </div>
                        <p className="slider-text">Combo</p>
                      </div>
                      <div className="swiper-slide">
                        <div className="cate-img-slider-wrapper">
                          <img src="assets/img/products/Mom_Baby.png" alt />
                        </div>
                        <p className="slider-text">Mom &amp; Baby</p>
                      </div>
                    </div>
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-md-4 gap-1 mt-md-4 mt-0">
              <div className="filter-box">Eyeshadow</div>
              <div className="filter-box">Highlighters</div>
              <div className="filter-box">Moisturizers</div>
              <div className="filter-box">Masks</div>
            </div>
            <div className="row mt-md-4 mt-2">
              <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4">
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
                    <div className="mt-4">
                      <button className="comman-btn">Add to Bag</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4">
                <div className="comman-card">
                  <div className="new-label">
                    <p className>New</p>
                  </div>
                  <div className="heart-icon">
                    <i className="fa fa-heart-o" />
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
                    <div className="mt-4">
                      <button className="comman-btn">Add to Bag</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4">
                <div className="comman-card">
                  <div className="heart-icon">
                    <i className="fa fa-heart" />
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
                    <div className="mt-4">
                      <button className="comman-btn">Add to Bag</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4">
                <div className="comman-card">
                  <div className="heart-icon">
                    <i className="fa fa-heart-o" />
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
                    <div className="mt-4">
                      <button className="comman-btn">Add to Bag</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4">
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
                    <div className="mt-4">
                      <button className="comman-btn">Add to Bag</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4">
                <div className="comman-card">
                  <div className="new-label">
                    <p className>New</p>
                  </div>
                  <div className="heart-icon">
                    <i className="fa fa-heart-o" />
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
                    <div className="mt-4">
                      <button className="comman-btn">Add to Bag</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4">
                <div className="comman-card">
                  <div className="heart-icon">
                    <i className="fa fa-heart-o" />
                  </div>
                  <div className="comman-card-header">
                    <div className="img-wrapper">
                      <img src="assets/img/products/glow_screen.png" alt />
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
                    <div className="mt-4">
                      <button className="comman-btn">Add to Bag</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4">
                <div className="comman-card">
                  <div className="heart-icon">
                    <i className="fa fa-heart-o" />
                  </div>
                  <div className="comman-card-header">
                    <div className="img-wrapper">
                      <img src="assets/img/products/glow_stick.jpg" alt />
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
                    <div className="mt-4">
                      <button className="comman-btn">Add to Bag</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4">
                <div className="comman-card">
                  <div className="heart-icon">
                    <i className="fa fa-heart" />
                  </div>
                  <div className="comman-card-header">
                    <div className="img-wrapper">
                      <img src="assets/img/products/frizz_oil.jpg" alt />
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
                    <div className="mt-4">
                      <button className="comman-btn">Add to Bag</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4">
                <div className="comman-card">
                  <div className="new-label">
                    <p className>New</p>
                  </div>
                  <div className="heart-icon">
                    <i className="fa fa-heart-o" />
                  </div>
                  <div className="comman-card-header">
                    <div className="img-wrapper">
                      <img src="assets/img/products/scalp_oil.jpg" alt />
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
                    <div className="mt-4">
                      <button className="comman-btn">Add to Bag</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4">
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
                    <div className="mt-4">
                      <button className="comman-btn">Add to Bag</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4">
                <div className="comman-card">
                  <div className="heart-icon">
                    <i className="fa fa-heart-o" />
                  </div>
                  <div className="comman-card-header">
                    <div className="img-wrapper">
                      <img src="assets/img/products/tocobo.jpg" alt />
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
                    <div className="mt-4">
                      <button className="comman-btn">Add to Bag</button>
                    </div>
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

export default Filter;
