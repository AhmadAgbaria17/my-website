import Header from "../comp/header";
import Footer from "../comp/footer";

const Home = () => {
  return (
    <div>
      <Header />

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

      <Footer />
    </div>
  );
};

export default Home;
