import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  brandList,
  getCategory,
  getSubcategory,
  getUser,
  logout,
  productSearch,
  wishList,
} from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import { capitalize } from "../utils/CapitalLetter";
import { useDispatch, useSelector } from "react-redux";
import { setWishlist } from "../../Redux/cartSlice";
import useDebounce from "../CustomHook/UseDebounce";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileData, setProfileData] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const userToken = localStorage.getItem("token-user");
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();
  const wishlistCount = useSelector((state) => state.cart.wishlistCount);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const navigate = useNavigate();
  const [brandListing, setBrandListing] = useState([]);
  const dropdownRef = useRef(null);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // useEffect(() => {
  //   console.log("Current Language:", i18n.language);
  //   document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  // }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
    setIsCategoryOpen(false);
  };
  const toggleSearchDropdown = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const openMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleCategoryList = () => {
    setIsCategoryOpen((prev) => !prev);
    setIsDropdownOpen(false);
  };

  const response = async () => {
    if (userToken) {
      const getData = await getUser(userToken);
      if (getData?.data) {
        const userData = getData?.data?.results?.user;
        setProfileData(userData);
      }
    }
  };

  useEffect(() => {
    response();
    handleCategory();
  }, []);

  const handleCategory = async () => {
    try {
      const response = await getCategory();
      setCategories(response?.data?.results?.categories || []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const cartCount = useSelector((state) => state.cart.cartCount);

  useEffect(() => {
    console.log("Header detected cart count change:", cartCount);
  }, [cartCount]);

  const handleLogout = async () => {
    if (userToken) {
      const response = await logout();
      localStorage.removeItem("token-user");
      window.location.reload();
    }
  };

  const handleSearch = async () => {
    if (!debouncedSearchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    setLoading(true);

    try {
      const response = await productSearch({ search: debouncedSearchQuery });
      if (response && response.data) {
        setSearchResults(response.data?.results?.inventory);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleSearch();
  }, [debouncedSearchQuery]);

  useEffect(() => {
    handleBrandList();
  }, []);

  const handleBrandList = async () => {
    const response = await brandList({ search: "" });
    setBrandListing(response?.data?.results?.brands);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header id="header">
      <div className="top-header">
        <div className="container">
          <div
            className="d-flex gap-2 align-items-center justify-content-end" 
          >
            <div className="border-end pe-2">
              <div className="lang-img-wrapper">
                <img
                  onClick={toggleLanguage}
                  style={{ cursor: "pointer" }}
                  src={
                    i18n.language === "ar"
                      ? "../../../assets/img/arFlag.jpg"
                      : "../../../assets/img/eng-flag.png"
                  }
                  alt="Lang Flag"
                />
              </div>
            </div>
            <p   onClick={toggleLanguage}
                 style={{ cursor: "pointer" }} className="m-0 lang-text">{i18n.language === "ar" ? "العربية" : "English"}</p>
          </div>
        </div>
      </div>
      <div className="middle-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-12 d-md-block d-none">
              <nav class="navbar navbar-expand-lg">
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item .lato-text">
                      <Link
                        to="/"
                        className={`nav-link ${
                          !isCategoryOpen &&
                          !isDropdownOpen &&
                          location.pathname === "/"
                            ? "active"
                            : ""
                        }`}
                        onClick={() => {
                          setIsCategoryOpen(false);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {t("Home")}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className={`nav-link ${isCategoryOpen ? "active" : ""}`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleCategoryList();
                        }}
                      >
                        {t("Categories")}
                      </a>
                    </li>
                    <li className="nav-item brand-dropdown">
                      <a
                        className={`nav-link ${isDropdownOpen ? "active" : ""}`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown();
                        }}
                      >
                        {t("Brands")}
                      </a>
                      <div
                        className={`brand-dropdown-content ${
                          isDropdownOpen ? "d-block" : "d-none"
                        }`}
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-4 col-md-4 pb-4">
                              <div className="ps-3">
                                <ul className="p-0 list-unstyled mt-4 brand-list">
                                  {brandListing?.map((name) => (
                                    <li
                                      className
                                      onClick={() =>
                                        navigate(`/brands/${name?._id}`, {
                                          state: {
                                            brandName: name?.brandName_en,
                                          },
                                        })
                                      }
                                    >
                                      <a href className="text">
                                        {currentLang === "en" ? name?.brandName_en : name?.brandName_ar}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-8 col-md-8  h-100 pb-4 bg-light">
                              <div className="row ">
                                {brandListing?.map((images) => (
                                  <div className="col-lg-3 col-md-4 h-fit">
                                    <a href>
                                      <div className="brand-img-wrapper">
                                        <img
                                          src={
                                            images?.image ||
                                            "../../../assets/img/brand/Lakme.png"
                                          }
                                          style={{ cursor: "pointer" }}
                                          onClick={() =>
                                            navigate(`/brands/${images?._id}`, {
                                              state: {
                                                brandName: images?.brandName_en,
                                              },
                                            })
                                          }
                                          alt
                                        />
                                      </div>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="nav-item">
                      <Link class="nav-link" to={"/offers"}>
                        {t("Offers")}
                      </Link>
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
                    // placeholder="Search"
                    // readOnly={!isSearchOpen}
                  />
                  <div className="search-icon">
                    <div className="position-relative w-100 h-100">
                      <img
                        src="../../../assets/img/svg/search-normal.svg"
                        alt
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-4">
                  <Link to={"/my-wishlist"} className="position-relative">
                    <img src="../../../assets/img/svg/heart.svg" alt />
                    {wishlistCount > 0 && (
                      <span
                        className="badge bg-danger text-white position-absolute mt-3 top-0 start-100 translate-middle"
                        style={{
                          fontSize: "0.8rem",
                          color: "red",
                          borderRadius: "50%",
                        }}
                      >
                        {wishlistCount}
                      </span>
                    )}
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
                      className="dropdown-menu user-dropdown user-dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <div className="my-account">
                        {!userToken ? (
                          // If no token, show login button
                          <div className="text-center">
                            <Link to="/login" className="btn btn-dark">
                              {t("Login")}
                            </Link>
                          </div>
                        ) : profileData?.fullName ? (
                          // If user token exists and completeProfile is true, show Complete Your Profile button
                          <div className="user-box">
                            <div className="d-flex justify-content-between">
                              <div>
                                <h5 className="text text-white">
                                  {capitalize(profileData?.fullName)}
                                </h5>
                                <p className="comman-small-text">
                                  {capitalize(profileData?.email)}
                                </p>
                              </div>
                              <div className="mt-2">
                                <Link to={"/my-profile"} className="edit-btn">
                                  {t("Edit")}
                                </Link>
                              </div>
                            </div>
                          </div>
                        ) : (
                          // If user token exists and completeProfile is false, show profile data
                          <div className="text-center">
                            <Link to="/my-profile" className="btn btn-dark">
                              {t("Complete Profile")}
                            </Link>
                          </div>
                        )}

                        <div className>
                          <h5 className="text fw-semibold mb-1">{t("My Account")}</h5>
                          <div className="list-box-wrapper">
                            <Link to={userToken ? "/my-order" : "/login"} className="list-box">
                              <div className="icon active">
                                <img
                                  src="../../../assets/img/svg/box.svg"
                                  alt
                                />
                              </div>
                              <div className="text-wrapper active border-bottom border-2">
                                <p className>{t("My Order")}</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            <Link to= {userToken ? "/my-address" : "/login"} className="list-box">
                              <div className="icon active">
                                <img
                                  src="../../../assets/img/svg/location.svg"
                                  alt
                                />
                              </div>
                              <div className="text-wrapper active border-bottom border-2">
                                <p className>{t("My Address")}</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            <Link to={userToken ? "/my-wishlist" : "/login"} className="list-box mb-2">
                              <div className="icon active">
                                <img
                                  src="../../../assets/img/svg/heart-light.svg"
                                  alt
                                />
                              </div>
                              <div className="text-wrapper active">
                                <p className>{t("My Wishlist")}</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className>
                          <h5 className="text fw-semibold mb-1">{t("Others")}</h5>
                          <div className="list-box-wrapper">
                            <Link to= {userToken ? "/referral-program" : "/login"} className="list-box">
                              <div className="icon active">
                                <img
                                  src="../../../assets/img/svg/link-circle.svg"
                                  alt
                                />
                              </div>
                              <div className="text-wrapper active border-bottom border-2">
                                <p className>{t("Referral Program")}</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            <Link to  = {userToken ? "/settings" : "/login"} className="list-box">
                              <div className="icon active">
                                <img
                                  src="../../../assets/img/svg/setting-2.svg"
                                  alt
                                />
                              </div>
                              <div className="text-wrapper active border-bottom border-2">
                                <p className>{t("Setting")}</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            <Link to={"/about-us"} className="list-box">
                              <div className="icon active">
                                <img
                                  src="../../../assets/img/svg/file-lines.svg"
                                  alt
                                />
                              </div>
                              <div className="text-wrapper active border-bottom border-2">
                                <p className>{t("About Us")}</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            <Link to={"/terms-conditions"} className="list-box">
                              <div className="icon active">
                                <img
                                  src="../../../assets/img/svg/file-minus.svg"
                                  alt
                                />
                              </div>
                              <div className="text-wrapper active border-bottom border-2">
                                <p className>{t("Terms & Conditions")}</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            <Link to={"/help-support"} className="list-box">
                              <div className="icon active">
                                <img
                                  src="../../../assets/img/svg/call.svg"
                                  alt
                                />
                              </div>
                              <div className="text-wrapper active border-bottom border-2">
                                <p className>{t("Help & Support")}</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            <Link to={"/privacy-policy"} className="list-box">
                              <div className="icon active">
                                <img
                                  src="../../../assets/img/svg/file-sheild.svg"
                                  alt
                                />
                              </div>
                              <div className="text-wrapper active">
                                <p className>{t("Privacy Policy")}</p>
                                <i className="fa fa-angle-right" />
                              </div>
                            </Link>
                            {userToken ? (
                               <div
                               className="list-box active align-items-center "
                               style={{ cursor: "pointer" }}
                               onClick={handleLogout}
                             >
                               {/* <div className="icon"> */}
                               <i className="fa fa-sign-out ms-1" />
                               {/* </div> */}
                               <div className="text-wrapper ms-1">
                                 <p className="text-dark">{t("Logout")}</p>
                               </div>
                             </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to={"/your-bag"} className="position-relative">
                    <img src="../../../assets/img/svg/bag-2.svg" alt="Bag" />
                    {cartCount > 0 && (
                      <span
                        className="badge bg-danger text-white position-absolute mt-3 top-0 start-100 translate-middle"
                        style={{
                          fontSize: "0.8rem",
                          color: "red",
                          borderRadius: "50%",
                        }}
                      >
                        {cartCount}
                      </span>
                    )}
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
            ref={dropdownRef}
            className={`search-dropdown ${isSearchOpen ? "d-block" : "d-none"}`}
          >
            <div className="search-dropdown-content">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="search-wrapper-2 d-flex">
                      <div className="dropdown-search-icon">
                        <img
                          src="../../../assets/img/svg/search-normal.svg"
                          alt
                        />
                      </div>
                      <input
                        type="search"
                        className="form-control"
                        placeholder={t("What are you looking for?")}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 row">
                  <div className="col-lg-3 col-md-4">
                    <div className="content">
                      <h3 className="dropdown-heading">{t("Trending Now")}</h3>
                      <ul className="dropdown-list text-start">
                        <li className="text-dark">
                          <a href>advanced night repair</a>
                        </li>
                        <li className="text-dark">
                          <a href>pure color</a>
                        </li>
                        <li className="text-dark">
                          <a href>moisturizer</a>
                        </li>
                        <li className="text-dark">
                          <a href>serum</a>
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <h3 className="dropdown-heading text-start">
                        {t("Your Recent Searches")}
                      </h3>
                      <ul className="dropdown-list text-start">
                        <li className="text-dark">
                          <a href>facial serum</a>
                        </li>
                        <li className="text-dark">
                          <a href>eye cream</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="content">
                        <h3 className="dropdown-heading mb-0">
                          {t("Popular Products")}
                        </h3>
                      </div>
                      <p className="view-all-text mb-0">{t("View All")}</p>
                    </div>
                    <div
                      className="row mt-4"
                      style={{
                        maxHeight: "380px",
                        overflowY: "auto",
                        padding: "10px",
                      }}
                    >
                      {loading ? (
                        <div style={{ textAlign: "center", width: "100%" }}>
                          <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                      ) : !searchQuery ? (
                        <p
                          style={{
                            fontSize: "25px",
                            fontWeight: "400",
                            color: "#888",
                          }}
                        >
                          {t("Search Your Products here....")}
                        </p>
                      ) : searchResults.length > 0 ? (
                        searchResults.map((item) => (
                          <div
                            key={item._id}
                            className="col-lg-3 col-md-4 mb-3"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              navigate(`/product-details/${item?._id}`)
                            }
                          >
                            <div className="dropdown-card">
                              <div className="dropdown-card-header">
                                <img
                                  src={
                                    item?.imagesApp?.[0] ||
                                    "../../../assets/img/products/kerastase.png"
                                  }
                                  alt={item?.name_en || "Product Image"}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="dropdown-card-body mt-3 ps-1 pe-1 d-flex justify-content-between align-items-center">
                              <h5
                                className="dropdown-card-heading text-start"
                                style={{
                                  display: "-webkit-box",
                                  overflow: "hidden",
                                  WebkitBoxOrient: "vertical",
                                  WebkitLineClamp: 2,
                                }}
                              >
                                {capitalize(item?.description_en)}
                              </h5>
                            </div>

                            {/* <div className=" ps-1 pe-1 justify-content-between" style={{marginTop:"-10px"}}>
                              <p>{item?.description_en.slice(0,10) + "..."}</p>
                             <p style={{fontWeight:"500"}}>SAR {item?.price}</p>
                             </div> */}
                          </div>
                        ))
                      ) : (
                        <p style={{ fontSize: "25px", fontWeight: "400" }}>
                          {t("Product Not Found")}
                        </p>
                      )}
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
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCategoryList();
                  }}
                >
                  Categories
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
      <div
        className={`bottom-header middle-header  d-md-block d-none  category-list ${
          isCategoryOpen ? "open" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar">
                <div className=" d-flex" id="navbarNav">
                  {categories?.map((cat) => (
                    <ul className="navbar-nav">
                      <li className="nav-item hover-dropdown">
                        <Link
                          to={{
                            pathname: `/sub-category/${cat?._id}`,
                          }}
                          className="nav-link"
                        >
                          {currentLang === "en" ? cat?.name_en : cat?.name_ar}
                        </Link>
                      </li>
                    </ul>
                  ))}
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
