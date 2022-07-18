import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
//import Projects from '../../components/sections/projects/projects.component';
import './projectspage.style.scss';

import data from '../../data/data.js';
import $ from 'jquery';
import ProjectCard from '../../components/layouts/projectCard-1/index';
import Modal from '../../components/layouts/Modal-1/index';
import Slider from '../../components/layouts/Slider/Index';
import MountainProject from '../../components/projects/mountain-project/mountain-project.component';
import QuizProject from '../../components/projects/quiz-project/quiz-project.component';

function ProjectsPage() {
  const [FilteredProjects, setFilteredProjects] = useState([]);
  const [projectInModal, setProjectInModal] = useState(null);

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
        .to('.projects__filter', {
          translateY: 0,
          opacity: 1,
          ease: 'power4.out',
        })
        .to('.project__card', {
          translateY: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.5,
        });
    }, 600);

    setFilteredProjects(data.projects);
  }, []);

  const previewProjectInModal = (projectId) => {
    document.getElementById('modal').classList.toggle('disableModal');
    console.log(projectId);
    const temp = data.projects.filter((p) => p.id === projectId);
    setProjectInModal(temp[0]);
  };

  const filterProjects = (e) => {
    const filterValue = e.target.getAttribute('data-filter');

    $('.filter-link')
      .removeClass('filter-active')
      .promise()
      .then(() => {
        e.target.classList.add('filter-active');
      });

    if (filterValue === '*') {
      $('.card')
        .removeClass('is-animated')
        .fadeOut(10)
        .promise()
        .done(function () {
          $('.card').addClass('is-animated').fadeIn(10);
        });
    } else {
      $('.card')
        .removeClass('is-animated')
        .fadeOut(10)
        .promise()
        .done(function () {
          $('.card')
            .filter(`[data-filter = "${filterValue}"]`)
            .addClass('is-animated')
            .fadeIn(10);
        });
    }
  };

  var x = 1;
  return (
    <section id="about" className="p-32 min-h-screen">
      <div className="section__title pb-32">
        <h1 className="section__title__1">My Projects</h1>
        <h1 className="section__title__2">My Projects</h1>
      </div>

      <div className="projects__filter row opacity-0" data-aos="fade-up">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="projects-flters">
            <li
              data-filter="*"
              className="filter-link filter-active"
              onClick={filterProjects}
            >
              All
            </li>
            <li
              data-filter="game"
              className="filter-link "
              onClick={filterProjects}
            >
              game
            </li>
            <li
              data-filter="portfolio"
              className="filter-link "
              onClick={filterProjects}
            >
              portfolio
            </li>
            <li
              data-filter="javascript"
              className="filter-link "
              onClick={filterProjects}
            >
              javascript
            </li>
          </ul>
        </div>
      </div>

      <div className="projects__container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto">
        {/*
            {FilteredProjects.map((p, i) => (
              <ProjectCard
                className="opacity-0"
                data={p}
                previewProjectInModal={previewProjectInModal}
              />
            ))}           
        */}

        <MountainProject className="opacity-0" />
        <QuizProject className="opacity-0" />
      </div>
      {/*
      <Modal onClose={previewProjectInModal}>
        {projectInModal != null && (
          <div className="project__decsription lg:grid lg:grid-cols-12 justify-center">
            <div className="lg:col-span-6 p-4">
              <div className="max-w-4xl lg:ml-auto">
                <Slider images={projectInModal.projectScreenshot} />
              </div>
            </div>
            <div className="lg:col-span-6 p-4">
              <h3 className="title">Description</h3>
              <li>
                <p>
                  <i class="fas fa-link"></i>
                  <a>{projectInModal.url}</a>
                </p>
              </li>
              <li>
                <p>
                  <i class="far fa-calendar-minus"></i>
                  25 april, 2021
                </p>
              </li>
              <p>{projectInModal.description}</p>

              <h3 className="title">Technology</h3>
              <ul className="technology-list">
                {projectInModal.technologies.map((tech, i) => (
                  <li key={i} className="technology-item">
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>

      */}
    </section>
  );
}

export default ProjectsPage;
