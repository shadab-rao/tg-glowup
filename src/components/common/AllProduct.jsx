import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const AllProduct = ({subcategoryId}) => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState();
  const userToken = localStorage.getItem("token-user");
  const {id} = useParams()

  useEffect(() => {
    handleProduct();
  }, [dispatch, currentPage,id,subcategoryId]);

  const handleProduct = async () => {
      try {
        const payload = {
          search: "",
          category: id,
          subCategory:subcategoryId,
          // isFeatured: true,
          // attribute: "6734a95f7ea8bf353ceade54",
          // value: "6734a9817ea8bf353ceade63",
          pageSize: 10,   
          page: currentPage,
        };
      const response = await productList(payload)
      setPageData(response?.data?.results);
      const products = response?.data?.results?.products || [];
      setProductData(response?.data?.results?.products || []);
      dispatch(setProducts(products));
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  console.log(productData);
  

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
        {productData?.length > 0 ?  (productData?.map((item) => (
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
                        varient: item?.varients?.[0]?._id,
                      })
                    }
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))) : <p  style={{fontWeight:"500",fontSize:"18px"}}>No Product Available</p>}
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
