import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="about-content">
        <h1>About Cheffy</h1>
        <p>
          Cheffy is a platform dedicated to helping you explore and master the art of cooking. We provide recipes, cooking guides, and tips to make your culinary journey enjoyable and successful.
        </p>
        <p>
          Our mission is to inspire home cooks of all levels to create delicious meals with confidence.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;