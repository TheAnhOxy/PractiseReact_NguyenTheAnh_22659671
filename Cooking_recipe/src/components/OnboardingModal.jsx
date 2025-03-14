
import React, { useState, useEffect } from 'react';
import '../index.css';

const OnboardingModal = ({ onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/src/img/skipp.png', // Thay bằng đường dẫn ảnh thực tế
      title: 'Discover Cheffy',
      description: 'Easy and delicious cooking instructions right here. Start exploring now!',
    },
    {
      image: '/src/img/skipp.png', // Ảnh thứ 2
      title: 'Explore Recipes',
      description: 'Find thousands of recipes for every occasion and taste.',
    },
    {
      image: '/src/img/skipp.png', // Ảnh thứ 3
      title: 'Get Inspired',
      description: 'Discover new ingredients and cooking techniques.',
    },
  ];

  // Chuyển đến slide tiếp theo
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onClose(); // Đóng modal khi hết slide
    }
  };

  // Đóng modal khi nhấn Skip
  const handleSkip = () => {
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">{slides[currentSlide].title}</h2>
        <p className="modal-description">{slides[currentSlide].description}</p>
        <div className="modal-image-container">
          <img src={slides[currentSlide].image} alt="Slide" className="modal-image" />
        </div>
        <div className="modal-details">
          <div className="modal-recipe">{slides[currentSlide].recipe}</div>
        </div>
        <div className="modal-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
            ></span>
          ))}
        </div>
        <div className="btnCheck">
        <button className="modal-next" onClick={handleNext}>Next</button>
        <button className="modal-skip" onClick={handleSkip}>Skip</button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;