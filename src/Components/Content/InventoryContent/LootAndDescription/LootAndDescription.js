import React from "react"
import Loot from "./Loot/Loot"
import Description from "./Description/Description"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  lootAndDescription: {
    display: 'flex',
    flex: '2',
    flexDirection: 'row'
  }
})

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