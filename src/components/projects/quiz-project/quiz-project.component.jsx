import React, { useState } from 'react';
import mainImage from './images/img-main.png';
import image__2 from './images/screenshot-2.png';
import image__3 from './images/screenshot-3.png';
import image__4 from './images/screenshot-4.png';
import image__5 from './images/screenshot-5.png';
import image__6 from './images/screenshot-6.png';
import Modal from '../../layouts/modal__1/modal__1.component';

import './quiz-project.styles.scss';
import Slider from '../../layouts/slider__1/slider__1.component';

function QuizProject({ className }) {
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
            <div class="title">Online Quiz</div>
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
          <h1 className="project__title">Online Quiz</h1>
          <p>Open source web application for create a online Quiz</p>

          <div className="mb-16 flex gap-6 flex-wrap">
            <a
              href="https://quiz-test-react-app.herokuapp.com/"
              target="_blank"
              className="button__2"
            >
              <i class="fas fa-globe"></i> visit the website
            </a>
            <a
              href="https://github.com/noureddineNh9/quiz-game-frontend"
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
              <li>SCSS / tailwind</li>
              <li>React JS</li>
              <li>Socket.io</li>
              <li>Node JS / Express </li>
            </ul>
          </div>

          <hr className="mb-8" />

          <div className="mb-8">
            <div className="grid lg:grid-cols-5 gap-12 mb-12">
              <div className="order-2 col-span-2 lg:order-1 flex items-center">
                <div>
                  <p className="image__desc">
                    You can create Quiz by adding the name of the room and the
                    questions, for every question you can add choices and choose
                    the right answer.
                  </p>
                </div>
              </div>
              <div className="order-1 col-span-3 lg:order-2">
                <Slider images={[image__2, image__3, image__4, image__5]} />
              </div>
            </div>
            <div className="border-b-2 border-gray-400 max-w-4xl mx-auto mb-32"></div>

            <div className="grid lg:grid-cols-5 gap-12 mb-12">
              <div className="col-span-3 ">
                <img
                  className="border border-gray-400 "
                  src={image__5}
                  alt=""
                />
              </div>
              <div className="col-span-2 flex items-center">
                <p className="image__desc ">
                  You can Join a quiz with the name of a room created by someone
                  else
                </p>
              </div>
            </div>
            <div className="border-b-2 border-gray-400 max-w-4xl mx-auto"></div>
          </div>
          <hr className="mb-16 " />
        </div>
      </Modal>
    </>
  );
}

export default QuizProject;
