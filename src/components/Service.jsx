import React from "react";
import Breakfast from "/breakfast.webp";
import Lunch from "/lunch.webp";
import Dinner from "/dinner.webp";

const Service = () => {
  const mealOptions = [
    {
      id: 1,
      title: "Breakfast? Yes, Please!",
      description: "Creamy oatmeal topped with fresh blueberries and honey",
      image: Breakfast, // Use the WebP version

      alt: "Breakfast meal",
    },
    {
      id: 2,
      title: "Lunch? Absolutely!",
      description: "Garlic butter pasta with parmesan and fresh herbs",
      image: Lunch, // Use the WebP version
      alt: "Lunch meal",
    },
    {
      id: 3,
      title: "Dinner? Of Course!",
      description: "Perfectly seared steak with roasted vegetables",
      image: Dinner, // Use the WebP version
      alt: "Dinner meal",
    },
  ];

  return (
    <div>
      <div className="container section-spacing">
        {/* Title Heading */}
        <div className="text-center">
          <h1 className="">Morning Bites, Midday Delights, Evening Feasts</h1>
          <p className="mt-5 text-2xl forum ">
            Whether it's a power-packed breakfast, a refreshing lunch, or a cozy
            dinner, we've got delicious options for every part of your day.
            Let's make every meal special!
          </p>
        </div>
        {/* Images and Titles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {mealOptions.map((meal) => (
            <div key={meal.id} className="flex flex-col items-center">
              <div className="meal-container w-full max-w-[300px] md:max-w-[350px] lg:max-w-[450px] aspect-square mt-5 relative cursor-pointer group">
                {" "}
                {/* Static border with text */}
                <div className="absolute inset-0 border-2 border-amber-200 opacity-90 flex items-center justify-center"></div>
                {/* Image container */}{" "}
                <div className="absolute inset-4 overflow-hidden transition-all duration-500">
                  <picture>
                    <source
                      srcSet={meal.image}
                      type="image/webp"
                      sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 450px"
                    />
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                      src={meal.image}
                      alt={meal.alt}
                      width="450"
                      height="450"
                    />
                  </picture>
                </div>
              </div>{" "}
              <div className="text-center mt-5">
                <p className="forum font-bold text-3xl text-white">
                  {meal.title}
                </p>
                <p className="mt-2 text-amber-100 max-w-[300px] mx-auto">
                  {meal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
