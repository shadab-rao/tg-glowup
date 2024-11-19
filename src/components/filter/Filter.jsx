import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import FilterSidebar from "./FilterSidebar";
import {
  addToCart,
  getCart,
  getCategory,
  getSubcategory,
  productList,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCartCount } from "../../Redux/cartSlice";

const Filter = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [productData, setProductData] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken = localStorage.getItem("token-user");

  useEffect(() => {
    handleCategory();
    handleSubcatgeory();
    handleProduct();
  }, []);

  const handleCategory = async () => {
    try {
      const response = await getCategory();
      setCategories(response?.data?.results?.categories || []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const handleSubcatgeory = async () => {
    try {
      const response = await getSubcategory({ category: id });
      setSubCategories(response?.data?.results?.subcategories || []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const handleProduct = async () => {
    try {
      const response = await productList();
      setProductData(response?.data?.results?.products || []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const handleAddToCart = async ({ product, varient }) => {
   if(userToken){
    const payload = {
      product,
      varient,
    };
    const response = await addToCart(payload);
    handleCart()
   }else{
    navigate("/login")
   }
  };

  const handleCart = async () => {
    const response = await getCart();
    const totalProducts = response?.data?.results?.cart?.totalProducts || 0;
    dispatch(setCartCount(totalProducts));
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
                {subCategories?.map((item) => (
                  <div className="col-2 ">
                    <div className="cate-img-slider-wrapper ">
                      <img
                        style={{ width: "60px", objectFit: "cover" }}
                        src={item?.image}
                        alt
                      />
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
              {productData?.map((item) => (
                <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-4">
                  <div className="comman-card">
                    <div className="heart-icon">
                      <i className="fa fa-heart-o" />
                    </div>
                    <div className="comman-card-header">
                      <div className="img-wrapper">
                        <img src={item?.imagesWeb?.[0]} alt />
                      </div>
                    </div>
                    <div className="comman-card-body">
                      <div className="d-flex justify-content-between">
                        <h3 className="title">{item?.name_en}</h3>
                        <h3 className="price">SAR {item?.price}</h3>
                      </div>
                      <p className="paragraph text-start">
                        {item?.description_en}
                      </p>
                      <div className="mt-4">
                        <div className="review-wrapper">
                          <i className="fa fa-star text-warning" />
                          <span className="review-points">4.9</span>
                          <span className="review-text">250+ Review</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button
                          className="comman-btn"
                          onClick={() =>
                            handleAddToCart({
                              product: item?._id,
                              varient:
                                item?.varients?.[0]?.values?.[0]?.varient_id,
                            })
                          }
                        >
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
