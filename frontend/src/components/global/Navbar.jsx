import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white p-5 relative z-50 w-full">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="z-50">
          <img
            className="w-16 cursor-pointer"
            src="/Images/Homepageimages/logo.png"
            alt="Logo"
          />
        </div>

        <div
          className={`nav-links duration-500 lg:static absolute bg-white lg:min-h-fit min-h-[60vh] left-0 z-40 ${
            menuOpen ? "top-[60px]" : "top-[-500%]"
          } lg:w-auto w-full flex items-center px-5 lg:px-0`}
        >
          <ul
            className={`flex font-medium py-5 lg:flex-row flex-col lg:items-center gap-5 w-full lg:w-auto ${
              menuOpen
                ? "flex flex-col items-center justify-center"
                : "hidden lg:flex"
            }`}
          >
            <li>Home</li>
            <li>About us</li>
            <li>Packages</li>
            <li>Destination</li>
            <li>B2B LOGIN</li>
            <li>Blogs</li>
            <li>Testimonials</li>
            {menuOpen && (
              <div className="flex items-center gap-6 lg:hidden">
                Contact US
              </div>
            )}
          </ul>
        </div>

        <div
          onClick={onToggleMenu}
          className="text-3xl cursor-pointer lg:hidden z-50"
        >
          {menuOpen ? (
            <svg
              className="h-8 w-8 text-gray-700 transition-transform transform rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-8 w-8 text-gray-700 transition-transform transform rotate-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-6">Contact US</div>
      </nav>
    </header>
  );
};

export default Navbar;
