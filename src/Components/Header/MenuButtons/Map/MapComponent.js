import React from "react"
import map from './map-removebg-preview.png'
import { NavLink } from "react-router-dom"
import { makeStyles } from "@mui/styles"
import backgroundImage from '../backgroundItem.png'

const useStyles = makeStyles({
  map: {
    display: 'flex',
    width: '100px',
    height: '100px',
    justifyContent: 'center',
    border: 'black 1px solid',
    backgroundImage:`url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
})

const MapComponent = () => {
  const classes = useStyles()

  return (
    <NavLink to='map'>
      <div className={classes.map}>
        <img src={map} alt='map' />
      </div>
    </NavLink>
  )
}

export default MapComponent