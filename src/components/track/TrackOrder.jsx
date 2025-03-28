import React, { useEffect, useState } from "react";
import Header from ".././common/Header";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import { getTrackOrders } from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { useParams } from "react-router-dom";

const TrackOrder = () => {
  const { id } = useParams();
  const [trackData, setTrackData] = useState([]);

  useEffect(() => {
    handleTrack();
  }, []);

  const handleTrack = async () => {
    const response = await getTrackOrders("67e53231b4c9b9a9b50da440");
    if (response?.data?.results?.data?.history) {
      setTrackData(response?.data.results.data.history);
    }
  };
  return (
    <>
      <main>
        <Header />
        <section className="reson-for-cancel">
          <div className="container mt-4 mb-4">
            <div className="row">
              <Sidebar />
              <div className="col-lg-6 col-md-8 col-12 mt-md-0 mt-4 text-start">
                <h5 className="Checkout-main-heading">Track Package</h5>
                <div className="card-box rounded-3 mt-2">
                  <span className="comman-small-text text-light">
                    Expected Delivery on{" "}
                  </span>
                  <span className="comman-small-text text-dark">
                    28 Sept, 2024
                  </span>
                </div>
                <h5 className="Checkout-main-heading mt-4">
                  Expected Delivery Sept 30{" "}
                </h5>
                <div className="mt-2">
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
                <h5 className="Checkout-main-heading mt-4">Shipment History</h5>
                <div className="card-box rounded-3 mt-2">
                  <div className="order-details-wrapper">
                    <ul className="order-details-list">
                      {trackData.length > 0 ? (
                        trackData.map((item, index) => (
                          <li
                            key={item._id}
                            className={
                              index === 0
                                ? "first active"
                                : index === trackData.length - 1
                                ? "end"
                                : "active"
                            }
                          >
                            {item.status}
                            <p>{item.timestamp}</p>
                          </li>
                        ))
                      ) : (
                        <li>No tracking history found</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TrackOrder;
