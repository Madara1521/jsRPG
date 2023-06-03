import React from "react"
import { useStyles } from "../../Styles"
import Talismans from "./Talismans/Talismans"
import Cloth from "./Cloth/Cloth"
import LootAndDescription from "./LootAndDescription/LootAndDescription"

const InvertoryContent = () => {
  const classes = useStyles()

  return (
    <div className={classes.content} >
      <div className={classes.stackColumn}>
        <div className={classes.titleComp}>
          <h1>Invertoty</h1>
        </div>
        <Cloth />
        <Talismans />
        <LootAndDescription/>
        <div className={classes.titleComp}>
          gold
        </div>
      </div>
    </div>
  )
}

export default InvertoryContent