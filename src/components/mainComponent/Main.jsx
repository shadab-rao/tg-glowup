import React from "react";
import Header from "../common/Header";
import Category from "./Category";
import Products from "./Products";
import Banner from "./Banner";
import BigProductsList from "./BigProductsList";
import ProductTabs from "./ProductTabs";
import Slider from "./Slider";
import Footer from "../common/Footer";
import MobileSidebar from "../common/MobileSidebar";

const Main = () => {
  return (
    <>
      <Header />
      <section className="banner">
        <div className="swiper-container-banner overflow-hidden">
          <div className="swiper-wrapper">
            {/* Slides */}
            <div className="swiper-slide banner-img-wrapper">
              <img src="assets/img/products/banner1.png" alt="Banner 1" />
            </div>
            <div className="swiper-slide banner-img-wrapper">
              <img src="assets/img/products/banner1.png" alt="Banner 2" />
            </div>
            <div className="swiper-slide banner-img-wrapper">
              <img src="assets/img/products/banner1.png" alt="Banner 3" />
            </div>
            <div className="swiper-slide banner-img-wrapper">
              <img src="assets/img/products/banner1.png" alt="Banner 3" />
            </div>
          </div>
          {/* Pagination */}
          <div className="swiper-pagination custom-swiper-pagination" />
        </div>
      </section>
      <section className="category-slider">
        <Category />
      </section>
      <section class="products">
        <Products />
      </section>
      <section class="banner2">
        <Banner />
      </section>
      <section class="big-section">
        <BigProductsList />
      </section>
      <section class="products-tabs">
        <ProductTabs />
      </section>

      <section className="popular-right-now">
        <Slider />
      </section>
      <Footer/>
    </>
  );
};

export default Main;
