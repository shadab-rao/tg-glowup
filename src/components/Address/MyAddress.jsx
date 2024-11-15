import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";

const MyAddress = () => {
  const navigate = useNavigate()
  return (
    <>
    <Header/>
      <section className="my-order">
        <div className="container mt-4 mb-5">
          <div className="row">
           <Sidebar/>
            <div className="col-lg-9 col-md-8 col-12">
              <div className>
                <div className>
                  <h5 className="text fw-bold mb-4">Default Address</h5>
                </div>
                <div className="mt-4">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                      <div className="card-box">
                        <div className="border-bottom">
                          <button className="btn btn-dark">Default</button>
                          <p className="text text-dark fw-semibold">
                            Aman Singh
                          </p>
                          <p className="text-light mb-0">
                            Al-Olaya Street, Building 15, Apartment 8Riyadh,
                            12211 Kingdom of Saudi Arabia
                          </p>
                          <p className="text-light mb-2">+971 9898978909</p>
                        </div>
                        <div className="d-flex gap-4 pt-2">
                          <button
                            className="bg-transparent text-danger fw-semibold"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Delete
                          </button>
                          <button className="bg-transparent text-primary fw-semibold" onClick={()=>navigate("/edit-address")}>
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                      <div className="card-box">
                        <div className="border-bottom">
                          <button className="btn btn-dark">Default</button>
                          <p className="text text-dark fw-semibold">
                            Aman Singh
                          </p>
                          <p className="text-light mb-0">
                            Al-Olaya Street, Building 15, Apartment 8Riyadh,
                            12211 Kingdom of Saudi Arabia
                          </p>
                          <p className="text-light mb-2">+971 9898978909</p>
                        </div>
                        <div className="d-flex gap-4 pt-2">
                          <button
                            className="bg-transparent text-danger fw-semibold"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Delete
                          </button>
                          <button className="bg-transparent text-primary fw-semibold" onClick={()=>navigate("/edit-address")}>
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="col-lg-6 col-md-8 col-12">
                    <a href className="text-primary">
                      + Add New Address
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default MyAddress;
