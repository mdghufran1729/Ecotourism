import React from "react";
import "./Cardactivities.css";
import images from "../Assets/images.jpg";

const CardActivities = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="image-container">
          <img src={images} alt="" />
        </div>
        <div className="card-details">
          <div className="card-title">
            <h1>Makalidurga</h1>
          </div>
          <div className="card-divider-line">
            <hr className="line" />
          </div>
          <div className="card-location">
            <h3>Doddaballapura</h3>
          </div>
          <div className="card-content">
            <p>
              Makalidurga is located about 60 km from Bangalore and takes just
              short of two hours to reach the place. Makalidurga is situated
              amidst the scenic beauty of Doddaballapura.
            </p>
          </div>
          <div className="card-buttons">
            <button onClick={null}>View Details</button>
            <button onClick={null}>Check Availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardActivities;
