/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { plus, ProjetsDigitaux } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

import "../index.css";

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
      whileHover={{ scale: 0.9 }} // Ajoute l'effet de survol ici
      transition={{ duration: 0.3 }} // Transition pour rendre l'effet plus fluide
    >
      <div>
        {/* Version mobile */}
        <div
          className="absolute top-0 left-0 z-10 bg-green-950 
    h-full w-full opacity-[0.5] rounded-[24px] sm:hidden"
        ></div>

        {/* Version ordinateur */}
        <div
          className="absolute top-0 left-0 z-10 bg-gradient-to-t from-green-950 via-green-900 to-transparent 
    h-full w-full opacity-[0.7] rounded-[24px] hidden sm:block"
        ></div>
      </div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px] dark-image"
      />

      {active !== id ? (
        <div className="flex mt-4 items-center justify-center">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
            whitespace-nowrap sm:text-[27px] text-[18px] text-color 
            tracking-[1px] absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] 
            lg:origin-[0,0] leading-none text-center"
          >
            {name}
          </h3>
        </div>
      ) : (
        <div
          className="absolute bottom-0 p-8 justify-start w-full 
          flex-col bg-[rgba(122,122,122,0.7)] rounded-b-[24px] z-20"
        >
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(repo, "_blank")}
              className="bg-night sm:w-9 sm:h-9 w-8 h-8 rounded-full 
              flex justify-center items-center cursor-pointer
              sm:opacity-[0.9] opacity-[0.8]"
            >
              <img
                src={plus}
                alt="Voir plus"
                className="w-3/5 h-3/5 object-contain plus-hover"
              />
            </div>
          </div>
          <br></br>
          <h2
            className="font-bold sm:text-[16px] text-[16px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]"
          >
            {name}
          </h2>
          <br></br>
          <p
            className="text-silver sm:text-[12px] text-[10px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]"
          >
            {description}
          </p>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState("project-2");

  return (
    <div className="-mt-[2rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Exemple de projets</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projets.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          Ces projets démontrent mon expertise avec des exemples pratiques de
          mon travail, y compris de brèves descriptions et des liens vers des
          démonstrations en direct.
          <br></br>
          <br></br>
          Ils démontrent ma capacité à relever des défis complexes, à m'adapter
          à diverses technologies et à travailler efficacement sur de nouveaux
          projets.
        </motion.p>
      </div>

      <div className="flex mt-8">
        <a
          href={ProjetsDigitaux}
          download="Projets_Digitaux.pdf"
          className="bg-gradient-to-r from-green-600 to-green-900 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          Voir plus de projets
        </a>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-3 mb-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
