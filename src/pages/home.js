import Header from "../comp/header";
import Footer from "../comp/footer";
import { Link } from 'react-router-dom';
import "./home.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home page</title>
      </Helmet>

      <Header />
      
      <section className="main">
        <div>
          <h2>
            Hello, and welcome to my website
            <br />
            My name is Ahmad Agbaria
            <br/>
            I'm junior software engineering
            <br/>
            Feel free to <a className="ForContact" href="/contacts">contact</a> me and ask me
            <br/>
            anything you want!
            
          </h2>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
