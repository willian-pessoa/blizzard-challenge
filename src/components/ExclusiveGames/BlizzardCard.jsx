import React from 'react'

import "./BlizzardCard.scss"

const BlizzardCard = () => {
  return (
    <div className='blizzard-card'>
        <img src="assets/logo-blizzard.png" alt="logo-blizzard" />
        <p>
          <img src="assets/e-games-6.svg" alt="" />
          Ver todos os jogos
        </p>
    </div>
  )
}

export default BlizzardCard