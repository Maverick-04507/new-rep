import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import Message from './Message';
import AboutUs from './AboutUs';
import Annual from './Annual';
import ParticlesComponent from '../Particle/Particle';
import Typewriter from "typewriter-effect";

export default function Home() {
  // State for timer and button activation/quiz over
  const [timeRemaining, setTimeRemaining] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const [quizOver, setQuizOver] = useState(false);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();

      // Define quiz start and end times:
      const startTime = new Date();
      startTime.setHours(23, 0, 0, 0); // Quiz starts at 7:40 PM
      const endTime = new Date();
      // Set endTime to midnight (i.e., 00:00:00 of the next day)
      endTime.setHours(0, 0, 0, 0);

      if (now < startTime) {
        // Before quiz starts: disable button and show countdown until start.
        setButtonActive(false);
        setQuizOver(false);
        const diff = startTime - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeRemaining(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      } else if (now >= startTime && now < endTime) {
        // During quiz window: enable button and show countdown until quiz ends.
        setButtonActive(true);
        setQuizOver(false);
        const diff = endTime - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeRemaining(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      } else {
        // After quiz window: disable button, mark quiz as over.
        setButtonActive(false);
        setQuizOver(true);
        setTimeRemaining("00:00:00");
      }
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="mx-auto w-full space-y-10 overflow-x-hidden">
      <ParticlesComponent id="particlejs" />
      <div className="absolute w-full top-1/3 flex flex-col items-center">
        <h2 className="title text-white flex justify-center items-center text-center text-4xl font-bold sm:text-5xl">
          Electronics and Communication Society
        </h2>
        <div id="hero" className="text-yellow-400 flex justify-center items-center text-4xl font-bold sm:text-5xl pl-6">
          <span className="typingText">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("NIT SILCHAR").pauseFor(1000).start();
              }}
            />
          </span>
        </div>
        <div className="py-10 flex flex-col items-center text-center justify-center w-full">
          {quizOver ? (
            // Quiz is over: show final message with flashy thank you.
            <div className="mt-6 p-4 rounded-xl shadow-xl bg-gradient-to-r from-blue-600 to-purple-600">
              <p className="text-2xl mobile:text-lg px-8 py-4 rounded-md font-bold uppercase tracking-wide text-white">
                Chamber of Secrets is over,{" "}
                <span className="text-yellow-400 font-extrabold animate-pulse">
                  thank you for participating
                </span>
              </p>
            </div>
          ) : (
            // Quiz not over: show button with different label based on current phase.
            <>
              <h1 className="text-4xl mobile:text-xl font-semibold w-full">
                Chamber of Secrets is <span className='text-red-500 font-bold animate-pulse drop-shadow-[0_0_10px_#ff00ff] text-5xl mobile:text-3xl'>LIVE</span>
              </h1>
              <div className="mt-6 p-4 rounded-xl shadow-xl transition-transform transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 to-purple-600">
                <a
                  href={buttonActive ? "/chamber-of-secrets" : "#"}
                  className={`text-2xl mobile:text-lg px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-colors duration-300 ${
                    buttonActive 
                      ? "text-white" 
                      : "text-gray-300 cursor-not-allowed"
                  }`}
                >
                  Click to Enter the arena
                </a>
                <p className="mt-4 text-lg text-white">
                  {buttonActive
                    ? <>Time remaining: <span className="font-mono">{timeRemaining}</span></>
                    : <>Available in: <span className="font-mono">{timeRemaining}</span></>
                  }
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="pc:h-[90vh] mobile:h-[90vh]"></div>
      <Message />
      <AboutUs />
      <Annual />
      <Gallery />
    </div>
  );
}