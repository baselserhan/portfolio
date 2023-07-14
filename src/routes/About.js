import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/HeroImg/HeroImg2";
import AboutContent from "../components/AboutContent/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="I'm a freindly Front-End Developer." />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
