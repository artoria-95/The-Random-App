import React from 'react';
import cat from '../../Assets/cat2.png';
import './home.css'
export default function Home(){

  window.addEventListener('mousemove', (e)=>{
    console.log(e);
  });
  return(
    <div className="home">
      <div className="welcome">
     <h1> Welcome to the Random App</h1>
     <br/>
     <p>To start, pick a cat.</p>
      </div>
      <div className="cats-container">
      <div className="cat"><img src={cat} className="kitty"/></div>
      <div className="cat"><img src={cat} className="kitty"/></div>
      <div className="cat"><img src={cat} className="kitty"/></div>
      </div>

        
    </div>
  )
}