import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="left-content">
            <div className="logo-placeholder">Insert logo here</div>
            <p>Copyright© Insert logo here by Lupin powered by UO3525</p>
          </div>
          <div className="right-content">
            <a href="#" className="social-icon"><img src="rLink.png" alt="LinkedIn" /></a>
            <a href="#" className="social-icon"><img src="rFace.png" alt="Facebook" /></a>
            <a href="#" className="social-icon"><img src="rTweet.png" alt="Twitter" /></a>
            <a href="#" className="social-icon"><img src="rInsta.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
