import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="headerText">
        <h1>Cosmo Script</h1>
        <div>
          <p>Научитесь программировать с помощью игры</p>
        </div>
        <div className="goButtonBox">
          <img className="goButton" alt="Group" src="./images/goButton1.png" />
          <p>ВПЕРЕД!</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
