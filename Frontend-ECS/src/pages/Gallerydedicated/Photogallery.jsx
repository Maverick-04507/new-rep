import React from "react";
import Orientation from "./Orientation";
import Utkrishta from "./Utkrishta";
import Spectrum from "./Spectrum";
import Dehleez from "./Dehleez";
import More from "./More";

const photoGalleryData = [
  { src: "https://i.postimg.cc/BbxgyxS0/ARY-0100.jpg", label: "https://i.postimg.cc/k52hs1H6/Group-175.png" },
  { src: "https://i.postimg.cc/h4dcvhZR/MJ-9663.jpg", label: "https://i.postimg.cc/6QFbmVsH/Group-176.png" },
  { src: "https://i.postimg.cc/L5LcTCnB/Spectrumfit.jpg", label: "https://i.postimg.cc/P5r7przM/Group-177.png" },
  { src: "https://i.postimg.cc/Lsx6t7jd/Dehleezpic.jpg", label: "https://i.postimg.cc/9Q8nG5LH/Group-178.png" },
];

const PhotoGallery = () => {
  return (
    <section className=" text-white min-h-screen w-full">
      {/* Header */}
      <header className="relative w-full h-[98vh] bg-cover bg-center border-0 rounded-b-[50px] mobile:h-[45vh]" style={{ backgroundImage: "url('https://i.postimg.cc/1XV4NpB6/ecs.jpg')" }}>
        <div className="absolute inset-0 bg-[#090310] bg-opacity-[50%]"></div>
        <div className="absolute inset-0 z-10 flex flex-col items-center top-[30%] text-center mobile:overflow-hidden mobile:w-screen">
          <img
            src="https://i.postimg.cc/SxnBcgbJ/Group-15.png"
            alt="Photo Gallery"
            className="mobile:scale-[1.8] mobile:relative mobile:top-[8vh]"
          />
        </div>
      </header>

      {/* Gallery Section */}
      <div className="absolute bottom-0 px-10 py-8 w-full overflow-hidden mobile:hidden">
        <div className="relative flex w-[200%] mobile:w-[500%] items-center">
          <div className="flex w-[100%] animate-marquee whitespace-nowrap">
            {photoGalleryData.map((item, index) => (
              <div key={index} className="relative inline-block mx-[28px] flex-shrink-0">
                <img
                  src={item.src}
                  alt=""
                  className="w-[20vw] h-[26vh] mobile:w-[65vw] mobile:h-[10vh] object-cover rounded-[10px]"
                />
                <img src={item.label} alt="" className="mx-auto"/>
              </div>
            ))}
        </div>
        <div className="flex w-[100%] animate-marquee">
            {photoGalleryData.map((item, index) => (
              <div key={index} className="relative inline-block mx-[28px] flex-shrink-0">
                <img
                  src={item.src}
                  alt=""
                  className="w-[20vw] h-[26vh] mobile:w-[65vw] mobile:h-[20vh] object-cover rounded-[10px]"
                />
                <img src={item.label} alt="" className="mx-auto"/>
              </div>
            ))}
        </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    <Orientation id="orienation"/>
    <Utkrishta id="utkrishta"/>
    <Spectrum id="spectrum"/>
    <Dehleez id="dehleez"/>
    <More id="others"/>
    </section>
  );
};

export default PhotoGallery;
