import React from 'react';
import "./about.css"
const AboutUs = () => {
  return (
    <>
        <div className="aboutImg flex justify-center items-center relative h-full w-full z-10 pt-20">
            <img src="https://i.postimg.cc/7ZpR078Y/Group-48096073.png"  alt="" />
        </div>
        <section className="relative text-white pt-0 py-2 px-8">
        <div className="flex flex-col-reverse lg:flex-row justify-around items-center">

        <div className="max-w-[775px]">
          <p className="text-[22px] leading-[28px] font-lexend text-justify">
          The Electronics & Communication Society is the branch society which represents the department of ECE. The prime purpose of this society is to make the students familiar with the branch. Besides that, a number of exciting events take place under ECS. Starting from the branch Orientation, several events take place including Utkrishtha, the Freshers', the Spectrum that is the annual flagship event, Spectrum Fit for different indoor and outdoor activities and lastly, Dehleez, the farewell.
          </p>
        </div>

        <img src="https://i.postimg.cc/jjBydkyp/Screenshot-2025-03-16-224410-removebg-preview.png" alt="" className="polygon" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute -top-[91px] -rotate-[140deg] -left-52 h-[3px] w-[50%] bg-gradient-to-r from-[#0066FF] to-transparent"></div>
      <div className="absolute top-[33px]  rotate-[40deg] -left-[140px] h-[3px] w-[20%] bg-gradient-to-l from-[#0066FF] to-transparent"></div>
    </section>
    </>
  );
};

export default AboutUs;
