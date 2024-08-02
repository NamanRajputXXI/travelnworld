
import React, { useState, useEffect } from "react";
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
import NextTopLoader from 'nextjs-toploader';

// 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
   

      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-white">
           <NextTopLoader
        color="#eb6734"
        
        initialPosition={0.08}
        crawlSpeed={200}
        height={2}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        zIndex={1600}
        showAtBottom={false}
      />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default App;
