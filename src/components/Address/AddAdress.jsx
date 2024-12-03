import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../common/Sidebar";
import {
  address,
  getAddress,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { type } from "@testing-library/user-event/dist/type";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";


const AddAdress = () => {
  const userPhone = localStorage.getItem("user-phone");
  const userCountryCode = localStorage.getItem("user-countryCode") || "sa";
  const [phoneNumber, setPhoneNumber] = useState(userCountryCode + userPhone);
  const navigate = useNavigate();

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

  const handlePhoneChange = (value, country) => {
    setPhoneNumber(value);
    setFormData((prev) => ({
      ...prev,
      countryCode: country.dialCode,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddress = async () => {
    const payload = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      countryCode: formData.countryCode,
      city: formData.city,
      street: formData.street,
      state: formData.state,
      country: formData.country,
      pinCode: formData.pinCode,
      type: formData.type,
    };
    try {
      const response = await address(payload);
      if(response){
        navigate("/my-address")
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
                <h5 className="text fw-bold mb-1 text-start">Contact info</h5>
                <div className="card-box">
                  <div className="form-design">
                    <div className="row text-start">
                      <div className="col-lg-6 col-12 mt-lg-0 mt-4">
                        <div className="form-group">
                          <label className="form-label">Full Name*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      {/* <div className="col-lg-6 col-12 mt-lg-0 mt-4">
                        <div className="form-group">
                          <label className="form-label">Country Code*</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="+91"
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 mt-lg-0 mt-4">
                        <div className="form-group">
                          <label className="form-label">Phone Number*</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="+971 505 789 9890"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div> */}

                      <div className="form-group">
                        <label className="form-label">
                          Phone Number (Optional)
                        </label>
                        <PhoneInput
                          containerClass="react-tel-input"
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
                    </div>
                  </div>
                </div>
                <h5 className="text fw-bold mt-4 mb-1 text-start">
                  Address info
                </h5>
                <div className="card-box text-start">
                  <div className="form-design">
                    <div className="row">
                      <div className="col-lg-4 col-12 mt-lg-0">
                        <div className="form-group">
                          <label className="form-label">Street*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Pincode"
                            name="street"
                            value={formData.street}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12 mt-lg-0">
                        <div className="form-group">
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
                      </div>
                      <div className="col-lg-4 col-12 mt-lg-0">
                        <div className="form-group">
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
                      </div>
                      <div className="col-lg-4 col-12 mt-lg-0">
                        <div className="form-group">
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
                      </div>
                      <div className="col-lg-4 col-12 mt-lg-0">
                        <div className="form-group">
                          <label className="form-label">Pincode*</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Pincode Name"
                            name="pinCode"
                            value={formData.pinCode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12 mt-lg-0">
                        <div className="form-group">
                          <label className="form-label">Type*</label>
                          <select
                            className="form-select"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                          >
                            <option value="Home">Home</option>
                            <option value="Office">Office</option>
                            {/* <option value="Work">Work</option> */}
                          </select>
                        </div>
                      </div>
                      <div className="form-group mt-md-3 mt-4">
                        <div className="d-flex gap-2 align-items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            name="saveInAddressBook"
                            // checked={formData.saveInAddressBook}
                            // onChange={handleChange}
                          />
                          <span className="form-label m-0">
                            Save in address book
                          </span>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          {/* <input
                            type="checkbox"
                            className="form-checkbox"
                            name="saveInProfile" */}
                                {/* // checked={formData.saveInProfile}
                                // onChange={handleChange} */}
                          {/* />
                          <span className="form-label m-0">
                            Save in my profile
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="comman-btn" onClick={handleAddress}>
                    Save Address
                  </button>
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

export default AddAdress;
