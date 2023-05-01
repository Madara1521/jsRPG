import React from "react"
import map from './map-removebg-preview.png'
import { IconsHeader } from "../../StyledHeader"

const MapComponent = () => {

  return(
    <IconsHeader>
      <img src={map} alt='map'/>
    </IconsHeader>
  )
}

export default MapComponent