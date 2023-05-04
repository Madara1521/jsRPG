import React from "react"
import invertory from './invertory-removebg-preview.png'
import { IconsHeader } from "../../StyledHeader"
import { NavLink } from "react-router-dom"

const InventoryComponent = () => {

  return (
    <NavLink to='invertory'>
      <IconsHeader>
        <img src={invertory} alt='pentagram' />
      </IconsHeader>
    </NavLink>
  )
}

export default InventoryComponent