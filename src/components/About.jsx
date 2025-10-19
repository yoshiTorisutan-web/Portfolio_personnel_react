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
        <div style={{ display: "flex", alignItems: "center" }}>
          <b style={{ marginRight: "8px" }}>Linkedin</b>
          <a
            href="https://www.linkedin.com/in/tristan-bossard-dw/"
            className="iconSM-hover"
          >
            <FaLinkedin size={30} color="#0e76a8" />
          </a>
        </div>
      </div>
      <div className="social-link">
        <div style={{ display: "flex", alignItems: "center" }}>
          <b style={{ marginRight: "8px" }}>Github</b>
          <a
            href="https://github.com/yoshiTorisutan-web/"
            className="iconSM-hover"
          >
            <FaGithub size={30} color="#6c6cec" />
          </a>
        </div>
      </div>
      <div className="social-link">
        <div style={{ display: "flex", alignItems: "center" }}>
          <b style={{ marginRight: "8px" }}>Pinterest</b>
          <a
            href="https://www.pinterest.fr/yoshiTorisutan_creative/"
            className="iconSM-hover"
          >
            <FaPinterest size={30} color="#E60023" />
          </a>
        </div>
      </div>
      <div className="social-link">
        <div style={{ display: "flex", alignItems: "center" }}>
          <b style={{ marginRight: "8px" }}>Youtube</b>
          <a
            href="https://www.youtube.com/@tbd_motorsport8594/"
            className="iconSM-hover"
          >
            <FaYoutube size={30} color="#E60023" />
          </a>
        </div>
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
        <motion.div
          variants={isMobile ? {} : fadeIn("", "", 0.1, 1)}
          className="textAbout mt-4 text-jet text-[18px] max-w-3xl leading-[30px] md:mr-8"
        >
          Moi c’est{" "}
          <b>
            <em>Tristan Bossard</em>
          </b>
          , <b>web developer</b> et <b>webmaster</b> passionné par la création
          et l’innovation numérique. 🚀
          <br />
          <br />
          <b>Solaire</b> et toujours prêt à partager ma bonne humeur, j’aime
          collaborer et créer des dynamiques positives au sein des projets que
          je mène. 🌞
          <br />
          <br />
          Curieux et créatif, je m’épanouis dans des domaines variés tels que le{" "}
          <b>développement web</b>, la <b>gestion de projet</b>, le{" "}
          <b>webdesign</b> et la <b>transformation digitale</b>. Chaque projet
          est pour moi une opportunité d’apprendre, d’expérimenter et de me
          dépasser.
          <br />
          <br />
          <b>Autodidacte</b> et <b>polyvalent</b>, je combine compétences
          techniques et sens du relationnel pour accompagner les utilisateurs
          avec <b>pédagogie</b> et <b>bienveillance</b>. J’attache une grande
          importance à la <b>collaboration</b>, à l’<b>écoute</b> et à la{" "}
          <b>qualité du rendu</b>, afin de transformer chaque mission en une
          expérience enrichissante et porteuse de sens.
          <br />
          <br />
          Mon univers mêle <b>design</b>, <b>data</b> et <b>digital</b>, au
          service d’expériences web à la fois esthétiques, performantes et
          humaines. 🎨
          <br />
          <br />
          <SocialLinks />
        </motion.div>

        {!isMobile && (
          <motion.img
            variants={fadeIn("", "", 0.1, 1)}
            src={astronaut}
            alt="Astronaute"
            className="imageAbout mt-4 md:mt-0"
          />
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
          <br />
          <br />
          J’ai ensuite poursuivi avec un Bachelor Développeur Web à
          MyDigitalSchool Angers, où j'ai décroché le{" "}
          <b>Titre Professionnel Concepteur Développeur d'Applications</b> (TP
          CDA).
          <br />
          <br />
          Plus récemment, j’ai validé mon <b>
            Master Chief Digital Officer
          </b>{" "}
          <em>(en spécialité la transformation digitale)</em> à MyDigitalSchool
          Angers, avec l’obtention du{" "}
          <b>Titre de Manager de Projet Web et Digital</b> (TP MPWD).
          <br />
          <br />
          Mon parcours m’a permis d’acquérir des compétences solides en{" "}
          <b>développement web</b>, en <b>transformation digitale</b>, en{" "}
          <b>gestion de projet</b> et en <b>data</b>, afin de maîtriser
          l'ensemble des aspects d'un projet digital. Grâce à cela, je peux
          accompagner les entreprises dans la création, l’optimisation et la
          gestion de leurs projets numériques.
          <br />
          <br />
          <em>Et mon ambition ultime ?</em> Devenir un{" "}
          <b>chef de projet digital</b> aguerri, en perfectionnant
          continuellement mes compétences et en restant à l'affût des évolutions
          du digital.
          <br />
          <br />
          Je vous invite à découvrir mes réalisations. Bien sûr, tout n'est pas
          ici, alors si vous souhaitez discuter, en apprendre plus sur moi, ou
          envisager une collaboration, <b>contactez-moi</b> !
          <br />
        </motion.p>

        {!isMobile && (
          <div className="videoAndImageWrapper">
            <motion.div
              variants={fadeIn("", "", 0.1, 1)}
              className="videoWrapper"
            >
              <YouTube
                videoId="bjsrVsWmREo"
                opts={{
                  width: "450px",
                  height: "250px",
                  playerVars: {
                    // Paramètres de la vidéo
                    autoplay: 1, // Lancer la vidéo automatiquement
                  },
                }}
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
