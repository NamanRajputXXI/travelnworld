"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
const FreeRegisteredTravelAgents = () => {
  // Destinations Data
  const ourTravelAgents = [
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Bhutan",
      link: "/packages/bhutan",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Bangladesh",
      link: "/product-category/international/bangladesh",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Mauritious",
      link: "/product-category/international/mauritious",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Switzerland",
      link: "/product-category/international/switzerland",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Dubai",
      link: "/packages/dubai",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Nepal",
      link: "/packages/nepal",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Singapore",
      link: "/packages/singapore",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Thailand",
      link: "/packages/thailand",
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
            Registered Travel Agents
          </h1>
        </div>
        <div className="mt-8 relative max-w-7xl sm:flex hidden gap-4 lg:mt-0">
          <button
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            className="rounded-full absolute md:top-[120px] top-[110px] -left-[20px] z-[100] border flex justify-center  items-center  bg-[#01055b] shadow-xl p-5  transition  hover:text-white"
          >
            <span className="inline-block h-5 w-5">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="text-white h-6 w-6" // Apply 'text-black' class directly here
              >
                <path
                  fill="currentColor"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </span>
          </button>
          <button
            aria-label="Next slide"
            onClick={handleNextSlide}
            className="rounded-full border absolute -right-[20px] md:top-[120px] top-[110px] z-[100] bg-[#01055b] p-5 flex justify-center items-center  transition  hover:text-white"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="text-white w-6 h-6" // Change this class to 'text-black'
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
                    <div className="flex sm:flex-row flex-col-reverse sm:justify-start justify-center sm:items-start items-center">
                      <div className="flex gap-2 sm:justify-start justify-center sm:items-start items-center flex-col">
                        <h1 className="text-xl font-bold">Richie Rich</h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
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

export default FreeRegisteredTravelAgents;
