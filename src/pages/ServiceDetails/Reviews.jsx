import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import DisplayReviews from "./DisplayReviews";
import PostReview from "./PostReview";

const Reviews = ({ id, serviceName }) => {
  const { user } = useContext(AuthContext);

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch(
        `https://plastic-surgeon-server.vercel.app/review/${id}`
      );
      const data = await res.json();
      return data;
    },
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleLoggedOutUser = () => {
    navigate("/login", { state: { from: location }, replace: true });
  };

  return (
    <div
      id="reviews"
      className="w-11/12 lg:w-10/12 mx-auto mt-10 mb-20 px-5 md:px-[15%] lg:px-"
    >
      <h2 className="text-center text-3xl font-semibold mb-5">Review</h2>
      {user?.uid ? (
        <PostReview id={id} serviceName={serviceName} refetch={refetch} />
      ) : (
        <h2 className="text-center text-3xl">
          Please{" "}
          <button
            className="text-red-600 underline"
            onClick={handleLoggedOutUser}
          >
            Login
          </button>{" "}
          to share your review
        </h2>
      )}
      <DisplayReviews reviews={reviews} />
    </div>
  );
};

export default Reviews;
