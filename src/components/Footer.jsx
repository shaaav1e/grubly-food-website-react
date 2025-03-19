import React from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#eaa023]">
              FoodBites
            </h2>
            <p className="mb-6 text-gray-300">
              Experience the perfect blend of exquisite flavors and warm
              ambiance at our restaurant.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#eaa023] transition-colors"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#eaa023] transition-colors"
              >
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#eaa023] transition-colors"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#eaa023] transition-colors"
              >
                <i className="ri-youtube-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#eaa023]">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="ri-map-pin-fill text-[#eaa023] mt-1 mr-3"></i>
                <span className="text-gray-300">
                  123 Culinary Avenue, Gourmet District, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-fill text-[#eaa023] mr-3"></i>
                <a
                  href="tel:+12345678901"
                  className="text-gray-300 hover:text-[#eaa023]"
                >
                  +1 (234) 567-8901
                </a>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-fill text-[#eaa023] mr-3"></i>
                <a
                  href="mailto:info@foodbites.com"
                  className="text-gray-300 hover:text-[#eaa023]"
                >
                  info@foodbites.com
                </a>
              </li>
              <li className="flex items-start">
                <i className="ri-time-fill text-[#eaa023] mt-1 mr-3"></i>
                <div className="text-gray-300">
                  <p>Mon-Fri: 11:00 AM - 11:00 PM</p>
                  <p>Sat-Sun: 10:00 AM - 12:00 AM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#eaa023]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#eaa023] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#eaa023] transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#eaa023] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#eaa023] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#eaa023] transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#eaa023] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#eaa023] transition-colors"
                >
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#eaa023]">
              Subscribe
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to get updates on our latest offers
              and meals.
            </p>
            <form className="mb-4">
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-[#1A1A1A] border border-[#333] px-4 py-2 rounded focus:outline-none focus:border-[#eaa023]"
                />
                <button
                  type="submit"
                  className="bg-[#eaa023] hover:bg-[#d8921e] text-black font-medium py-2 px-4 rounded transition-colors"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#333] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} FoodBites Restaurant. All Rights
              Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#eaa023] text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#eaa023] text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
