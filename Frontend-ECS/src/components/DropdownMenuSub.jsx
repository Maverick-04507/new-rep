  import { motion } from "framer-motion";
  import { Dispatch, SetStateAction, useState } from "react";
  const StaggeredDropDown = ({subjects, setCurrSub}) => {
    const [open, setOpen] = useState(false);
    const [SubText, setsubText]=useState(null);
    
    return (
      <div className="p-8 pcmd:p-0 pcmd:m-0 pb-56 flex items-center justify-center  ">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-sm text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
          >
            <span className="font-medium text-sm">Subjects</span>
          </button>
          {/* <div>{SubText}</div> */}
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col  p-2 rounded-lg  shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden text-ellipsis"
          >
            {subjects.map((element,index) => {
            return ( 
              <Option setOpen={setOpen} setCurrSub={setCurrSub} index={index} setsubText={setsubText} text={element} />
            )
          })}
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  /* Yehsb chorhke cg mei dhyaan do -By sibajit  */
  const Option = ({ text, setOpen,setCurrSub, setsubText,index}) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => {setOpen(false), setCurrSub(index), setsubText(text)}}
        className="flex items-center p-2 text-xs font-medium  rounded-md hover:bg-indigo-100   transition-colors cursor-pointer dropOption"
      >
        
        <span className="text-indigo text-ellipsis ">{text}</span>
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