import React from 'react';
import cat from '../../Assets/cat2.png';
import './home.css'
import {useTranslation} from 'react-i18next';

export default function Home(){
  const [t, i18n] = useTranslation("global");

  // window.addEventListener('mousemove', (e)=>{
  //   console.log(e);
  // });
  return(
    <div className="home">
      <div className="welcome">
     <h1>{t("home.welcome")}</h1>
     <br/>
     <p>{t("home.start")}</p>
      </div>
      <div className="cats-container">
      <div className="cat"><img src={cat} className="kitty"/></div>
      <div className="cat"><img src={cat} className="kitty"/></div>
      <div className="cat"><img src={cat} className="kitty"/></div>
      </div>

        
    </div>
  )
}