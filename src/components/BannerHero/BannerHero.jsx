import React from "react";

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
  },
  {
    id: "hearthstone",
    icon: "assets/banner-hero/icons/game-2.png",
  },
  {
    id: "wow",
    icon: "assets/banner-hero/icons/game-3.png",
  },
  {
    id: "diablo-old",
    icon: "assets/banner-hero/icons/game-4.png",
  },
  {
    id: "starcraft",
    icon: "assets/banner-hero/icons/game-5.png",
  },
];

// COMPONENTS
const BannerHero = () => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${BANNERS[0].background})` }}
    >
      <div className="wrapper-left-center">
        <div className="banner__left center">
          <LateralBar />
        </div>
        <div className="banner__center">
          <h1>{BANNERS[0].title}</h1>
          <p>{BANNERS[0].description}</p>
          <div className="banner__center__button">
            <Button>Jogue Agora</Button>
          </div>
        </div>
      </div>
      <div className="banner__right">
        <img src={BANNERS[0].logo} alt="logo" />
        <div className="banner__right__trailer">
          <h6>ASSITA O TRAILER</h6>
          <img src={BANNERS[0].animationCover} alt="" />
        </div>
      </div>
    </div>
  );
};

const LateralBar = () => {
  return (
    <div className="lateralBar">
      {LATERALBAR.map((game, idx) => {
        return <img key={idx} src={game.icon} alt={game.id} />;
      })}
    </div>
  );
};

export default BannerHero;
