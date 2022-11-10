import React from "react";
import imgPlaceholder from "../../assets/images/placeholder.jpg";

const ReviewCard = ({ serviceReview }) => {
  const { username, photo, review, time } = serviceReview;

  const onImgError = (e) => {
    e.target.src = imgPlaceholder;
  };
  return (
    <div className="flex gap-5 items-center bg-blue-100 px-5 py-3 rounded-md">
      <div className="w-1/5 md:w-1/6 lg:w-1/12">
        <img
          src={photo ? photo : imgPlaceholder}
          className="rounded-full w-full"
          alt={`${username} photo`}
          onError={onImgError}
        />
      </div>
      <div className="w-4/5 md:w-5/6 lg:w-11/12">
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
