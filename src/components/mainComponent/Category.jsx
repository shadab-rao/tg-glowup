import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { getCategory } from "../../Api Services/glowHttpServices/glowLoginHttpServices";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    handleCategory();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      Swiper.use([Navigation, Pagination, Autoplay]);

      const swiperCategory = new Swiper(".swiper-container-category", {
        slidesPerView: categories.length === 1 ? 1 : 2, // Single slide view if only one product
        spaceBetween: 0,
        centeredSlides: categories.length === 1, // Center the single product
        autoplay: categories.length > 1 ? { delay: 3000 } : false, // Disable autoplay if only one product
        loop: categories.length > 1, // Disable loop for a single product
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
            slidesPerView: categories.length === 1 ? 1 : 6,
          },
          1024: {
            slidesPerView: categories.length === 1 ? 1 : 8,
          },
          1280: {
            slidesPerView: categories.length === 1 ? 1 : 9,
          },
        },
      });
    }
  }, [categories]);

  const handleCategory = async () => {
    try {
      const response = await getCategory();
      setCategories(response?.data?.results?.categories || []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  return (
    <div className="category-slider-wrapper mx-auto my-5">
      <div className="swiper-container-category overflow-hidden">
        <div className="swiper-wrapper">
          {categories?.map((cat, index) => (
            <div className="swiper-slide" key={index}>
              <div className="cate-img-slider-wrapper">
                <img src={cat?.image} alt={cat?.name_en} />
              </div>
              <p className="slider-text">{cat?.name_en}</p>
            </div>
          ))}
        </div>
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
        <div className="swiper-pagination" />
      </div>
    </div>
  );
};

export default Category;
