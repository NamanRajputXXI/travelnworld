import React from "react";
import WeddingCarouselTop from "./components/WeddingCarouselTop";
import AboutUsSectionHomepage from "./components/AboutUsSectionHomepage";
import OurTravelAgents from "./components/OurTravelAgents";
import InternationalTopTourPackage from "./components/InternationalTopTourPackage";
import DomesticTopTourPackage from "./components/DomesticTopTourPackage";

const App = () => {
  return (
    <>
      <WeddingCarouselTop />
      <AboutUsSectionHomepage />
      <OurTravelAgents />
      <InternationalTopTourPackage />
      <DomesticTopTourPackage />
    </>
  );
};

export default App;
