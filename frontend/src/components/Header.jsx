

import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white p-5">
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
  <div>
    <img className="w-16 cursor-pointer" src="../assets/logo.png" alt="Logo" />
  </div>
);

const NavLinks = ({ menuOpen }) => (
  <div className={`nav-links   duration-500 lg:static absolute bg-white lg:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[100px]' : 'top-[-100%]'} lg:w-auto w-full flex items-center px-5 lg:px-0`}>
    <ul className={`flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8 w-full lg:w-auto ${menuOpen ? 'flex flex-col items-center justify-center' : 'hidden lg:flex'}`}>
      <NavLink href="#" text="Home" />
      <NavLink href="#" text="About us" />
      <NavLink href="#" text="Packages" />
      <NavLink href="#" text="Destination" />
      <NavLink href="#" text="B2B LOGIN" />
      <NavLink href="#" text="Blogs" />
      <NavLink href="#" text="Testimonials" />
      {menuOpen && <ContactUs mobile />}
    </ul>
  </div>
);

const NavLink = ({ href, text }) => (
  <li>
    <a className="hover:text-[#eb6734]" href={href}>{text}</a>
  </li>
);

const MenuToggle = ({ onClick, menuOpen }) => (
  <div onClick={onClick} className="text-3xl cursor-pointer lg:hidden">
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
);

const ContactUs = ({ mobile = false }) => (
  <div className={`flex items-center gap-6 ${mobile ? 'mt-8 lg:mt-0' : 'hidden lg:flex md:hidden'} ${!mobile && 'lg:flex hidden md:hidden '}`}>
    <button className="bg-[#071835] text-white px-5 py-2 rounded-full hover:bg-[#87acec] ">Contact US</button>
  </div>
);

export default Header;



