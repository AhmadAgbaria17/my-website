import Header from "../comp/header";
import Footer from "../comp/footer";
import "./projects.css";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Projects page</title>
      </Helmet>

      <Header />

      <section className="projects" id="projects">
        <h2 className="title">Projects</h2>
        <div className="content">
          <div className="projects-card">
            <div className="project-info">
              <p className="project-title">Article WebSite</p>
              <hr></hr>
              <strong>
                <span className="project-category">
                  A website that can add edit or remove Atricles. <br />I done
                  this project using node.js and express.js.
                </span>

                <a
                  href="https://github.com/AhmadAgbaria17/Articles-website"
                  className="more-details"
                >
                  The Code
                </a>
                
              
              </strong>
            </div>
          </div>

          <div className="projects-card">
            <div className="project-info CEM">
              <p className="project-title">Computerized exam mangement</p>
              <hr></hr>
              <strong>
                <span className="project-category">
                  A computerized information system whose function is to
                  concentrate all the activities of various types of exams given
                  at the college, to improve the efficiency and reliability of
                  the examination. -java language-
                </span>

                <a
                  href="https://github.com/AhmadAgbaria17/Articles-website"
                  className="more-details"
                >
                  The Code
                </a>
              </strong>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
