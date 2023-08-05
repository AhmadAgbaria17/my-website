import Header from "../comp/header";
import Footer from "../comp/footer";
import "./services.css";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Services page</title>
      </Helmet>

      <Header />

      <section className="cards" id="services">
        <h2 className="title">Services</h2>
        <div className="content">

          
          <div className="card">
            <div className="info">
              <h3>FrontEnd</h3>
              <p>
              I am proficient in HTML, CSS, and JavaScript, along with the React framework, which allows me to create aesthetically appealing designs that enhance the user experience.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="info">
              <h3>BackEnd</h3>
              <p>
              I possess expertise in Node.js, Express, and MongoDB for back-end development, enabling me to craft efficient and robust server-side solutions that seamlessly integrate with React's front-end, delivering a complete and user-friendly experience.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="info">
              <h3>Full Stack</h3>
              <p>
              I am a skilled full-stack developer proficient in utilizing React and Node.js to build robust and dynamic web applications. My expertise also extends to working with MongoDB, enabling me to develop efficient and scalable database solutions.                   </p>
            </div>
          </div>


          <div className="card">
            <div className="info">
              <h3>Build Web Sites</h3>
              <p>
              I am proficient in building websites using Wix and WordPress. With a keen eye for design and a solid understanding of web development principles, I create engaging and user-friendly websites that cater to the unique needs of businesses and individuals.              </p>
            </div>
          </div>
      
      
        
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
