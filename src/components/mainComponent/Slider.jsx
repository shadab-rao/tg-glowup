import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  useEffect(() => {
    Swiper.use([Navigation, Pagination, Autoplay]);

    const swiper = new Swiper(".swiper-container-popular-right", {
      slidesPerView: 1, // Show one slide at a time
      spaceBetween: 10, // Space between slides
      autoplay: {
        delay: 3000, // Slide changes every 3 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      },
      loop: true, // Enable infinite looping
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
          slidesPerView: 2, // Show 2 slides on medium screens
        },
        1024: {
          slidesPerView: 3, // Show 3 slides on larger screens
        },
        1280: {
          slidesPerView: 4, // Show 4 slides on extra-large screens
        },
      },
    });

    // Cleanup
    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  const slides = [
    { image: "../../../assets/img/products/ordinary-b.png", text: "Premium Products" },
    { image: "../../../assets/img/products/premium_products.png", text: "Premium Products" },
    { image: "../../../assets/img/products/body_wash.png", text: "Premium Products" },
    { image: "../../../assets/img/products/luminizer.png", text: "Premium Products" },
    { image: "../../../assets/img/products/ordinary-b.png", text: "Premium Products" },
  ];

  return (
    <div className="popular-right-wrapper">
      <div className="container">
        <div className="popular-right-slider-wrapper mx-auto my-5">
          <div className="swiper-container-popular-right overflow-hidden position-relative">
            <div className="swiper-wrapper justify-content-center">
              {slides.map((slide, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="popular-right-img-wrapper">
                    <img src={slide.image} alt={slide.text} />
                  </div>
                  <p className="slider-text">{slide.text}</p>
                </div>
              ))}
            </div>
            {/* Navigation Buttons */}
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
            <div className="swiper-pagination" style={{display:"none"}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
