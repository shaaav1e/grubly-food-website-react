import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.classList.add("loaded");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-10 flex flex-col items-center justify-center bg-gold transition-transform duration-500 ease-in-out ${
        isLoaded ? "translate-y-full delay-250" : ""
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center transition-opacity duration-250 ease-in-out ${
          isLoaded ? "opacity-0" : ""
        }`}
      >
        <div className="circle"></div>
        <p className="loading-text">FOODLIFE</p>
      </div>
    </div>
  );
};

export default Preloader;
