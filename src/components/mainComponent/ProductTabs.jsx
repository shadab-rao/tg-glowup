import React, { useEffect, useState } from "react";
import { allSubcategoriesList, getCategory } from "../../Api Services/glowHttpServices/glowLoginHttpServices";
import AllProduct from "../common/AllProduct";
import { useTranslation } from "react-i18next";

const ProductTabs = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [activeSubCategoryId, setActiveSubCategoryId] = useState(null);
    const { i18n } = useTranslation();
      const currentLang = i18n.language;
  


  useEffect(() => {
    const handleCategory = async () => {
      try {
        const response = await allSubcategoriesList();
        const fetchedSubCategories = response?.data?.results?.subcategories || [];
        setSubCategories(fetchedSubCategories);
        if (fetchedSubCategories.length > 0) {
          setActiveSubCategoryId(fetchedSubCategories[0]._id);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    handleCategory();
  }, []); 

  const handleTabClick = (categoryId) => {
    setActiveSubCategoryId(categoryId);
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
            {subCategories.map((subCat, index) => (
              <li className="nav-item" role="presentation" key={subCat._id}>
                <button
                  className={`nav-link ${
                    activeSubCategoryId === subCat._id ? "active" : ""
                  }`}
                  id={`${subCat.name_en.toLowerCase()}-tab`}
                  onClick={() => handleTabClick(subCat._id)}
                  role="tab"
                  aria-controls={subCat.name_en.toLowerCase()}
                  aria-selected={activeSubCategoryId === subCat._id}
                >
                  {(currentLang === "en" ? subCat.name_en : subCat?.name_ar).slice(0,12)}
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
                <AllProduct subcategoryId={activeSubCategoryId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTabs;
