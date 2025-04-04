import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { getRatings, ratingAndReview } from "../Api Services/glowHttpServices/glowLoginHttpServices";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Rating = ({ variantId,id }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const[ratingCount,setRatingCount] = useState();
  const {t} = useTranslation();

  useEffect(()=>{
    ratingData()
  },[])

  const ratingData = async()=>{
    const response = await getRatings(variantId);
    
    setRatingCount(response?.data?.results?.data?.[0]?.rating)
  }

  console.log(ratingCount);
  
  const handleStarClick = async (starValue) => {
    if (ratingCount) return;
    setRating(starValue);

    const payload = {
      productId: id,
      variantId,
      rating: starValue,
      // comment: "", 
    };

    try {
      const response = await ratingAndReview(payload);
      console.log("Rating submitted:", response);
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  const displayedRating = ratingCount || rating;

  return (
    <div className="d-flex justify-content-between" style={{ padding: "4px" }}>
      <div>
        <p style={{ marginBottom: "4px" }}>{t("Rate this Product")}</p>
        <div style={{ display: "flex", cursor: "pointer" }}>
        {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <label key={starValue}>
                <input
                  type="radio"
                  name="rating"
                  value={starValue}
                  style={{ display: "none" }}
                  disabled={!!ratingCount}
                  onClick={() => handleStarClick(starValue)}
                />
                <FaStar
                  size={24}
                  color={starValue <= (hover || displayedRating) ? "#ffc107" : "#e4e5e9"}
                  onMouseEnter={() => !ratingCount && setHover(starValue)}
                  onMouseLeave={() => !ratingCount && setHover(0)}
                />
              </label>
            );
          })}
        </div>
      </div>
      <div>
        <Link
          to={`/review/${id}`}
          className="p-2"
          style={{
            color: "black",
            fontSize: "14px",
            background: "white",
            borderRadius: "5px",
            border: "2px solid black",
            fontWeight: "400",
          }}
        >
          {t("Write Review")}
        </Link>
      </div>
    </div>
  );
};

export default Rating;
