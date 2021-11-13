import React from 'react'
import { Link } from 'react-router-dom';

function sidebar() {
    const handleClick = (e) => {
        document.querySelectorAll(".nav-link").forEach((btn) => {
          btn.classList.remove("active");
        });
        console.log(e.target.classList);
        e.target.classList.add("active");
    
        document.getElementById("nav-toggle").checked = false;
    
      };
    
    
    return (
        <div class="side__navbar">
        <input type="checkbox" class="side__navbar__checkbox" id="nav-toggle" />
        <label id="sidebar-btn" for="nav-toggle" class="side__navbar__button">
            <span class="side__navbar__icon">&nbsp;</span>
        </label>
        <div class="side__navbar__background">&nbsp;</div>
        
        <div className="side__navbar__nav">
          <ul className="side__navbar__list">
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

    )
}

export default sidebar
