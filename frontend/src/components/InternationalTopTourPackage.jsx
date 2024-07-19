"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const InternationalTopTourPackage = () => {
  const internationalTopTourPackageData = [
    {
      imageUrl: `https://cdn.pixabay.com/photo/2015/02/24/13/23/buildings-647400_640.jpg`,
      title: "Singapore",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/03/19/18/29/camel-4948299_640.jpg`,
      title: "Dubai",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/09/06/09/05/beach-5548446_640.jpg`,
      title: "Bali",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_640.jpg`,
      title: "Switzerland",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Dubai",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2021/02/23/11/06/mountains-6043079_960_720.jpg`,
      title: "Nepal",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/04/01/10/31/zzz-4990731_640.jpg`,
      title: "Singapore",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2016/09/15/01/57/temple-1670926_640.jpg`,
      title: "Thailand",
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
          perView: 1,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 2,
              spacing: 16,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 3,
              spacing: 16,
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
    <section className="py-10 md:py-20">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-16">
          <h1 className="text-2xl md:text-5xl text-center sm:text-left mb-4 sm:mb-0">
            Top International Tour Package
          </h1>
          <div className="hidden sm:flex gap-4">
            <button
              aria-label="Previous slide"
              onClick={handlePrevSlide}
              className="rounded-full bg-gray-200 p-5 hover:bg-gray-300 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="w-5 h-5 text-black"
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
              className="rounded-full bg-gray-200 p-5 hover:bg-gray-300 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="w-5 h-5 text-black"
              >
                <path
                  fill="currentColor"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div ref={sliderContainer} className="keen-slider">
          {internationalTopTourPackageData.map((item, i) => (
            <div key={i} className="keen-slider__slide">
              <div className="relative w-full h-96 rounded-xl overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute flex flex-col gap-3 bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white leading-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur, eius?
                  </p>
                  <button className="bg-white rounded-lg p-2 w-40 text-black ">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex sm:hidden justify-center gap-4 mt-8">
          <button
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            className="rounded-full bg-gray-200 p-5 text-black  transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-5 h-5"
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
            className="rounded-full bg-gray-200 p-5 text-black transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-5 h-5"
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

export default InternationalTopTourPackage;
