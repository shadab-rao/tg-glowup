import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "react-phone-input-2/lib/style.css";

import {
  address,
  addressDelete,
  getAddress,
  getCart,
  placeOrder,
  updateCart,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { useLocation, useNavigate } from "react-router-dom";
import { capitalize } from "../utils/CapitalLetter";
import PhoneInput from "react-phone-input-2";

const CheckOut = () => {
  const [addressId, setAddressId] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [myAddressList, setMyAddressList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const userToken = localStorage.getItem("token-user");
  const userPhone = localStorage.getItem("user-phone");
  const userCountryCode = localStorage.getItem("user-countryCode") || "sa";
  const [phoneNumber, setPhoneNumber] = useState(userCountryCode + userPhone);
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    street: "",
    countryCode: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    type: "Home",
  });

  console.log(state);

  const attribute = state?.selectedOptions?.attribute;
  const value = state?.selectedOptions?.value;

  const handlePhoneChange = (value, country) => {
    setPhoneNumber(value);
    setFormData((prev) => ({
      ...prev,
      phoneNumber: value,
      countryCode: country?.dialCode || "",
    }));
  };

 

  const handleCheckboxChange = (id) => {
    if (selectedAddress === id) {
      setSelectedAddress(null); 
    } else {
      setSelectedAddress(id);
    }
  };

  // useEffect(() => {
  //   if (myAddress) {
  //     setFormData({
  //       name: myAddress.name || "",
  //       phoneNumber: myAddress.phoneNumber,
  //       street: myAddress.street || "",
  //       countryCode: myAddress.countryCode || "",
  //       city: myAddress.city || "",
  //       state: myAddress.state || "",
  //       country: myAddress.country || "",
  //       pinCode: myAddress.pinCode || "",
  //       type: myAddress.type || "Home",
  //     });
  //   }
  // }, [myAddress]);

  // const handleViewAddress = async () => {
  //   if (userToken) {
  //     const response = await getAddress();
  //     const address = response?.data?.results?.address?.[0] || {};

  //     setMyAddress(address);
  //     const addressId = address?._id;
  //     if (addressId) {
  //       localStorage.setItem("address_id", addressId);
  //       setAddressId(addressId);
  //     }
  //   }
  // };


  useEffect(() => {
    handleListAddress();
  }, []);


 

  const handleListAddress = async () => {
    if (userToken) {
      const response = await getAddress();
      setMyAddressList(response?.data?.results?.address);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddress = async () => {
    const rawPhoneNumber = phoneNumber.replace(formData.countryCode, "").trim();
    const payload = {
      fullName: formData.name,
      phoneNumber: rawPhoneNumber,
      countryCode: formData.countryCode,
      city: formData.city,
      street: formData.street,
      state: formData.state,
      country: formData.country,
      pinCode: formData.pinCode,
      type: formData.type,
      saveToProfile:formData.saveToProfile
    };
    try {
      const response = await address(payload);
      const newAddressId = response?.data?.results?.address?._id;
      setAddressId(newAddressId);
      handleListAddress();

      if(response){
        setFormData({
          name: "",
          phoneNumber: "",
          street: "",
          countryCode: "",
          city: "",
          state: "",
          country: "",
          pinCode: "",
          type: "Home",
          saveToProfile:false
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(state);
  

  const handlePlaceOrder = async () => {
    const payload = {
      ...state,
      address: selectedAddress,
      attribute,
      value,
    };

    try {
      const response = await placeOrder(payload);
      if (selectedAddress) {
        navigate("/my-order");
      } else {
        navigate("/checkout");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };




  useEffect(() => {
    if (userToken) {
      handleCart();
    }
  }, []);

  const handleCart = async () => {
    if (userToken) {
      const response = await getCart();
      const cartItems = response?.data?.results?.cart?.inventory || [];
      setCartData(cartItems);
      setTotalPrice(response?.data?.results?.cart?.amount || "0");
    }
  };

  const handleDeleteAddress = async (id) => {
    const response = await addressDelete(id);
    handleListAddress();
  };

  return (
    <>
      <Header />
      <section className="Checkout">
        <div className="bg-white">
          <div className="container pt-4 mb-4">
            <div className="d-flex justify-content-center">
              <div className="mt-4">
                <h3 className="Checkout-heading">Checkout</h3>
                <div className="d-flex rounded-box-wrapper">
                  <div className="rounded-box">1</div>
                  <div className="rounded-box">2</div>
                  <div className="rounded-box">3</div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 col-md-4 col-12 mt-md-0 mt-4 text-start">
                <h5 className="Checkout-main-heading">
                  1. Delivery Information
                </h5>
                <p className="Checkout-paragraph">
                  Select address from your address book or enter new address.
                </p>

                <div className="form-group mb-4">
                  <div className="d-flex gap-1 align-items-end">
                    <img
                      src="assets/img/icon/direction.png"
                      alt
                      className="direction-img"
                    />
                    <a href className="comman-link">
                      Use My Current location
                    </a>
                  </div>
                </div>

                <div
                  className="col-lg-12  col-md-12 col-12 mt-lg-0 mt-4 d-flex gap-4"
                  style={{ flexWrap: "wrap" }}
                  // style={{
                  //   flexWrap: "wrap",
                  //   maxHeight: "300px",  
                  //   overflowY: "auto",  
                  // }}
                >
                  {myAddressList?.map((item) => (
                    <div
                      className="card-box col-lg-8 col-md-8 col-12"
                      style={{ background: "rgb(227 226 226)", color: "white" }}
                    >
                      <h5 className="mb-3" style={{color:"black"}}>{item?.type}</h5>
                      <div className="border-bottom" style={{ color: "white" }}>
                        {/* <button className="btn btn-dark mb-2">
                            Default
                          </button> */}
                        <p className="text text-dark fw-semibold"></p>
                        <p className="text-dark mb-0">{capitalize(item?.street)},</p>
                        <p className="text-dark mb-0">{item?.pinCode}</p>
                        <p className="text-dark mb-2">
                          +{item?.user?.countryCode} {item?.user?.phoneNumber}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between gap-4 pt-2">
                        <div className="form-design">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            checked={selectedAddress === item._id} 
                            onChange={() => handleCheckboxChange(item._id)} 
                          />
                        </div>
                        <div>
                          <button
                            className="bg-transparent text-danger me-3 fw-semibold"
                            // data-toggle="modal"
                            // data-target="#exampleModal"
                            onClick={() => handleDeleteAddress(item?._id)}
                          >
                            Delete
                          </button>
                          <button
                            className="bg-transparent text-primary fw-semibold"
                            onClick={() => navigate(`/edit-address/${item?._id}`)}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 col-lg-8 col-md-10 text-end me-4 mb-3">
                  <button
                    className="comman-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Add New Address
                  </button>
                </div>
                {/* {myAddress  && myAddress.length > 0  ?  ( */}
                {/* <div className="mt-4">
                  <button className="comman-btn" onClick={handleAddress}>
                    Save Address
                  </button>
                </div> */}
                {/* ) : null */}
                {/* } */}
              </div>

              <div className="col-lg-4 col-md-4 col-12 mt-md-0 mt-4 text-start">
                <h5 className="Checkout-main-heading">
                  2. Payment Information
                </h5>
                <p className="Checkout-paragraph">Select Payment mode</p>
                <div className="form-design">
                  <input
                    type="radio"
                    id="test1"
                    name="radio-group"
                    defaultChecked
                  />
                  <label
                    htmlFor="test1"
                    className="form-label fs-6 fw-semibold text-dark"
                  >
                    Credit/Debit Card
                  </label>
                </div>
                <div className="form-design">
                  <div className="form-group">
                    <div className="d-flex gap-4">
                      <div className="cart-img-wrapper">
                        <img src="assets/img/Visa.png" alt />
                      </div>
                      <div className="cart-img-wrapper">
                        <img src="assets/img/card-img.png" alt />
                      </div>
                      <div className="cart-img-wrapper">
                        <img src="assets/img/american_express.png" alt />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Card Number"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <div className>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Valid Thru"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="d-flex gap-2 align-items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        defaultChecked
                      />
                      <span className="form-label m-0">
                        Securely save details for future purchases.{" "}
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-design">
                      <input type="radio" id="test1" name="radio-group" />
                      <label
                        htmlFor="test1"
                        className="form-label fs-6 fw-semibold text-dark"
                      >
                        Apple Pay
                      </label>
                      <img src="assets/img/a-pay.png" alt className="pay-img" />
                    </div>
                    <div className="form-design">
                      <input type="radio" id="test1" name="radio-group" />
                      <label
                        htmlFor="test1"
                        className="form-label fs-6 fw-semibold text-dark"
                      >
                        PayPal
                      </label>
                      <img
                        src="assets/img/paypal.png"
                        alt
                        className="pay-pal-img"
                      />
                    </div>
                    <div className="form-design">
                      <input type="radio" id="test1" name="radio-group" />
                      <label
                        htmlFor="test1"
                        className="form-label fs-6 fw-semibold text-dark"
                      >
                        Cash On Delivery
                      </label>
                      <p className="ps-4 light-text">
                        The additional fee fo this service is SAR 50
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12 mt-md-0 mt-4 text-start">
                <h5 className="Checkout-main-heading">3. Order Review</h5>
                <p className="Checkout-paragraph">Review your order here</p>
                <div
                  style={{
                    maxHeight: "600px",
                    overflowY: "auto",
                    overflowX: "hidden",
                  }}
                >
                  {cartData?.map((items) => (
                    <div className="Checkout-box mt-3">
                      <div className="row">
                        <div className="col-md-auto col-4">
                          <div className="Checkout-box-img">
                            <img src={items?.varient?.imagesWeb?.[0]} alt="" />
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-6 col-8 px-lg-auto px-md-0">
                          <h6 className="Checkout-box-head">
                            {items?.product?.name_en}
                          </h6>
                          <p className="normal-text">
                            {(items?.product?.description_en).slice(0, 20)}
                          </p>
                          <h5 className="checkbox-price">
                            {items?.product?.currency} {items?.varient?.price}
                          </h5>
                          <div className="checkbox-span-text">
                            <span className="normal-text border-end pe-1">
                              {items?.varient?.attribute?.[0]?.name_en}:{" "}
                              {items?.varient?.values?.[0]?.name_en}
                            </span>
                            <span className="normal-text ps-1">
                              Quantity: {items?.quantity}
                            </span>
                          </div>
                          <p className="normal-text">
                            Subtotal: {items?.product?.currency} {items?.amount}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <h5 className="Checkout-main-heading">Price Details</h5>
                  <div className="Checkout-box mt-3 px-3 py-3">
                    <div className="row">
                      <div className="col-6">
                        <p className="light-text">Subtotal</p>
                      </div>
                      <div className="col-6">
                        <p className="bold-text">SAR {totalPrice}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <p className="light-text">Tax</p>
                      </div>
                      <div className="col-6">
                        <p className="bold-text">SAR 0</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <p className="light-text">Grand Total</p>
                      </div>
                      <div className="col-6">
                        <p className="bold-text">SAR {totalPrice}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-4">
                      <button className="comman-btn"  style={{ opacity: selectedAddress ? 1 : 0.5 }}  onClick={handlePlaceOrder} disabled={!selectedAddress}>
                        Checkout Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body text-start">
              <h5 class="comman-header mt-4">Add Address</h5>
              <p class="comman-small-text text-dark">
                Enter New address
              </p>
              <div className="form-design">
                <div className="form-group mb-3">
                  <label className="form-label">Full Name*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="name"
                    value={capitalize(formData.name)}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group ">
                  <label className="form-label">Phone Number (Optional)</label>
                  <PhoneInput
                    containerClass="react-tel-input text-start"
                    inputClass="form-control"
                    country="sa"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    enableSearch={true}
                    disableSearchIcon={false}
                    buttonClass="phone-input-button"
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: true,
                    }}
                  />
                </div>
                {/* <div className="form-group">
                    <label className="form-label">Phone Number*</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="+971 505 789 9890"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div> */}
                <div className="form-group mt-3 mb-3">
                  <div className="d-flex gap-1 align-items-end">
                    <img
                      src="assets/img/icon/direction.png"
                      alt
                      className="direction-img"
                    />
                    <a href className="comman-link">
                      Use My Current location
                    </a>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Street*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="street"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label">City*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City Name"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label">State*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State Name"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label">Country*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country Name"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label">Pincode*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pincode"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Address Type*</label>
                  <select
                    className="form-select"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                  </select>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <input
                     type="checkbox"
                     className="form-checkbox"
                     name="saveToProfile"
                     checked={formData.saveToProfile}
                     onChange={handleChange}
                  />
                  <span className="form-label mt-2">Save in my profile</span>
                </div>
              </div>
            </div>
            <div class="modal-footer border-0">
              <button
                type="button"
                className="comman-btn"
                onClick={() => handleAddress()}
                data-bs-dismiss="modal"
              >
                Save Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
