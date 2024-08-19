import { useState } from "react";
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { FaQuestionCircle } from "react-icons/fa";
import "../index.css";

const HelpButton = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const popover = (
    <Popover id="popover-basic" className="fade-popover">
      <Popover.Body>
        Besoin de renseignements sur mon parcours ?{" "}
        <a href="https://missionavenir.softr.app/" className="popover-link">
          <b>Clique ici !</b>
        </a>
      </Popover.Body>
      <div className="popover-arrow" />
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      overlay={popover}
      show={show}
      rootClose
    >
      <Button variant="primary" onClick={handleClick} className="help-button">
        <FaQuestionCircle size={20} />
      </Button>
    </OverlayTrigger>
  );
};

export default HelpButton;
