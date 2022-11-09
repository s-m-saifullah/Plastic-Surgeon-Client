import React, { useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { FaDollarSign } from "react-icons/fa";

const AddServices = () => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.serviceName.value;
    const photoUrl = form.photoUrl.value;
    const price = form.servicePrice.value;
    const rating = parseFloat(form.rating.value);
    const description = form.serviceDescription.value;
    if (rating < 1 || rating > 5) {
      setError("Rating must be between 1 and 5");
      return;
    }
    const service = {
      name,
      photoUrl,
      price,
      rating,
      description,
      time: new Date().getTime(),
    };
    fetch("https://plastic-surgeon-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Service Successfully Added!");
          form.reset;
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold">Add a Service</h2>
      <div className="max-w-2xl mx-auto bg-white p-16">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="service-name"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Service Name
            </label>
            <input
              type="text"
              id="service-name"
              name="serviceName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Face Lift"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="photo-url"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photo-url"
              name="photoUrl"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=""
              required
            />
          </div>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div className="relative">
              <label
                htmlFor="service-price"
                className="block mb-2 text-base font-medium text-gray-900"
              >
                Price
              </label>
              <span className="absolute top-[46px] left-2">
                <FaDollarSign className="text-gray-700 text-base" />
              </span>
              <input
                type="number"
                name="servicePrice"
                id="service-price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-6"
                placeholder="How much the service cost?"
                required
              />
            </div>
            <div>
              <label
                htmlFor="rating"
                className="block mb-2 text-base font-medium text-gray-900"
              >
                Ratings
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Integer between 1 and 5"
                required
              />
              {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
            </div>
          </div>
          <div>
            <label
              htmlFor="serviceDescription"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              type="number"
              id="serviceDescription"
              name="serviceDescription"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-28 p-2.5"
              placeholder="What is the service about?"
              required
            />
          </div>

          <div className="flex items-stretch mb-6"></div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full px-5 py-2.5 text-center"
          >
            Add Service
          </button>
        </form>
      </div>
      <Helmet>
        <title>Add a Service | Elizabeth Mcconnell | Plastic Surgeon</title>
      </Helmet>
    </div>
  );
};

export default AddServices;
