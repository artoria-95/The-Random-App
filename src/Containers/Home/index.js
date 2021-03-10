import React, {useState} from "react";
import cat from "../../Assets/cat2.png";
import "./home.css";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t, i18n] = useTranslation("global");
  const urls = [
    "https://github.com/",
    "https://www.youtube.com/",
    "https://www.linkedin.com/notifications/"
  ];
  function aleatoria(){
    urls[Math.floor(Math.random()*urls.length)];
  }

  function noKitty(){
    console.log("click");
    alert('Oops! Wrong cat!')
  }

  
  
  //funciona pero no actualiza el boton

  // window.addEventListener('mousemove', (e)=>{
  //   console.log(e);
  // });
  return (
    <div className="home">
      <div className="welcome">
        <h1>{t("home.welcome")}</h1>
        <br />
        <p>{t("home.start")}</p>
      </div>
      <div className="cats-container">
        <div className="cat">
          <img src={cat} className="kitty" />
        </div>
        <div className="cat">
          <a href={aleatoria}>
            <img src={cat} className="kitty"/>
          </a>
        </div>
        <div className="cat" >
          <button className="nokitty" onClick={noKitty}><img src={cat} className="kitty" /></button>
        <div className="wrong">Oops! Wrong cat.</div>
        </div>
      </div>
    </div>
  );
}
