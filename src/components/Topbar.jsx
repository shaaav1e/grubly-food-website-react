import React from "react";

const Topbar = () => {
  return (
    <div>
      {/* Topbar - hidden on mobile, completely transparent */}
      <div className="topbar text-white py-2 hidden md:block border-b border-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="topbar-left flex items-center space-x-6">
              {/* Address with gold icon */}
              <div className="flex items-center">
                <i className="ri-map-pin-line text-gold mr-2"></i>
                <span>Restaurant St, Delicious City, London 9578, UK</span>
              </div>

              {/* Open hours with gold icon */}
              <div className="flex items-center">
                <i className="ri-time-line text-gold mr-2"></i>
                <span>Daily: 8.00 am to 10.00 pm</span>
              </div>
            </div>

            {/* Social icons in gold */}
            <div className="topbar-right hidden md:flex items-center space-x-4">
              <a href="#" className="text-gold hover:text-gold/80">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="text-gold hover:text-gold/80">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="text-gold hover:text-gold/80">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="#" className="text-gold hover:text-gold/80">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
