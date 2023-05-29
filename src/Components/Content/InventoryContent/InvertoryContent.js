import React from "react"
import { useStyles } from "../../Styles"
import { Stack } from '@mui/material'
import Talismans from "./Talismans/Talismans"
import Cloth from "./Cloth/Cloth"

const InvertoryContent = () => {
  const classes = useStyles()

  return (
    <div className={classes.content} >
      <Stack direction='column'>
        <div className={classes.titleComp}>
          <h1>Invertoty</h1>
        </div>
        <Cloth />
        <div className={classes.titleComp}>
          <h1>Talismans</h1>
        </div>
        <Talismans />
        <Stack direction='row' flex={2}>
          <div className={classes.titleInvertory}>
            <h1>Loot</h1>
          </div>
          <div className={classes.titleInvertory}>
            <h1>Item description</h1>
          </div>
        </Stack>
        <div className={classes.titleComp}>
          gold
        </div>
      </Stack>
    </div>
  )
}

export default InvertoryContent