/* eslint-disable react-refresh/only-export-components */
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";
import { send, sendHover } from "../assets";
import { rocket } from "../assets";
import { useMediaQuery } from "@react-hook/media-query";
import ReCAPTCHA from "react-google-recaptcha";

import "../index.css";

export const Contact = (index) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [capVal, setCapVal] = useState(null);
  const [errors, setErrors] = useState({});
  const [submissionCount, setSubmissionCount] = useState(0);
  const MAX_SUBMISSIONS = 3;
  const [messageLength, setMessageLength] = useState(0);

  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.current.name.value) {
      tempErrors.name = "Le nom est requis.";
    }

    if (
      !form.current.email.value ||
      !emailRegex.test(form.current.email.value)
    ) {
      tempErrors.email = "Une adresse email valide est requise.";
    }

    if (!form.current.message.value) {
      tempErrors.message = "Le message est requis.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (submissionCount >= MAX_SUBMISSIONS) {
      setMessage(
        <div className="bg-red-500 text-white p-4 rounded">
          Vous avez atteint le nombre maximum de soumissions. Veuillez réessayer
          plus tard.
        </div>
      );
      setLoading(false);
      return;
    }

    if (!capVal) {
      setErrors((prev) => ({
        ...prev,
        recaptcha: "Veuillez valider le reCAPTCHA.",
      }));
      setLoading(false);
      return;
    }

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        "service_g6go4si",
        "template_cs4lein",
        form.current,
        "Jl5HetIi5YSumILmw"
      );
      setMessage(
        <div className="bg-green-500 text-white p-4 rounded">
          Je vous remercie. Je reviendrai vers vous dès que possible.
        </div>
      );
      setSubmissionCount((prev) => prev + 1);
      form.current.reset(); // Réinitialise le formulaire
      setCapVal(null); // Réinitialise le reCAPTCHA
      setMessageLength(0); // Réinitialise la longueur du message
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage(
        <div className="bg-red-500 text-white p-4 rounded">
          Un problème s’est produit. Veuillez réessayer.
        </div>
      );
    } finally {
      setLoading(false);
    }
  };

  const handleMessageChange = (e) => {
    setMessageLength(e.target.value.length);
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
              className="bg-color-input py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-2 border-taupe transition duration-300 focus:border-gray-300 focus:shadow-md"
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <span className="text-red-500 error-message">{errors.name}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Quelle est votre adresse e-mail ?
            </span>
            <input
              type="email"
              name="email"
              placeholder="Votre adresse mail"
              className="bg-color-input py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-2 border-taupe transition duration-300 focus:border-gray-300 focus:shadow-md"
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <span className="text-red-500 error-message">{errors.email}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Vous souhaitez me contacter à quel propos ?
            </span>
            <textarea
              rows="7"
              name="message"
              placeholder="Votre message"
              className="bg-color-input py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-2 border-taupe transition duration-300 focus:border-gray-300 focus:shadow-md resize-none"
              onChange={handleMessageChange}
              maxLength={500}
              aria-required="true"
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && (
              <span className="text-red-500 error-message">
                {errors.message}
              </span>
            )}
            <div className="flex justify-end">
              <span className="text-timberWolf text-sm">{`${messageLength}/500 caractères`}</span>
            </div>
          </label>
          <ReCAPTCHA
            sitekey="6Ldg51QqAAAAAJFURQrap4vkUExCBnr9fWWsJWmW"
            onChange={(val) => setCapVal(val)}
            onMouseOver={() => {
              document
                .querySelector(".contact-btn")
                .setAttribute("src", sendHover);
            }}
            onMouseOut={() => {
              document.querySelector(".contact-btn").setAttribute("src", send);
            }}
            className="my-4"
          />
          {errors.recaptcha && (
            <span className="text-red-500 error-message">
              {errors.recaptcha}
            </span>
          )}

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-white font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[250px] sm:h-[50px] w-[150px] h-[50px] rounded-[10px] bg-color-input hover:bg-black hover:text-white transition duration-[0.2s] ease-in-out cursor-pointer"
            disabled={!capVal || loading}
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
              className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
            />
          </button>
          {message && <div className="mt-4">{message}</div>}
        </form>
      </motion.div>
      {!isMobile && (
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
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
