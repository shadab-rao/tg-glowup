import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import {
  addToCart,
  addWishlist,
  getCart,
  getCategory,
  getOfferProducts,
  getSubcategory,
  productList,
  wishList,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCartCount, setWishlist } from "../../Redux/cartSlice";
import AllProduct from "../common/AllProduct";
import SubsubCategories from "../SubsubCategories";
import Footer from "../common/Footer";
import FilterSidebar from "../filter/FilterSidebar";

const OfferProduct = () => {
  const [offerData, setOfferData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState();
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("token-user");
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(()=>{
    handleOffer()
  },[])

  const handleOffer = async()=>{
    const response = await getOfferProducts();
    setOfferData(response?.data?.results?.data)
  }

 

  const handleAddWishlist = async ({ productId = null, variantId = null }) => {
    try {
      const formData = {
        productId,
        variantId,
      };

      const response = await addWishlist(formData);
      if (response) {
        handleOffer();
        handleWishList();
      }
    } catch (error) {
      console.error("Failed to update wishlist:", error);
    }
  };

  const handleWishList = async () => {
    const response = await wishList();
    const wishlistData = response?.data?.results?.wishlist?.products || [];
    dispatch(setWishlist(wishlistData));
  };

  const handleAddToCart = async ({ product, varient }) => {
    if (userToken) {
      const payload = {
        product,
        varient,
      };
      const response = await addToCart(payload);
      handleCart();
    } else {
      navigate("/login");
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
      <div className="container mb-4">
        <div className="custom-breadcrum mt-4">
          {/* <div className="custom-breadcrum-list">Home</div> */}
          {/* <div className="custom-breadcrum-list active">{categoryName}</div> */}
        </div>
        <div className="row">
          <FilterSidebar offerLength = {offerData?.length}  />
          <div className="col-lg-9 col-md-8 col-12 mt-md-0 mt-4">
            <div className="d-md-block d-none">
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
            <div className="row mt-4">
              {offerData?.length > 0 ? (
                offerData?.map((item) => (
                  <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
                    <div className="comman-card">
                      {userToken ? (
                        <div
                          className="heart-icon"
                          onClick={() =>
                            handleAddWishlist({
                              productId: item?._id,
                              variantId: item?.variants?.[0]?._id,
                            })
                          }
                        >
                          {item?.isFavourite === true ? (
                            <i className="fa fa-heart" />
                          ) : (
                            <i className="fa fa-heart-o" />
                          )}
                        </div>
                      ) : null}
                      {/* <div className="new-label">
                  <p className>New</p>
                </div> */}
                      <div
                        className="comman-card-header"
                        onClick={() =>
                          navigate(`/product-details/${item?._id}`)
                        }
                      >
                        <div className="img-wrapper">
                          <img src={item?.imagesOg?.[0]} alt />
                        </div>
                      </div>
                      <div className="comman-card-body">
                        <div
                          className="d-flex justify-content-between"
                          onClick={() =>
                            navigate(`/product-details/${item?._id}`)
                          }
                        >
                          <h3 className="title text-start">
                            {item?.name_en?.slice(0, 10) + "..."}
                          </h3>
                          <h3 className="price">
                            SAR {item?.maxDiscount}
                          </h3>
                        </div>
                        <p className="paragraph text-start">
                          {item?.description_en?.slice(0, 10) + "..."}
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
                                varient: item?.variants?.[0]?._id,
                              })
                            }
                          >
                            Add to Bag
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ fontWeight: "500", fontSize: "18px" }}>
                  No Product Available
                </p>
              )}
              {/* <div className="d-flex align-items-center justify-content-between flex-wrap pt-3 pb-3">
                <Paginate
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handlePageChange={handlePageChange}
                  records={brandData}
                  totalList={totalDocs}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default OfferProduct;
