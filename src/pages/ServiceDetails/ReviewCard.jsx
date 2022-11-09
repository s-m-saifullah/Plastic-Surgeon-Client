import React from "react";

const ReviewCard = ({ serviceReview }) => {
  const { username, photo, review, time } = serviceReview;
  return (
    <div className="flex gap-5 items-center bg-blue-100 px-5 py-3 rounded-md">
      <div>
        <img
          src={photo}
          className="rounded-full w-20"
          alt={`${username} photo`}
        />
      </div>
      <div>
        <h3 className="font-bold">{username}</h3>
        <p>{review}</p>
        <p>
          <small>{time.fullTime.replace(", 2022", "")}</small>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
