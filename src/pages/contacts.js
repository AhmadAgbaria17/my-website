import Header from "../comp/header";
import Footer from "../comp/footer";
import './contacts.css';
const Contacts = () => {
  return (
    <div>
      <Header />

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

      <Footer />
    </div>
  );
};

export default Contacts;
