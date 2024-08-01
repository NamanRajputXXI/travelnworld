
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
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
// import Allpackages from "./components/packages/Allpackages";
// import Packagesbanner from "./components/packages/Packagesbanner";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <ClipLoader color="#123abc" loading={loading} size={50} />
        </div>
      ) : (
        <>
          {/* <Packagesbanner/>
          <Allpackages/> */}
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
      )}
    </>
  );
};

export default App;
