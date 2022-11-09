import React from "react";
import { Helmet } from "react-helmet";
import Hero from "./Hero";
import HomeServices from "./HomeServices";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Elizabeth Mcconnell | Plastic Surgeon</title>
      </Helmet>
      <Hero />
      <HomeServices />
    </div>
  );
};

export default Home;
