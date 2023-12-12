/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { services } from "../constants";

import SectionWrapper from "../hoc/SectionWrapper";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary leading-[30px] max-w-3xl text-[17px] mt-4"
      >
        I&#39;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React and Node.js. I&#39;m
        a quick learner and collaborate closely with team to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let&#39;s work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
