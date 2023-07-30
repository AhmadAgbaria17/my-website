import Header from "../comp/header";
import Footer from "../comp/footer";
import './services.css'

const Services = () => {
  return (
    <div>
      <Header />

      <section className="cards" id="services">
        <h2 className="title">Services</h2>
        <div className="content">
          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-pen-to-square" />
            </div>
            <div className="info">
              <h3>Script Writing</h3>
              <p>
                Research and weite scripts for different topic that can be
                directly recorded for video production.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-video" />
            </div>
            <div className="info">
              <h3>Video production</h3>
              <p>
                Record and shoot video taking info consideration proper settings
                , followed by production and post- production work.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-graduation-cap" />
            </div>
            <div className="info">
              <h3>Curriculum Develpoment</h3>
              <p>
                Develop complete curriculums for various technical topics to
                produce digital transformative courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
