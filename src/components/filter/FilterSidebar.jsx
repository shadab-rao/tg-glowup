import React, { useEffect, useState } from "react";
import { getCategory, getSubcategory } from "../../Api Services/glowHttpServices/glowLoginHttpServices";


const FilterSidebar = ({brandLength ,subcateogryLength}) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(()=>{
    handleCategory()
    handleSubcatgeory()
  },[])

  const handleCategory = async () => {
    try {
      const response = await getCategory();
      setCategories(response?.data?.results?.categories || []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };


  const handleSubcatgeory = async () => {
    try {
      const response = await getSubcategory();
      setSubCategories(response?.data?.results?.categories || []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };



  return (
    <div className="col-lg-3 col-md-4 col-12 mt-md-0 mt-4">
      <h3 className="heading-filter mb-0 text-start">
      skincare <span>({brandLength || subcateogryLength })</span>
      </h3>
      <div className="mt-md-4">
        <h4 className="comman-heading mb-0 text-start">Sort By</h4>
      </div>
      <div className="mt-md-4">
        <div className="py-4 px-4 bg-white">
          <div className="form-design">
            <div className="form-design text-start">
              <input type="radio" id="test1" name="radio-group" />
              <label htmlFor="test1" className="form-label fs-6 fw-semibold text-dark">
                Relevance
              </label>
            </div>
            <div className="form-design text-start">
              <input type="radio" id="test2" name="radio-group" />
              <label htmlFor="test2" className="form-label fs-6 fw-semibold text-dark">
                Latest Arrivals
              </label>
            </div>
            <div className="form-design text-start">
              <input type="radio" id="test3" name="radio-group" />
              <label htmlFor="test3" className="form-label fs-6 fw-semibold text-dark">
                Price Low to High
              </label>
            </div>
            <div className="form-design text-start">
              <input type="radio" id="test4" name="radio-group" />
              <label htmlFor="test4" className="form-label fs-6 fw-semibold text-dark">
                Price High to low
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="comman-heading text-start">Filter</h4>
      </div>

      {["category", "color", "price", "discount"].map((dropdown, index) => (
        <div key={index} className="filter-dropdown text-start">
          <div className="py-3 px-4 bg-white border">
            <div
              className="d-flex justify-content-between mb-2"
              onClick={() => toggleDropdown(dropdown)}
            >
              <h4 className="comman-heading fs-5 text-capitalize mb-0">
                {dropdown.charAt(0).toUpperCase() + dropdown.slice(1)}
              </h4>
              <button className="bg-transparent">
                <i
                  className={`fa fa-angle-${
                    openDropdown === dropdown ? "up" : "down"
                  } fs-5`}
                ></i>
              </button>
            </div>
            <div
              className={`dropdown-content ${
                openDropdown === dropdown ? "open" : "closed"
              }`}
            >
              {dropdown === "category" &&
               categories?.map(
                  (item, idx) => (
                    <div key={idx} className="form-group my-0">
                      <input type="radio" id={`category-${idx}`} name="category-group" />
                      <label
                        htmlFor={`category-${idx}`}
                        className="form-label fs-6 fw-semibold text-dark"
                      >
                        {item?.name_en} <span className="light-text fs-6 fw-light">({item?.subCategories})</span>
                      </label>
                    </div>
                  )
                )}
              {dropdown === "color" &&
                [
                  { color: "#F94E62", label: "Pink" },
                  { color: "#32AD1C", label: "Green" },
                  { color: "#FFC300", label: "Yellow" },
                  { color: "#1B1718", label: "Black" },
                  { color: "#D80027", label: "Red" },
                  { color: "#A009FB", label: "Purple" },
                  { color: "#F3821A", label: "Orange" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="form-group my-0 color-label align-items-center d-flex"
                    style={{ "--parse-color": item.color }}
                  >
                    <input type="radio" id={`color-${idx}`} name="color-group" />
                    <label
                      htmlFor={`color-${idx}`}
                      className="form-label fs-6 fw-semibold text-dark"
                    >
                      {item.label} <span className="light-text fs-6 fw-light">(45)</span>
                    </label>
                  </div>
                ))}
              {dropdown === "discount" &&
                ["10%", "20%", "30%", "40%", "50%", "60%", "70%"].map((label, idx) => (
                  <div key={idx} className="form-group my-0">
                    <input
                      type="radio"
                      id={`discount-${idx}`}
                      name="discount-group"
                      defaultChecked={idx === 6}
                    />
                    <label
                      htmlFor={`discount-${idx}`}
                      className="form-label fs-6 fw-semibold text-dark"
                    >
                      {label} and above
                    </label>
                  </div>
                ))}
              {dropdown === "price" && (
                <div className="mt-4 mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="light-small-text">0 SAR</p>
                    <p className="light-small-text">500 SAR</p>
                  </div>
                  <div className="w-100 position-relative range">
                    <div className="slider-circle1"></div>
                    <div className="slider-circle2"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
