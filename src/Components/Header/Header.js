import React from "react"
import ButtonsHeader from "./MenuButtons/ButtonsHeader"
import { Box } from '@mui/material'
import { useStyles } from "../Styles"

const Header = () => {
  const classes = useStyles()

  return (
    <Box className={classes.headerCss}>
      <ButtonsHeader />
    </Box>
  )
}

export default Header