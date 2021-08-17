import React, { useEffect, useState } from "react";
import { SectionTitle } from "../layouts/Heading";
import data from "../../data/data";
import $ from "jquery";

function Projects() {
  const [FilteredProjects, setFilteredProjects] = useState([]);
  useEffect(() => {
    setFilteredProjects(data.projects);
  }, []);

  const filterProjects = (e) => {
    const filterValue = e.target.getAttribute("data-filter");

    $(".filter-link").removeClass('filter-active').promise().then(() => {
      e.target.classList.add("filter-active");
    })
    

    if (filterValue === "*") {
      $(".card")
        .removeClass("is-animated")
        .fadeOut(10)
        .promise()
        .done(function () {
          $(".card").addClass("is-animated").fadeIn(10);
        });
    } else {
      $(".card")
        .removeClass("is-animated")
        .fadeOut(10)
        .promise()
        .done(function () {
          $(".card")
            .filter(`[data-filter = "${filterValue}"]`)
            .addClass("is-animated")
            .fadeIn(10);
        });
    }
  };

  return (
    <>
      <section className="projects__section p-5">
        <SectionTitle title={"My Project"} />
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="projects-flters">
              <li
                data-filter="*"
                className="filter-link filter-active"
                onClick={filterProjects}
              >
                All
              </li>
              <li data-filter="game" className="filter-link " onClick={filterProjects}>
                game
              </li>
              <li data-filter="portfolio" className="filter-link " onClick={filterProjects}>
                portfolio
              </li>
              <li data-filter="javascript" className="filter-link " onClick={filterProjects}>
                javascript
              </li>
            </ul>
          </div>
        </div>

        <div className="projects__container">
          {FilteredProjects.map((p, i) => (
            <>
              <article className="card" data-filter={p.dataFilter}>
                <div
                  className="img-part"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${p.img})`,
                    height: "200px",
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="text-part">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div  className="preview-link-div">
                    <a href={p.url} className="preview-link" target="_blank">Preview</a>
                  </div>
                </div>
              </article>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
