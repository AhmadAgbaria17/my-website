import React from "react";

const Footer = () => {
  return (
    <div>
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
    </div>
  );
};

export default Footer;
