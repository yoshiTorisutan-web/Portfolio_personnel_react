import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import "../index.css"; // Assurez-vous de créer ce fichier CSS pour les styles

const HelpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="help-button-container">
      <button className="help-button" onClick={handleClick}>
        <FaQuestionCircle />
      </button>
      <div className={`popup ${isVisible ? "show" : ""}`}>
        <p>
        Perdu pour ton avenir ?{" "}
          <a
            href="https://missionavenir.softr.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique ici !
          </a>
        </p>
      </div>
    </div>
  );
};

export default HelpButton;
