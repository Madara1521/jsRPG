import React from "react"
import { useStyles } from "../../../Styles"
import { Stack } from '@mui/material'
import Strength from "./Strength/Strength"
import Dexterity from "./Dexterity/Dexterity"
import Vitality from "./Vitality/Vitality"
import Energy from "./Energy/Energy"

const Attributes = () => {
  const classes = useStyles()

  return (
    <Stack direction='column' spacing={10} className={classes.attribBorder}>
      <Strength/>
      <Dexterity/>
      <Vitality/>
      <Energy/>
    </Stack>
  )
}

export default Attributes