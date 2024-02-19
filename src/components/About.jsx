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
import { useMediaQuery } from "@react-hook/media-query";

import "../index.css";

const ServiceCard = ({ index, title, icon }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <motion.div
      variants={isMobile ? {} : fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-service"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="cardOne rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
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
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <motion.div
      variants={isMobile ? {} : fadeIn("left", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-hobbies"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="cardTwo rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
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
  const isMobile = useMediaQuery("(max-width: 767px)");
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
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <div className="-mt-[2rem]">
      <motion.div variants={isMobile ? {} : textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Qui je suis ?</h2>
      </motion.div>

      <div className="containerAbout flex flex-col md:flex-row items-center">
        <motion.p
          variants={isMobile ? {} : fadeIn("", "", 0.1, 1)}
          className="textAbout mt-4 text-jet text-[18px] max-w-3xl leading-[30px] md:mr-8"
        >
          Je suis <b>développeur web</b> basé dans la ville de Cholet, terre de
          basket.
          <br></br>
          <br></br>
          J'ai une passion pour la <b>création graphique</b> et{" "}
          <b>l'informatique</b>.<br></br>
          <br></br>
          De nature <b>curieux</b> et <b>dynamique</b>, j’aime créer et
          m’améliorer chaque jour en développant de nouvelles compétences dans
          le <b>web</b> mais également dans le <b>graphisme</b>.<br></br>
          <br></br>
          Lorsque je travaille sur un projet qui me <b>passionne</b>, je ne
          compte pas mes heures et je donne tout pour y arriver. <br></br>
          <br></br>
          Malgré mon caractère de « <b>discret</b> », cela me permet d’observer
          le monde qui nous entoure et de me concentrer sur des éléments qui
          m’entourent me permettant d’engranger de nouvelles idées pour mes
          futures créations.
          <br></br>
          <br></br>
          <SocialLinks />
        </motion.p>

        {!isMobile && (
          <motion.img
            variants={fadeIn("", "", 0.1, 1)}
            src={astronaut}
            alt="Astronaute"
            className="imageAbout mt-4 md:mt-0"
          ></motion.img>
        )}
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.div
        className="mt-[8rem]"
        variants={isMobile ? {} : textVariant()}
      >
        <p className={styles.sectionSubText}>Présentation</p>
        <h2 className={styles.sectionHeadText}>A propos</h2>
      </motion.div>

      <motion.p
        variants={isMobile ? {} : fadeIn("", "", 0.1, 1)}
        className="mt-4 text-jet text-[18px] max-w-3xl leading-[30px]"
      >
        Étudiant en reconversion dans le web, j'ai pu développer mes compétences
        en alternance afin d'obtenir mon{" "}
        <b>Titre Professionnel Développeur Web et Web Mobile</b> (TP DWWM) au
        GRETA d'Angers.
        <br></br>
        <br></br>
        Par la suite, j'ai pu poursuivre vers un Bachelor Développeur Web à
        MyDigitalSchool Angers afin d'obtenir mon{" "}
        <b>Titre Professionnel Concepteur Développeur d'Applications</b> (TP
        CDA).<br></br>
        <br></br>
        De plus, je souhaite obtenir à l'avenir une double compétence
        <b> développement web</b> et <b>webdesign</b> afin d'obtenir un panel de
        compétences sur un projet web, et ainsi aider les entreprises à
        développer et à améliorer leur site internet.
        <br></br>
        <br></br>
        Mon objectif final ? Perfectionner mes compétences en développement web
        et webdesign et acquérir une casquette de <b>
          chef de projet digital
        </b>{" "}
        à la fin de mes études.
        <br></br>
        <br></br>
        N’hésitez pas à parcourir mon travail. Bien entendu, je n'ai pas tout
        mis, alors si vous voulez qu'on papote et qu'on apprenne à se connaître.
        <br></br>
        <br></br>
        Ou alors, si vous souhaitez collaborer ou simplement me dire bonjour,
        <b> contactez-moi</b> !<br></br>
      </motion.p>

      <motion.div
        className="mt-[4rem]"
        variants={isMobile ? {} : textVariant()}
      >
        <h2 className={styles.sectionHeadText}>Hobbies</h2>
      </motion.div>

      <div className="mt-10 mb-20 flex flex-wrap gap-10">
        {hobbies.map((service, index) => (
          <HobbiesCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
