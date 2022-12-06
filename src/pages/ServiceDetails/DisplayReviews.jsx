import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const DisplayReviews = ({ reviews }) => {
  return (
    <div className="flex flex-col gap-5 mt-10">
      {reviews.map((review) => (
        <ReviewCard key={review._id} serviceReview={review} />
      ))}
    </div>
  );
};

export default DisplayReviews;
