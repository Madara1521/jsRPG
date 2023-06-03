import React from "react"
import { useStyles } from "../../../Styles"


const Loot = () => {
  const classes = useStyles()

  return (
    <div className={classes.loot}>
      <div className={classes.twoTitle}>
        <h1>Loot</h1>
      </div>
      <div className={classes.lootDescriptionComp}>

      </div>
    </div>
  )
}

export default Loot