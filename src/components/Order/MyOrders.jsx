import React, { useEffect, useState } from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import {
  getOrders,
  orderDelete,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";

const MyOrders = () => {
  const [orderList, setOrderList] = useState([]);

  // Fetch orders
  useEffect(() => {
    handleOrders();
  }, []);

  const handleOrders = async () => {
    const response = await getOrders();
    const orderLoop = response?.data?.results?.orders?.flatMap((order) =>
      order?.inventory?.map((inven) => ({ ...inven, order_id: order?._id }))
    );
    setOrderList(orderLoop);
  };

  const handleDelete = async (orderId) => {
    await orderDelete(orderId);
    handleOrders();
  };

  console.log(orderList);
  

  return (
    <>
      <Header />
      <section className="my-order">
        <div className="container mt-4 mb-5">
          <div className="row">
            <Sidebar />
            <div className="col-lg-9 col-md-8 col-12">
              <div className>
                <div className>
                  <h5 className="text fw-bold  text-start">
                    Your latest Order
                  </h5>
                </div>
                <div className="mt-2">
                  <div className="card-box">
                    <div className="card-box-header">
                      {orderList?.map((item) => (
                        <div className="container">
                          <div className="row border-bottom pb-2">
                            <div className="col-lg-9 col-md-11 mt-2 col-11">
                              <div className="row">
                                <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0  text-start">
                                  <p className="comman-small-text m-0 text-light">
                                    Order Date
                                  </p>
                                  <p className="comman-small-text m-0 text-dark fw-semibold">
                                   {item?.createdAt}
                                  </p>
                                </div>
                                <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0  text-start">
                                  <p className="comman-small-text m-0 text-light">
                                    Price
                                  </p>
                                  <p className="comman-small-text m-0 text-dark fw-semibold">
                                    SAR {item?.amount}
                                  </p>
                                </div>
                                <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0  text-start">
                                  <p className="comman-small-text m-0 text-light">
                                    Order
                                  </p>
                                  <p className="comman-small-text m-0 text-dark fw-semibold">
                                    {item?.order_id}
                                  </p>
                                </div>
                                <div className="col-md-3 col-6 mt-md-0 mt-3 px-lg-auto px-0  text-start">
                                  <p className="comman-small-text m-0 text-light">
                                    Status
                                  </p>
                                  <p className="comman-small-text m-0 text-success fw-semibold">
                                    {item?.transactionStatus || "..."}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <Link
                              className="col-lg-3 col-md-1 col-1 px-0 text-end"
                              to={`/my-order/details/${item?.order_id}`}
                            >
                              <i className="fa fa-angle-right" />
                            </Link>
                          <div className=" mt-4">
                            <div className="row">
                              <div className="col-lg-2 col-md-3 col-4">
                                <img
                                src={item?.product?.imagesWeb?.[0]}
                                  alt
                                  className="w-100 h-fit"
                                />
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                      ))}
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

export default MyOrders;
