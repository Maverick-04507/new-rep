import React, { useState } from "react";
import "./Message.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import Swiper Autoplay module
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Message = () => {
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

  const slides = [
    {
      image: "https://i.postimg.cc/zvGJcdTR/wasim-img-orgqul.jpg",
      name: "Dr. Wasim Arif",
      content: 'In the spirit of continuous learning, we extend a warm welcome to all the students in our beloved institution. The alumni of this esteemed establishment have already made us proud of their achievements since graduation. I have every confidence that, just like our accomplished graduates, our present batches will have a memorable and successful journey here at NIT Silchar. So, prepare yourself to be a valuable asset, the future eagerly anticipates Three things you should acquire as a student : Self- Motivation, Self- Regulation and Self- Confidence. Maintain a sense of joy and keep radiating your brilliance! Life is beautiful, so embrace it.'
      ,
      designation: "-FACULTY ADVISOR, ECS",
    },
    {
      image: "https://i.postimg.cc/mDGk8NdQ/Whats-App-Image-2025-01-15-at-15-47-08-8289b236.jpg",
      name: "Dr. Koushik Guha",
      content: "Dear aspiring engineers, It is with great pleasure that I extend a warm welcome to you as the HOD of the Electronics and Communication Engineering Department. Our department is a thriving hub of innovation and exploration dedicated to nurturing the talents of tomorrow's technological leaders.I have full confidence that together we will push our boundaries, create solutions and excel in all expects inspiring a change among all. The future of Electronics and Communication Engineering rests in your capable hands, and I am excited to see the innovations and breakthroughs you will bring to the  world. Your future begins here!",
      designation: "HOD",
    },
    {
      image: "https://i.postimg.cc/1zw3S8z0/Whats-App-Image-2025-03-17-at-15-15-15-4b509bd9.jpg",
      name: "Aryadeep Gogoi",
      content: "ECS is a thriving and efficient society at NIT Silchar. It is both an honour and a privilege to serve as the President of such an efficient society which is a thriving hub of innovation, creativity, and collaboration, where students from diverse backgrounds come together to explore their passions and expand their horizons. We at ECS strive to holistically develop all students in the department, both technically and non-technically. I urge all students to participate in the clubs and societies to gain valuable experiences and develop time management skills. With teamwork and cooperation, ECS has achieved great heights. We hope to continue our legacy and leave a positive impact on all students in our beloved department. ECE rocks!",
      designation: "PRESIDENT ECS",
    },
    {
      image: "https://i.postimg.cc/Z5cTFtGx/Whats-App-Image-2025-01-15-at-16-19-17-daee7006.jpg",
      name: "Ananya Chetia",
      content: "Serving as a member of the Electronics and Communication Society for the past three years has been a deeply rewarding experience. ECS has been at the forefront of encouraging our students to excel in all aspects—technical, academic, and artistic—through numerous initiatives and competitions. A big thank you to our web team for their exceptional work in maintaining our online presence. To the students of the ECE department, I extend my best wishes for your future endeavors. Remember, our collective efforts will lead us to greater heights. Let’s continue to work together for the advancement of our department.ECS ROCKS!!",
      designation: "VICE PRESIDENT ECS",
    },
    {
      image: "https://i.postimg.cc/65vL9BZp/Whats-App-Image-2025-01-15-at-22-40-38-c5b5c76c.jpg",
      name: "Chetan Singh Verma",
      content: "As the General Secretary of ECS, I am honored to lead a society dedicated to fostering innovation, collaboration, and excellence in the field of electronics and communication. Our vision is to create a vibrant community where ideas flourish, knowledge is shared, and every member is empowered to reach their full potential. Together, we will strive to uplift our society by embracing new challenges, driving technological advancement, and making a lasting impact both within and beyond our campus. ECE rocks!!!",
      designation: "GENERAL SECRETARY ECS",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto items-center p-2 mobile:-mt-10">
      <div className="message border border-transparent p-5 h-max text-center space-y-6">
        <div className="msgImg relative w-full h-full z-10 flex justify-center items-center mb-[70px]">
          <img src="https://i.postimg.cc/hGJ1bPRD/Group-15.png" alt="" />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Add Autoplay to the modules
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          autoplay={{
            delay: 3000,  
            disableOnInteraction: false, // Keep autoplay running after interaction
            pauseOnMouseEnter: true, // Stops autoplay when mouse enters (useful for desktop)
          }}
          loop
          className="rounded-lg !pb-12"
          onTouchStart={(swiper) => swiper.autoplay.stop()} // Stop autoplay on touch
          onTouchEnd={(swiper) => swiper.autoplay.start()} // Resume autoplay on touch release
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex space-x-4 mx-20 mobile:flex-col m-0">
                {/* Image */}
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className=" polygon image rounded-lg object-cover hover:scale-[103%] transition-transform duration-300 hover:shadow-2xl shadow-blue-700"
                />
                <div className="mt-4">
                  <h1 id="naam" className="name-text text-left text-blueNeon">
                    {slide.name}
                  </h1>
                  <p className="content-text text-justify mb-5">
                    {slide.content} 

                  </p>
                  <h1 id="naam2" className="name-text text-right">
                    {slide.name}
                  </h1>
                  <h2 className="designation-text text-right">
                    {slide.designation}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <button
          className="swiper-button-prev-custom"
          onMouseEnter={handleMouseEnterPrev}
          onMouseLeave={handleMouseLeavePrev}
        >
          <img src={buttonImagePrev} alt="Prev" />
        </button>
        <button
          className="swiper-button-next-custom"
          onMouseEnter={handleMouseEnterNext}
          onMouseLeave={handleMouseLeaveNext}
        >
          <img src={buttonImageNext} alt="Next" />
        </button> */}
      </div>
    </div>
  );
};

export default Message;
