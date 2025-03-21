import React from "react";
import restaurant from "../assets/images/restaurant.webp"; 
import restaurant2 from "../assets/images/restaurant-2.webp"; 
import Button from "./Button";

const About = () => {
  return (
    <section className="about bg-eerie-black-1">
      <div className="container section-spacing pt-22 pb-22">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
          <div className="flex flex-col items-center text-center gap-5 w-full md:w-1/2 px-4">
            <h1 className="uppercase">our story</h1>
            <p className="text-2xl md:text-7xl forum">
              Vibe that <br />
              cannot be matched
            </p>
            <p className="leading-loose tracking-wider">
              More than just food, we bring an experience—one that excites your
              senses, lifts your mood, and turns every meal into a moment worth
              savoring. From the first bite to the last, it's a vibe that stays
              with you.
            </p>
            {/* <Button text="BOOK NOW" /> */}
          </div>
          {/* Image */}
          <div className="max-w-[300px] md:max-w-[350px] lg:max-w-[650px] md:w-1/2 h-[450px]">
            <img
              className="w-full h-full object-cover rounded-lg shadow-lg shadow-gold"
              src={restaurant}
              alt="Restaurant interior"
              loading="lazy"
            />
          </div>
        </div>

        {/* Second section with flex-row-reverse */}
        <div className="flex flex-col md:flex-row-reverse gap-6 justify-center items-center mt-20">
          <div className="flex flex-col items-center text-center gap-5 w-full md:w-1/2 px-4">
            <h1 className="uppercase">CLEAN FOOD</h1>
            <p className="text-4xl md:text-7xl forum">
              Elegance in <br />
              every detail
            </p>
            <p className="leading-loose tracking-wider">
              Step into a world where culinary artistry meets sophisticated
              ambiance. Our carefully crafted interior provides the perfect
              backdrop for memorable dining experiences. Every corner of our
              restaurant is designed to enhance your journey through taste and
              comfort.
            </p>
            {/* <Button text="VIEW MENU" /> */}
          </div>
          {/* Second Image */}
          <div className="max-w-[300px] md:max-w-[350px] lg:max-w-[650px] md:w-1/2 h-[450px]">
            <img
              className="w-full h-full object-cover rounded-lg shadow-lg shadow-gold"
              src={restaurant2}
              alt="Restaurant ambiance"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
