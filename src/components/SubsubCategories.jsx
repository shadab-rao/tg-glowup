import React, { useEffect, useState } from "react";
import { subSubCategories } from "../Api Services/glowHttpServices/glowLoginHttpServices";

const SubsubCategories = ({ subcategoryId }) => {
  const [subData, setSubData] = useState([]);

  useEffect(() => {
    handleSubSubCategories();
  }, []);
  const handleSubSubCategories = async () => {
    const response = await subSubCategories({ subcategory: subcategoryId });
    setSubData(response?.data?.results?.subsubcategories);
  };
  return (
    <>
      <div className="d-flex gap-md-4 gap-1 mt-md-4 mt-0">
        {subData?.map((sub) => (
          <div className="filter-box">{sub?.name_en}</div>
        ))}
      </div>
    </>
  );
};

export default SubsubCategories;
