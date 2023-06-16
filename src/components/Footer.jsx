import { logoTransparent } from "../assets";

import '../index.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <img src={logoTransparent} alt="Logo" className="footer__logo" />
      </div>
      <div className="footer__right">
        <p className="footer__text">Copyright © 2023 - Créé et développé par <b>Tristan Bossard</b></p>
      </div>
    </footer>
  );
}

export default Footer;
