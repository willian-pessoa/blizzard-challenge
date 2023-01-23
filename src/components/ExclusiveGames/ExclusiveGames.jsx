import React from "react";

import "./ExclusiveGames.scss";

const ExclusiveGames = () => {
  return (
    <main className="exclusive-games">
      <div className="exclusive-games__header">
        <h6>GAMES</h6>
        <h4>Jogos exclusivos</h4>
        <div className="exclusive-games__header__icons">
          <img src="assets/e-games-1.svg" alt="" />
          <img src="assets/e-games-2.svg" alt="" />
          <img src="assets/e-games-3.svg" alt="" />
          <img src="assets/e-games-4.svg" alt="" />
        </div>
        <p>
          <img src="assets/e-games-5.svg" alt="" />
          Ver todos os jogos
        </p>
      </div>
      <div className="exclusive-games__body"></div>
    </main>
  );
};

export default ExclusiveGames;
