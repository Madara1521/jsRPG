import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../../Styles"
import IconsAttribute from "../IconsAttribute"

const Strength = () => {
  const classes = useStyles()

  return (
    <Stack direction='row'>
      <div className={classes.attribCont}>
        Strength
      </div>
      <div className={classes.attribCont}>
        250
      </div>
      <IconsAttribute />
    </Stack>
  )
}

export default Strength