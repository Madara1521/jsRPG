import React from "react"
import Profile from "./MenuButtons/Profile/Profile"
import InventoryComponent from "./MenuButtons/Inventory/InventoryComponent"
import AttributeComponent from "./MenuButtons/Atributte/AttributeComponent"
import SkillComponent from "./MenuButtons/Skills/SkillComponent"
import MapComponent from "./MenuButtons/Map/MapComponent"
import TradeComponent from "./MenuButtons/Trade/TradeComponent"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  headerPlacing: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  header: {
    display: 'flex',
  }
})

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