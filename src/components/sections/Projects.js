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
                className="filter-active"
                onClick={filterProjects}
              >
                All
              </li>
              <li data-filter="game" onClick={filterProjects}>
                game
              </li>
              <li data-filter="portfolio" onClick={filterProjects}>
                portfolio
              </li>
              <li data-filter="javascript" onClick={filterProjects}>
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
