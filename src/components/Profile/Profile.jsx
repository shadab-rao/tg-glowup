import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import {
  editProfile,
  getUser,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { capitalize } from "../utils/CapitalLetter";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import Sidebar from "../common/Sidebar";
import PhoneInput from "react-phone-input-2";

const Profile = () => {
  const [profileData, setProfileData] = useState("");
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    countryCode: "",
    gender: "",
    dateOfBirth: "",
    profileImage: null,
  });
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const userToken = localStorage.getItem("token-user");

  const dummyData = {
    fullName: "",
    email: "",
    phoneNumber: "",
    countryCode: "",
    gender: "",
    dateOfBirth: "",
    profileImage: "assets/img/user.jpg",
  };

  const getProfile = async () => {
    if (userToken) {
      const getData = await getUser(userToken);
      if (getData?.data) {
        const userData = getData?.data?.results?.user;
        if (!userData?.fullName) {
          setProfileData(dummyData);
          setInfo(dummyData);
          setIsEditing(true);
        } else {
          localStorage.setItem("glow-user", JSON.stringify(userData));

          setProfileData(userData);
          setInfo({
            fullName: userData?.fullName,
            email: userData?.email,
            phoneNumber: userData?.phoneNumber,
            countryCode: userData?.countryCode,
            gender: userData?.gender || "",
            dateOfBirth: userData?.dateOfBirth || "",
            profileImage: userData?.profileImage || null,
          });
        }
      }
    } else {
      setProfileData(dummyData);
      setInfo(dummyData);
    }
  };

  useEffect(() => {
    getProfile();
  }, [userToken]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setInfo({ ...info, profileImage: selectedFile });
      const imageUrl = URL.createObjectURL(selectedFile);
      setImageData(imageUrl);
    }
  };
  

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setInfo({ ...info, gender: value });
  };

  const onSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    const formData = new FormData();
    formData.append("fullName", info.fullName);
    formData.append("email", info.email);
    formData.append("phoneNumber", info.phoneNumber);
    formData.append("countryCode", info.countryCode);
    formData.append("gender", info.gender);
    formData.append("dateOfBirth", info.dateOfBirth);
    formData.append("profileImage", info.profileImage);

    const response = await editProfile(formData);
    if (response?.data) {
      setInfo(response.data.results);
      getProfile();
      setIsEditing(false);
      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);
    }

    setLoading(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handlePhoneChange = (value, country) => {
    setPhoneNumber(value); 
    setInfo({
      ...info,
      phoneNumber: value,  
      countryCode: country?.dialCode || '', 
    });
  };
  

  if (!userToken) {
    return (
      <>
        <Header />
        <section className="my_profile mt-5 mb-5">
          <div className="container mt-4 mb-4">
            <div className="text-center">
              <Link className="comman-btn" to={"/login"}>
                Login to View Profile
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

 

  return (
    <>
      <Header />
      <section className="my_profile">
        <div className="container mt-4 mb-4">
          <div className="row">
          <div className="col-lg-3 col-md-4 col-12">
              <div className="my-account">
                <div className="user-box">
                  <div className="d-flex gap-3">
                    <div className="user-img">
                      <img
                        src={
                          profileData?.profileImage ||
                          info?.profile ||
                          "assets/img/user.jpg"
                        }
                        alt="image"
                      />
                    </div>
                    <div>
                      <h5 className="text text-white text-start">
                        {capitalize(profileData?.fullName)}
                      </h5>
                      <p className="comman-small-text">
                        {capitalize(profileData?.email)}
                      </p>
                      <div className="mt-2 text-start">
                        <button className="edit-btn" onClick={toggleEdit}>
                          {isEditing ? "Cancel" : "Edit"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className>
            <h5 className="text fw-semibold mb-1 mt-3 text-start">My Account</h5>
            <div className="list-box-wrapper">
              <Link to={"/my-order"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/box.svg" alt />
                </div>
                <div className="text-wrapper active active border-bottom border-2">
                  <p className>My Order</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/my-address"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/location.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>My address</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/my-wishlist"} className="list-box mb-2">
                <div className="icon active">
                  <img src="../../../assets/img/svg/heart-light.svg" alt />
                </div>
                <div className="text-wrapper active">
                  <p className>My Wishlist</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
            </div>
          </div>
          <div className>
            <h5 className="text fw-semibold mb-1 mt-3 text-start">Others</h5>
            <div className="list-box-wrapper">
              <Link to={"/referral-program"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/link-circle.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>Referral Program</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/settings"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/setting-2.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>Settings</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/about-us"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/file-lines.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>About us</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/terms-conditions"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/file-minus.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>Terms &amp; Conditions</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/help-support"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/call.svg" alt />
                </div>
                <div className="text-wrapper active border-bottom border-2">
                  <p className>Help &amp; Support</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
              <Link to={"/privacy-policy"} className="list-box">
                <div className="icon active">
                  <img src="../../../assets/img/svg/file-sheild.svg" alt />
                </div>
                <div className="text-wrapper active">
                  <p className>Privacy Policy</p>
                  <i className="fa fa-angle-right" />
                </div>
              </Link>
            </div>
          </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12 mt-md-0 mt-4">
              <form onSubmit={onSubmit}>
                <h5 className="Checkout-main-heading mb-2 text-start">
                  Your Profile Photo
                </h5>
                <div className="position-relative w-fit h-fit">
                  <div className="profile-img-wrapper">
                    <img
                       src={imageData || profileData?.profileImage || "assets/img/user.jpg"} 
                      alt="image"
                    />
                  </div>
                  {isEditing && (
                    <div className="upload-img">
                      <input
                        type="file"
                        accept="image/*"
                        name="profileImage"
                        onChange={handleImageChange}
                      />
                      <img src="assets/img/icon/cam.png" alt="Upload Icon" />
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <h5 className="Checkout-main-heading text-start">
                    My Information's
                  </h5>
                  <div className="mt-2">
                    <div className="card-box">
                      <div className="form-design px-lg-3 px-md-4">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                            <div className="form-group">
                              <label
                                htmlFor
                                className="form-label text-start d-block"
                                style={{ fontSize: "13px" }}
                              >
                                First Name*
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="First Name*"
                                name="fullName"
                                value={capitalize(info.fullName || "")}
                                onChange={handleInputChange}
                                readOnly={!isEditing}
                              />
                            </div>
                          </div>
                          {/* <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                          <div className="form-group">
                            <label htmlFor className="form-label">
                              Last name*
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              className="form-control"
                              placeholder="Last name*"
                              value={info.lastName || ""}
                            onChange={handleInputChange}
                            />
                          </div>
                        </div> */}
                          <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                            <div className="form-group">
                              <label
                                htmlFor
                                className="form-label text-start d-block"
                                style={{ fontSize: "13px" }}
                              >
                                Mail Address*
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="email"
                                placeholder="example@gmail.com"
                                value={capitalize(info.email || "")}
                                onChange={handleInputChange}
                                readOnly={!isEditing}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                            <div className="form-group">
                              <label
                                htmlFor
                                className="form-label text-start d-block"
                                style={{ fontSize: "13px" }}
                              >
                                Date of Birth*
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                name="dateOfBirth"
                                placeholder="Your date of birth"
                                value={info.dateOfBirth || ""}
                                onChange={handleInputChange}
                                readOnly={!isEditing}
                              />
                            </div>
                          </div>
                          <div className="form-group  col-lg-6 col-md-12 col-12  mt-3">
                            <label
                              htmlFor
                              className="form-label text-start d-block"
                              style={{ fontSize: "13px" }}
                            >
                              Phone Number
                            </label>
                            <PhoneInput
                              containerClass="react-tel-input"
                              inputClass="form-control"
                              country="sa"
                              value={info?.phoneNumber}
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
                          {/* <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                            <div className="form-group">
                              <label
                                htmlFor
                                className="form-label text-start d-block"
                                style={{ fontSize: "13px" }}
                              >
                                Country Code*
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="countryCode"
                                placeholder="country code.."
                                value={info.countryCode || ""}
                                onChange={handleInputChange}
                                readOnly={!isEditing}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                            <div className="form-group">
                              <label
                                htmlFor
                                className="form-label text-start d-block"
                                style={{ fontSize: "13px" }}
                              >
                                Phone Number*
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="phoneNumber"
                                placeholder="phone number.."
                                value={info.phoneNumber || ""}
                                onChange={handleInputChange}
                                readOnly={!isEditing}
                              />
                            </div>
                          </div> */}
                          <div className="col-lg-12 col-md-12 col-12 mt-md-0 mt-4">
                            <div className="form-group">
                              <label
                                htmlFor
                                className="form-label text-start d-block"
                                style={{ fontSize: "13px" }}
                              >
                                Gender*
                              </label>
                              <div className="d-flex gap-3">
                                <div className="form-design">
                                  <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="Male"
                                    checked={info.gender === "Male"}
                                    onChange={handleRadioChange}
                                    readOnly={!isEditing}
                                  />
                                  <label
                                    htmlFor="male"
                                    className={`form-label fs-6 fw-semibold ${
                                      info.gender === "Male"
                                        ? "text-dark"
                                        : "text-light"
                                    }`}
                                  >
                                    Male
                                  </label>
                                </div>
                                <div className="form-design">
                                  <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="Female"
                                    checked={info.gender === "Female"}
                                    onChange={handleRadioChange}
                                    readOnly={!isEditing}
                                  />
                                  <label
                                    htmlFor="female"
                                    className={`form-label fs-6 fw-semibold ${
                                      info.gender === "Female"
                                        ? "text-dark"
                                        : "text-light"
                                    }`}
                                  >
                                    Female
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-box rounded-3 mt-4">
                    <p className="text text-dark m-0 fw-semibold text-start">
                      Delete Account{" "}
                    </p>
                    <p className="comman-small-text text-light m-0 text-start">
                      Delete your account and data permanently
                    </p>
                  </div>
                  {isEditing && (
                    <div className="mt-4 col-lg-6 col-md-8 col-12">
                      <button className="comman-btn" type="submit">
                        {loading ? "Updating..." : "Update"}
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Profile;
