import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWarpper } from "../hoc";
const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col" options={{ max: 45, scale: "1", speed: 450 }}>
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-center text-white text-[20px] font-bold ">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl
       leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Over the last four years, I have acquired a comprehensive skill set in developing web and mobile applications using React, React Native, Next.js, Node.js, Firebase, and
        other modern technologies. <br />
        During this time, I have worked on and successfully delivered various cross-platform projects, continuously expanding my knowledge and skills. I have had the opportunity to
        tackle increasingly ambitious projects, including 3D games that utilize object physics, large-scale CRM systems, and advanced service booking platforms.
        <br />
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((item, index) => (
          <ServiceCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWarpper(About, "about");
