import React from "react";
import { FaRegHandPointDown } from "react-icons/fa";
import "./header.css";

export default function Header() {
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
            <li className="change">Choose Language</li>
            <li>English</li>
            <li>Spanish</li>
            <li>Nyan</li>
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
}
