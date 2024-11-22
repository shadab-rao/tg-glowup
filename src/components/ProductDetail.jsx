import React, { useEffect, useRef, useState } from "react";
import Header from "./common/Header";
import {
  addToCart,
  getCart,
  productDetail,
} from "../Api Services/glowHttpServices/glowLoginHttpServices";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartCount } from "../Redux/cartSlice";
import AllProduct from "../components/common/AllProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const ProductDetail = () => {
  const [viewData, setViewData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const userToken = localStorage.getItem("token-user");
  const [selectedVariantId, setSelectedVariantId] = useState(null);

  const dispatch = useDispatch();
  const thumbnailsRef = useRef(null);
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    handleView();
  }, [id]);

  const handleView = async () => {
    const response = await productDetail(id);
    const product = response?.data?.results?.product;
    setViewData(product);
    if (product?.varients?.length) {
      setSelectedVariantId(product.varients[0]._id);
    }
  };

  const handleVariantClick = (variantId) => {
    setSelectedVariantId(variantId); 
  };



  const handleAddToCart = async () => {
    if (userToken && selectedVariantId) {
      const payload = {
        product: id, 
        varient: selectedVariantId, 
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

  const scrollUp = () => {
    if (thumbnailsRef.current) {
      thumbnailsRef.current.scrollBy({ top: -100, behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    if (thumbnailsRef.current) {
      thumbnailsRef.current.scrollBy({ top: 100, behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <div>
        <section className="product-details">
          <div className="py-4">
            <div className="container">
              <div className="custom-breadcrum">
                <div className="custom-breadcrum-list">Home</div>
                <div className="custom-breadcrum-list">Women Skincare</div>
                <div className="custom-breadcrum-list active">
                  de rose advanced serum
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-auto col-auto d-lg-block d-md-none d-none ">
                  <div className="position-relative">
                    <div className="slider-arrow slider-up" onClick={scrollUp}>
                      ▲
                    </div>
                    <div
                      id="thumbnails"
                      className="product-detail-height-overflow"
                      ref={thumbnailsRef}
                    >
                      {viewData?.imagesWeb?.map((image, index) => (
                        <div
                          key={index}
                          className="thumbnail active product-detail-img-wrapper mt-5"
                        >
                          <img src={image} alt={`Thumbnail ${index + 1}`} />
                        </div>
                      ))}
                    </div>
                    <div
                      className="slider-arrow slider-down"
                      onClick={scrollDown}
                    >
                      ▼
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-7 col-12">
                  <div className="product-detail-main-img">
                    <img
                      src={
                        viewData?.varients?.find(
                          (variant) => variant._id === selectedVariantId
                        )?.imagesWeb?.[0] || viewData?.imagesWeb?.[0]
                      }
                      alt="Selected Variant"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="d-lg-none d-md-block mt-4 w-100">
                    <Swiper
                      spaceBetween={10}
                      slidesPerView={Math.min(products.length, 4)}
                      navigation
                      centeredSlides={viewData?.imagesWeb.length < 4}
                      pagination={{ clickable: true }}
                    >
                      {viewData?.imagesWeb?.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="product-detail-img">
                            <img
                              src={image}
                              alt={`Slide ${index + 1}`}
                              style={{ width: "100%" }}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-12 mt-lg-0 mt-md-4 mt-4 text-start">
                  <h2 className="product-main-heading">{viewData?.name_en}</h2>
                  <h6 className="small-heading">{viewData?.description_en}</h6>
                  <div className="list-span d-flex gap-3">
                    <span>all types of skin</span>
                    <span>am or pm</span>
                    <span>brightening</span>
                  </div>
                  <p className="light-text">VC_1521178</p>
                  <h5 className="price-text">
                    SAR{" "}
                    {viewData?.varients?.find(
                      (variant) => variant._id === selectedVariantId
                    )?.price || viewData?.price}
                  </h5>
                  <div>
                    <div className="row">
                      <div
                        className="col-auto d-flex gap-2"
                        style={{ cursor: "pointer" }}
                      >
                        {viewData?.varients?.map((variant, index) => (
                          <div
                            key={variant._id}
                            className={`box d-flex ${
                              selectedVariantId === variant._id ? "active" : ""
                            }`}
                            onClick={() => handleVariantClick(variant._id)}
                          >
                            <div>
                              <p>{variant.value?.[0]?.name_en}</p>
                              <p>SAR {variant.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-3 mt-4">
                  <button
                      className="comman-btn"
                      onClick={handleAddToCart} // Call the function without passing arguments
                    >
                      Add to Bag
                    </button>
                    <button className="comman-border-btn">
                      Add To wishlist
                    </button>
                  </div>
                  <div className="mt-4">
                    <div className="d-flex gap-2 mb-3">
                      <img
                        src="../../../assets/img/icon/delivery_van.png"
                        className="icon"
                        alt
                      />
                      <p className="text-icon m-0">
                        Estimated Delivery 4-7 Working Days
                      </p>
                    </div>
                    <div className="d-flex gap-2">
                      <img
                        src="../../../assets/img/icon/box-remove.png"
                        className="icon"
                        alt
                      />
                      <p className="text-icon m-0">Non- Returnable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="description">
          <div className="container mt-lg-5 mt-md-0 mt-4">
            <div className="row">
              <div className="col-lg-10 col-md-11 col-12 text-start">
                <h4 className="text-start mt-4">Description</h4>
                <div>
                  <div className="mb-4">
                    <p className>
                      Beautya's 1st revitalizing serum that concentrates the
                      double power of the Rose de Granville from the stem to the
                      flower to revitalize the skin twice as fast (1) and
                      visibly rejuvenate. Created after 20 years of research,
                      the 10,000 (2) micro-pearls rich in revitalizing rose
                      micro-nutrients are now completed by the power of the Rose
                      sap. The next-generation, 92% natural-origin (3) formula
                      of La Micro-Huile de Rose Advanced Serum is twice as
                      concentrated,(4) combining the nourishing richness of an
                      oil with the deep penetration of a serum.
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className>
                      From the first application of the serum, the skin appears
                      plumped. In 3 weeks, 2x improvement in the look or feel of
                      skin elasticity.(5) With regular use, skin looks and feels
                      transformed. As if replenished from within, the skin seems
                      denser and firmer, and wrinkles appear noticeably reduced.
                      As if lifted, facial contours appear enhanced.
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className>
                      Reveal your extraordinary beauty with Beautya Prestige
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className>
                      (1) Instrumental test, 32 panelists, after 30 min. <br />
                      (2) In a 30 ml bottle. <br />
                      (3) Amount calculated based on the ISO 16128-1 and ISO
                      16128-2 standard. Water percentage included. The remaining
                      8% of ingredients contribute to the formula’s performance,
                      sensory appeal and stability. <br />
                      (4) In Rose de Granville micro-nutrients compared to the
                      previous formula.
                      <br />
                      (5) Clinical assessment by a dermatologist on the
                      evolution of the product’s performance on the skin
                      elasticity, comparison between the effect after 7 days and
                      28 days on 34 women.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* description End */}
      {/* similar Product start */}
      <section className="similar-product">
        <div className="container pb-5">
          <div className="heading-wrapper">
            <h5 className="bold-heading text-start mt-5">Similar Products</h5>
          </div>
          <div className="row mt-1 mb-5">
            <AllProduct />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
