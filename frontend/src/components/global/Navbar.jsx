import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white px-5 py-3 relative z-50 w-full">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <NavLinks menuOpen={menuOpen} />
        <MenuToggle onClick={onToggleMenu} menuOpen={menuOpen} />
        <ContactUs menuOpen={menuOpen} />
      </nav>
    </header>
  );
};

const Logo = () => (
  <div className="z-50">
    <img
      className="w-20 cursor-pointer"
      src="/Images/Homepageimages/logo.png"
      alt="Logo"
    />
  </div>
);

const NavLinks = ({ menuOpen }) => (
  <div
    className={`nav-links duration-300 lg:static absolute bg-white lg:min-h-fit left-0 z-40 ${
      menuOpen ? "top-[60px]" : "top-[-500%]"
    } lg:w-auto w-full flex items-center px-5 lg:px-0`}
  >
    <ul
      className={`flex font-medium py-3 lg:flex-row flex-col lg:items-center gap-10 w-full lg:w-auto ${
        menuOpen
          ? "flex flex-col items-center justify-center"
          : "hidden lg:flex"
      }`}
    >
      <NavLink to="/" text="Home" />
      <NavLink to="/about" text="About us" />
      <NavLink to="/contact" text="Contact" />
      <NavLink to="/packages" text="Packages" />
      <NavLink to="/blogs" text="Blogs" />
      {menuOpen && <ContactUs mobile />}
    </ul>
  </div>
);

const NavLink = ({ to, text }) => (
  <li>
    <Link className="hover:text-[#eb6734] text-base font-semibold" to={to}>
      {text}
    </Link>
  </li>
);

const MenuToggle = ({ onClick, menuOpen }) => (
  <div onClick={onClick} className="text-2xl cursor-pointer lg:hidden z-50">
    {menuOpen ? (
      <svg
        className="h-6 w-6 text-gray-700 transition-transform transform rotate-90"
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
        className="h-6 w-6 text-gray-700 transition-transform transform rotate-0"
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
);

const ContactUs = ({ mobile = false }) => (
  <div
    className={`flex items-center gap-6 ${
      mobile ? "lg:mt-0 lg:hidden" : "hidden lg:flex md:hidden"
    }`}
  >
    <Link
      to="/B2BLogin"
      className="bg-[#071835] flex items-center gap-1 justify-center  text-white px-4 py-2 rounded-xl hover:bg-[#142035] text-xl "
    >
      <CiUser color="white " size={20} />
      Login
    </Link>
  </div>
);

export default Navbar;
