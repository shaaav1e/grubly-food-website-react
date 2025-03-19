import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Remix Icons
import "remixicon/fonts/remixicon.css";

const Testimonials = () => {
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
      name: "David Rodriguez",
      position: "Chef",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      rating: 5,
      review:
        "As a chef myself, I appreciate the attention to detail and quality ingredients. Truly exceptional.",
    },
    {
      id: 6,
      name: "David Rodriguez",
      position: "Chef",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      rating: 5,
      review:
        "As a chef myself, I appreciate the attention to detail and quality ingredients. Truly exceptional.",
    },
    {
      id: 7,
      name: "David Rodriguez",
      position: "Chef",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      rating: 5,
      review:
        "As a chef myself, I appreciate the attention to detail and quality ingredients. Truly exceptional.",
    },
  ];

  return (
    <section className="testimonials py-16" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-2">
          What Our Customers Say
        </h2>
        <p className="text-center mb-10 max-w-2xl mx-auto">
          Discover the experiences of our valued guests who have enjoyed our
          culinary delights
        </p>

        <div className="w-full max-w-5xl mx-auto py-5 relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".testimonial-btn.next",
              prevEl: ".testimonial-btn.prev",
            }}
            pagination={{
              clickable: true,
              hideOnClick: false,
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={800}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="testimonials-swiper pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-eerie-black-3 p-6 rounded-lg shadow-md h-[300px] flex flex-col border border-gray-100">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
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

          <button className="testimonial-btn prev absolute top-1/2 -left-6 z-10 w-12 h-12 flex items-center justify-center text-white bg-gold rounded-full hover:bg-black hover:text-gold transition-all duration-300 -translate-y-8 md:block hidden">
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>

          <button className="testimonial-btn next absolute top-1/2 -right-6 z-10 w-12 h-12 flex items-center justify-center text-white bg-gold rounded-full hover:bg-black hover:text-gold transition-all duration-300 -translate-y-8 md:block hidden">
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
