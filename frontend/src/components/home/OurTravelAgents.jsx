import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
const OurTravelAgents = () => {
  // Destinations Data
  const ourTravelAgents = [
    {
      imageUrl: `/Images/travelAgenciesLogo/richieRichTravels.png`,
      name: "RICHE RICH TOURS AND TRAVELS",
      phone: "9632417602",
    },
    {
      imageUrl: `/Images/travelAgenciesLogo/travelYug.jpg`,
      name: "Travels YUG",
      phone: "9625624780",
    },
    {
      imageUrl: `/Images/travelAgenciesLogo/kamakshiHolidays.png`,
      name: "KAMAKSHI HOLIDAYS",
      phone: "9881290229",
    },
    {
      imageUrl: `/Images/travelAgenciesLogo/southIndianHolidays.jpeg`,
      name: "SOUTH INDIAN HOLIDAYS",
      phone: "7567891018",
    },
    {
      imageUrl: `/Images/travelAgenciesLogo/perfectPlanners.png`,
      name: "PERFECT PLANNERS",
      phone: "9596863183",
    },
    {
      imageUrl: `/Images/travelAgenciesLogo/sathyaTravels.png`,
      name: "SATHYA TRAVELS",
      phone: "9965539599",
    },
  ];

  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1, // Default to 1 review visible
          spacing: 8,
        },
        breakpoints: {
          "(min-width: 288px)": {
            slides: {
              origin: "auto",
              perView: 1, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 2, // Show 2 reviews on screens >= 768px
              spacing: 8,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 3, // Show 3 reviews on screens >= 1024px
              spacing: 12,
            },
          },
        },
      });
    }
  }, []);

  const handlePrevSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.prev();
    }
  };

  const handleNextSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.next();
    }
  };
  return (
    <section className="">
      <div className="mx-auto relative max-w-[1340px] px-4 md:py-20 py-10 sm:px-6    lg:ps-8 ">
        <div className="max-w-7xl sm:px-8 items-end justify-center sm:flex sm:pe-6 lg:pe-8">
          <h1 className="text-center text-[#01055b] md:text-5xl text-3xl font-bold mb-4 sm:mb-0 ">
            Top Travel Agents
          </h1>
        </div>
        <div className="mt-8 relative max-w-7xl sm:flex hidden gap-4 lg:mt-0">
          <button
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            className="rounded-full absolute md:top-[180px] top-[110px] -left-[10px] z-[100] border flex justify-center  items-center  bg-[#01055b] shadow-xl p-4  transition  hover:text-white"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="text-white w-6 h-6" // Apply 'text-black' class directly here
            >
              <path
                fill="currentColor"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <button
            aria-label="Next slide"
            onClick={handleNextSlide}
            className="rounded-full border absolute -right-[10px] md:top-[180px] top-[110px] z-[100]  bg-[#01055b] shadow-xl p-4 flex justify-center items-center  transition  hover:text-white"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="text-white h-6 w-6" // Change this class to 'text-black'
            >
              <path
                fill="currentColor"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>

        <div className=" sm:mt-16 relative mt-8 lg:col-span-2 sm:px-8  px-3 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {ourTravelAgents.map((item, i) => (
              <div key={i}>
                <div className="keen-slider__slide" key={i}>
                  <div className="flex border-[1px] p-5 border-gray-600 rounded-lg relative w-full sm:w-auto">
                    <div className="flex w-full flex-col justify-center  items-center">
                      <img src={item.imageUrl} alt="" className="w-auto h-32" />
                      <div className="flex gap-4 justify-center  items-center flex-col">
                        <h1 className="text-xl font-bold">{item.name}</h1>
                        <p>
                          <span className="font-semibold text-xl">
                            {" "}
                            Mobile -{" "}
                          </span>
                          {item.phone}
                        </p>
                        <button className="w-40 p-2 flex items-center justify-center text-white rounded-lg bg-[#01055b]">
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex sm:hidden justify-center gap-4 mt-8">
          <button
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            className="rounded-full bg-[#01055b] p-4 text-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6 h-6"
            >
              <path
                fill="currentColor"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <button
            aria-label="Next slide"
            onClick={handleNextSlide}
            className="rounded-full bg-[#01055b] p-4 text-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6 h-6"
            >
              <path
                fill="currentColor"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTravelAgents;
