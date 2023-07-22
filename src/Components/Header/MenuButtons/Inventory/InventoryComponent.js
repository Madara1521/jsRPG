import React from "react"
import invertory from './invertory-removebg-preview.png'
import { NavLink } from "react-router-dom"
import { useStyles } from "../../Header"

const InventoryComponent = () => {
  const classes = useStyles()

  return (
    <NavLink to='invertory'>
      <div className={classes.iconStyle}>
        <img src={invertory} alt='pentagram' />
      </div>
    </NavLink>
  )
}

export default InventoryComponent