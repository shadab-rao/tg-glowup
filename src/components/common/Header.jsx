import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { capitalize } from "../utils/CapitalLetter";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileData, setProfileData] = useState("");
  const userToken = localStorage.getItem("token-user");
  const toggleSearchDropdown = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const openMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };



  const response = async () => {
    const getData = await getUser(userToken);
    if (getData?.data) {
      const userData = getData?.data?.results?.user;
      setProfileData(userData);
    }
  };

  useEffect(() => {
    response();
  }, []);
  return (
    <header id="header">
      <div className="top-header">
        <div className="container">
          <div className="d-flex gap-2 align-items-center justify-content-end">
            <div className="border-end pe-2">
              <div className="lang-img-wrapper">
                <img src="assets/img/eng-flag.png" alt />
              </div>
            </div>
            <p className="m-0 lang-text">English</p>
          </div>
        </div>
      </div>
      <div className="middle-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-12 d-md-block d-none">
              <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Categories
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Brands
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Offers
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="d-flex gap-2 justify-content-end">
                <div className="search-wrapper" onClick={toggleSearchDropdown}>
                  <input
                    type="text"
                    className="search"
                    placeholder="Search"
                    // readOnly={!isSearchOpen}
                  />
                  <div className="search-icon">
                    <div className="position-relative w-100 h-100">
                      <img src="../../../assets/img/svg/search-normal.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-4">
                  <Link to={"/my-wishlist"} className>
                    <img src="../../../assets/img/svg/heart.svg" alt />
                  </Link>
                  <div className="dropdown">
                    <button
                      className="bg-transparent border-0"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src="../../../assets/img/svg/user.svg" alt />
                    </button>
                    <div
                      className="dropdown-menu user-dropdown"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <div className="my-account">
                        <div className="user-box">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5 className="text text-white">{capitalize(profileData?.fullName)}</h5>
                              <p className="comman-small-text">
                              {capitalize(profileData?.email)}
                              </p>
                            </div>
                            <div className="mt-2">
                              <Link to={"/my-profile"} className="edit-btn">
                                Edit
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className>
                          <h5 className="text fw-semibold mb-4">My Account</h5>
                          <div className="list-box-wrapper">
                            <Link to={"/my-order"} className="list-box">
                              <div className="icon active">
                                <img src="../../../assets/img/svg/box.svg" alt />
                              </div>
                              <div className="text-wrapper active border-bottom border-2">
                                <p className>My Order</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            <Link to={"my-address"} className="list-box">
                              <div className="icon">
                                <img src="../../../assets/img/svg/location.svg" alt />
                              </div>
                              <div className="text-wrapper border-bottom border-2">
                                <p className>My address</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            <Link to={"/my-wishlist"} className="list-box">
                              <div className="icon">
                                <img src="../../../assets/img/svg/heart-light.svg" alt />
                              </div>
                              <div className="text-wrapper">
                                <p className>My Wishlist</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className>
                          <h5 className="text fw-semibold mb-4">Others</h5>
                          <div className="list-box-wrapper">
                          <Link to={"/referral-program"} className="list-box">
                              <div className="icon">
                                <img src="../../../assets/img/svg/link-circle.svg" alt />
                              </div>
                              <div className="text-wrapper border-bottom border-2">
                                <p className>Referral Program</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            <Link to={"/settings"} className="list-box">
                              <div className="icon">
                                <img src="../../../assets/img/svg/setting-2.svg" alt />
                              </div>
                              <div className="text-wrapper border-bottom border-2">
                                <p className>Settings</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            <Link to={"/about-us"} className="list-box">
                              <div className="icon">
                                <img src="../../../assets/img/svg/file-lines.svg" alt />
                              </div>
                              <div className="text-wrapper border-bottom border-2">
                                <p className>About us</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            <Link to={"/terms-conditions"}
                              className="list-box"
                            >
                              <div className="icon">
                                <img src="../../../assets/img/svg/file-minus.svg" alt />
                              </div>
                              <div className="text-wrapper border-bottom border-2">
                                <p className>Terms &amp; Conditions</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            <Link to={"/help-support"} className="list-box">
                              <div className="icon">
                                <img src="../../../assets/img/svg/call.svg" alt />
                              </div>
                              <div className="text-wrapper border-bottom border-2">
                                <p className>Help &amp; Support</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            <Link to={"/privacy-policy"} className="list-box">
                              <div className="icon">
                                <img src="../../../assets/img/svg/file-sheild.svg" alt />
                              </div>
                              <div className="text-wrapper">
                                <p className>Privacy Policy</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to={"/your-bag"} className>
                    <img src="../../../assets/img/svg/bag-2.svg" alt />
                  </Link>
                  <div className="d-md-none">
                    <button className="bg-white px-2" onClick={openMenu}>
                      <i className="fa fa-bars" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className>
          <div
            className={`search-dropdown ${isSearchOpen ? "d-block" : "d-none"}`}
          >
            <div className="search-dropdown-content">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="search-wrapper-2 d-flex">
                      <div className="dropdown-search-icon">
                        <img src="assets/img/svg/search-normal.svg" alt />
                      </div>
                      <input
                        type="search"
                        className
                        placeholder="what are you looking for?"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 row">
                  <div className="col-lg-3 col-md-4">
                    <div className="content">
                      <h3 className="dropdown-heading">Trending Now</h3>
                      <ul className="dropdown-list">
                        <li>
                          <a href>advanced night repair</a>
                        </li>
                        <li>
                          <a href>pure color</a>
                        </li>
                        <li>
                          <a href>moisturizer</a>
                        </li>
                        <li>
                          <a href>serum</a>
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <h3 className="dropdown-heading">Your Recent Searches</h3>
                      <ul className="dropdown-list">
                        <li>
                          <a href>facial serum</a>
                        </li>
                        <li>
                          <a href>eye cream</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="content">
                        <h3 className="dropdown-heading mb-0">
                          Popular Products{" "}
                        </h3>
                      </div>
                      <p className="view-all-text mb-0">View All</p>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-3 col-md-4">
                        <div className="dropdown-card">
                          <div className="dropdown-card-header">
                            <img
                              src="assets/img/products/kerastase.png"
                              alt
                              className
                            />
                          </div>
                        </div>
                        <div className="dropdown-card-body mt-3">
                          <h5 className="dropdown-card-heading">
                            Kérastase Resistance Bain Extentioniste 250ml
                          </h5>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4">
                        <div className="dropdown-card">
                          <div className="dropdown-card-header">
                            <img
                              src="assets/img/products/dove.png"
                              alt
                              className
                            />
                          </div>
                        </div>
                        <div className="dropdown-card-body mt-3">
                          <h5 className="dropdown-card-heading">
                            Plum Green Tea Pore Cleansing Gel Face Wash...
                          </h5>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4">
                        <div className="dropdown-card">
                          <div className="dropdown-card-header">
                            <img
                              src="assets/img/products/curl_style_milk.png"
                              alt
                              className
                            />
                          </div>
                        </div>
                        <div className="dropdown-card-body mt-3">
                          <h5 className="dropdown-card-heading">
                            Shea Moisture Coconut and Hibiscus Curl &amp; Shine
                            Gel Style Milk 326ml
                          </h5>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4">
                        <div className="dropdown-card">
                          <div className="dropdown-card-header">
                            <img
                              src="assets/img/products/detangler.png"
                              alt
                              className
                            />
                          </div>
                        </div>
                        <div className="dropdown-card-body mt-3">
                          <h5 className="dropdown-card-heading">
                            Shea Moisture Raw Shea Butter Moisture Detangler
                            237ml 250ml
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mobile-header ${isMenuOpen ? "w-100" : ""}`}>
          <div className="mobile-image-wrapper">
            <div className="d-flex justify-content-between px-3 py-2 border-bottom">
              <div className="mobile-img-logo">
                <img src="assets/img/Glow Up.png" alt />
              </div>
              <button className="bg-white px-2" onClick={closeMenu}>
                <i className="fa fa-close" />
              </button>
            </div>
          </div>
          <div className="mobile-header-body">
            <ul className="mobile-list">
              <li className="mobile-item">
                <a href="index.html" className="mobile-link">
                  Home
                </a>
              </li>
              <li className="mobile-item">
                <a href="index.html" className="mobile-link">
                  Category
                </a>
              </li>
              <li className="mobile-item">
                <a href="index.html" className="mobile-link">
                  Brands
                </a>
              </li>
              <li className="mobile-item">
                <a href="index.html" className="mobile-link">
                  Offers
                </a>
              </li>
              <li className="mobile-item">
                <a href="index.html" className="mobile-link">
                  MakeUp
                </a>
              </li>
              <li className="mobile-item">
                <a href="index.html" className="mobile-link">
                  SkinCare
                </a>
              </li>
              <li className="mobile-item">
                <a href="index.html" className="mobile-link">
                  Haircare
                </a>
              </li>
              <li className="mobile-item">
                <a href="index.html" className="mobile-link">
                  Fragrance
                </a>
              </li>
              <li className="mobile-item">
                <a href="index.html" className="mobile-link">
                  Bath &amp; Body
                </a>
              </li>
              <li className="mobile-item">
                <a href="index.html" className="mobile-link">
                  Wellness
                </a>
              </li>
              <li className="mobile-item">
                <a href="index.html" className="mobile-link">
                  Men
                </a>
              </li>
              <li className="mobile-item">
                <a href="index.html" className="mobile-link">
                  Combo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-header middle-header d-md-block d-none">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item hover-dropdown">
                      <a className="nav-link" href="index.html">
                        Makeup
                      </a>
                    </li>
                    <li className="nav-item hover-dropdown">
                      <a className="nav-link" href="#">
                        Skincare
                      </a>
                    </li>
                    <li className="nav-item hover-dropdown">
                      <a className="nav-link" href="#">
                        Haircare
                      </a>
                      <div className="hover-dropdown-content-bg">
                        <div className="hover-dropdown-content">
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-3 col-md-4">
                                <div className="content">
                                  <h3 className="dropdown-heading">
                                    Shop by product
                                  </h3>
                                  <ul className="dropdown-list">
                                    <li>
                                      <a href>Hair Treatments</a>
                                    </li>
                                    <li>
                                      <a href>Styling Products</a>
                                    </li>
                                    <li>
                                      <a href>Shampoo &amp; Conditioner</a>
                                    </li>
                                    <li>
                                      <a href>Haircare Sets</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4">
                                <div className="content">
                                  <h3 className="dropdown-heading">
                                    Shop by concern
                                  </h3>
                                  <ul className="dropdown-list">
                                    <li>
                                      <a href>Frizz Free</a>
                                    </li>
                                    <li>
                                      <a href>Hair Repair</a>
                                    </li>
                                    <li>
                                      <a href>Curl Definer</a>
                                    </li>
                                    <li>
                                      <a href>Volume &amp; Thickness</a>
                                    </li>
                                    <li>
                                      <a href>Moisture &amp; Shine</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4">
                                <div className="content">
                                  <h3 className="dropdown-heading">
                                    Brands we love
                                  </h3>
                                  <ul className="dropdown-list">
                                    <li>
                                      <a href>Olaplex</a>
                                    </li>
                                    <li>
                                      <a href>Kerastase</a>
                                    </li>
                                    <li>
                                      <a href>Mielle Organics</a>
                                    </li>
                                    <li>
                                      <a href>L'Oreal Professionel</a>
                                    </li>
                                    <li>
                                      <a href>Redken</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4">
                                <div className="header-dropdown-img">
                                  <img
                                    src="assets/img/products/glowth_elixir.png"
                                    alt
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item hover-dropdown">
                      <a className="nav-link" href="#">
                        Fragrance
                      </a>
                    </li>
                    <li className="nav-item hover-dropdown">
                      <a className="nav-link" href="#">
                        Bath &amp; Body
                      </a>
                    </li>
                    <li className="nav-item hover-dropdown">
                      <a className="nav-link" href="#">
                        Wellness
                      </a>
                    </li>
                    <li className="nav-item hover-dropdown">
                      <a className="nav-link" href="#">
                        Men
                      </a>
                    </li>
                    <li className="nav-item hover-dropdown">
                      <a className="nav-link" href="#">
                        Combo
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
