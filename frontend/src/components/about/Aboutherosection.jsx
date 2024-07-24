import React from "react";

const Aboutherosection = () => {
  return (
    <>
        <section className="flex flex-col lg:flex-row items-center h-fit max-w-7xl md:pb-20 py-10  px-5  mx-auto bg-white">
        <div className="flex flex-col lg:flex-row  items-center  xl:justify-between lg:justify-between w-full gap-8">
          <div className=" lg:w-1/2 w-full text-center lg:text-left pt-5">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
            Explore the World with TravelnWorld
            </h1>
            <p className="text-gray-400 text-base lg:text-lg  mb-6">
            At TravelnWorld, we are passionate about helping you create unforgettable travel experiences. Whether you're seeking adventure, relaxation, or cultural immersion, our expert guides, personalized itineraries, and travel tips will make your journey seamless and memorable.  At TravelnWorld, we are passionate about helping you create unforgettable travel experiences. Whether you're seeking adventure, relaxation, or cultural immersion, our expert guides, personalized itineraries, and travel tips will make your journey seamless and memorable.
            </p>
            <div className="flex flex-col sm:flex-row lg:justify-start  md:justify-center sm:justify-center gap-3">
              <button className="bg-black text-white px-5 py-2 hover:bg-[#142035]">
              Start Your Journey
              </button>
              <button className="bg-transparent text-black border border-black px-5 py-2 hover:bg-gray-200">
                How It Works
              </button>
            </div>
          </div>

          <div className="relative bg-cover md:w-1/2 w-full  rounded-2xl   mt-8 lg:mt-5">
            <img
              src="/Images/Homepageimages/about.png"
              className=" md:h-[500px] object-cover w-full sm:h-[400px] h-[300px] rounded-[100px] "
              alt="About us"
            />
          </div>
        </div>
      </section>

    </>
  );
};

export default Aboutherosection;



