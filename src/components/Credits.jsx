import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, image, email }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      style={{
        flex: "1 0 calc(25% - 20px)",
        maxWidth: "calc(25% - 20px)",
        height: "400px", // Set a fixed height for the card container
      }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        style={{ height: "100%" }}
      >
        <div className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col justify-between">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl"
              style={{ height: "100%", objectFit: "cover" }}
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover"></div>
          </div>
          <div>
            <h3 className="text-white font-bold text-center text-[16px]">{name}</h3>
            <p className="mt-2 text-secondary text-center text-[12px]">{description}</p>
            <p className="mt-2 text-secondary text-center text-[12px]">{email}</p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Credits = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Credits.</h2>
      </motion.div>

      <div className="mt-20 flex justify-between">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Credits, "contact");
