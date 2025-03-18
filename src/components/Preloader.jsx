import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Use a timeout to simulate loading and ensure animations work properly
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.classList.add("loaded");
    }, 2000); // 2 second delay before hiding preloader

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-[color:var(--color-gold)] z-10 grid place-content-center justify-items-center transition-transform duration-500 ease-in-out ${
        isLoaded ? "translate-y-full delay-250" : ""
      }`}
      data-preaload
    >
      <div
        className={`transition-opacity duration-250 ease-in-out ${
          isLoaded ? "opacity-0" : ""
        }`}
      >
        <div
          className="circle w-28 h-28 rounded-full border-3 border-white mb-[45px] animate-spin"
          style={{ borderTopColor: "var(--smoky-black-3)" }}
        ></div>

        {/* The text is in a separate div that doesn't move, only fades out */}
        <p
          className="text text-center text-[calc(2rem+3vw)] font-bold uppercase tracking-[16px] pl-[16px]"
          style={{
            backgroundImage: "var(--loading-text-gradient)",
            backgroundSize: "500%",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "0.5px var(--eerie-black-3)",
            animation: "loadingText linear 2s infinite",
          }}
        >
          GRILLI
        </p>
      </div>
    </div>
  );
};

export default Preloader;
