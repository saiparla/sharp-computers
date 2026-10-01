import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="divider"></div>
      <footer className="footer">
        <div className="container footer-content" style={{ gap: '1rem' }}>
          <div className="footer-col">
            <h3>Sharp Computers</h3>
            <p>Tally Certified 3-Star Partner. 25+ Years of IT Excellence.</p>
            <div className="social-links">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Categories</h3>
            <ul>
              <li><Link to="/products#visual-solutions-projectors">Visual Solutions & Projectors</Link></li>
              <li><Link to="/products#laptops-desktops">Laptops & Desktops</Link></li>
              <li><Link to="/products#gaming-peripherals">Gaming Peripherals</Link></li>
              <li><Link to="/products#office-solutions">Office Solutions</Link></li>
              <li><Link to="/products#pc-components">PC Components</Link></li>
              <li><Link to="/products#networking-switches">Networking Switches</Link></li>
              <li><Link to="/products#networking-routers">Networking Routers</Link></li>
              <li><Link to="/products#networking-adapters">Networking Adapters</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact Info</h3>
            <ul>
              <li><i className="fa-solid fa-location-dot"></i> Gandhinagar, Vijayawada - 520003</li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <i className="fa-solid fa-phone" style={{ marginTop: '4px' }}></i> 
                <div>
                  Sales: +91 98493 48485<br/>
                  Business: <a href="https://wa.me/919246268485" target="_blank" rel="noopener noreferrer">+91 92462 68485</a><br/>
                  Tally Support: +91 74161 03522
                </div>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:sales@sharpcomputersvja.com">sales@sharpcomputersvja.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sharp Computers. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
