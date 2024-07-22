import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center h-auto max-w-7xl py-20 px-4 lg:px-8 mx-auto bg-white">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full gap-5">
          <div className="relative w-full lg:w-1/2 h-auto">
            <img
              src="/Images/Homepageimages/about.png"
              className="w-full h-auto rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
              alt="About us"
            />
          </div>
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
              necessitatibus reiciendis corrupti! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Unde quam explicabo labore maiores
              odio veniam maxime eveniet voluptatibus. Quasi, numquam ad magni
              quo explicabo odit repellendus iusto perferendis minus.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-xl lg:text-2xl  font-bold mb-2 text-orange-500  -pt-1">
                  Awards
                </h2>
                <p className="text-2xl lg:text-4xl font-bold pt-6">800+</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl lg:text-2xl font-bold mb-2 text-orange-500">
                  Happy Clients
                </h3>
                <p className="text-2xl lg:text-4xl font-bold">1200+</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl lg:text-2xl font-bold mb-2 text-orange-500">
                  Work Experience
                </h3>
                <p className="text-2xl lg:text-4xl font-bold">12+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
