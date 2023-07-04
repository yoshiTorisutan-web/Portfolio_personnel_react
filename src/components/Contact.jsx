/* eslint-disable react-refresh/only-export-components */
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";
import { fadeIn } from "../utils/motion";
import { rocket } from "../assets";

import "../index.css";

export const Contact = (index) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_0tcfms9",
        "template_we29617",
        form.current,
        "tQ30iSG0cOmJqiA-V"
      )
      .then(
        () => {
          setLoading(false);
          // Afficher le message d'alerte personnalisé de succès
          setMessage(
            <div className="bg-green-500 text-white p-4 rounded">
              Je vous remercie. Je reviendrai vers vous dès que possible.
            </div>
          );
        },
        (error) => {
          setLoading(false);
          console.log(error);
          // Afficher le message d'alerte personnalisé d'erreur
          setMessage(
            <div className="bg-red-500 text-white p-4 rounded">
              Un problème sest produit. Veuillez réessayer.
            </div>
          );
        }
      );
  };

  return (
    <div className="-mt-[2rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-contacts p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Comment vous appelez-vous ?
            </span>
            <input
              type="text"
              name="name"
              placeholder="Votre nom & prénom"
              className="bg-color-input py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Quelle est votre adresse e-mail ?
            </span>
            <input
              type="email"
              name="email"
              placeholder="Votre adresse mail"
              className="bg-color-input py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Vous souhaitez me contacter à quel propos ?
            </span>
            <textarea
              rows="7"
              name="message"
              placeholder="Votre message"
              className="bg-color-input py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
    gap-3 sm:text-[20px] text-[16px] text-white
    font-bold font-beckman items-center py-5
    whitespace-nowrap sm:w-[250px] sm:h-[50px] 
    w-[150px] h-[50px] rounded-[10px] bg-color-input
    hover:bg-black hover:text-white
    transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector(".contact-btn")
                .setAttribute("src", sendHover);
            }}
            onMouseOut={() => {
              document.querySelector(".contact-btn").setAttribute("src", send);
            }}
          >
            {loading ? "Sending" : "Envoyer"}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
      w-[23px] h-[23px] object-contain"
            />
          </button>

          {message && <div className="mt-4">{message}</div>}
        </form>
      </motion.div>
      <motion.div
        className="flex-[0.25] flex items-center justify-center pl-10 mt-10 xl:mt-0"
        variants={fadeIn("right", "spring", 5 * index, 5)}
      >
        <img
          src={rocket}
          alt="rocket"
          className="max-h-[600px] object-contain pl-20"
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
