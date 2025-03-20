import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Remix Icons
import "remixicon/fonts/remixicon.css";

const Testimonials = () => {
  // Create a ref to store the Swiper instance
  const swiperRef = useRef(null);

  // State to track active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Johnson",
      position: "Food Critic",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      review:
        "The flavors were exquisite! Every dish was a perfect balance of tradition and innovation.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Regular Customer",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      rating: 5,
      review:
        "I've been coming here for years and the quality has never wavered. Absolutely the best Italian food in town.",
    },
    {
      id: 3,
      name: "Williams",
      position: "Food Blogger",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      rating: 4,
      review:
        "The ambiance and service complement the incredible dishes. A must-visit for any food enthusiast.",
    },
    {
      id: 4,
      name: "David Rodriguez",
      position: "Chef",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      rating: 5,
      review:
        "As a chef myself, I appreciate the attention to detail and quality ingredients. Truly exceptional.",
    },
    {
      id: 5,
      name: "Johnson",
      position: "Food Enthusiast",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      rating: 5,
      review:
        "The atmosphere is wonderful and the staff is so friendly. I'm always impressed by the presentation of each dish.",
    },
    {
      id: 6,
      name: "Robert Smith",
      position: "Restaurant Owner",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
      rating: 5,
      review:
        "As someone in the industry, I can tell this restaurant puts their heart into everything they serve. Simply outstanding.",
    },
  ];

  // Function to handle pagination dot clicks
  const handlePaginationClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      // Slide to the selected index
      swiperRef.current.swiper.slideTo(index);
      // Update active index
      setActiveIndex(index);
    }
  };

  // Functions to handle navigation button clicks
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="testimonials py-16 bg-eerie-black-1" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl mb-2">What Our Customers Say</h2>

        <div className="w-full max-w-6xl mx-auto py-16 relative">
          {/* Swiper Component */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={800}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
              1280: { slidesPerView: 3, spaceBetween: 60 },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-eerie-black-2 p-4 md:px-10 md:py-8 lg:px-12 lg:py-10 rounded-lg shadow-md h-[320px] md:h-[350px] flex flex-col border border-[#333] mx-2 md:mx-3">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                      lazy="loading"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-white text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-gold text-lg"></i>
                    ))}
                  </div>
                  <p className="text-white italic flex-grow overflow-y-auto">
                    <i className="ri-double-quotes-l text-gold text-lg mr-1"></i>
                    {testimonial.review}
                    <i className="ri-double-quotes-r text-gold text-lg ml-1"></i>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Simple Custom Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-4">
              {testimonials
                .slice(0, Math.min(5, testimonials.length))
                .map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePaginationClick(index)}
                    className={`w-2 h-2 rounded-full border-2 border-gold ${
                      index === activeIndex ? "bg-gold" : "bg-transparent"
                    } hover:bg-gold/50 transition-colors`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
            </div>
          </div>

          {/* Simple Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-6 lg:-left-10 z-10 w-12 h-12 flex items-center justify-center text-white bg-gold rounded-full hover:bg-black hover:text-gold transition-all duration-300 -translate-y-8 md:flex hidden"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-6 lg:-right-10 z-10 w-12 h-12 flex items-center justify-center text-white bg-gold rounded-full hover:bg-black hover:text-gold transition-all duration-300 -translate-y-8 md:flex hidden"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
