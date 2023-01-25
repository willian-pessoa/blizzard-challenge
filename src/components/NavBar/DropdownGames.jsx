import React from "react";

import "./DropdownGames.scss";

const MENU_GAME_LIST = [
  {
    game: "Diablo® II ressurected",
    icon: "assets/menu-games/diablo-ressurected.png",
  },
  {
    game: "Overwatch® 2",
    icon: "assets/menu-games/overwatch-2.png",
  },
  {
    game: "World of Warcraft®",
    icon: "assets/menu-games/wow.png",
  },
  {
    game: "Hearthstone®",
    icon: "assets/menu-games/heart-stone.png",
  },
  {
    game: "Heroes of the storm®",
    icon: "assets/menu-games/heroes-of-storm.png",
  },
  {
    game: "Warcraft® III Reforged",
    icon: "assets/menu-games/warcraft-reforged.png",
  },
  {
    game: "Diablo® IV",
    icon: "assets/menu-games/diablo-IV.png",
  },
  {
    game: "Diablo® Immortal",
    icon: "assets/menu-games/diablo immortal.png",
  },
  {
    game: "Diablo® III",
    icon: "assets/menu-games/diablo-III.png",
  },
  {
    game: "StarCraft® II",
    icon: "assets/menu-games/star-craft-II.png",
  },
  {
    game: "StarCraft® Remastered",
    icon: "assets/menu-games/star-craft-remastered.png",
  },
  {
    game: "Arcade da Blizzard®",
    icon: "assets/menu-games/arcade-blizzard.png",
  },
];

const DropdownGames = () => {
  return (
    <div className="dropdowngames">
      <ul>
        {MENU_GAME_LIST.map((game, idx) => {
          return (
            <li>
              <img src={game.icon} alt={game.game} />
              <p>{game.game}</p>
            </li>
          );
        })}
      </ul>
      <div className="dropdowngames__footer">
        <p className="p__todos-os-jogos">
          <img src="assets/e-games-5.svg" alt="four-dots" />
          Ver todos jogos
        </p>
        <p>
          <img src="assets/e-games-7.svg" alt="atomic" />
          Aplicativo Battle.net
        </p>
        <p>
          <img src="assets/e-games-8.svg" alt="download" />
          Downloads
        </p>
        <p>
          <img src="assets/e-games-9.svg" alt="" />
          Fóruns dos jogos
        </p>
      </div>
    </div>
  );
};

export default DropdownGames;
