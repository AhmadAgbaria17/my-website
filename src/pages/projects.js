import Header from "../comp/header";
import Footer from "../comp/footer";
import './projects.css'

const Projects = () => {
  return (
    <div>
      <Header />

      <section className="projects" id="projects">
        <h2 className="title">Projects</h2>
        <div className="content">
          <div className="projects-card">
            <div className="project-image">
              <img src="./images/test1.png" />
            </div>
            <div className="project-info">
              <p className="project-category">its just a test1!!</p>
              <strong className="project-title">
                <span>TEST</span>
                <a href="#" className="more-details">
                  More Details
                </a>
              </strong>
            </div>
          </div>
          <div className="projects-card">
            <div className="project-image">
              <img src="./images/test2.jpg" />
            </div>
            <div className="project-info">
              <p className="project-category">its just a test2!!</p>
              <strong className="project-title">
                <span>TEST</span>
                <a href="#" className="more-details">
                  More Details
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
