import React, { useEffect } from "react";
import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from "swiper/modules";



const Category = () => {
  useEffect(() => {
    // Register Swiper modules
    Swiper.use([Navigation, Pagination, Autoplay]);

    // Initialize Swiper after component mounts
    const swiperCategory = new Swiper(".swiper-container-category", {
      slidesPerView: 2,
      spaceBetween: 0,
      autoplay: { delay: 3000 },
      loop: true,
      pagination: {
        el: ".swiper-container-category .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-container-category .swiper-button-next",
        prevEl: ".swiper-container-category .swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 8,
        },
        1280: {
          slidesPerView: 9,
        },
      },
    });

    const swiperPopularRight = new Swiper(".swiper-container-popular-right", {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: { delay: 6000 },
      loop: true,
      pagination: {
        el: ".swiper-container-popular-right .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-container-popular-right .swiper-button-next",
        prevEl: ".swiper-container-popular-right .swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      },
    });
  }, []);
  return (
    <>
      {/* <section className="category-slider"> */}
        <div className="category-slider-wrapper mx-auto my-5">
          <div className="swiper-container-category overflow-hidden">
            <div className="swiper-wrapper">
              {/* Slides (total 9) */}
              <div className="swiper-slide">
                <div className="cate-img-slider-wrapper">
                  <img src="../../../assets/img/products/makeup.png" alt />
                </div>
                <p className="slider-text">Makeup</p>
              </div>
              <div className="swiper-slide">
                <div className="cate-img-slider-wrapper">
                  <img src="../../../assets/img/products/Skincare.png" alt />
                </div>
                <p className="slider-text">Skincare</p>
              </div>
              <div className="swiper-slide">
                <div className="cate-img-slider-wrapper">
                  <img src="../../../assets/img/products/Haircare.png" alt />
                </div>
                <p className="slider-text">Haircare</p>
              </div>
              <div className="swiper-slide">
                <div className="cate-img-slider-wrapper">
                  <img src="../../../assets/img/products/Fragrance.png" alt />
                </div>
                <p className="slider-text">Fragrance</p>
              </div>
              <div className="swiper-slide">
                <div className="cate-img-slider-wrapper">
                  <img src="../../../assets/img/products/Bath_Body.png" alt />
                </div>
                <p className="slider-text">Bath &amp; Body</p>
              </div>
              <div className="swiper-slide">
                <div className="cate-img-slider-wrapper">
                  <img src="../../../assets/img/products/Wellness.png" alt />
                </div>
                <p className="slider-text">Wellness</p>
              </div>
              <div className="swiper-slide">
                <div className="cate-img-slider-wrapper">
                  <img src="../../../assets/img/products/Men.png" alt />
                </div>
                <p className="slider-text">Men</p>
              </div>
              <div className="swiper-slide">
                <div className="cate-img-slider-wrapper">
                  <img src="../../../assets/img/products/Combo.png" alt />
                </div>
                <p className="slider-text">Combo</p>
              </div>
              <div className="swiper-slide">
                <div className="cate-img-slider-wrapper">
                  <img src="../../../assets/img/products/Mom_Baby.png" alt />
                </div>
                <p className="slider-text">Mom &amp; Baby</p>
              </div>
              <div className="swiper-slide">
                <div className="cate-img-slider-wrapper">
                  <img src="../../../assets/img/products/Wellness.png" alt />
                </div>
                <p className="slider-text">Wellness</p>
              </div>
              <div className="swiper-slide">
                <div className="cate-img-slider-wrapper">
                  <img src="../../../assets/img/products/Men.png" alt />
                </div>
                <p className="slider-text">Men</p>
              </div>
              <div className="swiper-slide">
                <div className="cate-img-slider-wrapper">
                  <img src="../../../assets/img/products/Combo.png" alt />
                </div>
                <p className="slider-text">Combo</p>
              </div>
              <div className="swiper-slide">
                <div className="cate-img-slider-wrapper">
                  <img src="../../../assets/img/products/Mom_Baby.png" alt />
                </div>
                <p className="slider-text">Mom &amp; Baby</p>
              </div>
            </div>
            <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
          <div className="swiper-pagination" />
          </div>
        </div>
      {/* </section> */}
    </>
  );
};

export default Category;
