// DogListAxios.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import "../DogList.css";

const DogListAxios = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://api.thedogapi.com/v1/images/search",
        {
          params: { limit: 6 }
        }
      );
      setDogs(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div className="dog-container">
      <div className="header">
        <h2>Danh sách chó (Axios) 🐶</h2>
        <button 
          onClick={fetchDogs} 
          disabled={loading}
          className="reload-btn"
        >
          {loading ? "Đang tải..." : "Tải lại"}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}
      
      {loading ? (
        <div className="loading">Đang tải ảnh...</div>
      ) : (
        // Trong DogListFetch.jsx hoặc DogListAxios.jsx
        <div className="dog-grid">
          {dogs.map((dog) => (
            <div key={dog.id} className="dog-card">
              <div className="dog-image-wrapper">
                <img
                  src={dog.url}
                  alt="Dog"
                  className="dog-image"
                  loading="lazy"
                />
              </div>
              <div className="dog-info">
                <p>{dog.width} x {dog.height}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DogListAxios;