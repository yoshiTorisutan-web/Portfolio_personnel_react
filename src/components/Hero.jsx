/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { tristan, galaxy } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "../index.css";
import "./typewriter.js";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={galaxy}
          alt="galaxy"
          className="w-full h-full block object-cover"
        />
      </div>

      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-green-950 font-poppins uppercase`}
            >
              <span className="desktop-onlyTitle">Hi</span>
              <span className="mobile-onlyTitle">Hello</span>👋 I'm{" "}
              <span className="sm:text-battleGray lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] text-eerieBlack font-mova font-extrabold uppercase">
                <span className="typewrite-container">
                  <p
                    className="typewrite"
                    data-period="2000"
                    data-type='[ "Tristan.", "Creative.", "Designer.", "Developer." ]'
                  >
                    <span className="wrap"></span>
                  </p>
                  <p className="static-text">Tristan.</p>
                </span>
              </span>
            </h1>

            <a href="https://tristanbossard-besoin-projet.softr.app">
              <div className="btn-effect">
                <button
                  className={`button-effect text-timberWolf font-medium mb-4 lg:text-xl`}
                >
                  <span className="text">Un projet ?</span>
                  <div className="icon-container">
                    <div className="icon icon--left">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className="icon icon--right">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                </button>
              </div>
            </a>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[60vw] md:ml-[60vw] xmd:ml-[45vw] 2xl:ml-[68vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh] smooth"
            src={tristan}
            alt="tristan"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
