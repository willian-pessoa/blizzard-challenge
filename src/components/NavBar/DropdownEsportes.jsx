import React from "react";

import "./DropdownEsportes.scss";

const MENU_ESPORTES_LIST = [
  {
    esporte: "Hearthstone® masters",
    icon: "assets/menu-esportes/heartstone.png",
  },
  {
    esporte: "Campeonato Mundial de Arena WoW®",
    icon: "assets/menu-esportes/campeonato-wow.png",
  },
  {
    esporte: "StarCraft® II WCS",
    icon: "assets/menu-esportes/starcraft-II.png",
  },
  {
    esporte: "Copa Mundial de Overwatch®",
    icon: "assets/menu-esportes/copa-overwatch.png",
  },
  {
    esporte: "Liga de Overwatch®",
    icon: "assets/menu-esportes/liga-overwatch.png",
  },
];

const DropdownEsportes = () => {
  return (
    <div className="dropdownesportes">
      <ul>
        {MENU_ESPORTES_LIST.map((esporte, idx) => {
          return (
            <li>
              <img src={esporte.icon} alt={esporte.esporte} />
              <p>{esporte.esporte}</p>
            </li>
          );
        })}
      </ul>
      <div className="dropdownesportes__footer">
        <p>
          <img src="assets/e-games-10.svg" alt="four-dots" />
          Torneios da comunidade
        </p>
      </div>
    </div>
  );
};

export default DropdownEsportes;
