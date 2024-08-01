import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#01055b] text-white dark:bg-neutral-700 dark:text-white/75 w-full">
      <div className="max-w-7xl mx-auto px-5 py-10 md:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col lg:justify-normal lg:items-start justify-center items-center">
              <h6 className="mb-4 font-semibold uppercase">Policy</h6>
              <ul>
                <li className="mb-4">
                  <Link
                    to="/privacyPolicy"
                    className="text-white dark:text-neutral-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/terms"
                    className="text-white dark:text-neutral-200"
                  >
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col lg:justify-normal lg:items-start justify-center items-center">
              <h6 className="mb-4 font-semibold uppercase">Support</h6>
              <ul>
                <li className="mb-4">
                  <Link
                    to="/contact"
                    className="text-white dark:text-neutral-200"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link  to="/about" className="text-white dark:text-neutral-200">
                    About us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:justify-normal lg:items-start  items-center">
            <h6 className="mb-4 font-semibold uppercase">Quick Links</h6>
            <ul className="flex flex-col lg:justify-normal lg:items-start  items-center">
              <li className="mb-4">
                <a href="/" className="text-white dark:text-neutral-200">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <Link to="#!" className="text-white dark:text-neutral-200">
                  Trending Destination
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/TourPackages" className="text-white dark:text-neutral-200">
                 Packages
                </Link>
              </li>
              <li>
                <Link to="#!" className="text-white dark:text-neutral-200">
                  Domestic Destination
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-10 lg:justify-normal lg:items-start  items-center">
            <div className="'flex flex-col lg:justify-normal lg:items-start  items-center">
              <h6 className="mb-4 font-semibold uppercase">Follow Us On</h6>
              <div className="flex space-x-6">
                <div className="p-2 bg-white rounded-full flex items-center justify-center">
                  <Link
                    to="https://www.facebook.com/profile.php?id=100091741043983&mibextid=ZbWKwL"
                    className="text-[#4267B2]  "
                    target="_blank"
                  >
                    <FaFacebookF className="h-6 w-6" />
                  </Link>
                </div>

                <div className="p-2 bg-white rounded-full flex items-center justify-center">
                  <Link
                    to="https://www.instagram.com/travelnworld_official/"
                    className="text-[#E1306C]"
                    target="_blank"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </Link>
                </div>
                <div className="p-2 bg-white rounded-full flex items-center justify-center">
                  <Link to="#!" className="text-[#E1306C]">
                    <FaYoutube className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:justify-normal lg:items-start  items-center">
              <h5 className="uppercase mb-4">Sign up</h5>
              <p className="mb-4">
              Start your journey with TravelnWorld. Sign up to explore exclusive travel deals.</p>
              <div className="form-outline w-full mb-4 flex flex-col md:flex-row gap-2">
                <input
                  type="email"
                  id="form5Example2"
                  className="form-control p-2 text-black w-full rounded-2xl"
                  placeholder="Email address"
                />
                <button
                  type="button"
                  className="btn bg-white text-[#01055b] font-medium py-2 px-4 rounded-2xl text-center w-full md:w-auto"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center p-2 dark:bg-neutral-700">
          <span>© Travelnworld@2024, Copyright, All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
