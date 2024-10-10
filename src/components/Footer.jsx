import { logoTransparent } from "../assets";
import { Link } from "react-router-dom";
import "../index.css";

function Footer() {
  return (
    <footer className="footer flex flex-col md:flex-row justify-center md:justify-between items-center bg-orange-500 p-4 md:p-8">
      <div className="footer__left flex flex-col md:flex-row items-center md:items-center text-center md:text-left">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logoTransparent}
            alt="Logo"
            className="footer__logo w-12 h-12"
          />
        </Link>
        <Link
          className="footer__text footer__hyperlien text-white text-[10px] md:text-[16px] font-poppins mt-2 md:mt-0 md:ml-4"
          to="/mentions-legales"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Mentions légales
        </Link>
        <Link
          className="footer__text footer__hyperlien text-white text-[10px] md:text-[16px] font-poppins mt-2 md:mt-0 md:ml-4"
          to="/confidential-politic"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Politique de confidentialité
        </Link>
      </div>
      <div className="footer__right text-center md:text-right mt-4 md:mt-0">
        <p className="footer__text text-white text-[10px] md:text-[16px] font-poppins">
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
