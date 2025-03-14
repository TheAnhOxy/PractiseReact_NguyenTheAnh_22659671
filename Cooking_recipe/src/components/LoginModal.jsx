import React, { useState } from 'react';
import '../Login.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (email === 'theanhoxy123@gmail.com') {
      if (typeof onLoginSuccess === 'function') {
        onLoginSuccess(); // Gọi hàm từ props để cập nhật trạng thái ở Header
      } else {
        console.error('onLoginSuccess is not a function');
      }
    } else {
      alert('Email không đúng. Vui lòng thử lại!');
    }
  };

  return (
    <div className="chefLoginModal-overlay" onClick={onClose}> {/* Sử dụng onClose thay vì handleCloseLoginModal */}
      <div className="chefLoginModal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="chefLoginModal-close-btn" onClick={onClose}>
          <IoClose size={24} />
        </button>

        {/* Left Section: Image and Quote */}
        <div className="chefLoginModal-left">
          <img
            src="/src/img/Bcenter.png"
            alt="Food Plate"
            className="chefLoginModal-image"
          />
          <div className="chefLoginModal-quote">
            <p>"Embrace the art of cooking, where flavors come alive!"</p>
          </div>
        </div>

        {/* Right Section: Login Form */}
        <div className="chefLoginModal-right">
          <h2 className="chefLoginModal-title">Login</h2>
          <p className="chefLoginModal-subtitle">Enter your email to log in.</p>

          {/* Email Input Form */}
          <form onSubmit={handleContinue}>
            <input
              type="email"
              placeholder="Enter your email"
              className="chefLoginModal-email-input"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit" className="chefLoginModal-continue-btn">
              CONTINUE
            </button>
          </form>

          {/* Divider */}
          <div className="chefLoginModal-divider">
            <span>OR</span>
          </div>

          {/* Terms and Conditions */}
          <p className="chefLoginModal-terms">
            By continuing, you agree to the updated{' '}
            <a href="/terms">Terms of Sale</a>,{' '}
            <a href="/terms-service">Terms of Service</a>, and{' '}
            <a href="/privacy">Privacy Policy</a>.
          </p>

          {/* Social Login Buttons */}
          <button className="chefLoginModal-social-btn chefLoginModal-google">
            <FcGoogle size={20} className="chefLoginModal-icon" />
            Continue with Google
          </button>
          <button className="chefLoginModal-social-btn chefLoginModal-facebook">
            <FaFacebookF size={20} className="chefLoginModal-icon" color="#1877F2" />
            Continue with Facebook
          </button>
          <button className="chefLoginModal-social-btn chefLoginModal-apple">
            <FaApple size={20} className="chefLoginModal-icon" />
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;