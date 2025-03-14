import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="footer-subscribe">
            <input type="email" placeholder="Enter your email" className="subscribe-input" />
            <button className="subscribe-button">Send</button>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>Learn More</h3>
            <ul>
              <li><a href="/features" className="footer-link">See Our Features</a></li>
              <li><a href="/faq" className="footer-link">FAQ</a></li>
              <li><a href="/subscription" className="footer-link">Gift Subscription</a></li>
              <li><a href="/feedback" className="footer-link">Send Us Feedback</a></li>
            </ul>
            <br />
            
            <h3>Shop</h3>
            <ul>
              <li><a href="/features" className="footer-link">Gift Subscription</a></li>
              <li><a href="/faq" className="footer-link">Send us feedback</a></li>
            </ul>
          </div>
          <div className="hihi">
            <h3>Recipes</h3>
            <ul>
              <li><a href="/pasta" className="footer-link">What to Cook This Week</a></li>
              <li><a href="/dinner" className="footer-link">Pasta</a></li>
              <li><a href="/healthy" className="footer-link">Dinner</a></li>
              <li><a href="/vegan" className="footer-link">Healthy</a></li>
              <li><a href="/christmas" className="footer-link">Vegan</a></li>
              <li><a href="/christmas" className="footer-link">Christmas</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <img src="/src/img/images.jpg" alt="Cheffy Logo" className="footer-logo" />
        <p>© 2023 Cheffy Company. Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;