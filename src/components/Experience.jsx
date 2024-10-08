/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { download, resume, cv } from "../assets";
import { textVariant } from "../utils/motion";

import "../index.css";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#f8f8f8",
      color: "#292929",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      transition: "all 0.3s ease-in-out",
    }}
    contentArrowStyle={{
      borderRight: "7px solid  #232631",
    }}
    date={
      <div>
        <h3 className="text-black text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <a
          href={experience.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center"
          aria-label={`Visiter le dépôt de ${experience.company_name}`}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="inline-block w-[50%] h-[50%] object-contain transition-transform transform hover:scale-110"
          />
        </a>
      </div>
    }
  >
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[20px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
      <p className="text-taupe text-[18px] font-normal mt-1">
        {experience.description}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          Mes expériences professionnelles
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Expériences.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: "#f8f8f8",
              color: "#292929",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.3s ease-in-out",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #232631",
            }}
            iconStyle={{ background: "#333333" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <div>
              <a href={cv} download>
                <div className="live-demo flex justify-between items-center download-link hover:text-blue-500 transition duration-300">
                  <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
                    Télécharger mon CV
                  </h3>
                  <img
                    src={download}
                    alt="download"
                    className="ml-[20px] sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
                  />
                </div>
              </a>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
