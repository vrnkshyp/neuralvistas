import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import videoBg from '../assets/demo.mp4'; // Assuming demo.mp4 is the path to your video

const ServiceCard = () => {
  return (
    <motion.div
      variants={slideIn("left", "spring", 0, 0.75)} 
      className={`xl:flex-row xl:w-full xl:green-pink-gradient xl:p-[1px] xl:rounded-[20px] xl:shadow-card xl:max-w-[400px] xl:h-49 overflow-hidden sm:flex-col sm:w-full sm:green-pink-gradient sm:p-[1px] sm:rounded-[20px] sm:shadow-card sm:max-w-[400px] sm:h-49 sm:overflow-hidden`}

      style={{ minWidth: '1200px', marginLeft: '0' }} // Move to the left
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col' style={{ minHeight: '500px' }}>
        {/* Video */}
        <video src={videoBg} autoPlay loop muted className="w-full h-full object-contain" />
      </div>
    </motion.div>
  );
};

const Demo = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Demonstration.
        </h2>
        <p className={styles.sectionSubline}>
          Here is a video of how the code works in the backend to classify the space images.
        </p>
      </motion.div>

      <motion.p
        variants={slideIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       
      </motion.p>

      <div className='mt-20 flex justify-center'>
        <ServiceCard />
      </div>
    </>
  );
};

export default SectionWrapper(Demo, "demo");
