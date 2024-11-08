import React from 'react'

const Slider = () => {
  return (
    <>
     <div className="popular-right-wrapper">
    <div className="container">
      <div className="popular-right-slider-wrapper mx-auto my-5">
        <div className="swiper-container-popular-right overflow-hidden position-relative">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="popular-right-img-wrapper">
                <img src="assets/img/products/ordinary-b.png" alt />
              </div>
              <p className="slider-text">Premium Products</p>
            </div>
            <div className="swiper-slide">
              <div className="popular-right-img-wrapper">
                <img src="assets/img/products/premium_products.png" alt />
              </div>
              <p className="slider-text">Premium Products</p>
            </div>
            <div className="swiper-slide">
              <div className="popular-right-img-wrapper">
                <img src="assets/img/products/body_wash.png" alt />
              </div>
              <p className="slider-text">Premium Products</p>
            </div>
            <div className="swiper-slide">
              <div className="popular-right-img-wrapper">
                <img src="assets/img/products/luminizer.png" alt />
              </div>
              <p className="slider-text">Premium Products</p>
            </div>
            <div className="swiper-slide">
              <div className="popular-right-img-wrapper">
                <img src="assets/img/products/ordinary-b.png" alt />
              </div>
              <p className="slider-text">Premium Products</p>
            </div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Slider