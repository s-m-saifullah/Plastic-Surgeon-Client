import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../shared/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <h2 className="text-center text-3xl font-semibold mb-5">
        Services We Provide
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <Helmet>
        <title>Services | Elizabeth Mcconnell | Plastic Surgeon</title>
      </Helmet>
    </div>
  );
};

export default Services;
