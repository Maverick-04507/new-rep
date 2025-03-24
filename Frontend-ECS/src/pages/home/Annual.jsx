import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

const Annual = () => {
  
  const data = [
    {
      title: "ECE Orientation",
      description: "ECS proudly conducts an Orientation for ECE department freshers, where professors and seniors warmly welcome them into the world of electronics and communication. The session offer insights into the branch’s vast opportunities, innovative projects, and the guidance available to help students excel in their journey.",
      image:
        "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
          description: "For the first time,ECS presented its inaugural module at Tecnoesis 2024-inspired by epic journey of Interstellar.ARDUINO-QUEST was a space themed challenge in which teams explore,innovate and conquer interstellar challenges using Arduino.",
          image:
            "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishta",
      description: "ECS hosts Utkrishta, a vibrant fresher’s event to welcome the new ECE batch. The celebration fills with fun activities, introductions, and opportunities for students to bond with peers and seniors.New comer batch showcase their talent to crown the title of Mr.Utkrishta and Miss.Utkrishta and make memories of a lifetime.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
          description: "Spectre, the official magazine of ECS, is a celebration of innovation, creativity, and knowledge in the field of electronics and communication. It showcases insightful articles, groundbreaking projects, and achievements of students and faculty.",
          image:
            "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
          description: "Dehleez, the farewell ceremony organized by ECS, is a heartfelt celebration of the graduating ECE batch. The event honors their achievements, cherishes memories, and bids them an emotional goodbye as they step into a new phase of life.",
          image: "https://i.postimg.cc/hhWRMgWS/Screenshot-2025-03-16-233730.png",
    },{
      title: "ECE Orientation",
          description: "ECS proudly conducts an Orientation for ECE department freshers, where professors and seniors warmly welcome them into the world of electronics and communication. The session offer insights into the branch’s vast opportunities, innovative projects, and the guidance available to help students excel in their journey.",
          image:
            "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
          description: "For the first time,ECS presented its inaugural module at Tecnoesis 2024-inspired by epic journey of Interstellar.ARDUINO-QUEST was a space themed challenge in which teams explore,innovate and conquer interstellar challenges using Arduino.",
          image:
            "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishta",
      description: "ECS hosts Utkrishta, a vibrant fresher’s event to welcome the new ECE batch. The celebration fills with fun activities, introductions, and opportunities for students to bond with peers and seniors.New comer batch showcase their talent to crown the title of Mr.Utkrishta and Miss.Utkrishta and make memories of a lifetime.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
          description: "Spectre, the official magazine of ECS, is a celebration of innovation, creativity, and knowledge in the field of electronics and communication. It showcases insightful articles, groundbreaking projects, and achievements of students and faculty.",
          image:
            "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "Dehleez, the farewell ceremony organized by ECS, is a heartfelt celebration of the graduating ECE batch. The event honors their achievements, cherishes memories, and bids them an emotional goodbye as they step into a new phase of life.",
      image:
        "https://i.postimg.cc/hhWRMgWS/Screenshot-2025-03-16-233730.png",
    },{
      title: "ECE Orientation",
          description: "ECS proudly conducts an Orientation for ECE department freshers, where professors and seniors warmly welcome them into the world of electronics and communication. The session offer insights into the branch’s vast opportunities, innovative projects, and the guidance available to help students excel in their journey.",
          image:
            "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
          description: "For the first time,ECS presented its inaugural module at Tecnoesis 2024-inspired by epic journey of Interstellar.ARDUINO-QUEST was a space themed challenge in which teams explore,innovate and conquer interstellar challenges using Arduino.",
          image:
            "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishta",
      description: "ECS hosts Utkrishta, a vibrant fresher’s event to welcome the new ECE batch. The celebration fills with fun activities, introductions, and opportunities for students to bond with peers and seniors.New comer batch showcase their talent to crown the title of Mr.Utkrishta and Miss.Utkrishta and make memories of a lifetime.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
          description: "Spectre, the official magazine of ECS, is a celebration of innovation, creativity, and knowledge in the field of electronics and communication. It showcases insightful articles, groundbreaking projects, and achievements of students and faculty.",
          image:
            "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "Dehleez, the farewell ceremony organized by ECS, is a heartfelt celebration of the graduating ECE batch. The event honors their achievements, cherishes memories, and bids them an emotional goodbye as they step into a new phase of life.",
      image:
        "https://i.postimg.cc/hhWRMgWS/Screenshot-2025-03-16-233730.png",
    },{
      title: "ECE Orientation",
      description: "ECS proudly conducts an Orientation for ECE department freshers, where professors and seniors warmly welcome them into the world of electronics and communication. The session offer insights into the branch’s vast opportunities, innovative projects, and the guidance available to help students excel in their journey.",
      image:
        "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
          description: "For the first time,ECS presented its inaugural module at Tecnoesis 2024-inspired by epic journey of Interstellar.ARDUINO-QUEST was a space themed challenge in which teams explore,innovate and conquer interstellar challenges using Arduino.",
          image:
            "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishta",
      description: "ECS hosts Utkrishta, a vibrant fresher’s event to welcome the new ECE batch. The celebration fills with fun activities, introductions, and opportunities for students to bond with peers and seniors.New comer batch showcase their talent to crown the title of Mr.Utkrishta and Miss.Utkrishta and make memories of a lifetime.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
          description: "Spectre, the official magazine of ECS, is a celebration of innovation, creativity, and knowledge in the field of electronics and communication. It showcases insightful articles, groundbreaking projects, and achievements of students and faculty.",
          image:
            "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "Dehleez, the farewell ceremony organized by ECS, is a heartfelt celebration of the graduating ECE batch. The event honors their achievements, cherishes memories, and bids them an emotional goodbye as they step into a new phase of life.",
      image:
        "https://i.postimg.cc/hhWRMgWS/Screenshot-2025-03-16-233730.png",
    },{
      title: "ECE Orientation",
          description: "ECS proudly conducts an Orientation for ECE department freshers, where professors and seniors warmly welcome them into the world of electronics and communication. The session offer insights into the branch’s vast opportunities, innovative projects, and the guidance available to help students excel in their journey.",
          image:
            "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
          description: "For the first time,ECS presented its inaugural module at Tecnoesis 2024-inspired by epic journey of Interstellar.ARDUINO-QUEST was a space themed challenge in which teams explore,innovate and conquer interstellar challenges using Arduino.",
          image:
            "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishta",
          description: "ECS hosts Utkrishta, a vibrant fresher’s event to welcome the new ECE batch. The celebration fills with fun activities, introductions, and opportunities for students to bond with peers and seniors.New comer batch showcase their talent to crown the title of Mr.Utkrishta and Miss.Utkrishta and make memories of a lifetime.",
          image:
            "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
          description: "Spectre, the official magazine of ECS, is a celebration of innovation, creativity, and knowledge in the field of electronics and communication. It showcases insightful articles, groundbreaking projects, and achievements of students and faculty.",
          image:
            "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "Dehleez, the farewell ceremony organized by ECS, is a heartfelt celebration of the graduating ECE batch. The event honors their achievements, cherishes memories, and bids them an emotional goodbye as they step into a new phase of life.",
      image:
        "https://i.postimg.cc/hhWRMgWS/Screenshot-2025-03-16-233730.png",
    },{
      title: "ECE Orientation",
          description: "ECS proudly conducts an Orientation for ECE department freshers, where professors and seniors warmly welcome them into the world of electronics and communication. The session offer insights into the branch’s vast opportunities, innovative projects, and the guidance available to help students excel in their journey.",
          image:
            "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
          description: "For the first time,ECS presented its inaugural module at Tecnoesis 2024-inspired by epic journey of Interstellar.ARDUINO-QUEST was a space themed challenge in which teams explore,innovate and conquer interstellar challenges using Arduino.",
          image:
            "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishta",
      description: "ECS hosts Utkrishta, a vibrant fresher’s event to welcome the new ECE batch. The celebration fills with fun activities, introductions, and opportunities for students to bond with peers and seniors.New comer batch showcase their talent to crown the title of Mr.Utkrishta and Miss.Utkrishta and make memories of a lifetime.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
          description: "Spectre, the official magazine of ECS, is a celebration of innovation, creativity, and knowledge in the field of electronics and communication. It showcases insightful articles, groundbreaking projects, and achievements of students and faculty.",
          image:
            "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "Dehleez, the farewell ceremony organized by ECS, is a heartfelt celebration of the graduating ECE batch. The event honors their achievements, cherishes memories, and bids them an emotional goodbye as they step into a new phase of life.",
      image:
        "https://i.postimg.cc/hhWRMgWS/Screenshot-2025-03-16-233730.png",
    },{
      title: "ECE Orientation",
          description: "ECS proudly conducts an Orientation for ECE department freshers, where professors and seniors warmly welcome them into the world of electronics and communication. The session offer insights into the branch’s vast opportunities, innovative projects, and the guidance available to help students excel in their journey.",
          image:
            "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
          description: "For the first time,ECS presented its inaugural module at Tecnoesis 2024-inspired by epic journey of Interstellar.ARDUINO-QUEST was a space themed challenge in which teams explore,innovate and conquer interstellar challenges using Arduino.",
          image:
            "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishta",
      description: "ECS hosts Utkrishta, a vibrant fresher’s event to welcome the new ECE batch. The celebration fills with fun activities, introductions, and opportunities for students to bond with peers and seniors.New comer batch showcase their talent to crown the title of Mr.Utkrishta and Miss.Utkrishta and make memories of a lifetime.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
          description: "Spectre, the official magazine of ECS, is a celebration of innovation, creativity, and knowledge in the field of electronics and communication. It showcases insightful articles, groundbreaking projects, and achievements of students and faculty.",
          image:
            "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "Dehleez, the farewell ceremony organized by ECS, is a heartfelt celebration of the graduating ECE batch. The event honors their achievements, cherishes memories, and bids them an emotional goodbye as they step into a new phase of life.",
      image:
        "https://i.postimg.cc/hhWRMgWS/Screenshot-2025-03-16-233730.png",
    },{
      title: "ECE Orientation",
          description: "ECS proudly conducts an Orientation for ECE department freshers, where professors and seniors warmly welcome them into the world of electronics and communication. The session offer insights into the branch’s vast opportunities, innovative projects, and the guidance available to help students excel in their journey.",
          image:
            "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    
    {
      title: "EC:ArQ",
          description: "For the first time,ECS presented its inaugural module at Tecnoesis 2024-inspired by epic journey of Interstellar.ARDUINO-QUEST was a space themed challenge in which teams explore,innovate and conquer interstellar challenges using Arduino.",
          image:
            "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishta",
      description: "ECS hosts Utkrishta, a vibrant fresher’s event to welcome the new ECE batch. The celebration fills with fun activities, introductions, and opportunities for students to bond with peers and seniors.New comer batch showcase their talent to crown the title of Mr.Utkrishta and Miss.Utkrishta and make memories of a lifetime.",
      image:
        "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre-Annual Magazine",
          description: "Spectre, the official magazine of ECS, is a celebration of innovation, creativity, and knowledge in the field of electronics and communication. It showcases insightful articles, groundbreaking projects, and achievements of students and faculty.",
          image:
            "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "Dehleez, the farewell ceremony organized by ECS, is a heartfelt celebration of the graduating ECE batch. The event honors their achievements, cherishes memories, and bids them an emotional goodbye as they step into a new phase of life.",
      image:
        "https://i.postimg.cc/hhWRMgWS/Screenshot-2025-03-16-233730.png",
    },
    
  ];

  return (
    <div className=" overflow-hidden">
      <div className="galImg relative w-full mobile:scale-150 z-10 flex justify-center items-center mb-[5vh]">
        <img
          src="https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736675717/Group_48096075_jdlhkt.png"
          alt="Gallery"
        />
      </div>

      <div className="w-full h-[80vh] mx-auto relative ">
        <Swiper
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} // Default for mobile
          breakpoints={{
            // Adjust for desktop view
            1024: {
              slidesPerView: 3, // 3 cards in view for desktop
              spaceBetween: 20,
            },
          }}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-[90%]  p-4 bg-gradient-to-b from-[#0f1347] to-[#103360] shadow-lg rounded-[20px]  border-blue-500"
              >
                <div
                  className="mx-0 mt-6 h-48 w-full px-4 bg-cover bg-center rounded-[20px]"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    border: "2px solid #007bff",
                    boxShadow: "0 0 10px 2px #007bff, inset 0 0 5px #007bff",
                  }}
                ></div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-400 text-center">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 text-sm mt-3 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Annual;