import React from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyReviewsTableRow = ({ userReview, index, refetch }) => {
  const { _id, serviceName, review } = userReview;

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete the review.");

    if (confirm) {
      fetch(`https://plastic-surgeon-server.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Review Deleted");
            refetch();
          }
        });
    }
  };

  return (
    <tr className="bg-gray-100 text-center border-b text-base text-gray-600">
      <td className="p-2 border-r">{index + 1}</td>
      <td className="p-2 border-r">{serviceName}</td>
      <td className="p-2 border-r">{review}</td>

      <td>
        <Link
          to={`/edit-review/${_id}`}
          className="bg-blue-500 h-8 w-12 rounded text-white hover:shadow-lg text-base cursor-pointer inline-flex items-center justify-center mr-3"
        >
          <FaEdit />
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 h-8 w-12 rounded text-white hover:shadow-lg text-base inline-flex items-center justify-center"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default MyReviewsTableRow;
