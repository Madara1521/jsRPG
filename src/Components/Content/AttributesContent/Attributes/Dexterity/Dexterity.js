import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../../Styles"
import IconsAttribute from "../IconsAttribute"

const Dexterity = () => {
  const classes = useStyles()

  return (
    <Stack direction='row'>
      <div className={classes.attribCont}>
        Dexterity
      </div>
      <div className={classes.attribCont}>
        250
      </div>
      <IconsAttribute />
    </Stack>
  )
}

export default Dexterity