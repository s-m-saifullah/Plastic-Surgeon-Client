import React from "react";
import { useLoaderData } from "react-router-dom";
import Reviews from "./Reviews";
import ServiceDetailsCard from "./ServiceDetailsCard";

const ServiceDetails = () => {
  const service = useLoaderData();

  return (
    <div>
      <ServiceDetailsCard service={service} />
      <Reviews id={service._id} serviceName={service.name} />
    </div>
  );
};

export default ServiceDetails;
