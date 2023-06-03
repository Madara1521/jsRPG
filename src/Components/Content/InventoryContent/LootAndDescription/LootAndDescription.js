import React from "react"
import { useStyles } from "../../../Styles"
import Loot from "./Loot"
import Description from "./Description"

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