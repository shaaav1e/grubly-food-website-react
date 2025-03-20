import React from "react";
import Button from "./Button";
const Contact = () => {
  return (
    <div className="mt-12 bg-eerie-black-4">
      <div className="px-5 py-24 container">
        {/* Flex for 2 side by side content */}
        <div className="flex flex-col md:flex-row gap-6 md:space-x-12">
          {/* Flex for input fields */}
          <div className="flex flex-col md:w-1/2">
            <h1 className="uppercase text-3xl font-bold text-center">
              Reservation
            </h1>
            <p className="mt-3 md:text-center">
              To Book call +92 336-0018100 or fill out the form below.
            </p>
            <div className="flex flex-col md:space-x-4 md:flex-col ">
              <input type="text" placeholder="Your Name..." />
              <input type="text" placeholder="Your Phone.." />
            </div>
            <div className="flex flex-col md:space-x-4 md:flex-row ">
              <input className="md:w-1/3" type="text" placeholder="Persons" />
              <input className="md:w-1/3" type="text" placeholder="Date" />
              <input className="md:w-1/3" type="text" placeholder="Time" />
            </div>
            <div className="">
              <textarea
                className="w-full"
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Any additional information?"
              ></textarea>
            </div>
            <div className="mt-6 mx-auto">
              <Button text="Book Now" />
            </div>
          </div>
          {/* End of Flex for input fields */}

          {/* Flex for map */}
          <div className="mt-8 md:mt-0 w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <h2 className="uppercase text-3xl font-bold text-center mb-4">
              Our Location
            </h2>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13294.049148985514!2d73.08875241553558!3d33.624740583911435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95906a03cfff%3A0xd9a346ca4b7f0f97!2sPhase%207%20Bahria%20Town%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1633012345678!5m2!1sen!2s"
                width="100%"
                height="520"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Phase 7 Rawalpindi Map"
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
