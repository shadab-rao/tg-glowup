import React, { useEffect, useRef, useState } from "react";
import Header from "./common/Header";
import {
  addToCart,
  addWishlist,
  getCart,
  productDetail,
  wishList,
} from "../Api Services/glowHttpServices/glowLoginHttpServices";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartCount, setWishlist } from "../Redux/cartSlice";
import AllProduct from "../components/common/AllProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';


const ProductDetail = () => {
  const [viewData, setViewData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const userToken = localStorage.getItem("token-user");
  const [selectedVariantId, setSelectedVariantId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openLight, setOpenLight] = useState(false);

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

    if (product?.imagesWeb?.[0]) {
      setSelectedImage(product.imagesWeb[0]);
    }
  };

  const handleVariantClick = (variantId) => {
    setSelectedVariantId(variantId);
  };
 
  

  const handleAddToCart = async () => {
    if (userToken && selectedVariantId) {
      const selectedVariant = viewData?.varients?.find(
        (variant) => variant._id === selectedVariantId
      );
      const attribute = selectedVariant?.attribute?.[0]?._id;
      const value = selectedVariant?.value?.[0]?._id;

      const payload = {
        product: id,
        varient: selectedVariantId,
        attribute,
        value,
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

  const getAllImages = () => {
    const allImages = new Set();

    // Add main product images
    viewData?.imagesWeb?.forEach((image) => allImages.add(image));

    // Add images from all variants
    viewData?.varients?.forEach((variant) => {
      variant.imagesWeb?.forEach((image) => allImages.add(image));
    });

    return Array.from(allImages); // Convert Set back to an array
  };

  const handleAddWishlist = async ({ productId = null, variantId = null }) => {
    try {
      const formData = {
        productId,
        variantId,
      };

      const response = await addWishlist(formData);
      if (response) {
        console.log("Wishlist updated successfully!");
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

  const handleImageClick = () => {
    console.log('Image clicked');
    setOpenLight(true);
  };
  console.log("Images in viewData:", viewData);

  

  return (
    <>
      <Header />
      <div>
        <section className="product-details">
          <div className="py-4">
            <div className="container">
              <div className="row mt-4">
                <div className="col-lg-auto col-auto d-lg-block d-md-none d-none ">
                  <div className="position-relative">
                    {getAllImages().length >= 5 && (
                      <div
                        className="slider-arrow slider-up"
                        onClick={scrollUp}
                      >
                        ▲
                      </div>
                    )}
                    <div
                      id="thumbnails"
                      ref={thumbnailsRef}
                      className="product-detail-height-overflow"
                    >
                      {getAllImages().map((image, index) => (
                        <div
                          key={index}
                          className={`thumbnail ${
                            selectedImage === image ? "active" : ""
                          } product-detail-img-wrapper mt-5`}
                          onClick={() => setSelectedImage(image)}
                          style={{ cursor: "pointer" }}
                        >
                          <img src={image} alt={`Thumbnail ${index + 1}`} />
                        </div>
                      ))}
                    </div>
                    {getAllImages().length >= 5 && (
                      <div
                        className="slider-arrow slider-down"
                        onClick={scrollDown}
                      >
                        ▼
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-5 col-md-7 col-12 me-5">
                  <div className="product-detail-main-img" onClick={handleImageClick}>
                    <img
                      src={selectedImage || viewData?.imagesWeb?.[0]}
                      alt="Selected"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="d-lg-none d-md-block mt-4 w-100">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={10}
                      slidesPerView={Math.min(getAllImages().length, 5)}
                      navigation={getAllImages()?.length >= 5}
                      centeredSlides={getAllImages()?.length < 4}
                      // pagination={{ clickable: true }}
                    >
                      {getAllImages()?.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="product-detail-img">
                            <img
                              src={image}
                              alt={`Slide ${index + 1}`}
                              style={{ width: "100%", cursor: "pointer" }}
                              onClick={() => setSelectedImage(image)}
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
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "gray",
                      }}
                    >
                      {viewData?.brand?.brandName_en}
                    </span>
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
                    <button className="comman-btn" onClick={handleAddToCart}>
                      Add to Bag
                    </button>
                    <button
                      className="comman-border-btn"
                      onClick={() =>
                        handleAddWishlist({
                          productId: viewData?._id,
                          variantId: selectedVariantId,
                        })
                      }
                    >
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
                    <p className>{viewData?.description_en}</p>
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
            <AllProduct categoryId={viewData?.category?.[0]?._id} />
          </div>
        </div>
      </section>

      <Lightbox
        open={openLight}
        close={() => setOpenLight(false)}
        plugins={[Slideshow, Fullscreen,Zoom,Thumbnails]}
        slides={[
          {
            src: selectedImage || viewData?.imagesWeb?.[0], 
            alt: "image 1",
            width: 3840,
            height: 2560,
          },
          ...viewData?.varients?.map((image, index) => ({
            src: image?.imagesOg?.[0],
            alt: `image ${index + 1}`,
            width: 3840,
            height: 2560,
          })) || [],
          
        ]}
      />
    </>
  );
};

export default ProductDetail;
