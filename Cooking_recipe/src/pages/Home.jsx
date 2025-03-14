import React, { useState, useEffect } from 'react';
import Header from '../components/Header_Login';
import Results from '../components/Results';
import NoResults from '../components/NoResults';
import OnboardingModal from '../components/OnboardingModal';
import Footer from '../components/Footer';
import '../index.css';
import CenterImage from '../components/CenterImage';

const Home = () => {
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNoResults, setShowNoResults] = useState(false);
  const [showSaladResults, setShowSaladResults] = useState(false);

  useEffect(() => {
    setShowOnboardingModal(true);
  }, []);

  const handleCloseOnboardingModal = () => {
    setShowOnboardingModal(false);
  };

  const handleSearchUpdate = (query) => {
    setSearchQuery(query);
    console.log('Search Query:', query); // Debug log
    if (query.toLowerCase() === 'cake' || query.toLowerCase() === 'cakescascsa') {
      setShowNoResults(true);
      setShowSaladResults(false);
    } else if (query.toLowerCase() === 'salad') {
      setShowNoResults(false);
      setShowSaladResults(true);
    } else {
      setShowNoResults(false);
      setShowSaladResults(false);
    }
  };

  return (
    <div className="home-page">
      <Header
        onSearchUpdate={handleSearchUpdate}
        onLoginModalOpen={() => setShowOnboardingModal(false)}
      />
      {showSaladResults ? (
        <Results
          searchQuery={searchQuery}
          showNoResults={showNoResults}
          showSaladResults={showSaladResults}
        />
      ) : showNoResults ? (
        <NoResults searchQuery={searchQuery} />
      ) : (
        <CenterImage />
      )}
      {showOnboardingModal && <OnboardingModal onClose={handleCloseOnboardingModal} />}
     <Footer/>
    </div>
  );
};

export default Home;