import { motion } from "framer-motion";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaPinterest, FaYoutube } from "react-icons/fa";
import "../index.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-white text-black py-10 px-6 md:px-12 border-t border-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Conteneur principal */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
        {/* Section gauche - Logo & description */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-3 justify-center md:justify-start"
          >
            <img
              src={logo}
              alt="Logo Tristan Bossard"
              className="w-20 h-20 hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <p className="text-gray-700 text-sm max-w-xs leading-relaxed">
            Portfolio de <span className="text-[#111d13]">Tristan Bossard</span>{" "}
            — développeur web passionné par la création, l’UX et l’innovation
            digitale.
          </p>
        </motion.div>

        {/* Section navigation */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-lg mb-3 text-[#111d13] font-[Beckman] font-[Overcame Bold] tracking-wide">
            Informations
          </h3>
          <nav className="flex flex-col gap-2 text-sm font-[Beckman]">
            {[
              { label: "Accueil", path: "/" },
              { label: "Projets", path: "/projets" },
              { label: "Contact", path: "/contact" },
              { label: "Mentions légales", path: "/mentions-legales" },
              {
                label: "Politique de confidentialité",
                path: "/confidential-politic",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={item.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-700 hover:text-[#709775] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* Section réseaux sociaux */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-lg mb-3 text-[#111d13] font-[Beckman] font-[Overcame Bold] tracking-wide">
            Réseaux
          </h3>
          <div className="flex gap-4 text-2xl text-gray-700 justify-center md:justify-start">
            {[
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/tristan-bossard-dw/",
              },
              {
                icon: <FaGithub />,
                link: "https://github.com/yoshiTorisutan-web/",
              },
              {
                icon: <FaPinterest />,
                link: "https://www.pinterest.fr/yoshiTorisutan_creative/",
              },
              {
                icon: <FaYoutube />,
                link: "https://www.youtube.com/@tbd_motorsport8594/",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-[#709775] transition-colors duration-200"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="mailto:tribossard.web@outlook.fr"
              className="mt-4 inline-block bg-[rgb(61,131,97,1)] text-white px-4 py-2 rounded-full text-sm font-[Overcame Bold] font-bold hover:bg-[rgb(34,73,54)] transition-colors duration-200"
            >
              Me contacter 📧
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="text-center text-sm border-t border-gray-200 mt-10 pt-6 text-gray-600 font-[Beckman]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        Copyright © {currentYear} – Développé avec ❤️ par{" "}
        <a
          href="https://www.linkedin.com/in/tristan-bossard-dw/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#415d43] hover:text-[#111d13] font-[Overcame Bold] transition-colors duration-200"
        >
          Tristan Bossard
        </a>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
