import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Click on the link below.
        </h2>
      </motion.div>

      <motion.p
        variants={slideIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {/* Description */}
      </motion.p>

      <div className='mt-20 flex justify-center'>
        {/* Display the link */}
        <a
          href="https://colab.research.google.com/drive/1AvSkqGElCogQ6Ts9tSmvCEwjXojpJBEj#scrollTo=71oz1Xgh84n3"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-tertiary py-3 px-8 rounded-xl text-white font-bold shadow-md shadow-primary"
          style={{ borderRadius: '20px', textDecoration: 'none' }}
        >
          Classify
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
