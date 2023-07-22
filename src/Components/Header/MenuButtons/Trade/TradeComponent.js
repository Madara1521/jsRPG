import React from "react"
import trade from './trade-removebg-preview.png'
import { NavLink } from "react-router-dom"
import { useStyles } from "../../Header"

const TradeComponent = () => {
  const classes = useStyles()

  return (
    <NavLink to='trade'>
      <div className={classes.iconStyle}>
        <img src={trade} alt='trade' />
      </div>
    </NavLink>
  )
}

export default TradeComponent