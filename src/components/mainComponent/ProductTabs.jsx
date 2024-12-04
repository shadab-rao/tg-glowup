import React, { useEffect, useState } from "react";
import { getCategory } from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import AllProduct from "../common/AllProduct";

const ProductTabs = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  


  useEffect(() => {
    const handleCategory = async () => {
      try {
        const response = await getCategory();
        const fetchedCategories = response?.data?.results?.categories || [];
        setCategories(fetchedCategories);
        if (fetchedCategories.length > 0) {
          setActiveCategoryId(fetchedCategories[0]._id);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    handleCategory();
  }, []); 

  const handleTabClick = (categoryId) => {
    setActiveCategoryId(categoryId);
  };
  return (
    <>
      <div className="my-5">
        <div className="container">
          <ul
            className="nav nav-tabs custom-tabs w-fit"
            id="myTab"
            role="tablist"
          >
            {categories.map((category, index) => (
              <li className="nav-item" role="presentation" key={category._id}>
                <button
                  className={`nav-link ${
                    activeCategoryId === category._id ? "active" : ""
                  }`}
                  id={`${category.name_en.toLowerCase()}-tab`}
                  onClick={() => handleTabClick(category._id)}
                  role="tab"
                  aria-controls={category.name_en.toLowerCase()}
                  aria-selected={activeCategoryId === category._id}
                >
                  {category.name_en}
                </button>
              </li>
            ))}
          </ul>
          <div className="tab-content mt-3" id="myTabContent">
            <div
              className={`tab-pane fade show active`}
              id="category-content"
              role="tabpanel"
            >
              <div className="row mt-4">
                <AllProduct categoryId={activeCategoryId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTabs;
