import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../contexts/AuthProvider";
import Spinner from "../shared/Spinner";
import MyReviewsTableRow from "./MyReviewsTableRow";

const MyReviews = () => {
  const { user, logout, setLoading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(
        `https://plastic-surgeon-server.vercel.app/reviewByUid/${user?.uid}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            logout();
          }
          return res.json();
        })
        .then((data) => {
          setReviews(data);
          setLoading(false);
        });
    }
  }, [user, reviews]);

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto mb-10">
      <h2 className="text-center text-4xl font-semibold mb-5">
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
      <Helmet>
        <title>My Reviews | Elizabeth Mcconnell | Plastic Surgeon</title>
      </Helmet>
    </div>
  );
};

export default MyReviews;
