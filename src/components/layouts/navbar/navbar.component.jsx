import React, { useEffect } from 'react';
import './navbar.style.scss';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';

import data from '../../../data/data';
import imgProfile from '../../../images/profile_1.jpg';
import { gsap } from 'gsap';

function Navbar(props) {
  const history = useHistory();
  const location = useLocation();
  const currentPage = location.pathname.toLowerCase();
  useEffect(() => {
    //gsap.to(document.querySelectorAll('.nav-link'), { rotation: '+=360' });

    document
      .getElementById('sidebar-checkbox')
      .addEventListener('click', (e) => {
        if (e.target.checked) {
          //document.getElementsByTagName('body')[0].classList.add('overflow-h');

          gsap.to(document.querySelectorAll('.menu ul li'), {
            duration: 0,
            opacity: 0,
          });
          gsap.fromTo(
            document.querySelectorAll('.menu ul li'),
            {
              opacity: 0,
            },
            {
              delay: 0.3,
              duration: 0.5,
              stagger: 0.15,
              opacity: 1,
            }
          );
        } else {
          //document.getElementsByTagName('body')[0].classList.remove('overflow-h');

          gsap.to(document.querySelectorAll('.menu ul li'), {
            duration: 0,
            opacity: 0,
          });
        }
      });
  }, []);

  function switchPage(page) {
    document.getElementById('sidebar-checkbox').checked = false;
    if (currentPage !== page) {
      document.querySelector('.loader').classList.add('show');
      setTimeout(() => {
        history.push(`${page}`);
        document.querySelector('.loader').classList.remove('show');
      }, 2000);
    }
  }

  const handleClick = (e) => {
    document.querySelectorAll('.nav-link').forEach((btn) => {
      btn.classList.remove('active');
    });
    console.log(e.target.classList);
    e.target.classList.add('active');
  };

  return (
    <>
      <input type="checkbox" id="sidebar-checkbox" />
      <label for="sidebar-checkbox" class="navbar__btn">
        <span></span>
      </label>
      <div className="navbar">
        <div className="menu">
          <ul>
            <li>
              <a className="nav-link active" onClick={() => switchPage('/')}>
                Home
              </a>
            </li>
            <li>
              <a onClick={() => switchPage('/about')} className="nav-link">
                About
              </a>
            </li>
            <li>
              <a onClick={() => switchPage('/projects')} className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a onClick={() => switchPage('/contact')} className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a onClick={() => switchPage('/about')} className="nav-link">
                About
              </a>
            </li>
            <li>
              <a onClick={() => switchPage('/projects')} className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a onClick={() => switchPage('/contact')} className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
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
    </>
  );
}

export default Navbar;
