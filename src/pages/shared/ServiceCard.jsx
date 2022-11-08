import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, name, photoUrl, price, description } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={photoUrl} alt={name} />
      </figure>
      <div className="card-body gap-4">
        <h2 className="card-title">{name}</h2>
        <p>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/service/${_id}`} className="btn btn-primary w-full">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
