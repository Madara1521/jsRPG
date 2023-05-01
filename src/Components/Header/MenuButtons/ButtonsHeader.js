import React from "react"
import Profile from "./Profile/Profile"
import InventoryComponent from "./Inventory/InventoryComponent"
import AttributeComponent from "./Atributte/AttributeComponent"
import SkillComponent from "./Skills/SkillComponent"
import MapComponent from "./Map/MapComponent"
import TradeComponent from "./Trade/TradeComponent"
import { Stack } from "@mui/material"

const ButtonsHeader = () => {
  return (
    <Stack direction='row'>
      <Profile />
      <InventoryComponent />
      <AttributeComponent />
      <SkillComponent />
      <MapComponent />
      <TradeComponent />
    </Stack>
  )
}

export default ButtonsHeader