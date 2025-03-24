
  import { motion } from "framer-motion";
  import { Dispatch, SetStateAction, useState } from "react";
  const StaggeredDropDown = ({setcurrSem, currSem,handleClick, setCurrSub}) => {
    const [open, setOpen] = useState(false);
    const [SemText, setsemText]=useState(null);
    return (
      <div className="p-8 pb-56 pcmd:p-0 pcmd:m-0 flex items-center justify-center  ">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <div className="flex">

          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-sm text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
            >
            <span className="font-medium text-sm">Semester</span>
            
          </button>
        <div className="absolute top-2 -right-10">{SemText}</div>
            </div>
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col  p-2 rounded-lg  shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
          >
            <Option setOpen={setOpen} setcurrSem={setcurrSem} setCurrSub={setCurrSub}  setsemText={setsemText} handleClick={handleClick} currSem={currSem}   className={`${currSem === 1 ? 'text-[#33FCFF] underline' : ''}`}  text="1st" />
            <Option setOpen={setOpen} setcurrSem={setcurrSem} setCurrSub={setCurrSub} setsemText={setsemText} handleClick={handleClick} currSem={currSem} className={`${currSem === 2 ? 'text-[#33FCFF] underline' : ''}`} text="2nd" />
            <Option setOpen={setOpen} setcurrSem={setcurrSem} setCurrSub={setCurrSub} setsemText={setsemText} handleClick={handleClick} currSem={currSem} className={`${currSem === 3 ? 'text-[#33FCFF] underline' : ''}`}  text="3rd" />
            <Option setOpen={setOpen} setcurrSem={setcurrSem} setCurrSub={setCurrSub} setsemText={setsemText} handleClick={handleClick} currSem={currSem} className={`${currSem === 4 ? 'text-[#33FCFF] underline' : ''}`} text="4th" />
            <Option setOpen={setOpen} setcurrSem={setcurrSem} setCurrSub={setCurrSub} setsemText={setsemText} handleClick={handleClick} currSem={currSem} className={`${currSem === 5 ? 'text-[#33FCFF] underline' : ''}`} text="5th" />
            <Option setOpen={setOpen} setcurrSem={setcurrSem} setCurrSub={setCurrSub} setsemText={setsemText} handleClick={handleClick} currSem={currSem} className={`${currSem === 6 ? 'text-[#33FCFF] underline' : ''}`} text="6th" />
            <Option setOpen={setOpen} setcurrSem={setcurrSem} setCurrSub={setCurrSub} setsemText={setsemText} handleClick={handleClick} currSem={currSem} className={`${currSem === 7 ? 'text-[#33FCFF] underline' : ''}`} text="7th" />
            <Option setOpen={setOpen} setcurrSem={setcurrSem} setCurrSub={setCurrSub} setsemText={setsemText} handleClick={handleClick} currSem={currSem} className={`${currSem === 8 ? 'text-[#33FCFF] underline' : ''}`} text="8th" />
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option = ({ text, setOpen ,handleClick,setsemText, setcurrSem,currSem, setCurrSub }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => {setOpen(false) ,setsemText(text), handleClick(),setCurrSub(0), setcurrSem(Number(text[0]-1)) }} className={`flex items-center p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100   transition-colors cursor-pointer dropOption`}
        
      >
        
        <span className="text-indigo">{text}</span>
      </motion.li>
    );
  };
  
  export default StaggeredDropDown;
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };