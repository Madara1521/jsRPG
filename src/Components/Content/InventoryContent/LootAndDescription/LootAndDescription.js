import React from "react"
import Loot from "./Loot/Loot"
import Description from "./Description/Description"
import { makeStyles } from "@mui/styles"
import divImg from '../../img/divBackground.png'

const useStyles = makeStyles((theme) => ({
  lootAndDescription: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column'
    },
    backgroundImage: `url(${divImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
}))

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