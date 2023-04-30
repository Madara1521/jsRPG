import React from "react"
import { AppBarComponent, StyledToolbar } from "./StyledHeader"
import Profile from "./MenuButtons/Profile/Profile"
import InventoryComponent from './MenuButtons/Inventory/InventoryComponent'
import { Box, Stack } from "@mui/material"

const Header = () => {

  return (
    <AppBarComponent>
      <StyledToolbar>
        <Box flex={6} >
          <Stack direction='row'>
            <Profile />
            <InventoryComponent />
            <InventoryComponent />
            <InventoryComponent />
            <InventoryComponent />
            <InventoryComponent />
          </Stack>
        </Box>
      </StyledToolbar>
    </AppBarComponent>
  )
}

export default Header