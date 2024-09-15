import React from "react";
import "./Card.css";

function Card({ title, subtitle, image, artist }) {
  return (
    <div className="card">
      <div className={`image ${artist && "artist"}`}>
        <img src={image} alt="" />
        <div className="play-btn">
          <ion-icon name="play-circle"></ion-icon>
        </div>
      </div>
      <div className="text">
        <h4 className="card-title">{title}</h4>
        <h5 className="card-subtitle">{subtitle}</h5>
      </div>
    </div>
  );
}

export default Card;
