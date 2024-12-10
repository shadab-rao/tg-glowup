import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  addWishlist,
  bestSeller,
  getCart,
  productList,
  wishList,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { useDispatch } from "react-redux";
import { setCartCount, setProducts, setWishlist } from "../../Redux/cartSlice";
import { Paginate } from "../Pagination/Paginate";

const BestSellerProduct = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("token-user");

  useEffect(() => {
    handleProduct();
  }, []);

  const handleProduct = async () => {
    try {
      const response = await bestSeller();
      setProductData(response?.data?.results?.products || []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
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
        handleProduct();
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

  const handleAddToCart = async ({ product, varient,attribute,value }) => {
    console.log(value);
    
    if (userToken) {
      const payload = {
        product,
        varient,
        attribute,
        value
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
      <div className="row mt-4">
        {productData?.length > 0 ? (
          productData?.map((item) => (
            <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
              <div className="comman-card">
                {userToken ? (
                  <div
                    className="heart-icon"
                    onClick={() =>
                      handleAddWishlist({
                        productId: item?._id,
                        variantId: item?.variantId,
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
                <div className="comman-card-header" onClick={() => navigate(`/product-details/${item?._id}`)}>
                  <div className="img-wrapper">
                    <img src={item?.imagesWeb?.[0]} alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div
                    className="d-flex justify-content-between"
                    onClick={() => navigate(`/product-details/${item?._id}`)}
                  >
                    <h3 className="title text-start">
                      {item?.name_en?.slice(0, 10) + "..."}
                    </h3>
                    <h3 className="price">SAR {item?.varients?.[0]?.price}</h3>
                  </div>
                  <p className="paragraph text-start" style={{cursor:"default"}}>
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
                          varient: item?.varients?.[0]?._id,
                          attribute: item?.varients?.[0]?.attribute?.[0],
                          value: item?.varients?.[0]?.value?.[0],
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
          <p className="comman-heading text-center text-danger">
            Data Not Found
          </p>
        )}
      </div>
    </>
  );
};

export default BestSellerProduct;
