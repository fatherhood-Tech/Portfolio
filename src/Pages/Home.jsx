import React from "react";
import Contact from "./Contact";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import OurService from "../Components/OurServices.jsx";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <OurService />
      <Contact />
    </div>
  );
};

export default Home;
