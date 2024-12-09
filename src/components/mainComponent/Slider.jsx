import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  const slides = [
    { image: "../../../assets/img/products/ordinary-b.png", text: "Premium A Products" },
    { image: "../../../assets/img/products/premium_products.png", text: "Premium B Products" },
    { image: "../../../assets/img/products/body_wash.png", text: "Premium C Products" },
    { image: "../../../assets/img/products/luminizer.png", text: "Premium D Products" },
    { image: "../../../assets/img/products/ordinary-b.png", text: "Premium E Products" },
  ];

  return (
    <div className="popular-right-wrapper">
      <div className="container">
        <div className="popular-right-slider-wrapper mx-auto my-5">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true} 
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="popular-right-img-wrapper">
                  <img src={slide.image} alt={slide.text} />
                </div>
                <p className="slider-text">{slide.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
