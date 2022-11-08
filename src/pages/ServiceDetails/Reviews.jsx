import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Reviews = ({ id }) => {
  const { user } = useContext(AuthContext);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;

    const reviewData = {
      review,
      uid: user.uid,
      username: user.displayName,
      photo: user.photoURL,
      time: new Date().getTime(),
      serviceId: id,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });
  };

  return (
    <div id="reviews" className="mt-10 mb-20">
      <h2 className="text-center text-3xl font-semibold mb-5">Review</h2>
      {user?.uid && (
        <form onSubmit={handleReviewSubmit}>
          <div>
            <label
              htmlFor="review"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              type="text"
              id="review"
              name="review"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-28 p-2.5"
              placeholder="What is the service about?"
              required
            />
          </div>
          <div className="flex items-stretch mb-6"></div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full px-5 py-2.5 text-center"
          >
            Add Review
          </button>
        </form>
      )}
    </div>
  );
};

export default Reviews;
