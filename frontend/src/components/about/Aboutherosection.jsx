import React from "react";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
import OurClients from "./OurClients";
import TeamSection from "./TeamSection";
import PricingSection from "./PricingSection";
import AboutUs from "../../Pages/About";
const Aboutherosection = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col lg:flex-row items-center h-fit max-w-7xl py-20  px-5  mx-auto bg-white">
        <div className="flex flex-col lg:flex-row lg:items-start items-center  xl:justify-between lg:justify-between w-full gap-8">
          <div className="mt-8 lg:w-1/2 w-full text-center lg:text-left pt-5">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
              We Provide Digital Solutions for Your Business
            </h1>
            <p className="text-gray-400 text-base lg:text-lg  mb-6">
              Soluta illum facere consequuntur magni. Ullam dolorem repudiandae
              cumque voluptate consequatur consectetur, eos provident
              necessitatibus reiciendis corrupti! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Unde quam explicabo labore
            </p>
            <div className="flex flex-col sm:flex-row lg:justify-start  md:justify-center sm:justify-center gap-3">
              <button className="bg-black text-white px-5 py-2 hover:bg-[#142035]">
                Get Started
              </button>
              <button className="bg-transparent text-black border border-black px-5 py-2 hover:bg-gray-200">
                How It Works
              </button>
            </div>
          </div>

          <div className="relative bg-cover md:w-1/2 w-full  rounded-2xl   mt-8 lg:mt-5">
            <img
              src="/Images/Homepageimages/about.png"
              className=" md:h-[550px] object-cover w-full sm:h-[450px] h-[300px] rounded-[100px] "
              alt="About us"
            />
          </div>
        </div>
      </section>

      <TeamSection />
      <AboutUs />
      <OurClients />
      <PricingSection />
      <Footer />
    </>
  );
};

export default Aboutherosection;
