import React from 'react'
import { useState, useRef } from 'react'
import './faq.css'
const Card = (props) => {
  const [opened, setOpened] = useState(0);
  var r = document.querySelector(':root');
  var rs = getComputedStyle(r);
  return (
    <div className={`flex flex-col align-center justify-start bg-[#D7EDF3B2] text-[#000000] rounded-[0.5rem] p-[2rem] pb-[1rem]`
    } style={{ rowGap: '1rem', height: `${opened === 0 ? `${rs.getPropertyValue('--closed')}` : `${rs.getPropertyValue('--opened')}`}`, fontSize: `${rs.getPropertyValue('--fontSize')}`, transition: 'ease 200ms' }}>
      <div className='flex flex-row justify-around align-center'><h1 style={{ width: '90%', textAlign: 'left' }}>{props.question}</h1><button style={{ width: '10%' }} onClick={() => setOpened(opened === 0 ? 1 : 0)} ><img src='https://res.cloudinary.com/dhry5xscm/image/upload/v1702408563/ecs-website/dropDownArrow_ndo5ey.svg' style={{ width: '1.5rem', height: '1.5rem', transform: `rotateZ(${opened === 0 ? 0 : 180}deg)`, transition: 'ease 200ms' }} /></button></div>
      <br />
      <p style={{ opacity: `${opened}`, transition: 'ease 200ms', textAlign: 'left' }}>{props.answer}</p>
    </div>
  );
}
const FAQ = () => {
  const data = [
    {
      Id: 1,
      Question: " What is ECS?",
      Answer:
        "ECS is the technical society of ECE which conducts various events, workshops and contests for students in and out of the department. It is responsible for all the events related to ECE.",
    },
    {
      Id: 2,

      Question: " In which year can you expect companies coming for internships?",
      Answer: "3rd Year.",
    },
    {
      Id: 3,

      Question: " What are the events conducted by your branch society (ECS) ?",
      Answer: [
        "ORIENTATION,",
        " UTKRISHTHA( Utkrishtha is the annual freshers event for the ECE department. ),",
        " SPECTRUM (Spectrum is the technical weekend of ECS which is conducted annually),",
        " SPECTRUM CONNECT ( Conducted in the online mode to connect students in and out of the department despite being physically miles away.),",
        " DEHLEEZ (Farewell)",
      ],
    },
    {
      Id: 4,

      Question: "What are the workshops ECS conducts ?",
      Answer:
        "ECS conducts various workshops which include Coding, Web Development, Android Development, and many more.",
    },
    {
      Id: 5,

      Question: "How can you become a member of ECS?",
      Answer:
        "ECS conducts an interview session for the new members. Interested ones can sit for this interview session to be a part of the society.",
    },
    {
      Id: 6,

      Question: "What is the use of the fee and where is it utilized?",
      Answer:
        "The fee is used to conduct various events under the banner of Spectrum, Spectrum Connect, Utkrishtha, Dehleez etc. and distribute cash prizes to the winners.",
    },
    {
      Id: 7,

      Question: "What are the various Career opportunities one can explore by taking ECE?",
      Answer:
        "ECE is a highly lucrative branch of engineering and the ECE engineers have the independence to try their hands at various fields after graduating. One can go for higher studies as well if they wish. ECE engineers can take up any job they wish to if they have the required skills for the job.",
    },
    {
      Id: 8,

      Question: "How will this website help me?",
      Answer:
        "Here, you can access not just class notes but also learn more about the various events, contests organised by ECS. By going through this website, you can get a clear idea of the functioning of ECS and hopefully all your queries regarding ECE would be solved too.",
    },
    {
      Id: 9,

      Question: "Where will I find the notes and question papers of previous years?",
      Answer:
        "The notes and question papers of previous years can be accessed from the Resource Hub page.",
    },
    {
      Id: 10,

      Question: "Where do I learn more about the events of ECS?",
      Answer: "Details about the events of ECS are given on the homepage of this website.",
    },
    {
      Id: 11,

      Question: "Where can I post my queries?",
      Answer:
        "Queries can be mailed to us by clicking the Contact Us button on the homepage.",
    },
    {
      Id: 12,

      Question: "Where can I learn more about our faculties?",
      Answer:
        "You can learn about the faculties of ECE by clicking on the 'People' section after going to the following link: http://ec.nits.ac.in/",
    },
  ];
  const windowWidth = useRef(window.innerWidth);
  const [varWindowWidth, setWindowWidth] = useState(windowWidth.current);
  window.addEventListener('resize', () => setWindowWidth(windowWidth.current));
  return (
    <div className='pt-20'>
      
      <div className='flex flex-col justify-around align-center w-[75%] m-auto mb-0' style={{ rowGap: '1rem', padding: '0.5rem' }}>
        {data.map((item, index) => <Card question={item.Question} answer={item.Answer} windowWidth={varWindowWidth} />)}
      </div>
    </div >
  )
}
export default FAQ