import React, { useState, useEffect } from "react";
import "./Utkrishta.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const sliderData = [
  "https://i.postimg.cc/h4dcvhZR/MJ-9663.jpg",
  "https://i.postimg.cc/wB2BK4Qk/MJ-9364.jpg",
  "https://i.postimg.cc/gcQ2PZ81/MJ-9548.jpg",
  "https://i.postimg.cc/rpMpP2xm/MJ-9542.jpg",
  "https://i.postimg.cc/NM0jQ8Nv/MJ-9652.jpg",

];

const Utkrishta = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [buttonImagePrev, setButtonImagePrev] = useState(
    "https://i.postimg.cc/9M1cQJMN/Property-1-Default-1.png"
  );
  const handleMouseEnterPrev = () => {
    setButtonImagePrev("https://i.postimg.cc/wMdD9x1k/Property-1-Variant2-1.png");
  };
  const handleMouseLeavePrev = () => {
    setButtonImagePrev("https://i.postimg.cc/9M1cQJMN/Property-1-Default-1.png");
  };

  const [buttonImageNext, setButtonImageNext] = useState(
    "https://i.postimg.cc/gjJmX8Lc/Property-1-Default.png"
  );
  const handleMouseEnterNext = () => {
    setButtonImageNext("https://i.postimg.cc/hjm9FQtj/Property-1-Variant2.png");
  };
  const handleMouseLeaveNext = () => {
    setButtonImageNext("https://i.postimg.cc/gjJmX8Lc/Property-1-Default.png");
  };

  return (
    <section className="relative max-w-7xl mx-auto items-center p-5">
      <div className="message border border-transparent p-5 h-max text-center space-y-6">
        <div className="msgImg flex justify-center items-center">
          <img
            src="https://i.postimg.cc/tRvpZQsn/image.png"
            alt="Utkrishta Section"
            className="h-[80px]"
          />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".orientation-button-next-custom",
            prevEl: ".orientation-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          loop={true}
          slidesPerView={isMobile ? 1 : 2.5}
          spaceBetween={isMobile ? 20 : 35}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="rounded-[10px] !pb-12"
        >
          {sliderData.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-[467px] h-[307px] mobile:h-[25vh] object-cover rounded-[10px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {!isMobile && (
          <>
            <button
              className="orientation-button-prev-custom"
              onMouseEnter={handleMouseEnterPrev}
              onMouseLeave={handleMouseLeavePrev}
            >
              <img src={buttonImagePrev} alt="Prev" />
            </button>
            <button
              className="orientation-button-next-custom"
              onMouseEnter={handleMouseEnterNext}
              onMouseLeave={handleMouseLeaveNext}
            >
              <img src={buttonImageNext} alt="Next" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Utkrishta;
