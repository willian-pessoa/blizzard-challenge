import React from "react";
import useFetch from "../../hooks/useFetch";

import GameCard from "./GameCard";

import "./ExclusiveGames.scss";

const ExclusiveGames = () => {
  const { data: games, loaded } = useFetch(
    "https://api.brchallenges.com/api/blizzard/games"
  );

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
      <div className="exclusive-games__body">
        {loaded &&
          games.map((game, idx) => {
            const { name, category, image, logo } = game;
            return (
              <GameCard
                key={idx}
                name={name}
                category={category}
                image={image}
                logo={logo}
              />
            );
          })}
      </div>
    </main>
  );
};

export default ExclusiveGames;
