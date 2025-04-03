import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
import {
  addressDelete,
  getAddress,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { capitalize } from "../utils/CapitalLetter";
import { useTranslation } from "react-i18next";
// import { t } from "i18next";

const MyAddress = () => {
  const {t} = useTranslation()
  const navigate = useNavigate();
  const [myAddress, setMyAddress] = useState([]);
  const userToken = localStorage.getItem("token-user");

  useEffect(() => {
    handleAddress();
  }, []);

  const handleAddress = async () => {
    if (userToken) {
      const response = await getAddress();
      const addressId = response?.data?.results?.address?.[0]?._id;
      localStorage?.setItem("address_id", addressId);
      setMyAddress(response?.data?.results?.address);
    }
  };

  const handleDelete = async (id) => {
    const response = await addressDelete(id);
    handleAddress();
  };

  return (
    <>
      <Header />
      <section className="my-order">
        <div className="container mt-4 mb-5">
          <div className="row">
            <Sidebar />

          
            <div className="col-lg-9 col-md-8 col-12">
              <div className>
                <div className="ms-5">
                  {myAddress?.length > 0 ? (
                    <h5 className="text fw-bold mb-4 text-start">
                      {t("Your Address")}
                    </h5>
                  ) : (
                    <p className="fs-4 mt-4" style={{ fontWeight: "500" }}>
                      {t("Address Not Found")}
                    </p>
                  )}
                </div>
                {/* <div className="mt-4"> */}
                {/* <div className="row"> */}
                <div
                  className="col-lg-12 ms-5 col-md-12 col-12 mt-lg-0 mt-4 d-flex gap-4"
                  style={{ flexWrap: "wrap" }}
                >
                  {myAddress?.map((item) => (
                    <div className="card-box col-lg-4 col-md-4 col-4">
                      <div className="border-bottom">
                        {/* <button className="btn btn-dark mb-2">
                              Default
                            </button> */}
                        <p className="text text-dark fw-semibold"></p>
                        <p className="text-light mb-0">
                          {capitalize(item?.street)}
                        </p>
                        {item?.phoneNumber !== "" ? (
                          <p className="text-light mb-2">
                            +{item?.countryCode} {item?.phoneNumber}
                          </p>
                        ) : (
                          <p className="text-light mb-2">..</p>
                        )}
                      </div>
                      <div className="d-flex gap-4 pt-2">
                        <button
                          className="bg-transparent text-danger fw-semibold"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => handleDelete(item?._id)}
                        >
                          {t("Delete")}
                        </button>
                        <button
                          className="bg-transparent text-primary fw-semibold"
                          onClick={() => navigate(`/edit-address/${item?._id}`)}
                        >
                          {t("Edit")}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                {/* </div> */}
                {/* </div> */}
                <div className="mt-4 ">
                  {userToken ? (
                    <div
                      className="col-lg-12 col-md-12 col-12 text-center"
                      style={{ cursor: "pointer" }}
                    >
                      <a
                        href
                        className="text-primary"
                        onClick={() => navigate("/add-address")}
                      >
                        + {t("Add New Address")}
                      </a>
                    </div>
                  ) : (
                    <div
                      className="col-lg-12 col-md-12 col-12 text-center"
                      style={{ cursor: "pointer" }}
                    >
                      <a
                        href
                        className="text-primary"
                        onClick={() => navigate("/login")}
                      >
                        + {t("Add New Address")}
                      </a>
                    </div>
                  )}
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

export default MyAddress;
