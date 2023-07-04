/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { hobbies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { astronaut } from "../assets";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import "../index.css";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="card rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white-100 text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const HobbiesCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="card rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white-100 text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex items-center">
      <p>
        <b>Linkedin</b>
      </p>
      <a href="https://www.linkedin.com/" className="ml-2 mr-2">
        <FaLinkedin size={30} />
      </a>
      <p className="ml-5">
        <b>Github</b>
      </p>
      <a href="https://github.com/" className="ml-2 mr-2">
        <FaGithub size={30} />
      </a>
    </div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Qui je suis ?</h2>
      </motion.div>

      <div className="containerAbout flex flex-col md:flex-row items-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="textAbout mt-4 text-jet text-[18px] max-w-3xl leading-[30px] md:mr-8"
        >
          Je suis développeur web basé dans la ville de Cholet, terre de basket.
          <br></br>
          <br></br>
          J'ai une passion pour la création graphique et l'informatique.
          <br></br>
          <br></br>
          De nature curieux et dynamique, j’aime créer et m’améliorer chaque
          jour en développant de nouvelles compétences dans le web mais
          également dans le graphisme.<br></br>
          <br></br>
          Lorsque je travaille sur un projet qui me passionne, je ne compte pas
          mes heures et je donne tout pour y arriver. <br></br>
          <br></br>
          Malgré mon défaut d’être « discret », cela me permet d’observer le
          monde qui nous entoure et de me concentrer sur des éléments qui
          m’entourent me permettant d’engranger de nouvelles idées pour mes
          futures créations.
          <br></br>
          <br></br>
          <SocialLinks />
        </motion.p>

        <motion.img
          variants={fadeIn("", "", 0.1, 1)}
          src={astronaut}
          alt="Astronaute"
          className="imageAbout mt-4 md:mt-0"
        ></motion.img>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.div className="mt-[8rem]" variants={textVariant()}>
        <p className={styles.sectionSubText}>Présentation</p>
        <h2 className={styles.sectionHeadText}>A propos</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-jet text-[18px] max-w-3xl leading-[30px]"
      >
        Étudiant en reconversion dans le web au GRETA d'Angers, je développe mes
        compétences en alternance afin d'obtenir mon Titre Professionnel
        Développeur Web et Web Mobile (TPDWWM).
        <br></br>
        <br></br>
        Par la suite, je souhaite poursuivre vers une Bachelor Développeur Web à
        MyDigitalSchool Angers.<br></br>
        <br></br>
        Mon objectif ? Perfectionner mes compétences en développement front-end
        qui me passionne et améliorer mes compétences en développement back-end.
        <br></br>
        <br></br>
        De plus, je souhaite obtenir à l'avenir une double compétence
        développement web et webdesign afin d'obtenir un panel de compétences
        sur un projet web, et ainsi aider les entreprises à développer et à
        améliorer leur site internet.<br></br>
        <br></br>
        Début septembre 2022, je commencerai ma formation à MyDigitalSchool, au
        sein de l'ESPL pour développer des projets web et améliorer certains
        outils déjà mis en place pour les utilisateurs du campus.
        <br></br>
        <br></br>
      </motion.p>

      <motion.div className="mt-[4rem]" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Hobbies</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {hobbies.map((service, index) => (
          <HobbiesCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
