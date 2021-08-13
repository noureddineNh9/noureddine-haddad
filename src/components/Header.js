import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  useEffect(() => {}, []);

  const handleClick = (e) => {
    document.querySelectorAll(".nav-link").forEach((btn) => {
      btn.classList.remove("active");
    });
    console.log(e.target.classList);
    e.target.classList.add("active");
  };

  return (
    <div className="header">
      <div className="img-container">
        <div className="img-border"></div>
        <img src="assets/images/profile_1.jpg" alt="profile" />
      </div>
      <div className="name-container">
        <h3>Noureddine Haddad</h3>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link onClick={handleClick} className="nav-link active" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} className="nav-link" to="/About">
              About
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} className="nav-link" to="/Resume">
              Resume
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} className="nav-link " to="/Projects">
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} className="nav-link " to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
