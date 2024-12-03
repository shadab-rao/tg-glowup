import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cancelOrder } from "../../Api Services/glowHttpServices/glowLoginHttpServices";

const OrderCancelReason = () => {
  const [selectedReason, setSelectedReason] = useState("Change of Preference");
  const navigate = useNavigate();
  const { state } = useLocation();

  // useEffect(() => {
  //   const handleModalClose = () => {
  //     const backdrops = document.querySelectorAll(".modal-backdrop");
  //     backdrops.forEach((backdrop) => backdrop.remove());
  //     document.body.classList.remove("modal-open");
  //   };
  //   const modals = document.querySelectorAll(".modal");
  //   modals.forEach((modal) => {
  //     modal.addEventListener("hidden.bs.modal", handleModalClose);
  //   });

  //   return () => {
  //     modals.forEach((modal) => {
  //       modal.removeEventListener("hidden.bs.modal", handleModalClose);
  //     });
  //   };
  // }, []);

  const handleCancel = async () => {
    const response = await cancelOrder(state, { reason: selectedReason });
  };

  const handleReasonChange = (e) => {
    setSelectedReason(e.target.value);
  };

  return (
    <>
      <Header />
      <section className="reson-for-cancel">
        <div className="container mt-4 mb-4">
          <div className="row">
            <Sidebar />
            <div className="col-lg-4 col-md-6 col-12 mt-md-0 mt-4 text-start">
              {[
                "Change of Preference",
                "Wrong Shade/Color",
                "Allergic Reaction Concern",
                "Price Concerns",
                "Something Else",
              ].map((reason, index) => (
                <div
                  key={index}
                  className="border border-2 border-dark rounded-3 py-3 px-4 mt-3"
                >
                  <div className="form-design">
                    <input
                      type="radio"
                      id={`reason-${index}`}
                      name="radio-group"
                      value={reason}
                      checked={selectedReason === reason}
                      onChange={handleReasonChange}
                    />
                    <label
                      htmlFor={`reason-${index}`}
                      className="form-label fs-6 fw-semibold text-dark"
                    >
                      {reason}
                    </label>
                  </div>
                  <p className="comman-small-text text-dark">
                    {reason === "Change of Preference"
                      ? "I changed my mind and no longer want the makeup product."
                      : reason === "Wrong Shade/Color"
                      ? "I accidentally ordered the wrong shade or color."
                      : reason === "Allergic Reaction Concern"
                      ? "I realized I might be allergic to the ingredients in the product."
                      : reason === "Price Concerns"
                      ? "I found the same makeup product at a lower price elsewhere."
                      : "I have another reason for canceling this order, which is not listed above."}
                  </p>
                </div>
              ))}
              <div className="mt-3">
                <button
                  className="comman-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Cancel Now
                </button>
              </div>
              <Link className="mt-3" onClick={() => navigate(-1)}>
                <button className="comman-border-btn bg-transparent">
                  I don’t want to Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="logout-img">
                <img src="../../../assets/img/cancel.png" alt="" />
              </div>
              <h5 class="comman-header mt-4 text-start">Cancel Order</h5>
              <p class="comman-small-text text-dark text-start">
                Cancel Order, Are you sure you want to cancel this order?
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="comman-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleConfirmModal"
                data-bs-dismiss="modal"
                onClick={handleCancel}
              >
                Yes, I want to cancel
              </button>

              <button
                type="button"
                class="comman-border-btn mt-3"
                data-bs-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleConfirmModal"
        tabindex="-1"
        aria-labelledby="exampleConfirmModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body text-start">
              <h5 class="comman-header mt-4">Order Canceled</h5>
              <p class="comman-small-text text-dark">
                Your order was cancelled. We’re sorry for any inconvenience.
              </p>
            </div>
            <div class="modal-footer border-0">
              <button
                type="button"
                className="comman-btn"
                data-bs-dismiss="modal"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Shop for More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCancelReason;
