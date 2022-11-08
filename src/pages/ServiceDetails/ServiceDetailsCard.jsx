import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const ServiceDetailsCard = ({ service }) => {
  const { _id, name, photoUrl, price, rating, description } = service;

  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={photoUrl}
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-6xl font-medium mb-2">{name}</h5>
          <p className="text-gray-700 text-lg mb-4">{description}</p>
          <p className="text-primary mb-10">
            <span className="text-7xl">${price}</span>
          </p>
          <p className="flex items-center text-lg">
            <span className="mr-3">Ratings:</span>
            <span className="flex text-primary">
              {[...Array(parseInt(rating))].map((item, index) => (
                <FaStar key={index} />
              ))}
              {[...Array(5 - parseInt(rating))].map((item, index) => (
                <FaRegStar key={index} />
              ))}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
