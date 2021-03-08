import React from "react";
import {FaWhatsappSquare, FaGithubSquare,FaLinkedin,FaReact,FaJsSquare,FaCss3Alt} from 'react-icons/fa';
import {useTranslation} from 'react-i18next';

import "./footer.css";

export default function Footer() {
  
  const [t, i18n] = useTranslation("global");

  return (
    <div className="foot-container">
      <div className="foot">
        <div className="redes">
          <a href="https://www.linkedin.com/in/ana-paula-barua-188013131/" target="_blank"><FaLinkedin className="in"/></a>
          <a href="https://www.github.com/artoria-95" target="_blank"><FaGithubSquare className="gh"/></a>
          <a href="https://api.whatsapp.com/send?phone=+5491158081337" target="_blank"><FaWhatsappSquare className="wpp"/></a>
        </div>
        <div className="portfolio">
          <a href="https://artoria-95.github.io/Portfolio/" target="_blank">
            {t("footer.see")} &#128525;
          </a>
        </div>
        <div className="tecnologias">
        <FaReact/><FaJsSquare/><FaCss3Alt/>
        </div>
      </div>
    </div>
  );
}
