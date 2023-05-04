import React from "react"
import map from './map-removebg-preview.png'
import { IconsHeader } from "../../StyledHeader"
import { NavLink } from "react-router-dom"

const MapComponent = () => {

  return (
    <NavLink to='map'>
      <IconsHeader>
        <img src={map} alt='map' />
      </IconsHeader>
    </NavLink>
  )
}

export default MapComponent