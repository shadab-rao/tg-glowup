import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./common/Header";
import { addToCart, wishList } from "../Api Services/glowHttpServices/glowLoginHttpServices";
import { useDispatch } from "react-redux";
import { setWishlist } from "../Redux/cartSlice";

const MyWishlist = () => {
  const [wishData, setWishData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("token-user");

  useEffect(() => {
    handleWishList();
  }, []);

  const handleWishList = async () => {
    const response = await wishList();
    const wishlistData = response?.data?.results?.wishlist?.product || [];
    setWishData(response?.data?.results?.wishlist?.product);
    dispatch(setWishlist(wishlistData));
  };

  
  const handleAddToCart = async ({ product, varient }) => {
    if(userToken){
     const payload = {
       product,
       varient,
     };
     const response = await addToCart(payload);
    //  handleCart()
    }else{
     navigate("/login")
    }
   };
  return (
    <>
      <Header />
      <section className="your-recently-viewd">
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="heading-wrapper">
              <h5 className="text mb-4 text-light text-start">
                Items are saved for 90 days
              </h5>
            </div>
            {wishData?.map((item) => (
              <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4" key={item?._id}>
                <div className="comman-card">
                  <div className="heart-icon">
                    <img src="assets/img/svg/close-icon.svg" alt />
                  </div>
                  <div className="comman-card-header">
                    <div className="img-wrapper">
                      <img src={item?.imagesWeb?.[0]} alt />
                    </div>
                  </div>
                  <div className="comman-card-body">
                    <div className="d-flex justify-content-between">
                      <h3 className="title">{item?.name_en}</h3>
                      <h3 className="price">{item?.currency} {item?.price}</h3>
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
                    <div className="mt-3">
                      <select className="form-select bg-transparent">
                        <option value>Size: One Size</option>
                      </select>
                    </div>
                    <div className="mt-3">
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
      </section>
    </>
  );
};

export default MyWishlist;
