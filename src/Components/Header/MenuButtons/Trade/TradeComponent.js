import React from "react"
import trade from './trade-removebg-preview.png'
import { NavLink } from "react-router-dom"
import { makeStyles } from "@mui/styles"
import backgroundImage from '../backgroundItem.png'

const useStyles = makeStyles({
  trade: {
    display: 'flex',
    width: '100px',
    height: '100px',
    border: 'black 1px solid',
    backgroundImage:`url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
})

const TradeComponent = () => {
  const classes = useStyles()

  return (
    <NavLink to='trade'>
      <div className={classes.trade}>
        <img src={trade} alt='trade' />
      </div>
    </NavLink>
  )
}

export default TradeComponent