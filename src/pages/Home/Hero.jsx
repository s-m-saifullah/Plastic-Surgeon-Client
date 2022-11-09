import React from "react";
import heroBg from "../../assets/images/hero-bg.jpg";

const Hero = () => {
  return (
    <div className="mb-20">
      <div
        className="hero justify-start min-h-screen rounded-md pl-10"
        style={{ backgroundImage: `url("${heroBg}")` }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">
              I Love Inspiring Confidence In My Patients
            </h1>
            <p className="mb-5 text-2xl">~ Dr. Mcconnell</p>
            <a href="#" className="btn btn-primary">
              My Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
