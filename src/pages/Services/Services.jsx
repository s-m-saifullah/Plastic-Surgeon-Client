import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../shared/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold mb-5">
        Services We Provide
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
