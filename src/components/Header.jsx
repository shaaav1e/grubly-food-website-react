import React, { useState, useEffect, useRef } from "react";
import newLogo from "../assets/images/newlogo.svg?webp"; // Add ?webp query
import Topbar from "./Topbar";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sideNavRef = useRef(null);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/" },
    { title: "About", path: "/" },
    { title: "Contact", path: "/" },
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle click outside to close nav
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target) &&
        isNavOpen
      ) {
        setIsNavOpen(false);
      }
    };

    // Control body scroll
    if (isNavOpen) {
      document.body.classList.add("nav-active");
    } else {
      document.body.classList.remove("nav-active");
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("nav-active");
    };
  }, [isNavOpen]);

  return (
    <>
      {/* Topbar is only visible when not scrolled */}
      {!isScrolled && <Topbar />}

      {/* Main navbar - fixed and with background when scrolled */}
      <nav
        className={`w-full ${
          isScrolled ? "fixed top-0 left-0 right-0 z-40 !bg-eerie-black-4" : ""
        } transition-all duration-300`}
      >
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <a className="w-40 h-auto" href="/">
            <picture>
              <source srcSet={newLogo} type="image/webp" />
              <img
                src={newLogo.replace(".webp", ".svg")} // Fallback to original SVG
                alt="FoodLife Logo"
                width="160" // Add explicit width
                height="40" // Add explicit height
                loading="lazy"
              />
            </picture>
          </a>

          {/* Mobile menu toggle */}
          <i
            className="ri-menu-5-line text-3xl cursor-pointer md:hidden text-gold"
            onClick={() => setIsNavOpen(true)}
          ></i>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.title}
                  className="border-b-2 border-transparent hover:border-gold"
                >
                  <a
                    href={link.path}
                    className="text-white hover:text-gold py-1 block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation Sidebar */}
          <div
            className={`fixed inset-0 bg-black-alpha-80 z-50 md:hidden transition-opacity duration-300 ${
              isNavOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Side Navigation Content */}
            <div
              ref={sideNavRef}
              className={`w-[80%] max-w-[400px] h-full bg-[color:var(--color-eerie-black-2)] p-8 transition-transform duration-300 ${
                isNavOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center mb-8">
                <a className="w-36 h-auto" href="/">
                  <picture>
                    <source srcSet={newLogo} type="image/webp" />
                    <img
                      src={newLogo.replace(".webp", ".svg")} // Fallback to original SVG
                      alt="FoodLife Logo"
                      width="144" // Add explicit width
                      height="36" // Add explicit height
                      loading="lazy"
                    />
                  </picture>
                </a>
                <i
                  className="ri-close-line text-3xl cursor-pointer text-gold"
                  onClick={() => setIsNavOpen(false)}
                ></i>
              </div>

              <nav>
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li key={link.title} className="border-b border-gold">
                      <a
                        href={link.path}
                        className="text-white text-lg block py-2 hover:text-[color:var(--color-gold)] transition-colors"
                        onClick={() => setIsNavOpen(false)}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Extra information section for mobile */}
              <div className=" pt-8  ">
                <h4 className="text-white !text-3xl font-bold mb-4">
                  Visit Us
                </h4>
                <div className="flex items-center  gap-2 mb-3 text-white-alpha-20">
                  <i className="ri-map-pin-line text-gold"></i>
                  <span className="text-sm">Islamabad, Blue Area</span>
                </div>
                <div className="flex items-center  gap-2 mb-3 text-white-alpha-20">
                  <i className="ri-phone-line text-gold"></i>
                  <span className="text-sm">+92 336 0018100</span>
                </div>
                <div className="flex items-center  gap-2 text-white-alpha-20">
                  <i className="ri-mail-line text-gold"></i>
                  <span className="text-sm">info@foodlife.com</span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
