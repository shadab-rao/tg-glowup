import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import {
  getOrderDetails,
  getOrders,
  orderDelete,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import Footer from "../common/Footer";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

const OrderDetails = () => {
  const [orderList, setOrderList] = useState([]);
  const { id } = useParams();

  // Fetch orders
  useEffect(() => {
    handleOrders();
  }, []);

  const handleOrders = async () => {
    const response = await getOrderDetails(id);
    setOrderList(response?.data?.results?.orders);
  };

  const handleDelete = async (orderId) => {
    await orderDelete(orderId);
    handleOrders();
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
                </div>
                <div className="mt-4">
                  <div className="card-box">
                    <div className="card-box-header">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-12">
                            <div className="row">
                              <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0 text-start">
                                <p className="comman-small-text m-0 text-light">
                                  Order Date
                                </p>
                                <p className="comman-small-text m-0 text-dark fw-semibold">
                                  {moment(orderList?.createdAt).format(
                                    "YYYY-MM-DD"
                                  )}
                                </p>
                              </div>
                              <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0 text-start">
                                <p className="comman-small-text m-0 text-light">
                                  Price
                                </p>
                                <p className="comman-small-text m-0 text-dark fw-semibold">
                                  SAR {orderList?.totalAmount}
                                </p>
                              </div>
                              <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0 text-start">
                                <p className="comman-small-text m-0 text-light">
                                  Order
                                </p>
                                <p className="comman-small-text m-0 text-dark fw-semibold">
                                  #56YFJHE377549
                                </p>
                              </div>
                              <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0 text-start">
                                <p className="comman-small-text m-0 text-light">
                                  Status
                                </p>
                                <p className="comman-small-text m-0 text-success fw-semibold">
                                  {orderList?.status}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="text fw-bold">Expected Delivery Sept 30 </h5>
                    <p className="m-0 comman-small-text text-dark">
                      Track
                      <i className="fa fa-arrow-right" />
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="card-box px-4 py-4">
                    <div className="card-box-header">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-12">
                            <div className="row justify-content-between position-relative circle-point-wrapper">
                              <div className="col-auto px-0 position-relative">
                                <div className="circle-point first active" />
                                <p className="comman-small-text m-0 text-light">
                                  Processing
                                </p>
                              </div>
                              <div className="col-auto px-0 position-relative">
                                <div className="circle-point" />
                                <p className="comman-small-text m-0 text-light">
                                  Shipped
                                </p>
                              </div>
                              <div className="col-auto px-0 position-relative">
                                <div className="circle-point" />
                                <p className="comman-small-text m-0 text-light">
                                  Out for Delivery
                                </p>
                              </div>
                              <div className="col-auto px-0 position-relative">
                                <div className="circle-point end" />
                                <p className="comman-small-text m-0 text-light">
                                  Delivered
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  {orderList?.inventory?.map((item) => (
                    <div className="Checkout-box mt-3 bg-white">
                      <div className="row">
                        <div className="col-md-auto col-4">
                          <div className="Checkout-box-img">
                            <img
                              src={item?.product?.imagesWeb?.[0]}
                              alt
                            />
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-8 px-lg-auto px-md-0 text-start">
                          <h6 className="Checkout-box-head">{item?.product?.name_en}</h6>
                          <p className="normal-text">{item?.product?.description_en}</p>
                          <h5 className="checkbox-price">SAR {item?.amount}</h5>
                          <div className="checkbox-span-text">
                            <span className="normal-text border-end pe-1">
                              Size: 25 ML
                            </span>
                            <span className="normal-text ps-1">
                              Quantity: 1
                            </span>
                          </div>
                          <p className="normal-text">Subtotal: SAR {item?.amount}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  col-12 mt-lg-0 mt-md-4 mt-4 text-start">
              <div className>
                <h5 className="text fw-bold mb-2 ms-1">Payment Method</h5>
              </div>
              <div className="card-box rounded-3 mb-3">
                <p className="comman-small-text m-0">{orderList?.paymentMethod}</p>
              </div>
              <div className>
                <h5 className="text fw-bold mb-1 mt-4 ms-1 mt-2">Delivery Address</h5>
              </div>
              <div className="card-box">
                {/* <p className="comman-small-text  fw-semibold">
                  Mohammed bin Ali
                </p> */}
                <p className="comman-small-text m-0">
                 {orderList?.address?.street }, {orderList?.address?.city}, {orderList?.address?.pinCode}, {orderList?.address?.cpuntry}
                </p>
                <p className="comman-small-text">+971 34567865</p>
              </div>
              <div className="mt-3">
                <h5 className="Checkout-main-heading ms-1 mt-5">Price Details</h5>
                <div className="Checkout-box mt-1 px-3 py-3 bg-white">
                  <div className="row">
                    <div className="col-6">
                      <p className="light-text">Subtotal</p>
                    </div>
                    <div className="col-6">
                      <p className="bold-text">SAR {orderList?.totalAmount}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="light-text">Tax</p>
                    </div>
                    <div className="col-6">
                      <p className="bold-text">0</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="light-text">Grand Total</p>
                    </div>
                    <div className="col-6">
                      <p className="bold-text">SAR {orderList?.totalAmount}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  {/* <div className="mb-4">
                    <button className="comman-btn">Checkout Now</button>
                  </div> */}
                  <Link className="mb-4" to={"/my-order/reason-for-cancel"} state={id}>
                    <button className="comman-border-btn bg-transparent">
                      Cancel Order
                    </button>
                  </Link>
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

export default OrderDetails;
