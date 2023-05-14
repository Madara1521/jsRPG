import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../../Styles"
import IconsAttribute from "../IconsAttribute"
import { AttributeButton } from "../../../../Header/StyledHeader"

const Vitality = () => {
  const classes = useStyles()

  return (
    <Stack direction='row'>
      <div className={classes.attribCont}>
        Vitality
      </div>
      <div className={classes.attribCont}>
        250
      </div>
      <AttributeButton >
        <IconsAttribute />
      </AttributeButton>
    </Stack>
  )
}

export default Vitality