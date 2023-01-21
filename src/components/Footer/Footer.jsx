import React from "react";

import Button from "../FormElements/Button/Button";

import { RiAppleFill, RiWindowsFill } from "react-icons/ri";
import { FaLinux } from "react-icons/fa";

import { getOS } from "../../utils/getOs";

import "./Footer.scss";

const Footer = () => {
  const OSName = getOS();
  const OSIcon =
    OSName[0] === "M" ? (
      <RiAppleFill size="20" />
    ) : OSName[0] === "L" ? (
      <FaLinux size="20" />
    ) : (
      <RiWindowsFill size="20" />
    );

  return (
    <footer
      style={{ backgroundImage: `url(assets/footer-background.png)` }}
      className="footer"
    >
      <div className="footer__left">
        <img src="assets/logo-battle-net.png" alt="logo-battle-net" />
        <h2>Baixe agora o battle.net</h2>
        <p>
          <img src="assets/one-place-icon.svg" alt="one-place-icon" />
          Seus jogos em um só lugar
        </p>
        <p>
          <img src="assets/connect-friends-icon.svg" alt="connect-friend" />
          Conecte-se aos seus amigos
        </p>
        <p>
          <img src="assets/buy-games-icon.svg" alt="buy-game" />
          Compre jogos e itens digitais
        </p>
        <Button>
          {OSIcon}
          &nbsp; Baixar para o {OSName}
        </Button>
        <p className="p__mobile">
          <img src="assets/mobile-icon.svg" alt="mobile-icon" />{" "}
          <span>
            Também disponível como <u> aplicativo móvel</u>
          </span>
        </p>
      </div>
      <div className="footer__right">
        <div
          style={{ backgroundImage: `url(assets/ilustrations/app.png)` }}
          className="footer__ilustration"
        ></div>
        <div
          style={{ backgroundImage: `url(assets/ilustrations/app-mini.png)` }}
          className="footer__ilustration__mini"
        ></div>
      </div>
    </footer>
  );
};

export default Footer;
