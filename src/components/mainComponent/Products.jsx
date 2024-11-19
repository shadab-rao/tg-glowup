import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productList } from "../../Api Services/glowHttpServices/glowLoginHttpServices";

const Products = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    handleProduct();
  }, []);

  const handleProduct = async () => {
    try {
      const response = await productList();
      setProductData(response?.data?.results?.products || []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
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
            <div
              className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4"
              onClick={() => navigate(`/product-details/${item?._id}`)}
            >
              <div className="comman-card">
                <div className="heart-icon">
                  <i className="fa fa-heart-o" />
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
