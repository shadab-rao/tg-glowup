import React, { useEffect, useState } from "react";
import Sidebar from "./common/Sidebar";
import Header from "./common/Header";
import { getOrders, orderDelete } from "../Api Services/glowHttpServices/glowLoginHttpServices";
import { capitalize } from "./utils/CapitalLetter";

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

  return (
    <>
      <Header />
      <section className="my-order">
        <div className="container mt-4 mb-5">
          <div className="row">
            <Sidebar />
            <div className="col-lg-9 col-md-8 col-12">
              <div>
                <h5 className="text fw-bold mb-4 text-start">My Orders</h5>
              </div>
              <div className="row">
                {orderList?.map((inven) => (
                  <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4 mb-4" key={inven?.product?._id}>
                    <div className="comman-card" style={{ cursor: "pointer" }}>
                      <div
                        className="heart-icon"
                        onClick={() => handleDelete(inven?._id)} 
                      >
                        <img src="assets/img/svg/close-icon.svg" alt="Delete" />
                      </div>
                      <div className="comman-card-header">
                        <div className="img-wrapper"  style={{ cursor: "default" }}>
                          <img src={inven?.product?.imagesWeb?.[0]} alt={inven?.product?.name_en} />
                        </div>
                      </div>
                      <div className="comman-card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3
                            className="title text-start"
                            style={{ fontSize: "15px", fontWeight: "500" }}
                          >
                            {capitalize(inven?.product?.name_en)}
                          </h3>
                          <h3
                            className="price text-start"
                            style={{ fontSize: "14px", fontWeight: "500" }}
                          >
                            SAR {inven?.amount?.toFixed(2)}
                          </h3>
                        </div>
                        <div className="mt-3">
                          <select className="form-select bg-transparent">
                            <option value>
                              {inven?.varient?.attribute?.name_en}:{" "}
                              {inven?.varient?.value?.name_en}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {orderList.length === 0 && <p className="comman-heading text-center">No Orders Found</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyOrders;
