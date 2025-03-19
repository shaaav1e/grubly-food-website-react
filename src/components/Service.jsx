import React from "react";

const Service = () => {
  return (
    <div>
      <div className="container section-spacing">
        {/* Title Heading */}
        <div className="text-center">
          <h1 className="font-bold">Eat Well, Feel Great!</h1>
          <p className="mt-3">
            Whether it’s a power-packed breakfast, a refreshing lunch, or a cozy
            dinner, we’ve got delicious options for every part of your day.
            Let’s make every meal special!
          </p>
        </div>
        {/* Images and Titles */}
        <div className="flex flex-col md:flex-row justify-center gap-24 mt-10">
          <div>
            <p className="text-center font-bold text-xl mt-5 text-gold">
              Breakfast? Yes, Please!
            </p>
            <img
              className="rounded-full mt-5"
              src="/src/assets/images/breakfast.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-center font-bold text-xl mt-5 text-gold">
              Lunch? Absolutely!
            </p>
            <img
              className="rounded-full mt-5"
              src="/src/assets/images/lunch.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-center font-bold text-xl mt-5 text-gold">
              Dinner? Of Course!
            </p>
            <img
              className="rounded-full mt-5"
              src="/src/assets/images/dinner.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
