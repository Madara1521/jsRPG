import React from "react"
import trade from './trade-removebg-preview.png'
import { IconsHeader } from "../../StyledHeader"
import { NavLink } from "react-router-dom"

const TradeComponent = () => {

  return (
    <NavLink to='trade'>
      <IconsHeader>
        <img src={trade} alt='trade' />
      </IconsHeader>
    </NavLink>
  )
}

export default TradeComponent