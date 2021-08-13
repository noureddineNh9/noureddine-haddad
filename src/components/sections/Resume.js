import React from "react";

function Resume() {
  return (
    <section className="p-5">
      <div className="container resume">
        <div>
          <h3 className="text-5">
            Hi, I'am <span>Noureddine Haddad</span>
          </h3>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Shantanu Jana</h4>
              <p>
                <em>
                  Innovative and deadline-driven Graphic Designer with 3+ years
                  of experience designing and developing user-centered
                  digital/print marketing material from initial concept to
                  final, polished deliverable.
                </em>
              </p>
              <ul>
                <li>Portland par 127</li>
                <li>(+91) 78456 57891</li>
                <li>mystery@example.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master of Fine Arts &amp; Graphic Design</h4>
              <h5>2015 - 2016</h5>
              <p>
                <em>Rochester Institute of Technology, Rochester, NY</em>
              </p>
              <p>
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
                iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
                nerada porti sand markend
              </p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p>
                <em>Rochester Institute of Technology, Rochester, NY</em>
              </p>
              <p>
                Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                reiciendis et quis Eius vel ratione eius unde vitae rerum
                voluptates asperiores voluptatem Earum molestiae consequatur
                neque etlon sader mart dila
              </p>
            </div>
          </div>
        </div>

        <h2 className="resume-title">Skills</h2>

        <div className="skills row">
          <div className="col-lg-6" data-aos="fade-up">
            <span className="skill">
              HTML <i className="val">100%</i>
            </span>
            <div className="progress">
              <div
                className="progress-bar w-75"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <span className="skill">
              HTML <i className="val">100%</i>
            </span>
            <div className="progress">
              <div
                className="progress-bar w-75"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <span className="skill">
              HTML <i className="val">100%</i>
            </span>
            <div className="progress">
              <div
                className="progress-bar w-75"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <span className="skill">
              HTML <i className="val">100%</i>
            </span>
            <div className="progress">
              <div
                className="progress-bar w-75"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <span className="skill">
              HTML <i className="val">100%</i>
            </span>
            <div className="progress">
              <div
                className="progress-bar w-75"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <span className="skill">
              HTML <i className="val">100%</i>
            </span>
            <div className="progress">
              <div
                className="progress-bar w-75"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center m-5">
          <button className="download-btn">Download CV</button>
        </div>
      </div>
    </section>
  );
}

export default Resume;
