import React, { useState } from "react";

import Button from "../FormElements/Button/Button";

import "./BannerHero.scss";

// DATAS
const BANNERS = [
  {
    id: "diablo",
    title: "Retorna à escuridão com o game Diablo IV",
    description: "O retorno de Lilith traz uma era de escuridão e sofrimento",
    background: "assets/banner-hero/games/diablo-bg.png",
    logo: "assets/banner-hero/games/diablo-logo.png",
    animationCover: "assets/banner-hero/games/diablo-animation-cover.png",
    animation: "assets/banner-hero/games/diablo-animation.gif",
  },
  {
    id: "hearthstone",
    title: "Novo pacote de expansão de Hearthstone",
    description:
      "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
    background: "assets/banner-hero/games/hearthstone-bg.png",
    logo: "assets/banner-hero/games/hearthstone-logo.png",
    animationCover: "assets/banner-hero/games/hearthstone-animation-cover.png",
    animation: "assets/banner-hero/games/hearthstone-animation.gif",
  },
  {
    id: "wow",
    title: "Desbrave as Terras Sombrias em Shadowlands!",
    description: "O que jaz além do mundo que você conhece?",
    background: "assets/banner-hero/games/wow-bg.png",
    logo: "assets/banner-hero/games/wow-logo.png",
    animationCover: "assets/banner-hero/games/wow-animation-cover.png",
    animation: "assets/banner-hero/games/wow-animation.gif",
  },
];

const LATERALBAR = [
  {
    id: "diablo",
    icon: "assets/banner-hero/icons/game-1.png",
    active: true,
  },
  {
    id: "hearthstone",
    icon: "assets/banner-hero/icons/game-2.png",
    active: false,
  },
  {
    id: "wow",
    icon: "assets/banner-hero/icons/game-3.png",
    active: false,
  },
  {
    id: "diablo-old",
    icon: "assets/banner-hero/icons/game-4.png",
    active: false,
  },
  {
    id: "starcraft",
    icon: "assets/banner-hero/icons/game-5.png",
    active: false,
  },
];

// COMPONENTS
const BannerHero = () => {
  const [currentBanner, setCurrentBanner] = useState(BANNERS[0]);

  const handleCurrentBanner = (newBanner) => {
    switch (newBanner) {
      case "diablo":
        setCurrentBanner(BANNERS[0]);
        break;
      case "hearthstone":
        setCurrentBanner(BANNERS[1]);
        break;
      case "wow":
        setCurrentBanner(BANNERS[2]);
        break;
      default:
        setCurrentBanner(BANNERS[0]);
    }
  };

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${currentBanner.background})` }}
    >
      <div className="wrapper-left-center">
        <div className="banner__left center">
          <LateralBar handleCurrentBanner={handleCurrentBanner} />
        </div>
        <div className="banner__center">
          <h1>{currentBanner.title}</h1>
          <p>{currentBanner.description}</p>
          <div className="banner__center__button">
            <Button>Jogue Agora</Button>
          </div>
        </div>
      </div>
      <div className="banner__right">
        <img src={currentBanner.logo} alt="logo" />
        <div className="banner__right__trailer">
          <h6>ASSITA O TRAILER</h6>
          <img src={currentBanner.animationCover} alt="" />
        </div>
      </div>
    </div>
  );
};

const LateralBar = ({ handleCurrentBanner }) => {
  const [currentIcon, setCurrentIcon] = useState("diablo");

  const handleCurrentIcon = (gameId) => {
    setCurrentIcon(gameId);
    handleCurrentBanner(gameId);
  };

  return (
    <div className="lateralBar">
      {LATERALBAR.map((game, idx) => {
        return (
          <img
            onClick={() => handleCurrentIcon(game.id)}
            className={game.id !== currentIcon ? "blackwhite" : "default"}
            key={idx}
            src={game.icon}
            alt={game.id}
          />
        );
      })}
    </div>
  );
};

export default BannerHero;
