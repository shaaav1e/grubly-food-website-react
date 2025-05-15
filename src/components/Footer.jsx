import React from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  const socialLinks = [
    { icon: "ri-facebook-fill", url: "#", ariaLabel: "Facebook" },
    { icon: "ri-instagram-line", url: "#", ariaLabel: "Instagram" },
    { icon: "ri-youtube-fill", url: "#", ariaLabel: "YouTube" },
  ];

  const contactInfo = [
    {
      icon: "ri-map-pin-fill",
      content: "123 Culinary Avenue, Gourmet District, NY 10001",
      type: "text",
    },
    {
      icon: "ri-phone-fill",
      content: "+92 (336) 0018100",
      url: "tel:+923360018100",
      type: "link",
    },
    {
      icon: "ri-mail-fill",
      content: "shaaavie@gmail.com",
      url: "mailto:shaaavie@gmail.com",
      type: "link",
    },
    {
      icon: "ri-time-fill",
      content: ["Mon-Fri: 10:00 AM - 12:00 PM", "Sat-Sun: 8:00 AM - 12:00 AM"],
      type: "multiline",
    },
  ];

  const quickLinks = [
    { name: "Home", url: "#" },
    { name: "Menu", url: "#" },
    { name: "About Us", url: "#" },
    { name: "Contact", url: "#" },
  ];

  const footerLinks = [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" },
  ];

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
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gold hover:opacity-50 transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className={`${item.icon} text-gold mt-1 mr-3`}></i>
                  {item.type === "text" && (
                    <span
                      className="text-white"
                      style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
                    >
                      {item.content}
                    </span>
                  )}
                  {item.type === "link" && (
                    <a
                      href={item.url}
                      className="text-white hover:text-gold"
                      style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
                    >
                      {item.content}
                    </a>
                  )}
                  {item.type === "multiline" && (
                    <div
                      className="text-white"
                      style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
                    >
                      {item.content.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-white hover:text-gold transition-colors"
                    style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
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
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-white hover:text-gold text-sm"
                      style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
