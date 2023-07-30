import Header from "../comp/header";
import Footer from "../comp/footer";
import './home.css'

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
        
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
