import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditReview = () => {
  const userReview = useLoaderData();
  const { _id, review } = userReview;
  const navigate = useNavigate();

  const handleReviewUpdate = (e) => {
    e.preventDefault();
    const editedReview = { review: e.target.review.value };
    console.log(editedReview);
    fetch(`http://localhost:5000/reviewById/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (modifiedCount > 1) {
          toast.success("Review Updated");
          navigate("/my-reviews");
        }
      });
  };

  return (
    <form onSubmit={handleReviewUpdate}>
      <div>
        <textarea
          type="text"
          id="review"
          name="review"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-28 p-2.5"
          placeholder="What is the service about?"
          defaultValue={review}
        />
      </div>
      <div className="flex items-stretch mb-6"></div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full px-5 py-2.5 text-center"
      >
        Update Review
      </button>
    </form>
  );
};

export default EditReview;
