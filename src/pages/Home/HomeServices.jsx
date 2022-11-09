import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import ServiceCard from "../shared/ServiceCard";
import Spinner from "../shared/Spinner";

const HomeServices = () => {
  const [services, setServices] = useState([]);
  const { loading } = useContext(AuthContext);

  //   Getting 3 services for homepage
  useEffect(() => {
    fetch("https://plastic-surgeon-server.vercel.app/services?num=3")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2 className="text-center text-4xl font-semibold mb-5">Services</h2>
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
        </>
      )}
    </div>
  );
};

export default HomeServices;
