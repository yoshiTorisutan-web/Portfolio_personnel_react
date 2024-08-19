import { logoTransparent } from "../assets";
import { Link } from "react-router-dom";
import "../index.css";

function Footer() {
  return (
    <footer className="footer flex flex-col md:flex-row justify-between items-center bg-orange-500 p-4 md:p-8">
      <div className="footer__left flex items-center">
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
          className="footer__text text-white text-[10px] md:text-[16px] font-poppins"
          to="/mentions-legales"
        >
          Mentions Légales
        </Link>
        <Link
          className="footer__text text-white text-[10px] md:text-[16px] font-poppins ml-4"
          to="/confidential-politic"
        >
          Politique de confidentialité
        </Link>
      </div>
      <div className="footer__right text-right mt-4 md:mt-0">
        <p className="footer__text text-white text-[10px] md:text-[16px] font-poppins">
          Copyright © 2024 - Créé et développé par <b>Tristan Bossard</b>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
