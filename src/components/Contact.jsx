import React from "react";
import contactBg from "../assets/images/restaurant-5.jpg";
import formPattern from "../assets/images/form-pattern.png"; // Import the pattern image

const Contact = () => {
  return (
    <section className="relative section-spacing">
      {/* Container div to create space for next section */}
      <div className="pb-[50rem] md:pb-[10rem]">
        {" "}
        {/* Increased padding for mobile */}
        {/* Full-width background image */}
        <div className="w-full h-[400px] md:h-[700px]">
          <img
            src={contactBg}
            alt="Contact background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Contact form overlay */}
        <div className="absolute top-30 left-5 md:top-60 md:left-150 flex items-center justify-center">
          <div className="bg-opacity-85 p-0 rounded-lg shadow-xl max-w-4xl w-full mx-4 relative overflow-hidden flex flex-col md:flex-row">
            {/* Left side: Contact Form */}
            <div className="md:w-1/2 relative z-10 bg-eerie-black-4 p-8 md:p-10 rounded-t-lg md:rounded-t-none md:rounded-l-lg">
              <h2 className="text-3xl md:text-4xl forum text-center md:text-left mb-8">
                Contact Us
              </h2>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm text-gold/80 font-medium ml-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-4 bg-eerie-black-3 border border-gold/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 rounded-md transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm text-gold/80 font-medium ml-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full p-4 bg-eerie-black-3 border border-gold/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 rounded-md transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm text-gold/80 font-medium ml-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows="5"
                    className="w-full p-4 bg-eerie-black-3 border border-gold/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 rounded-md transition-all duration-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 mt-4 bg-gold hover:bg-gold/90 text-black font-semibold rounded-md transition duration-300 shadow-md hover:shadow-lg"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Right side: Contact Details */}
            <div className="md:w-1/2 relative z-10 rounded-b-lg md:rounded-b-none md:rounded-r-lg overflow-hidden">
              {/* Background pattern for right side */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-90 bg-eerie-black-3"></div>
                <img
                  src={formPattern}
                  alt=""
                  className="h-full w-full object-cover opacity-15"
                />
              </div>

              <div className="relative z-10 p-8 md:p-10 md:pl-12">
                <h2 className="text-3xl md:text-4xl forum text-center md:text-left mb-8">
                  Booking Request
                </h2>

                <div className="space-y-8">
                  <div className="transform hover:translate-x-1 transition-transform duration-300">
                    <h3 className="text-gold text-lg font-semibold mb-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Reserve by Phone
                    </h3>
                    <p className="text-white pl-7">+92 (336) 0018100</p>
                  </div>

                  <div className="transform hover:translate-x-1 transition-transform duration-300">
                    <h3 className="text-gold text-lg font-semibold mb-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Opening Hours
                    </h3>
                    <p className="text-white pl-7">
                      Monday to Friday: 9:00 AM - 10:00 PM
                    </p>
                    <p className="text-white pl-7">
                      Weekends: 10:00 AM - 11:00 PM
                    </p>
                  </div>

                  <div className="transform hover:translate-x-1 transition-transform duration-300">
                    <h3 className="text-gold text-lg font-semibold mb-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Location
                    </h3>
                    <p className="text-white pl-7">
                      123 Gourmet Avenue, Culinary District
                    </p>
                    <p className="text-white pl-7">New York, NY 10001</p>
                  </div>

                  <div className="md:mt-[6.rem]">
                    {" "}
                    {/* Added margin to push button down to align with SEND MESSAGE */}
                    <button className="w-full py-4 px-6 bg-transparent hover:bg-gold/20 text-gold border border-gold font-semibold rounded-md transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                          clipRule="evenodd"
                        />
                      </svg>
                      VIEW ON MAP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
