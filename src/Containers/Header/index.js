import React from "react";
import {useTranslation} from 'react-i18next';
import "./header.css";

export default function Header() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="header-container">
      <div className="logo">
        <button className="down">
          <img
            src="https://i.pinimg.com/originals/ea/a1/ff/eaa1ffbf803f1c6b330dfd2d9a84d2f5.gif"
            className="nya"
          /> 
          <div class="dropdown-content">
            <ul>
            <li className="change">{t("header.lang")}</li>
            <li onClick={()=> i18n.changeLanguage("en")}>English</li>
            <li onClick={()=> i18n.changeLanguage("es")}>Español</li>
            <li onClick={()=> i18n.changeLanguage("ny")}>Nyan</li>
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
}
