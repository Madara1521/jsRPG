import React from "react"
import { useStyles } from "../../../../Styles"




const HemletAmulet = () => {
  const classes = useStyles()

  return (
    <div className={classes.colthPadding}>
      <div className={classes.endAmulet}>
        <div className={classes.amuletAndRing}>

        </div>
      </div>
      <div className={classes.armorBeltHelmPading}>
        <div className={classes.helmet}>

        </div>
      </div>
      <div className={classes.endAmulet}>
        <div className={classes.amuletAndRing}>

        </div>
      </div>
    </div>
  )
}

export default HemletAmulet