import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addWishlist,
  productList,
  wishList,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { useDispatch } from "react-redux";
import { setProducts, setWishlist } from "../../Redux/cartSlice";

const Products = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    handleProduct();
  }, [dispatch]);

  const handleProduct = async () => {
    try {
      const response = await productList();
      const products = response?.data?.results?.products || [];
      setProductData(response?.data?.results?.products || []);
      dispatch(setProducts(products));
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

  return (
    <>
      <div className="container mb-5">
        <div className="heading-wrapper">
          <h5 className="bold-heading">Beauty Must Haves</h5>
          <p className="light-heading">Bestsellers Products</p>
        </div>
        <div className="row mt-4">
          {productData?.map((item) => (
            <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
              <div className="comman-card">
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
                {/* <div className="new-label">
                  <p className>New</p>
                </div> */}
                <div className="comman-card-header">
                  <div className="img-wrapper">
                    <img src={item?.imagesWeb?.[0]} alt />
                  </div>
                </div>
                <div className="comman-card-body">
                  <div
                    className="d-flex justify-content-between"
                    onClick={() => navigate(`/product-details/${item?._id}`)}
                  >
                    <h3 className="title">{item?.name_en}</h3>
                    <h3 className="price">SAR {item?.price}</h3>
                  </div>
                  <p className="paragraph text-start">
                    {item?.description_en?.slice(0, 30) + "..."}
                  </p>
                  <div className="mt-4">
                    <div className="review-wrapper">
                      <i className="fa fa-star text-warning" />
                      <span className="review-points">4.9</span>
                      <span className="review-text">250+ Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
