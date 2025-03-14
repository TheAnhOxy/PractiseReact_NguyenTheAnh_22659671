import React from 'react';
import '../Repi.css'; // Import the CSS file for styling

const Subscribe = () => {
  return (
    <div className="subscribe-page">
      {/* Breadcrumb */}
      <nav className="subscribe-breadcrumb">
        <a href="/recipes" className="subscribe-breadcrumb-link">Recipes</a>
        <span className="subscribe-breadcrumb-separator">  </span>
        <span className="subscribe-breadcrumb-current">Subscribe</span>
      </nav>

      {/* Main Subscription Section */}
      <div className="subscribe-content">
        <div className="subscribe-text">
          <h1 className="subscribe-title">
            THIS RECIPE IS EXCLUSIVELY AVAILABLE TO SUBSCRIBERS
          </h1>
          <h2 className="subscribe-subtitle">
            Join now to access effortless, hassle-free recipes
          </h2>
          <ul className="subscribe-benefits">
            <li>
              <img src="/src/img/Frame.png" alt="Checkmark" className="subscribe-checkmark" />
              20,000+ recipes to suit all tastes and skill levels
            </li>
            <li>
              <img src="/src/img/Frame.png" alt="Checkmark" className="subscribe-checkmark" />
              Filter for diets, cook times, and more
            </li>
            <li>
              <img src="/src/img/Frame.png" alt="Checkmark" className="subscribe-checkmark" />
              Personal Recipe Box for favorites
            </li>
            <li>
              <img src="/src/img/Frame.png" alt="Checkmark" className="subscribe-checkmark" />
              Gain exclusive access to our subscriber-only mobile app.
            </li>
          </ul>
          <p className="subscribe-price">
            0.25USD / <span className="subscribe-price-unit">Week</span>
          </p>
          <p className="subscribe-billing-info">
            Billed as $1 every 4 weeks for the first year
          </p>
          <button className="subscribe-now-btn">
            <img src="/src/img/check.png" alt="Check Icon" className="subscribe-btn-icon" />
            Subscribe Now
          </button>
          <p className="subscribe-cancel-info">Cancel or Pause anytime</p>
        </div>
        <div className="subscribe-image">
          <img src="/src/img/dish.png" alt="Dish" className="subscribe-dish-image" />
        </div>
      </div>

      {/* Footer Section */}
      <div className="subscribe-footer">
        <h2 className="subscribe-footer-title">AN ALL ACCESS SUBSCRIPTION INCLUDES</h2>
        <div className="subscribe-footer-grid">
          <div className="subscribe-footer-item">
            <h3>Cooking</h3>
            <p>Enjoy recipes, advice and inspiration for any occasion.</p>
          </div>
          <div className="subscribe-footer-item">
            <h3>Wirecutter</h3>
            <p>Explore independent reviews for thousands of products.</p>
          </div>
          <div className="subscribe-footer-item">
            <h3>Games</h3>
            <p>Unwind with Spelling Bee, Wordle, The Crossword</p>
          </div>
          <div className="subscribe-footer-item">
            <h3>The Athletic</h3>
            <p>Discover in-depth, personalized sports journalism.</p>
          </div>
        </div>

        {/* Cheffy Cooking Only Section */}
        <div className="subscribe-cheffy-section">
          <div className="subscribe-cheffy-logo">
            <img src="/src/img/Chef.png" alt="Cheffy Logo" className="cheffy-logo" />
          
          </div>
          <h2 className="subscribe-cheffy-title">Subscribe to Cheffy Cooking only</h2>
          <p className="subscribe-cheffy-description">
            Enjoy thousands of delicious recipes for every taste, plus advice and inspiration daily.
          </p>
          <div className="subscribe-options">
            <label className="subscribe-option">
              <input type="radio" name="subscription" defaultChecked />
              <img src="/src/img/radio_check.png" alt="Radio Checked" className="subscribe-radio" />
              $2/month (Billed every 4 weeks)
            </label>
            <label className="subscribe-option">
              <input type="radio" name="subscription" />
              <img src="/src/img/radio_uncheck.png" alt="Radio Unchecked" className="subscribe-radio" />
              $20/year (Billed one annually)
            </label>
          </div>
          <button className="subscribe-now-btn">
            <img src="/src/img/check.png" alt="Check Icon" className="subscribe-btn-icon" />
            Subscribe Now
          </button>
          <p className="subscribe-cancel-info">Cancel or Pause anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;