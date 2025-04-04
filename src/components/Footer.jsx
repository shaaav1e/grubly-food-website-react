import React from "react";
import "remixicon/fonts/remixicon.css";
const Footer = () => {
  return (
    <footer className="footer-bg lg:h-[30rem] text-gold pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gold">FoodBites</h2>
            <p
              className="mb-6 text-white"
              style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
            >
              Experience the perfect blend of exquisite flavors and warm
              ambiance at our restaurant.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gold hover:opacity-50 transition-colors"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>

              <a
                href="#"
                className="text-gold hover:opacity-50 transition-colors"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gold hover:opacity-50 transition-colors"
              >
                <i className="ri-youtube-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="ri-map-pin-fill text-gold mt-1 mr-3"></i>
                <span
                  className="text-white"
                  style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
                >
                  123 Culinary Avenue, Gourmet District, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-fill text-gold mr-3"></i>
                <a
                  href="tel:+12345678901"
                  className="text-white hover:text-gold"
                  style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
                >
                  +92 (336) 0018100
                </a>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-fill text-gold mr-3"></i>
                <a
                  href="mailto:shaaavie@gmail.com"
                  className="text-white hover:text-gold"
                  style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
                >
                  shaaavie@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <i className="ri-time-fill text-gold mt-1 mr-3"></i>
                <div
                  className="text-white"
                  style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
                >
                  <p>Mon-Fri: 10:00 AM - 12:00 PM</p>
                  <p>Sat-Sun: 8:00 AM - 12:00 AM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gold transition-colors"
                  style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gold transition-colors"
                  style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gold transition-colors"
                  style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white hover:text-gold transition-colors"
                  style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold">Subscribe</h3>
            <p
              className="text-white mb-4"
              style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
            >
              Subscribe to our newsletter to get updates on our latest offers
              and meals.
            </p>
            <form className="mb-4">
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-[#1A1A1A] border border-[#333] px-4 py-2 rounded focus:outline-none focus:border-gold"
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-[#d8921e] text-black font-medium py-2 px-4 rounded transition-colors"
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
            <p
              className="text-white text-center md:text-left"
              style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
            >
              &copy; {new Date().getFullYear()} FoodBites Restaurant. All Rights
              Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gold text-sm"
                    style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gold text-sm"
                    style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
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
