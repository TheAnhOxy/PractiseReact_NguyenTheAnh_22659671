// components/TourCard.jsx
import React from "react";
import { Card } from "react-bootstrap";
import "../TourCard.css";

function TourCard({ image, price, time, destination }) {
  return (
    <Card className="tour-card">
      <Card.Img variant="top" src={image} className="tour-card-img" />
      <Card.Body className="tour-card-body">
        <Card.Title className="tour-card-title">{destination}</Card.Title>
        <Card.Text className="tour-card-text">
          <span className="price">Price: ${price}</span>
          <br />
          <span className="time">Departure: {time}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TourCard;