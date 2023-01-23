import React from "react";

import "./GameCard.scss";

const GameCard = ({ name, category, image, logo}) => {

  return (
    <div className="game-card">
      <div className="game-card__img-logo">
        <img className="game-card__img" src={image} alt={name} />
        <img className="game-card__logo" src={logo} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{category}</p>
    </div>
  );
};

export default GameCard;
