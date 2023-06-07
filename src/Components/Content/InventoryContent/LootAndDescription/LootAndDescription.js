import React from "react"
import { useStyles } from "../../../Styles"
import Loot from "./Loot/Loot"
import Description from "./Description/Description"

const LootAndDescription = () => {
  const classes = useStyles()


  return (
    <div className={classes.lootAndDescription}>
      <Loot />
      <Description />
    </div>
  )
}

export default LootAndDescription