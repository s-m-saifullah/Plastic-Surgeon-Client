import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import DisplayReviews from "./DisplayReviews";
import PostReview from "./PostReview";

const Reviews = ({ id }) => {
  const { user } = useContext(AuthContext);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;

    const reviewData = {
      review,
      uid: user.uid,
      email: user.email,
      username: user.displayName,
      photo: user.photoURL,
      time: {
        milliseconds: new Date().getTime(),
        fullTime: new Date().toLocaleString("en-BD", {
          dateStyle: "medium",
          timeStyle: "short",
        }),
      },
      serviceId: id,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review Added");
        }
        form.reset();
      });
  };

  return (
    <div id="reviews" className="mt-10 mb-20">
      <h2 className="text-center text-3xl font-semibold mb-5">Review</h2>
      {user?.uid && <PostReview id={id} />}
      <DisplayReviews serviceId={id} />
    </div>
  );
};

export default Reviews;
