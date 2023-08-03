import React from "react"
import map from './map.png'
import { NavLink } from "react-router-dom"
import { useStyles } from "../../Header"

const MapComponent = () => {
  const classes = useStyles()

  return (
    <NavLink to='map'>
      <div className={classes.iconStyle}>
        <img src={map} alt='map' />
      </div>
    </NavLink>
  )
}

export default MapComponent