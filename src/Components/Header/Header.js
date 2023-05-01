import React from "react"
import { AppBarComponent, StyledToolbar } from "./StyledHeader"
import ButtonsHeader from "./MenuButtons/ButtonsHeader"

const Header = () => {

  return (
    <AppBarComponent>
      <StyledToolbar>
        <ButtonsHeader />
      </StyledToolbar>
    </AppBarComponent>
  )
}

export default Header