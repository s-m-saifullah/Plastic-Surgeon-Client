import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../shared/ServiceCard";

const HomeServices = () => {
  const [services, setServices] = useState([]);

  //   Getting 3 services for homepage
  useEffect(() => {
    fetch("http://localhost:5000/services?num=3")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold mb-5">Add a Service</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Link to="/services" className="btn btn-primary">
          See All Services
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
