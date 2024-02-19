/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "../index.css";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Mes compétences</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies et Outils.</h2>
      </motion.div>
      <div className="bg-skills">
        <div className="skill-icons-gird">
          {technologies.map((technology) => {
            return (
              <>
                <div className="skill font-beckman">
                  <img src={technology.icon} alt="Skill logo image" />
                  <div className="text-overlay">{technology.temps}</div>
                  <p>{technology.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
