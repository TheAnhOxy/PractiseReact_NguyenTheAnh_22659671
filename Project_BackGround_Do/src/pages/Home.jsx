import React from 'react';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';

const Home = () => {
  const recipeData = {
    title: 'How to make a Strawberry Shortcake',
    author: { name: 'Emma Gonzalez', avatar: '/src/img/Smile-chef-icon-design-vector.jpg' },
    time: '45 minutes',
    notes: '352 Community Notes',
    rating: '★★★★✰',
    ingredients: [
      'Yield: 4 generous servings',
      '2 pints ripe, well-rinsed strawberries',
      '1/2 cup sugar, or more to taste',
      '4 cups flour',
      '3 tablespoons sugar',
      '1/4 teaspoon salt',
      '5 teaspoons baking powder',
      '1/4 cup butter',
      '5 cups whipping cream',
      '1/2 teaspoon vanilla extract'
    ],
    steps: [
      'Step 1: Click over and hull strawberries. Cut in half or slice depending on size. Gently crush about a quarter of the berries with a fork to release their juices. ',
      // Thêm các bước khác nếu cần
    ],
    images: ['/src/img/bah.jpg', '/src/img/ts.jpg']
  };

  return (
    <div className="home-page">
      <Header />
      <RecipeCard {...recipeData} />
      <Footer />
    </div>
  );
};

export default Home;