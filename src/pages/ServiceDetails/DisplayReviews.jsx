import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const DisplayReviews = ({ serviceId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/review/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <div className="flex flex-col gap-5 mt-10">
      {reviews.map((review) => (
        <ReviewCard key={review._id} serviceReview={review} />
      ))}
    </div>
  );
};

export default DisplayReviews;
