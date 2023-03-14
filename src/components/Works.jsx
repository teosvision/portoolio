import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { github, webi } from "../assets";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWarpper } from "../hoc";

const Projects = ({
  index,
  name,
  image,
  tags,
  source_code_link,
  web_link,
  description,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] h-full w-full"
      >
        <div className="  relative w-full h-[230px]">
          <img
            src={image}
            alt="name"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            <div
              onClick={() => window.open(web_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={webi}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className=" text-white font-bold text-[24px]">{name}</h3>
          <p>{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color} `}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>MY WORK</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
        <div className="w-full flex">
          <motion.p
            className="mt-4 text-secondary text-[17px] max-w-3xl
       leading-[30px]"
            variants={fadeIn("", "", 0.1, 1)}
          >
            Following projects showcases my skills and experience through
            real-word examples of my work. Each projects is briefly described
            with links to code repositores and live web application in it.
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-10">
          {projects.map((item, index) => (
            <Projects key={item.name} index={index} {...item} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWarpper(Works, "work");
