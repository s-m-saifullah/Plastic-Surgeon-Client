import React from "react";
import { Helmet } from "react-helmet";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceDetailsCard = ({ service }) => {
  const { _id, name, photoUrl, price, rating, description } = service;

  return (
    <div className="flex justify-center w-11/12 lg:w-10/12 mx-auto">
      <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg">
        <img
          className="w-full h-96 md:h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={photoUrl}
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-3xl md:text-5xl font-medium mb-2">
            {name}
          </h5>
          <p className="text-gray-700 text-base lg:text-lg mb-4">
            {description}
          </p>
          <p className="text-primary mb-10">
            <span className="text-5xl md:text-6xl lg:text-7xl">${price}</span>
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
          <a href="#reviews" className="btn btn-primary w-40 mt-10">
            Reviews
          </a>
        </div>
      </div>
      <Helmet>
        <title>{name} | Elizabeth Mcconnell | Plastic Surgeon</title>
      </Helmet>
    </div>
  );
};

export default ServiceDetailsCard;
