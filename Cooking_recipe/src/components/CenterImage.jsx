// src/components/CenterImage.jsx
import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa'; // Icon mũi tên
import '../index.css';
import '../RecipeSection.css'; // Import file CSS mới

const CenterImage = () => {
  // Danh sách các sản phẩm cho từng section
  const summerRecipes = [
    {
      image: '/src/img/salad_with_cabbage_and_shrimp.png',
      title: 'Italian-style tomato',
      time: '15 minutes',
      buttonIcon: '/src/img/Icon Button 73.png',
    },
    {
      image: '/src/img/salad_with_cabbage_and_shrimp.png',
      title: 'Spaghetti with vegetables',
      time: '15 minutes',
      buttonIcon: '/src/img/Icon Button 73.png',
    },
    {
      image: '/src/img/Salad with cabbage.png',
      title: 'Lotus delight salad',
      time: '20 minutes',
      buttonIcon: '/src/img/Icon Button 73.png',
    },
    {
      image: '/src/img/Sunny-side up fried eggs.png',
      title: 'Snack cakes',
      time: '21 minutes',
      buttonIcon: '/src/img/Icon Button 73.png',
    },
  ];

  const videoRecipes = [
    {
      image: '/src/img/salad_with_cabbage_and_shrimp.png',
      title: 'Salad with cabbage and shrimp',
      time: '32 minutes',
    },
    {
      image: '/src/img/salad_with_cabbage_and_shrimp.png',
      title: 'Salad of cove beans and potatoes',
      time: '20 minutes',
    },
    {
      image: '/src/img/Salad with cabbage.png',
      title: 'Sunny-side up fried egg',
      time: '15 minutes',
    },
    {
      image: '/src/img/Sunny-side up fried eggs.png',
      title: 'Lotus delight salad',
      time: '20 minutes',
    },
  ];

  const editorPicks = [
    {
      image: '/src/img/salad_with_cabbage_and_shrimp.png',
      title: 'Stuffed sticky rice ball',
      time: '34 minutes',
      author: 'Jennifer King',
      description: 'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling.',
      avatar: '/src/img/shin.jpg',
    },
    {
      image: '/src/img/corn_salad.png',
      title: 'Strawberry smoothie',
      time: '40 minutes',
      author: 'Matthew Martinez',
      description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
      avatar: '/src/img/kana.jpg',
    },
    {
      image: '/src/img/avacador_salad.png',
      title: 'Latte Art',
      time: '18 minutes',
      author: 'Sarah Hill',
      description: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte.',
      avatar: '/src/img/Smile-chef-icon-design-vector.jpg',
    },
    {
      image: '/src/img/bah.jpg',
      title: 'Butter fried noodles',
      time: '10 minutes',
      author: 'Julia Lopez',
      description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal.',
      avatar: '/src/img/avatar.png',
    },
  ];

  return (
    <div className="center-image-container">
      <img src="/src/img/Cooking.png" alt="Cooking Background" className="center-image" />
      <Card className="recipe-overlay">
        <Card.Body>
          <div className="recipe-of-day">Recipe of the day</div>
          <Card.Title as="h2" className="recipe-title">
            Salad Caprese
          </Card.Title>
          <Card.Text className="recipe-description">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
          </Card.Text>
          <div className="recipe-author">
            <Image
              src="/src/img/ngon.jpg"
              alt="Author"
              className="author-image"
              roundedCircle
            />
            <span className="author-name">Salad Caprese</span>
          </div>
          <Button className="recipe-view-now">
            View now <FaArrowRight className="ms-1" />
          </Button>
        </Card.Body>
      </Card>

      {/* This Summer Recipes Section */}
      <div className="rs-new-section-container">
        <h2 className="rs-new-section-title">This Summer Recipes</h2>
        <p className="rs-new-section-subtitle">We have all Independence Day sweets covered.</p>
        <div className="rs-new-recipe-grid">
          {summerRecipes.map((recipe, index) => (
            <Card key={index} className="rs-new-recipe-card">
              <Card.Img variant="top" src={recipe.image} />
              <Card.Body>
                <div className="rs-new-title-button-container">
                  <div>
                    <Card.Title className="rs-new-recipe-card-title">{recipe.title}</Card.Title>
                    <Card.Text className="rs-new-recipe-card-time">{recipe.time}</Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      {/* Recipes With Videos Section */}
      <div className="rs-new-section-container">
        <h2 className="rs-new-section-title">Recipes With Videos</h2>
        <p className="rs-new-section-subtitle">Cooking Up Culinary Creations with Step-by-Step Videos</p>
        <div className="rs-new-recipe-grid">
          {videoRecipes.map((recipe, index) => (
            <Card key={index} className="rs-new-recipe-card">
              <Card.Img variant="top" src={recipe.image} />
              <Card.Body>
                <Card.Title className="rs-new-recipe-card-title">{recipe.title}</Card.Title>
                <Card.Text className="rs-new-recipe-card-time">{recipe.time}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      {/* Editor's Pick Section */}
      <div className="ep-section-container">
        <h2 className="ep-section-title">Editor's Pick</h2>
        <p className="ep-section-subtitle">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
        <div className="ep-grid">
          {editorPicks.map((recipe, index) => (
            <Card key={index} className="ep-pick-card">
              <div className="ep-content">
                <div className="ep-image">
                  <Card.Img variant="top" src={recipe.image} />
                </div>
                <Card.Body className="ep-info">
                  <Card.Title className="ep-recipe-title">{recipe.title}</Card.Title>
                  <Card.Text className="ep-recipe-time">{recipe.time}</Card.Text>
                  <div className="ep-recipe-author">
                    <Image
                      src={recipe.avatar}
                      alt="Author"
                      className="ep-author-image"
                      roundedCircle
                    />
                    <span className="ep-author-name">{recipe.author}</span>
                  </div>
                  <Card.Text className="ep-recipe-description">{recipe.description}</Card.Text>
                </Card.Body>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CenterImage;