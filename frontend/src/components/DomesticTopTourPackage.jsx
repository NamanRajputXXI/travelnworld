"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const DomesticTopTourPackage = () => {
  const internationalTopTourPackageData = [
    {
      imageUrl: `https://cdn.pixabay.com/photo/2017/02/16/11/33/klong-prao-beach-2071238_640.jpg`,
      title: "Andaman",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2022/09/19/20/17/pony-7466390_640.jpg`,
      title: "Kashmir",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2018/04/22/18/19/caravan-3341872_640.jpg`,
      title: "Rajasthan",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2017/05/30/05/46/goa-2355883_640.jpg`,
      title: "Goa",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2021/09/13/08/59/lake-6620689_640.jpg`,
      title: "Himachal",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2020/08/16/07/59/uttarakhand-5492099_640.jpg`,
      title: "Uttarakhand",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2016/03/27/17/26/water-1283199_640.jpg`,
      title: "Kerala",
    },
    {
      imageUrl: `https://cdn.pixabay.com/photo/2017/06/13/07/22/gate-of-india-2397838_640.jpg`,
      title: "Mumbai",
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
          <h1 className="text-center text-[#01055b]  md:text-5xl text-2xl  ">
            Top Domestic Tour Package
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

export default DomesticTopTourPackage;
