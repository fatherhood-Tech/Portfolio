import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="px-0">
      <nav
        className={`fixed w-full z-50 text-white ${
          scrolled ? "bg-black/20 backdrop-blur text-white" : "text-gray-900"
        } transition-all duration-300 overflow-hidden`}
      >
        <div className="w-full border-b border-gray-400">
          <div className="flex justify-between px-6 md:px-10 lg:px-20 items-center font-semibold">
            <div>
              <img src="images/f.png" alt="Logo" className="h-16 md:h-20" />
            </div>

            <div className="hidden md:flex gap-4 lg:gap-8">
              <NavLink
                exact
                to="/"
                activeClassName="text-blue-500"
                className="nav-link"
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                activeClassName="text-blue-500"
                className="nav-link"
              >
                Our services
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="text-blue-500"
                className="nav-link"
              >
                About us
              </NavLink>
              <NavLink
                to="/work"
                activeClassName="text-blue-500"
                className="nav-link"
              >
                Our work
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="text-blue-500"
                className="nav-link"
              >
                Contact us
              </NavLink>
              <NavLink
                to="/careers"
                activeClassName="text-blue-500"
                className="nav-link"
              >
                Careers
              </NavLink>
            </div>
            <div className="hidden md:block">
              <button className="py-2 px-6 bg-black text-white rounded-3xl font-semibold">
                Reach us
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="py-2 px-5 bg-black text-white rounded-md"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg py-4">
            <div className="flex flex-col items-center gap-4">
              <NavLink
                exact
                to="/"
                activeClassName="text-blue-500"
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                activeClassName="text-blue-500"
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our services
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="text-blue-500"
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About us
              </NavLink>
              <NavLink
                to="/work"
                activeClassName="text-blue-500"
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our work
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="text-blue-500"
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact us
              </NavLink>
              <NavLink
                to="/careers"
                activeClassName="text-blue-500"
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </NavLink>
              <button className="py-2 px-6 bg-black text-white rounded-3xl font-semibold">
                Reach us
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
