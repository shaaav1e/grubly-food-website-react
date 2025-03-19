import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import heroSlider1 from "../assets/images/hero-slider-1.jpg";
import heroSlider2 from "../assets/images/hero-slider-2.jpg";
import heroSlider3 from "../assets/images/hero-slider-3.jpg";
import heroIcon from "../assets/images/hero-icon.png";
// Import Remix icons for navigation
import "remixicon/fonts/remixicon.css";

const Hero = () => {
  const sliderItems = [
    {
      image: heroSlider1,
      subtitle: "Traditional & Hygiene",
      title: (
        <>
          For the love of <br />
          delicious food
        </>
      ),
      text: "Come with family & feel the joy of mouthwatering food",
    },
    {
      image: heroSlider2,
      subtitle: "delightful experience",
      title: (
        <>
          Flavors Inspired by <br />
          the Seasons
        </>
      ),
      text: "Come with family & feel the joy of mouthwatering food",
    },
    {
      image: heroSlider3,
      subtitle: "amazing & delicious",
      title: (
        <>
          Where every flavor <br />
          tells a story
        </>
      ),
      text: "Come with family & feel the joy of mouthwatering food",
    },
  ];

  useEffect(() => {
    // Add custom styling for pagination
    const style = document.createElement("style");
    style.innerHTML = `
      .swiper-pagination-bullet {
        background-color: white;
        opacity: 0.5;
      }
      .swiper-pagination-bullet-active {
        background-color: #d99904;
        opacity: 1;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="hero relative h-screen overflow-hidden" id="home">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        effect="fade"
        slidesPerView={1}
        navigation={{
          nextEl: ".slider-btn.next",
          prevEl: ".slider-btn.prev",
        }}
        pagination={{
          clickable: true,
          hideOnClick: false,
        }}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="h-full"
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index} className="hero-slide">
            <div className="slider-bg absolute inset-0 scale-[1.15] pointer-events-none select-none z-[-1] hero-scale-animation">
              <img
                src={item.image}
                alt="Hero Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            <div className="slider-content text-center grid place-content-center h-full w-full px-6 pt-28">
              <p className="uppercase text-sm tracking-[var(--letterSpacing-3)] text-gold font-bold slider-reveal">
                {item.subtitle}
              </p>

              <div className="w-12 h-1 bg-gold mx-auto my-4 rounded-full slider-reveal"></div>

              <h1 className="text-[calc(1.3rem+6.7vw)] font-bold leading-tight slider-reveal">
                {item.title}
              </h1>

              <p className="max-w-xl mx-auto my-4 text-lg slider-reveal">
                {item.text}
              </p>

              <a
                href="#"
                className="btn px-8 py-3 bg-gold text-black relative inline-block overflow-hidden hover:text-white transition-colors duration-500 mx-auto slider-reveal group mt-8"
              >
                <span className="relative z-10">View Our Menu</span>
                <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </a>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination md:hidden"></div>
      </Swiper>

      <button className="slider-btn prev absolute top-1/2 left-6 z-10 w-12 h-12 flex items-center justify-center text-white bg-gold rounded-full hover:bg-black hover:text-gold transition-all duration-300 hidden md:flex">
        <i className="ri-arrow-left-s-line text-2xl"></i>
      </button>

      <button className="slider-btn next absolute top-1/2 right-6 z-10 w-12 h-12 flex items-center justify-center text-white bg-gold rounded-full hover:bg-black hover:text-gold transition-all duration-300 hidden md:flex">
        <i className="ri-arrow-right-s-line text-2xl"></i>
      </button>
    </section>
  );
};

export default Hero;
