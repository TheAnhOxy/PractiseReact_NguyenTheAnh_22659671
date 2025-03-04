// pages/Home.jsx
import React from "react";
import { Row, Col } from "react-bootstrap";
import TourCard from "../components/TourCard";
import "../Home.css";

function Home() {
  const destinations = [
    "Đà Nẵng",
    "TP. Hồ Chí Minh",
    "New York",
    "Paris",
    "Tokyo",
    "London",
    "Sydney",
    "Rome",
    "Bali",
  ];

  const images = [
    "/src/img/danang.jpg",
    "/src/img/hcm.jpg",
    "/src/img/newyork.jpg",
    "/src/img/paris.jpg",
    "/src/img/tokyo.jpg",
    "/src/img/london.jpg",
    "/src/img/sydney.jpg",
    "/src/img/rome.jpg",
    "/src/img/bali.jpg",
  ];
  const tours = Array.from({ length: 9 }, (_, index) => ({
    image: images[index], 
    price: 500 + index * 100,
    time: `2025-03-${10 + index} 08:00 AM`, 
    destination: destinations[index],
  }));

  return (
    <div className="home-page">
      <h1 className="text-center mb-5">Explore Our Tours</h1>
      <div className="tours-container">
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <Row key={rowIndex} className="mb-4 justify-content-center">
            {tours.slice(rowIndex * 3, (rowIndex + 1) * 3).map((tour, idx) => (
              <Col key={idx} xs={12} sm={6} md={4}>
                <TourCard
                  image={tour.image}
                  price={tour.price}
                  time={tour.time}
                  destination={tour.destination}
                />
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </div>
  );
}

export default Home;