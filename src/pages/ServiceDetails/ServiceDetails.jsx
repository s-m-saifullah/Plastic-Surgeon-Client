import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";

const ServiceDetails = () => {
  const service = useLoaderData();

  return (
    <div>
      <ServiceDetailsCard service={service} />
    </div>
  );
};

export default ServiceDetails;
