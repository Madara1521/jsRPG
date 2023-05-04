import React from "react"
import { useStyles } from "../../Styles"
import { Stack } from '@mui/material'
import Attributes from "./Attributes/Attributes"
import AtriLvlInf from './ArtiLvlInfo/AtriLvlInf'


const AttributeContent = () => {
  const classes = useStyles()

  return (
    <div className={classes.content} >
      <Stack direction='column'>
        <div className={classes.titleComp}>
          <h1>Attributes</h1>
        </div>
        <AtriLvlInf/>
        <Attributes/>
      </Stack>
    </div>
  )
}

export default AttributeContent