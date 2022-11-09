import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyReviewsTableRow = ({ userReview, index }) => {
  const { _id, serviceName, review } = userReview;

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete the review.");

    if (confirm) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("Review Deleted");
          }
        });
    }
  };

  return (
    <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
      <td className="p-2 border-r">{index + 1}</td>
      <td className="p-2 border-r">{serviceName}</td>
      <td className="p-2 border-r">{review}</td>

      <td>
        <Link
          to={`/edit-review/${_id}`}
          className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin cursor-pointer"
        >
          Edit
        </Link>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />

        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default MyReviewsTableRow;
