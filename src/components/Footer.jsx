import { logoTransparent } from "../assets";
import { Link } from "react-router-dom";
import "../index.css";

function Footer() {
  return (
    <footer className="footer flex flex-col md:flex-row justify-between items-center p-4 md:p-8">
      {/* Logo et Liens */}
      <div className="footer__left flex flex-col md:flex-row items-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logoTransparent} alt="Logo" className="w-20 h-20" />
        </Link>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            className="text-white text-[10px] md:text-[16px] font-poppins footer__hyperlien"
            to="/mentions-legales"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Mentions légales
          </Link>
          <Link
            className="text-white text-[10px] md:text-[16px] font-poppins footer__hyperlien"
            to="/confidential-politic"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center md:text-right mt-4 md:mt-0">
        <p className="text-white text-[10px] md:text-[16px] font-poppins">
          Copyright © 2024 - Créé et développé par{" "}
          <b>
            <a
              className="footer__hyperlien"
              href="https://www.linkedin.com/in/tristan-bossard-dw/"
            >
              Tristan Bossard
            </a>
          </b>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
