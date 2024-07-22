import React from 'react'
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
import OurClients from './OurClients';
import TeamSection from './TeamSection';
import PricingSection from './PricingSection';
import AboutUs from '../../Pages/About';
const Aboutherosection = () => {
  return (<>
    <Navbar/>
    <section className="flex flex-col lg:flex-row items-center h-auto max-w-7xl py-20 px-4 lg:px-8 mx-auto bg-white">
    <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full gap-5">
      
      <div className="max-w-lg mt-8 lg:mt-0 lg:ml-8 text-center lg:text-left pt-5">
        <span className="text-orange-500 text-xl font-semibold block mb-4">
          About Us
        </span>
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
          We Provide Digital Solutions for Your Business
        </h2>
        <p className="text-gray-800 text-base lg:text-lg leading-7 tracking-wide mb-6 ">
          Soluta illum facere consequuntur magni. Ullam dolorem repudiandae
          cumque voluptate consequatur consectetur, eos provident
          necessitatibus reiciendis corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quam explicabo labore maiores odio veniam maxime eveniet voluptatibus. Quasi, numquam ad magni quo explicabo odit repellendus iusto perferendis minus.
        </p>
        <div className='flex flex-row gap-5'>
        <button className='bg-black text-white px-5 py-2  hover:bg-[#142035]'>Get started</button>
        <button> How it works</button>
        </div>

      </div>
      
<div className="relative w-full lg:w-1/2 ">
        <img
          src="/Images/Homepageimages/about.png"
          className="h-fit rounded-2xl  "
          alt="About us"
        />
      </div>
    </div>
  </section>
  <TeamSection/>
  <AboutUs/>
  <OurClients/>
  <PricingSection/>
  <Footer/>
  </>
  )
}

export default Aboutherosection