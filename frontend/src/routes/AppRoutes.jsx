// src/Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Packages from "../pages/Packages";
import Destination from "../pages/Destination";
import B2BLogin from "../pages/B2BLogin";
import Blogs from "../pages/Blogs";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/b2b-login" element={<B2BLogin />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
