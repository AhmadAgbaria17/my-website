
function App() {
  return (
    
    
    <>
  <header>
    <a href="#" className="logo">
      Ahmad
    </a>
    <nav className="navigation">
      <a href="#services">Services</a>
      <a href="#projects">Project</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <section className="main">
    <div>
      <h2>
        Hello,I'm Ahmad
        <br />
        <span>Content Creator</span>
      </h2>
      <h3>I build awsome websites</h3>
      <a href="#projects" className="main-btn">
        view my work
      </a>
      <div className="social-icons">
        <a href="#">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="#">
          <i className="fa-brands fa-github" />
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin" />
        </a>
      </div>
    </div>
  </section>
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
            Research and weite scripts for different topic that can be directly
            recorded for video production.
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
            Record and shoot video taking info consideration proper settings ,
            followed by production and post- production work.
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
            Develop complete curriculums for various technical topics to produce
            digital transformative courses.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="projects" id="projects">
    <h2 className="title">Projects</h2>
    <div className="content">
      <div className="projects-card">
        <div className="project-image">
          <img src="images/test1.png" />
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
          <img src="images/test2.jpg" />
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
  <section className="cards-contact" id="contact">
    <h2 className="title">let's work together </h2>
    <div className="content">
      <div className="card">
        <div className="icon">
          <i className="fa-solid fa-phone" />
        </div>
        <div className="info">
          <h3>Phone</h3>
          <p>0526489292</p>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <i className="fa-solid fa-envelope" />
        </div>
        <div className="info">
          <h3>Email</h3>
          <p>ah.agbaria.99@gmail.com</p>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer">
    <p className="footer-title">
      Copyrights @ <span>Ahmad Agbaria</span>
    </p>
    <div className="social-icons">
      <a href="https://www.facebook.com/ahmad.egbria/">
        <i className="fa-brands fa-facebook" />
      </a>
      <a href="#">
        <i className="fa-brands fa-instagram" />
      </a>
      <a href="#">
        <i className="fa-brands fa-github" />
      </a>
      <a href="#">
        <i className="fa-brands fa-linkedin" />
      </a>
    </div>
  </footer>
</>
  );
}

export default App;
