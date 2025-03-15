import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../index.css';
import '../Login.css';

const Header_LoginSuc = ({ onSearchUpdate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearchUpdate) {
      onSearchUpdate(query);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearchUpdate) {
      onSearchUpdate(searchQuery);
    }
  };

  const handleYourBoxClick = () => {
    navigate('/recipe-box'); // Navigate to Your Recipe Box
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src="/src/img/Chef.png" alt="Cheffy Logo" className="logo" />
        </div>
        <div className="header-search">
          <form onSubmit={handleSearchSubmit}>
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
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 1 1 11 0" />
                </svg>
              </i>
              <input
                type="text"
                placeholder="What would you like to cook?"
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </form>
        </div>
        <nav className="header-nav">
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">What to cook</Link>
            </li>
            <li>
              <Link to="/recipes" className="nav-link">Recipes</Link>
            </li>
            <li>
              <Link to="/ingredients" className="nav-link">Ingredients</Link>
            </li>
            <li>
              <Link to="/occasions" className="nav-link">Occasions</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <Link to="/recipe-box" className="recipe-box" onClick={handleYourBoxClick}>
            <img src="/src/img/check.png" className="check_anh" alt="Check Icon" />
            Your Box
          </Link>
          <img src="/src/img/avatar.png" alt="Profile" className="profile-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header_LoginSuc;