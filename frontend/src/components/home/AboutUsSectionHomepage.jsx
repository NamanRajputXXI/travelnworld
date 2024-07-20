import React from "react";

const AboutUsSectionHomepage = () => {
  return (
    <div className="max-w-7xl lg:justify-between lg:items-start items-center justify-center lg:flex-row flex-col  flex gap-5 mx-auto px-5 md:py-20 py-10">
      <div className="flex relative w-fit justify-center sm:ml-0 -ml-12 items-center p-5 flex-col">
        <img
          src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_640.jpg"
          alt=""
          className="xl:h-[600px] sm:h-[550px] h-[400px] object-cover rounded-full sm:w-[350px] w-[220px] xl:w-[400px]"
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_640.jpg"
          alt=""
          className="sm:h-[320px] h-[200px] absolute object-cover  bottom-0 sm:-right-[100px] -right-[50px] sm:rounded-[130px] rounded-[80px] border-white border-[5px] sm:border-[10px] w-[150px] sm:w-[250px]"
        />
      </div>
      <div className="flex lg:w-1/2 w-full flex-col gap-5">
        <h1 className="text-[#fb3203] font-bold text-xl">About Us</h1>
        <h5 className="text-3xl font-bold  text-[#01055b]">
          Your Trusted Travel Experts
        </h5>
        <p className="sm:text-lg text-sm ">
          At TravelnWorld, we specialize in curating unforgettable travel
          experiences. Our team of professional travel planners is dedicated to
          making your dream trip a reality. Whether you're looking to explore
          the serene beaches of Goa, the majestic mountains of Himachal Pradesh,
          or the romantic backwaters of Kerala, we've got you covered. With
          personalized itineraries, exclusive deals, and 24/7 support, we ensure
          that your journey is as seamless and enjoyable as possible. Trust us
          to take care of every detail, so you can focus on creating beautiful
          memories.
        </p>
      </div>
    </div>
  );
};

export default AboutUsSectionHomepage;
