import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data/data";
import imgProfile from "../images/profile_1.jpg";

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
      <div className="main-part">
        <div className="img-container">
          <div className="img-border"></div>
          <img src={imgProfile} alt="profile" />
        </div>
        <div className="name-container">
          <h3>Noureddine Haddad</h3>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link onClick={handleClick} className="nav-link active" to="/">
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
      <div className="socialLinks-part">
        <div className="social-list">
          <a href={data.Info.gitHub} target="_blank" rel="noreferrer">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a href={data.Info.linkedIn} target="_blank" rel="noreferrer">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <i class="fas fa-envelope fa-2x"></i>
          </a>
          <a href={data.Info.instagram} target="_blank" rel="noreferrer">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
