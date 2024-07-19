import React from "react";
import WeddingCarouselTop from "./components/WeddingCarouselTop";
import AboutUsSectionHomepage from "./components/AboutUsSectionHomepage";
import OurTravelAgents from "./components/OurTravelAgents";
import InternationalTopTourPackage from "./components/InternationalTopTourPackage";
import DomesticTopTourPackage from "./components/DomesticTopTourPackage";
import VerifiedHotel from "./components/VerifiedHotel";
import VerifiedTransport from "./components/VerifiedTransport";

const App = () => {
  return (
    <>
      <WeddingCarouselTop />
      <AboutUsSectionHomepage />
      <OurTravelAgents />
      <InternationalTopTourPackage />
      <VerifiedHotel />
      <DomesticTopTourPackage />
      <VerifiedTransport />
    </>
  );
};

export default App;
