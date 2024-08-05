import React from "react";
import Contact from "./Contact";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import OurService from "../Components/OurServices.jsx";
import OurWork from "../Components/OurWork.jsx";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <OurService />
      <OurWork />
      <Contact />
    </div>
  );
};

export default Home;
