import React from 'react';
import Gallery from './Gallery';
import Message from './Message';
import AboutUs from './AboutUs';
import Annual from './Annual';
import ParticlesComponent from '../Particle/Particle';
import Typewriter from "typewriter-effect";


export default function Home() {
    return (
        <div className="mx-auto w-full space-y-10 overflow-x-hidden">
            <ParticlesComponent id='particlejs' />
            <div className='absolute w-full top-1/3 flex flex-col'>
            
           
                <h2 className=" title text-white flex justify-center items-center text-center text-4xl font-bold sm:text-5xl ">
                    Electronics and Communication Society
                </h2>
               
                <div id="hero" className="text-yellow-400 flex justify-center items-center text-4xl font-bold sm:text-5xl pl-6">
                    <span className='typingText'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("NIT SILCHAR")
                                    .pauseFor(1000)
                                    .start();
                            }}
                        />
                    </span>
                </div>

            </div>
            <div className="pc:h-[90vh] mobile:h-[90vh]" ></div>
            <Message />
            <AboutUs />
            <Annual />
            <Gallery />
        </div>

    );

}