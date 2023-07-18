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
    '&:hover': {
      background: 'linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,20,20,0.9136029411764706) 38%, rgba(205,0,0,0.7847514005602241) 71%)',
      cursor: 'pointer'
    }
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