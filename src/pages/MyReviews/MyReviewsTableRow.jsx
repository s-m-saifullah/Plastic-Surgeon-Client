import React from "react";

const MyReviewsTableRow = ({ userReview, index }) => {
  const { serviceName, review } = userReview;
  return (
    <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
      <td className="p-2 border-r">{index + 1}</td>
      <td className="p-2 border-r">{serviceName}</td>
      <td className="p-2 border-r">{review}</td>

      <td>
        <a
          href="#"
          className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin"
        >
          Edit
        </a>
        <a
          href="#"
          className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin"
        >
          Remove
        </a>
      </td>
    </tr>
  );
};

export default MyReviewsTableRow;
