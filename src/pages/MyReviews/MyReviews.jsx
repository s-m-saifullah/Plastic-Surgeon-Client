import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Spinner from "../shared/Spinner";
import MyReviewsTableRow from "./MyReviewsTableRow";

const MyReviews = () => {
  const { user, loading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviewByUid/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user, reviews]);

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold mb-5">
        My Reviews {reviews.length}
      </h2>
      <div className="table w-full p-2">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">Sl</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">
                  Service Name
                </div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">Review</div>
              </th>
              <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                <div className="flex items-center justify-center">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <MyReviewsTableRow
                key={review._id}
                index={index}
                userReview={review}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
