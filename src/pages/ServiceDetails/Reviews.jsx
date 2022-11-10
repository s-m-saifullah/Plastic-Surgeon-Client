import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import DisplayReviews from "./DisplayReviews";
import PostReview from "./PostReview";

const Reviews = ({ id, serviceName }) => {
  const { user } = useContext(AuthContext);

  return (
    <div
      id="reviews"
      className="w-11/12 lg:w-10/12 mx-auto mt-10 mb-20 px-5 md:px-[15%] lg:px-"
    >
      <h2 className="text-center text-3xl font-semibold mb-5">Review</h2>
      {user?.uid && <PostReview id={id} serviceName={serviceName} />}
      <DisplayReviews serviceId={id} />
    </div>
  );
};

export default Reviews;
