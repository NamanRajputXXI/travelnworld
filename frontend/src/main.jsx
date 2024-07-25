import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Blogs from "./pages/Blogs.jsx";
import Packages from "./pages/Packages.jsx";
import Testimonials from "./pages/Testimonials.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="font-dm-sans ">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/B2BLogin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/packages" element={<SignUp />} />
          <Route path="/destination" element={<SignUp />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/testimonails" element={<Testimonials />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
