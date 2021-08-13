import React, { useEffect, useState } from "react";
import { SectionTitle } from "../layouts/Heading";
import data from "../../data/data";

function Projects() {
  const [FilteredProjects, setFilteredProjects] = useState([]);
  useEffect(() => {
    setFilteredProjects(data.projects);
  }, []);

  const search = (e) => {
    setFilteredProjects(
      data.projects.filter((p) =>
        p.name.toUpperCase().includes(e.target.value.toUpperCase())
      )
    );
  };

  const filterProjects = (e) => {
    const filterValue = e.target.getAttribute("data-filter");

    if (filterValue == "*") setFilteredProjects(data.projects);
    else {
      if (filterValue) {
        setFilteredProjects(
          data.projects.filter((p) => p.dataFilter == filterValue)
        );
      }
    }

    console.log(filterValue);
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
              <a key={i} href={p.url} target="_blank">
                <article className="card">
                  <div
                    className="img-part"
                    style={{
                      backgroundImage: `url(${p.img})`,
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
              </a>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
