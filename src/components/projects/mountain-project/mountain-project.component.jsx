import React, { useState } from 'react';
import mainImage from './images/img-main.png';
import landingImage from './images/landing.jpg';
import Modal from '../../layouts/modal__1/modal__1.component';

import './mountain-project.styles.scss';

function MountainProject({ className }) {
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => {
    setModalActive(true);
    document.querySelector('body').classList.add('modal__active');
  };
  const closeModal = () => {
    setModalActive(false);
    document.querySelector('body').classList.remove('modal__active');
  };

  return (
    <>
      <article
        className={`project__card ${className && className}`}
        data-filter="static"
      >
        <a
          type="button"
          className="face"
          style={{
            backgroundImage: `url(${mainImage})`,
          }}
        >
          <div className="title-wrapper">
            <div class="title">Mountain website</div>
            <div class="subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              distinctio praesentium natus
            </div>
            <a
              type="button"
              onClick={openModal}
              className="preview-link"
              target="_blank"
            >
              Preview
            </a>
          </div>
        </a>
      </article>
      <Modal
        closeModal={closeModal}
        className={`${modalActive ? 'active' : ''}`}
      >
        <div className="px-8 project__detail">
          <h1 className="project__title">Moutain website</h1>
          <p>is a simple static website for travel agency</p>

          <div className="mb-16 flex gap-6 flex-wrap">
            <a
              href="https://noureddinenh9.github.io/mountain-website"
              target="_blank"
              className="button__2"
            >
              <i class="fas fa-globe"></i> visit the website
            </a>
            <a
              href="https://github.com/noureddineNh9/mountain-website"
              target="_blank"
              className="button__3"
            >
              <i class="fab fa-github-alt"></i>Github
            </a>
          </div>

          <div>
            <h3 className="font-medium">Technologies</h3>
            <ul className="list__1 mb-8">
              <li>HTML5</li>
              <li>CSS3/SCSS</li>
              <li>JAVASCRIPT</li>
            </ul>
          </div>

          <hr className="mb-8" />

          <div className="max-w-7xl mx-auto border-2 mb-8">
            <img src={landingImage} alt="" />
          </div>
          <hr className="mb-16 " />
        </div>
      </Modal>
    </>
  );
}

export default MountainProject;
