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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCartCount } from "../../Redux/cartSlice";
import AllProduct from "../common/AllProduct";
import SubsubCategories from "../SubsubCategories";
import Footer from "../common/Footer";

const Filter = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [productLength, setProductLength] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleCategory();
    handleSubcatgeory();
  }, [id]);

  const handleCategory = async () => {
    try {
      const response = await getCategory();
      setCategories(response?.data?.results?.categories || []);
      const currentCategory = response?.data?.results?.categories.find((cat) => cat._id === id);
      setCategoryName(currentCategory?.name_en || "Category not found");
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

  const handleSubcategoryClick = (subcategoryId) => {
    setSelectedSubcategoryId(subcategoryId);
  };

  const updateProductLength = (length) => {
    setProductLength(length);
  };

  return (
    <>
      <Header />
      <div className="container mb-4">
        <div className="custom-breadcrum mt-4">
          <div className="custom-breadcrum-list me-1" style={{cursor:"pointer"}} onClick={()=>navigate("/")}>Home</div>
          <div className="custom-breadcrum-list active">{categoryName}</div>
        </div>
        <div className="row">
          <FilterSidebar productLength={productLength} subcateogryLength = {subCategories?.length}  />
          <div className="col-lg-9 col-md-8 col-12 mt-md-0 mt-4">
            <div className="d-md-block d-none">
              <div className="row mt-4">
                {/* <div className="col-auto text-center  "> */}
                {subCategories.length > 0 ? (subCategories?.map((item) => (
                  <div className="col-auto text-center">
                    <div
                      className="cate-img-slider-wrapper"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSubcategoryClick(item?._id)}
                    >
                      <img
                        style={{
                          width: "60px",
                          objectFit: "cover",
                          background: "#c8c5c5",
                          borderRadius: "10px",
                          padding: "1px",
                        }}
                        src={item?.image}
                        alt
                      />
                    </div>
                    <p
                      className="mt-1"
                      style={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      {item?.name_en}
                    </p>
                  </div>
                ))) : <p style={{fontWeight:"500"}}>No Sub Categories Available</p>}
              </div>
              {/* </div> */}
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
            {/* {selectedSubcategoryId && (
              <SubsubCategories subcategoryId={selectedSubcategoryId} />
            )} */}
            <AllProduct subcategoryId={selectedSubcategoryId}/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Filter;
