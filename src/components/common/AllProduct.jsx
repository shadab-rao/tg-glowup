import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  addWishlist,
  getCart,
  productList,
  wishList,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { useDispatch } from "react-redux";
import { setCartCount, setProducts, setWishlist } from "../../Redux/cartSlice";
import { Paginate } from "../Pagination/Paginate";

const AllProduct = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState();
  const userToken = localStorage.getItem("token-user");

  useEffect(() => {
    handleProduct();
  }, [dispatch, currentPage]);

  const handleProduct = async () => {
    try {
      const response = await productList({ pageSize: 10, page: currentPage });
      setPageData(response?.data?.results);
      const products = response?.data?.results?.products || [];
      setProductData(response?.data?.results?.products || []);
      dispatch(setProducts(products));
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const totalPages = pageData?.totalPages || 1;
  const totalDocs = pageData?.total || 1;
  const itemsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
        <div className="d-flex align-items-center justify-content-between flex-wrap pt-3 pb-3">
          <Paginate
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            records={productData?.products}
            totalList={totalDocs}
          />
        </div>
      </div>
    </>
  );
};

export default AllProduct;
