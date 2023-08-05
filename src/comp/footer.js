import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <p className="footer-title">
          Copyrights @ <span>Ahmad Agbaria</span>
        </p>
        <div className="social-icons">
          <a  href="https://www.facebook.com/ahmad.egbria/">
            <i className="fa-brands fa-facebook" />
          </a>
          <a href="https://www.instagram.com/ahmad_agbaria17/">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="https://github.com/AhmadAgbaria17">
            <i className="fa-brands fa-github" />
          </a>
          <a  href="https://www.linkedin.com/in/ahmad-agbaria-98528721b/">
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
