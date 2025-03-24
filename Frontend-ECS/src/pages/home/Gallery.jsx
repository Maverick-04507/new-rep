import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { useNavigate,Navigate } from "react-router-dom";


const ImageCarousel = () => {
    const [buttonImage, setButtonImage] = useState(
        "https://i.postimg.cc/mgjNYYv7/Component-2.png"
      );
      const handleMouseEnter = () => {
        setButtonImage("https://i.postimg.cc/Px3Qjwss/Group-48096106.png");
      };
      const handleMouseLeave = () => {
        setButtonImage("https://i.postimg.cc/mgjNYYv7/Component-2.png");
      };
  const navigate= useNavigate()
  const handleClickButton=()=>{
    window.scrollTo(0, 0);
    navigate('/photogallery');
  }
  const images = [
    "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    "https://i.postimg.cc/HWy6tXBK/IMG-0417.jpg",
    "https://i.postimg.cc/sx7KDCMy/IMG-20240426-WA0012.jpg",
    "https://i.postimg.cc/mZv5x8PB/ARY-0100.jpg",
    "https://i.postimg.cc/wB2BK4Qk/MJ-9364.jpg",
  ];

  return (
    <div className="max-w-screen overflow-hidden">
                <div className="galImg relative h-full w-full flex justify-center items-center mt-0 mb-[5vh]">
                    <img src="https://i.postimg.cc/Y9sWX8Rm/Group-48096102.png" alt="" />
                </div>

    <div className="mobile:w-[95vw] mobile:h-[40vh] lg:w-[60vw] h-[80vh] mx-auto">
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay after 3000ms and continues even if interacted with
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        }}
        className="mySwiper"
        >
        {images.map((img, index) => (
            <SwiperSlide key={index} className="w-max">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="mobile:w-[70vw] mobile:h-[45vw] lg:w-[30vw] lg:h-[21vw] rounded-[50px] shadow-lg object-cover"
              />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="mobile:hidden lg:block swiper-prev flex z-10 max-h-[28vw] max-w-[30vw] -translate-x-[75%] -translate-y-[95%]">
        <img src="https://i.postimg.cc/zvKhPnyz/Group-48096101.png" alt="Prev" />
      </button>
      <button className="mobile:hidden lg:block swiper-next flex z-10 max-h-[28vw] max-w-[30vw] translate-x-[175%] -translate-y-[195%]">
        <img src="https://i.postimg.cc/gcXHZhkB/Group-48096103.png" alt="Next" />
      </button>
      <button
          className="flex justify-center lg:-translate-y-[850px] mx-auto z-20 mobile:scale-[0.9]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={buttonImage} alt="Component 2"
          onClick={handleClickButton} />
      </button>
    </div>
    </div>
  );
};

export default ImageCarousel;
