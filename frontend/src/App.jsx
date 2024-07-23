import React from "react";
import Herosection from "./components/home/Herosection";
import Client from "./components/home/Client";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar";
import GrowBuisness from "./components/home/GrowBuisness";
import WeddingCarouselTop from "./components/home/WeddingCarouselTop";
import OurTravelAgents from "./components/home/OurTravelAgents";
import InternationalTopTourPackage from "./components/home/InternationalTopTourPackage";
import DomesticTopTourPackage from "./components/home/DomesticTopTourPackage";
import VerifiedHotel from "./components/home/VerifiedHotel";
import VerifiedTransport from "./components/home/VerifiedTransport";
import FreeRegisteredTravelAgents from "./components/home/FreeRegisteredTravelAgents";
import BlogSection from "./components/home/BlogSection";
import Testimonial from "./components/home/Testimonial";
import About from "./Pages/About";
import TeamSection from "./components/about/TeamSection";
import PricingSection from "./components/about/PricingSection";
import OurClients from "./components/about/OurClients";
const App = () => {
  return (
    <>



       <Navbar /> 
      <WeddingCarouselTop />
      <Herosection />
      <Client />
      <OurTravelAgents />
      <InternationalTopTourPackage />
      <VerifiedHotel />
      <DomesticTopTourPackage />
      <VerifiedTransport />
      <FreeRegisteredTravelAgents />
      <InternationalTopTourPackage />
      <VerifiedHotel />
      <DomesticTopTourPackage />
      <GrowBuisness />
      <BlogSection />
      <Testimonial />
      <Footer />
    </>
  );
};

export default App;
