import React from "react";
import WeddingCarouselTop from "./components/home/WeddingCarouselTop";
import AboutUsSectionHomepage from "./components/home/AboutUsSectionHomepage";
import OurTravelAgents from "./components/home/OurTravelAgents";
import InternationalTopTourPackage from "./components/home/InternationalTopTourPackage";
import DomesticTopTourPackage from "./components/home/DomesticTopTourPackage";
import VerifiedHotel from "./components/home/VerifiedHotel";
import VerifiedTransport from "./components/home/VerifiedTransport";
import FreeRegisteredTravelAgents from "./components/home/FreeRegisteredTravelAgents";
import BlogSection from "./components/home/BlogSection";
import Testimonial from "./components/home/Testimonial";

const App = () => {
  return (
    <>
      {/* <Navbar/> */}

      <WeddingCarouselTop />
      {/* <HeroSection/> */}
      <AboutUsSectionHomepage />
      {/* <Client /> */}
      <OurTravelAgents />
      <InternationalTopTourPackage />
      <VerifiedHotel />
      <DomesticTopTourPackage />
      <VerifiedTransport />
      <FreeRegisteredTravelAgents />
      <InternationalTopTourPackage />
      <VerifiedHotel />
      <DomesticTopTourPackage />
      {/* <BannerSection/> */}
      <BlogSection />
      <Testimonial />
      {/* <Footer /> */}
    </>
  );
};

export default App;
