import { logoTransparent } from "../assets";
import "../index.css";

function Footer() {
  return (
    <footer className="footer flex flex-col md:flex-row justify-between items-center bg-gray-800 p-4 md:p-8 mb-4">
      <div className="footer__left flex items-center">
        <img
          src={logoTransparent}
          alt="Logo"
          className="footer__logo w-12 h-12"
        />
      </div>
      <div className="footer__right text-right mt-4 md:mt-0">
        <p className="footer__text text-white text-sm font-poppins">
          Copyright © 2023 - Créé et développé par <b>Tristan Bossard</b>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
