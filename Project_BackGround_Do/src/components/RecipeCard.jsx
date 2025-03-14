import React from 'react';
import '../index.css';

const RecipeCard = ({ title, author, time, notes, rating, ingredients, steps, images }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-content">
        <div className="recipe-left-column">
          <h1 className="recipe-title">{title}</h1>
          <p className="recipe-description">
            It seems like there maybe be a misunderstanding. If you're asking how a user can make a Strawberry Shortcake, the process would be identical to making a traditional shortcake, preparing whipped cream, and finally assembling the shortcake.
          </p>
          <div className="recipe-author bordered-section">
            <img src="/src/img/Smile-chef-icon-design-vector.jpg" alt={author.name} className="author-avatar" />
            <div className="author-details">
              <p>{author.name}</p>
              <div className="author-metrics">
                <div className="metric-item">
                  <span className="metric-label">Time:</span>
                  <span className="metric-value">{time}</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Notes:</span>
                  <span className="metric-value">{notes}</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Rating:</span>
                  <span className="metric-value">{rating}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="recipe-ingredients dashed-border">
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <button className="add-to-list">+ Add to Your Grocery List</button>
          </div>
        </div>
        <div className="recipe-right-column">
          <div className="recipe-images-grid">
            {/* Hiển thị ảnh thứ 1 (index 0) */}
            <div className="image-item">
              {images[0] && <img src={images[0]} alt={`Step 1`} className="recipe-image" />}
            </div>
            <div className="steps-and-image">
              <div className="recipe-steps">
                <h3>Steps</h3>
                <ol>
                  {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="image-item">
                {images[1] && <img src={images[1]} alt={`Step 2`} className="recipe-image" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;