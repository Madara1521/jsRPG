import React from "react"
import { useStyles } from "../../Styles"
import { Stack } from '@mui/material'
import Attributes from "./Attributes/Attributes"
import AttributeLvlInfo from "./AttributeLvlInfo/AttributeLvlInfo"


const AttributeContent = () => {
  const classes = useStyles()

  return (
    <div className={classes.content} >
      <Stack direction='column'>
        <div className={classes.titleComp}>
          <h1>Attributes</h1>
        </div>
        <AttributeLvlInfo/>
        <Attributes/>
      </Stack>
    </div>
  )
}

export default AttributeContent