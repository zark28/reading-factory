import React from "react";
import AboutSection from "../Components/hompage/AboutSection";
import BlogSection from "../Components/hompage/BlogSection";
// import FactsSection from "../Components/hompage/FactsSection";
import FeaturesSection from "../Components/hompage/FeaturesSection";
import TeamSection from "../Components/hompage/TeamSection";
import VendorSection from "../Components/hompage/VendorSection";

const HomePage = () => {
  const text22 =
    "Come partner with Us to build up on the We will responde get back to you in a couple of hours.";
  const text11 =
    "The impact we have created over the few months have gained recognition from Bayport and Reach for Change, as they awarded us with the best literacy idea in 2018 Best Teacher Innovative Competition.";
  return (
    <div>
      {/* <FactsSection /> */}
      <AboutSection />
      <FeaturesSection text1={text11} text2={text22} heading="Work With Us" />
      <TeamSection />
      <BlogSection />
      <VendorSection />
    </div>
  );
};

export default HomePage;
