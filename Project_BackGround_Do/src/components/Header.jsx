import React from 'react';
import '../index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src="/src/img/images.jpg" alt="Cheffy Logo" className="logo" />
        </div>
        <div className="header-search">
          <div className="search-container">
            <i className="bi bi-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="search-icon"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </i>
            <input type="text" placeholder="What would you like to cook?" className="search-input" />
          </div>
        </div>
        <nav className="header-nav">
          <ul className="nav-links">
            <li><a href="/" className="nav-link">What to cook</a></li>
            <li><a href="/recipes" className="nav-link">Recipes</a></li>
            <li><a href="/ingredients" className="nav-link">Ingredients</a></li>
            <li><a href="/occasions" className="nav-link">Occasions</a></li>
            <li><a href="/about" className="nav-link">About Us</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <a href="/recipe-box" className="recipe-box">Your Recipe Box</a>
          <img src="/src/img/Smile-chef-icon-design-vector.jpg" alt="Profile" className="profile-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;