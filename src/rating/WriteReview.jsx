import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import moment from "moment";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import {
  getOrderDetails,
  getRatings,
  orderDelete,
  ratingAndReview,
} from "../Api Services/glowHttpServices/glowLoginHttpServices";

const WriteReview = () => {
  const [orderList, setOrderList] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [varientId, setVarientId] = useState("");
  const [image, setImage] = useState(null);
  const [existingRating, setExistingRating] = useState(null);
  const [existingComment, setExistingComment] = useState("");
  const [existingImage, setExistingImage] = useState("");

  const { id } = useParams();

  const handleOrders = async () => {
    const response = await getOrderDetails(id);
    setOrderList(response?.data?.results?.orders);
    const varId = response?.data?.results?.orders?.inventory?.[0]?.varient?._id;
    setVarientId(varId);
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("productId", id);
    formData.append("variantId", varientId);
    formData.append("rating", rating);
    formData.append("comment", comment);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await ratingAndReview(formData);
      console.log("Review submitted:", response);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  useEffect(() => {
    handleOrders();
    ratingData();
  }, []);

  const handleDelete = async (orderId) => {
    await orderDelete(orderId);
    handleOrders();
  };

  const ratingData = async () => {
    const response = await getRatings(varientId);

    setExistingRating(response?.data?.results?.data?.[0]?.rating);
    setExistingComment(response?.data?.results?.data?.[0]?.comment);
  };

  return (
    <>
      <Header />
      <section className="my-order">
        <div className="container mt-4 mb-5">
          <div className="row">
            <Sidebar />
            <div className="col-lg-6 col-md-8 col-12 mt-md-0 mt-4">
              <div className>
                <div className>
                  <h5 className="text fw-bold mb-4 text-start">
                    Order Details
                  </h5>
                  <div className="mt-4">
                    {orderList?.inventory?.map((item) => (
                      <div className="Checkout-box mt-3 bg-white">
                        <div className="row">
                          <div className="col-md-auto col-4">
                            <div className="Checkout-box-img">
                              <img src={item?.product?.imagesWeb?.[0]} alt />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-7 col-8 px-lg-auto px-md-0 text-start">
                            <h6 className="Checkout-box-head">
                              {item?.product?.name_en}
                            </h6>
                            <p className="normal-text">
                              {item?.product?.description_en}
                            </p>
                            <h5 className="checkbox-price">
                              SAR {item?.amount}
                            </h5>
                            <div className="checkbox-span-text">
                              <span className="normal-text border-end pe-1">
                                {item?.attributeAndValues?.[0]?.name_en ||
                                  "N/A"}
                                :{" "}
                                {item?.attributeAndValues?.[1]?.name_en || "0"}
                              </span>
                              <span className="normal-text ps-1">
                                Quantity: {item?.quantity}
                              </span>
                            </div>
                            <p className="normal-text">
                              Subtotal: SAR {item?.amount}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="card-box">
                    <div className="card-box-header">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-12">
                            <div class="">
                              <div class="">
                                <div className="text-start">
                                  <div className="bg-white rounded-3 p-3">
                                    <div className="mb-4 pb-2 border-bottom">
                                      <h2 className="text fw-semibold">
                                        How would you rate this product?
                                      </h2>
                                      <div className="d-flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                          <img
                                            key={star}
                                            src={
                                              star <= (existingRating || rating)
                                                ? "../../assets/img/star_filled.svg"
                                                : "../../assets/img/star-bg.svg"
                                            }
                                            alt=""
                                            onClick={() => {
                                              if (!existingRating)
                                                setRating(star);
                                            }}
                                            style={{
                                              cursor: existingRating
                                                ? "not-allowed"
                                                : "pointer",
                                            }}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <h2 className="text fw-semibold">
                                        Share Photo now!
                                        <span>
                                          <img
                                            src="../../assets/img/info-circle.svg"
                                            alt
                                          />
                                        </span>
                                      </h2>
                                      <p className="text-light fw-normal text-sm">
                                        Add your product experiences with photo
                                      </p>
                                    </div>
                                    <div className="mt-2">
                                      <div className="border border-dark rounded-3 bg-light py-4 position-relative">
                                        <input
                                          type="file"
                                          name="image"
                                          onChange={(e) =>
                                            setImage(e.target.files[0])
                                          }
                                          className="opacity-0 position-absolute top-0 start-0 w-100 h-100"
                                          disabled={
                                            !!existingComment ||
                                            !!existingRating
                                          }
                                        />
                                        <div className="d-flex justify-content-center">
                                          {image?.name ? (
                                            <p>{image?.name}</p>
                                          ) : (
                                            <img
                                              src="../../assets/img/camera.svg"
                                              className="mx-auto"
                                              alt=""
                                            />
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mt-2">
                                      <label
                                        htmlFor
                                        className="text fw-semibold"
                                      >
                                        Write Review
                                      </label>
                                      <textarea
                                        className="mt-2 form-control border-dark"
                                        rows={4}
                                        placeholder="Write your review here..."
                                        value={existingComment || comment}
                                        onChange={(e) =>
                                          setComment(e.target.value)
                                        }
                                        disabled={!!existingComment}
                                      />
                                    </div>
                                  </div>
                                  <div className="mt-4 col-md-8">
                                    <button
                                      className="comman-btn"
                                      onClick={handleSubmit}
                                      disabled={
                                        !!existingRating || !!existingComment
                                      }
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WriteReview;
