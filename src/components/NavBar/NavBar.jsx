import React from "react";

import Button from "../FormElements/Button/Button";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper-logo-menu">
        <div className="navbar__logo">
          <img src="assets/logo-blizzard.png" alt="logo" />
        </div>
        <ul className="navbar__menu">
          <li className="navbar_menu_item">Jogos</li>
          <li className="navbar_menu_item">Esportes</li>
          <li className="navbar_menu_item">Loja</li>
          <li className="navbar_menu_item">Notícias</li>
          <li className="navbar_menu_item">Suporte</li>
        </ul>
      </div>
      <div className="navbar__auth">
        <Button>Criar Conta</Button>
        <Button>Logar</Button>
      </div>
    </nav>
  );
};

export default NavBar;
