import React, { useState } from 'react';
import '../index.css';
import '../Login.css';
import LoginModal from './LoginModal';
import Header_LoginSuc from './Header_LoginSuc';

const Header = ({ onSearchUpdate, onLoginModalOpen }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleShowLoginModal = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      if (onLoginModalOpen) {
        onLoginModalOpen();
      }
    }
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <Header_LoginSuc onSearchUpdate={onSearchUpdate} />
      ) : (
        <header className="header">
          <div className="header-container">
            <div className="header-logo">
              <img src="/src/img/Chef.png" alt="Cheffy Logo" className="logo" />
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
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </i>
                <input
                  type="text"
                  placeholder="Please log in to search"
                  className="search-input"
                  disabled
                />
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
            <div className="logout">
              <button className="btnLogin" onClick={handleShowLoginModal}>
                Login
              </button>
              <button className="btnSub">Subscribe</button>
            </div>
          </div>
        </header>
      )}

      {showLoginModal && (
        <LoginModal
          onClose={handleCloseLoginModal}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
};

export default Header;