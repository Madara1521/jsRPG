import React from "react"
import invertory from './invertory-removebg-preview.png'
import { NavLink } from "react-router-dom"
import { makeStyles } from "@mui/styles"
import backgroundImage from '../backgroundItem.png'

const useStyles = makeStyles({
  invertory: {
    display: 'flex',
    width: '100px',
    height: '100px',
    border: 'black 1px solid',
    backgroundImage:`url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
})

const InventoryComponent = () => {
  const classes = useStyles()

  return (
    <NavLink to='invertory'>
      <div className={classes.invertory}>
        <img src={invertory} alt='pentagram' />
      </div>
    </NavLink>
  )
}

export default InventoryComponent