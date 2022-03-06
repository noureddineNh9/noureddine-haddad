import gsap from 'gsap';
import React, { useEffect } from 'react';
import Typed from 'react-typed';
import './aboutpage.style.scss';

const text = `Hi! 👋 I'm a <strong>Full-stack JavaScript Developer</strong> based
on Morocco. Skilled in ES6+, NodeJS and ReactJS, eager to join your
team to provide both frontend and backend solutions to your projects
and products.`;

function AboutPage() {
  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline()
        .to('.section__title__1', {
          opacity: 1,
          translateX: 0,
          duration: 0.5,
          ease: 'power4.out',
        })
        .to('.section__title__2', {
          opacity: 1,

          translateX: 0,
          duration: 0.5,
          ease: 'power4.out',
        })
        .to('.my__description p', {
          translateY: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power4.out',
          stagger: 0.3,
        });
    }, 600);
  }, []);

  var x = 1;
  return (
    <section id="about" className="p-32 min-h-screen">
      <div className="section__title pb-32">
        <h1 className="section__title__1">About Me</h1>
        <h1 className="section__title__2">About Me</h1>
      </div>
      <div className="my__description mb-48">
        <p>
          Hi! 👋 I'm a <strong>Full-stack JavaScript Developer</strong> based on
          Morocco.
        </p>
        <p>
          Skilled in ES6+, NodeJS and ReactJS, eager to join your team to
          provide both frontend and backend solutions to your projects and
          products.
        </p>
        <p>
          I started coding seriously around 2018. I love to create new things,
          through technology, especially things that are really helpful to
          people.
        </p>
        <p>
          But, as much as I can, I do not reinvent the wheel, I utilize existing
          technology and tools in order to produce high-quality applications.
        </p>
        <p>
          <strong>When I'm not in front of a computer screen </strong>, I'm
          probably in the Gym 🏋 or playing video Games 🎮
        </p>
      </div>
      <div className="resume container">
        <div className="lg:flex">
          <div className="lg:w-1/2 pr-8 pb-8" data-aos="fade-up">
            <h3 className="resume-title">What I can do</h3>
            <div className="resume-item">
              <p>
                <em>
                  Responsive web application with HTML5, CSS3 and JavaScript
                </em>
              </p>
            </div>
            <div className="resume-item">
              <p>
                <em>Implemented UI design using HTML and CSS.</em>
              </p>
            </div>
            <div className="resume-item">
              <p>
                <em>
                  Responsive web application with HTML5, CSS3 and JavaScript
                </em>
              </p>
            </div>
            <div className="resume-item">
              <p>
                <em>FULL STACK JAVASCRIPT DEVELOPER</em>
              </p>
            </div>
          </div>
          <div
            className="lg:w-1/2 pr-8  pb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>fundamental licence in Databases</h4>
              <h5>2022</h5>
              <p>
                <em>Univesity Hassan 2</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Scientist baccalaureate diploma in mathematics</h4>
              <h5>2018</h5>
              <p>
                <em>Casablanca</em>
              </p>
            </div>
          </div>
        </div>

        <h2 className="resume-title">Skills</h2>

        <div className="skills lg:flex">
          <div className="lg:w-1/3 pr-8  pb-8">
            <span className="skill"> LANGUAGES </span>
            <ul className="skills-list">
              <li>HTML5</li>
              <li>CSS3/SASS</li>
              <li>JavaScript (ES6+)</li>
              <li>C , C++ & C#</li>
              <li>PHP7+</li>
              <li>JAVA</li>
            </ul>
          </div>
          <div className="lg:w-1/3 pr-8  pb-8">
            <span className="skill"> FRAMEWORKS </span>
            <ul className="skills-list">
              <li>React & Redux</li>
              <li>Node/Express</li>
            </ul>
          </div>
          <div className="lg:w-1/3 pr-8  pb-8">
            <span className="skill"> TOOLS </span>
            <ul className="skills-list">
              <li>Git/GitHub</li>
              <li>Postman</li>
              <li>Webpack</li>
            </ul>
          </div>
        </div>
        <div className="skills lg:flex ">
          <div className="lg:w-1/3 pr-8  pb-8">
            <span className="skill"> Design & Other </span>
            <ul className="skills-list">
              <li>Photoshop</li>
              <li>Adobe XD</li>
              <li>MySql</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="flex justify-center m-12">
          <button className="download-btn">Download CV</button>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
