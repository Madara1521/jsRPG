import React from "react"
import Profile from "./MenuButtons/Profile/Profile"
import InventoryComponent from "./MenuButtons/Inventory/InventoryComponent"
import AttributeComponent from "./MenuButtons/Atributte/AttributeComponent"
import SkillComponent from "./MenuButtons/Skills/SkillComponent"
import MapComponent from "./MenuButtons/Map/MapComponent"
import TradeComponent from "./MenuButtons/Trade/TradeComponent"
import { makeStyles } from "@mui/styles"
import backgroundImage from './MenuButtons/backgroundItem.png'

export const useStyles = makeStyles((theme) => ({
  headerPlacing: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
  },
  iconStyle: {
    display: 'flex',
    width: '96px',
    height: '96px',
    border: '3px ridge #a3a3a3',
    justifyContent: 'center',
    backgroundImage:`url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    '&:hover': {
      background: 'linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,20,20,0.9136029411764706) 38%, rgba(205,0,0,0.7847514005602241) 71%)',
      cursor: 'pointer'
    },
    [theme.breakpoints.down("sm")]: { 
      width: '65px',
      height: '65px',
    }
  },
  cellActive: {
    background: 'blue'
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.headerPlacing}>
      <div className={classes.header}>
        <Profile />
        <InventoryComponent />
        <AttributeComponent />
        <SkillComponent />
        <MapComponent />
        <TradeComponent />
      </div>
    </div>
  )
}

export default Header