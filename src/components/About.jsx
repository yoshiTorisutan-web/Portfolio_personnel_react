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
import { astronaut, astronaut_fun } from "../assets";

import { FaLinkedin, FaGithub, FaPinterest, FaYoutube } from "react-icons/fa";
import { useMediaQuery } from "@react-hook/media-query";

import YouTube from "react-youtube";

import "../index.css";

const ServiceCard = ({ index, title, icon }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <motion.div
      variants={isMobile ? {} : fadeIn("left", "spring", 0.5 * index, 0.75)}
      className={`w-[18%] card-gradient p-[1px] rounded-[15px] shadow-hobbies ${
        isMobile ? "mobile-card" : ""
      }`}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`cardOne rounded-[15px] py-3 px-8 min-h-[280px] flex justify-evenly items-center flex-col ${
          isMobile ? "mobile-card-content" : ""
        }`}
      >
        <img src={icon} alt={title} className="w-14 h-14 object-contain" />
        <h3 className="text-white-100 text-[16px] font-bold text-center">
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
      className={`w-[18%] card-gradient p-[1px] rounded-[15px] shadow-hobbies ${
        isMobile ? "mobile-card" : ""
      }`}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`cardOne rounded-[15px] py-3 px-8 min-h-[280px] flex justify-evenly items-center flex-col ${
          isMobile ? "mobile-card-content" : ""
        }`}
      >
        <img src={icon} alt={title} className="w-14 h-14 object-contain" />
        <h3 className="text-white-100 text-[16px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const SocialLinks = () => {
  return (
    <div className="social-links">
      <div className="social-link">
        <p>
          <b>Linkedin</b>
        </p>
        <a
          href="https://www.linkedin.com/in/tristan-bossard-dw/"
          className="iconSM-hover"
        >
          <FaLinkedin size={30} color="#0e76a8" />
        </a>
      </div>
      <div className="social-link">
        <p>
          <b>Github</b>
        </p>
        <a
          href="https://github.com/yoshiTorisutan-web/"
          className="iconSM-hover"
        >
          <FaGithub size={30} color="#6c6cec" />
        </a>
      </div>
      <div className="social-link">
        <p>
          <b>Pinterest</b>
        </p>
        <a
          href="https://www.pinterest.fr/yoshiTorisutan_creative/"
          className="iconSM-hover"
        >
          <FaPinterest size={30} color="#E60023" />
        </a>
      </div>
      <div className="social-link">
        <p>
          <b>Youtube</b>
        </p>
        <a
          href="https://www.youtube.com/@tbd_motorsport8594/"
          className="iconSM-hover"
        >
          <FaYoutube size={30} color="#E60023" />
        </a>
      </div>
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
          Moi c'est{" "}
          <b>
            <em>Tristan</em>
          </b>
          , <b>développeur web</b> passionné et créatif.
          <br></br>
          <br></br>
          <em>Mes centres d'intérêts ?</em> La <b>création graphique</b>,{" "}
          <b>l'informatique</b> et bien plus encore, que je vous invite à
          découvrir au fil de ce portfolio.
          <br></br>
          <br></br>
          Curieux et dynamique, j'évolue chaque jour en enrichissant mes
          compétences dans le domaine du <b>web</b> et du{" "}
          <b>design graphique</b>. Chaque projet sur lequel je travaille est
          pour moi une opportunité d'apprendre et de me dépasser.<br></br>
          <br></br>
          Lorsque je suis immergé dans un projet qui me <b>passionne</b>, je me
          donne à fond sans compter mes heures pour atteindre l'excellence.{" "}
          <br></br>
          <br></br>
          Mon caractère <b>discret</b> m'offre une perspective unique : il
          m'incite à observer attentivement le monde qui m'entoure, à capter les
          détails qui nourrissent ma créativité et inspirent mes futures
          réalisations.
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

      <div className="mt-20 flex flex-wrap gap-4">
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

      <div className="containerAbout flex flex-col md:flex-row items-center">
        <motion.p
          variants={isMobile ? {} : fadeIn("", "", 0.1, 1)}
          className="mt-4 text-jet text-[18px] max-w-3xl leading-[30px]"
        >
          Étudiant en reconversion dans le web, j'ai pu développer mes
          compétences en alternance afin d'obtenir mon{" "}
          <b>Titre Professionnel Développeur Web et Web Mobile</b> (TP DWWM) au
          GRETA d'Angers.
          <br></br>
          <br></br>
          Par la suite, j'ai poursuivi mes études avec un Bachelor Développeur
          Web à MyDigitalSchool Angers, où j'ai décroché le{" "}
          <b>Titre Professionnel Concepteur Développeur d'Applications</b> (TP
          CDA).<br></br>
          <br></br>
          Mon objectif est d'acquérir une double compétence en{" "}
          <b>développement web</b> et en <b>webdesign</b>, afin de maîtriser
          l'ensemble des aspects d'un projet web. Ainsi, je pourrai accompagner
          les entreprises dans la création et l'amélioration de leurs sites
          internet.
          <br></br>
          <br></br>
          <em>Et mon ambition ultime ?</em> Devenir un{" "}
          <b>chef de projet digital</b> aguerri, en perfectionnant
          continuellement mes compétences en développement web et en webdesign.
          <br></br>
          <br></br>
          Je vous invite à découvrir mes réalisations. Bien sûr, tout n'est pas
          ici, alors si vous souhaitez discuter, en apprendre plus sur moi, ou
          envisager une collaboration, <b>contactez-moi</b> !<br></br>
        </motion.p>

        {!isMobile && (
          <div className="videoAndImageWrapper">
            <motion.div
              variants={fadeIn("", "", 0.1, 1)}
              className="videoWrapper"
            >
              <YouTube
                videoId="bjsrVsWmREo"
                opts={{ width: "450px", height: "250px" }}
              />
            </motion.div>
            <motion.img
              variants={fadeIn("", "", 0.1, 1)}
              src={astronaut_fun}
              alt="Astronaute"
              className="imageAboutFun"
            />
          </div>
        )}
      </div>

      <motion.div
        className="mt-[4rem]"
        variants={isMobile ? {} : textVariant()}
      >
        <h2 className={styles.sectionHeadText}>Hobbies</h2>
      </motion.div>

      <div className="mt-10 mb-20 flex flex-wrap gap-4">
        {hobbies.map((service, index) => (
          <HobbiesCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
