import React, { useState } from 'react';
import { Range } from 'react-range';
import '../Login.css';

const NoResults = ({ searchQuery }) => {
  const [timeRange, setTimeRange] = useState([30, 50]);
  const [isTypeOpen, setIsTypeOpen] = useState(true);
  const [isTimeOpen, setIsTimeOpen] = useState(true);
  const [isRatingOpen, setIsRatingOpen] = useState(true);

  return (
    <div className="no-results-layout">
      <div className="filters-section">
        <h2>FILTER</h2>
        <div className="filter-group">
          <h3
            className={`filter-title ${isTypeOpen ? 'active' : ''}`}
            onClick={() => setIsTypeOpen(!isTypeOpen)}
          >
            Type
          </h3>
          {isTypeOpen && (
            <div className="checkbox-grid">
              <label>
                <input type="checkbox" />
                Pan-fried
              </label>
              <label>
                <input type="checkbox" />
                Stir-fried
              </label>
              <label>
                <input type="checkbox" checked />
                Grilled
              </label>
              <label>
                <input type="checkbox" checked />
                Roasted
              </label>
              <label>
                <input type="checkbox" />
                Sautéed
              </label>
              <label>
                <input type="checkbox" />
                Baked
              </label>
              <label>
                <input type="checkbox" />
                Steamed
              </label>
              <label>
                <input type="checkbox" />
                Stewed
              </label>
            </div>
          )}
        </div>
        <div className="filter-group">
          <h3
            className={`filter-title ${isTimeOpen ? 'active' : ''}`}
            onClick={() => setIsTimeOpen(!isTimeOpen)}
          >
            Time
          </h3>
          {isTimeOpen && (
            <div className="range-container">
              <Range
                step={1}
                min={0}
                max={100}
                values={timeRange}
                onChange={(values) => setTimeRange(values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '8px',
                      background: '#ddd',
                      borderRadius: '4px',
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '15px',
                      width: '15px',
                      background: '#ff4d94',
                      borderRadius: '50%',
                      cursor: 'pointer',
                    }}
                  />
                )}
              />
              <span>
                {timeRange[0]} minutes - {timeRange[1]} minutes
              </span>
            </div>
          )}
        </div>
        <div className="filter-group">
          <h3
            className={`filter-title ${isRatingOpen ? 'active' : ''}`}
            onClick={() => setIsRatingOpen(!isRatingOpen)}
          >
            Rating
          </h3>
          {isRatingOpen && (
            <div className="rating-options">
              <label>
                <input type="checkbox" />
                <img src="/src/img/rating_5.png" alt="5 stars" className="rating-star" />
              </label>
              <label>
                <input type="checkbox" />
                <img src="/src/img/rating_4.png" alt="4 stars" className="rating-star" />
              </label>
              <label>
                <input type="checkbox" checked />
                <img src="/src/img/rating_3.png" alt="3 stars" className="rating-star" />
              </label>
              <label>
                <input type="checkbox" />
                <img src="/src/img/rating_2.png" alt="2 stars" className="rating-star" />
              </label>
              <label>
                <input type="checkbox" />
                <img src="/src/img/rating_1.png" alt="1 star" className="rating-star" />
              </label>
            </div>
          )}
        </div>
        <button className="apply-button">Apply</button>
      </div>
      <div className="no-results-main">
        <h2 className="no-results-title">Sorry, no results were found for "{searchQuery}"</h2>
        <img src="/src/img/nothing.png" alt="No Results" className="no-results-image" />
        <p className="no-results-message">We have all Independence Day sweets covered.</p>
        <div className="no-results-suggestions">
          <span className="suggestion">Sweet</span>
          <span className="suggestion">Black Cake</span>
          <span className="suggestion">Pozzole Verde</span>
          <span className="suggestion">Healthy food</span>
        </div>
      </div>
    </div>
  );
};

export default NoResults;