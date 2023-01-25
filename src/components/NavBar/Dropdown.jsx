import React from 'react'

import "./Dropdown.scss"

const Dropdown = ({active, children}) => {
  return (
    <div className={`dropdown ${active ? "active" : "hidden"}`}>
      {children}
    </div>
  )
}

export default Dropdown
