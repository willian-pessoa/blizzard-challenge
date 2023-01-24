import React, { useState } from "react";

import Modal from "../Modal/Modal";
import Button from "../FormElements/Button/Button";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiUser3Line,
  RiMenuFill,
} from "react-icons/ri";

import "./NavBar.scss";

const NavBar = () => {
  const [jogosDropMenu, setJogosDropMenu] = useState(false);
  const [esportesDropMenu, setEsportesDropMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDropDown = (section) => {
    switch (section) {
      case "jogos":
        setJogosDropMenu((prev) => !prev);
        setEsportesDropMenu(false);
        break;
      case "esportes":
        setEsportesDropMenu((prev) => !prev);
        setJogosDropMenu(false);
        break;
      default:
        setJogosDropMenu(false);
        setEsportesDropMenu(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="wrapper-logo-menu">
        <div className="navbar__logo">
          <img src="assets/logo-blizzard.png" alt="logo" />
        </div>
        <ul className="navbar__menu">
          <li
            onClick={() => handleDropDown("jogos")}
            className="navbar__menu__item center"
          >
            Jogos{" "}
            {!jogosDropMenu ? (
              <RiArrowDropDownLine size={25} />
            ) : (
              <RiArrowDropUpLine color="#00AEFF" size={25} />
            )}
          </li>
          <li
            onClick={() => handleDropDown("esportes")}
            className="navbar__menu__item center"
          >
            Esportes{" "}
            {!esportesDropMenu ? (
              <RiArrowDropDownLine size={25} />
            ) : (
              <RiArrowDropUpLine color="#00AEFF" size={25} />
            )}
          </li>
          <li className="navbar__menu__item">Loja</li>
          <li className="navbar__menu__item">Notícias</li>
          <li className="navbar__menu__item">Suporte</li>
        </ul>
      </div>
      <div className="navbar__auth">
        <Button variant="outline">Criar Conta</Button>
        <Button onClick={() => setShowModal(true)}>
          <RiUser3Line />
          &nbsp;Logar
        </Button>
        {showModal && <Modal setShow={setShowModal} />}
      </div>
      <RiMenuFill className="navbar__menu__hamburguer" size={40} />
    </nav>
  );
};

export default NavBar;
