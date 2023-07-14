import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroImg from "../components/HeroImg/HeroImg";
import Footer from "../components/Footer/Footer";
import Work from "../components/Work/Work";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
