import React from "react";

const Topbar = () => {
  return (
    <div>
      {/* Topbar - hidden on mobile, completely transparent */}
      <div className="topbar text-white py-2 hidden md:block border-b border-white/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center relative">
            {/* Empty div for left spacing */}
            <div className="w-32"></div>

            {/* Center content - Open hours */}
            <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
              <i className="ri-time-line text-gold mr-2"></i>
              <span className="text-base font-bold">
                Daily: 12am to 12.00 pm
              </span>
            </div>

            {/* Social icons in gold - right aligned */}
            <div className="topbar-right flex items-center space-x-4">
              <a href="#" className="text-gold hover:text-gold/80">
                <i className="ri-facebook-fill rounded-full border-2 p-1"></i>
              </a>
              <a href="#" className="text-gold hover:text-gold/80">
                <i className="ri-instagram-fill rounded-full border-2 p-1"></i>
              </a>
              <a href="#" className="text-gold hover:text-gold/80">
                <i className="ri-youtube-fill rounded-full border-2 p-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
{
  /* Address with gold icon
              <div className="flex items-center">
                <i className="ri-map-pin-line text-gold mr-2"></i>
                <span>Restaurant St, Delicious City, London 9578, UK</span>
              </div> */
}
