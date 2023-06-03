import React from "react"
import { useStyles } from "../../../../Styles"



const GlovesBoots = () => {
  const classes = useStyles()

  return (
    <div className={classes.colthPadding}>
      <div className={classes.glovesAndBoots}>

      </div>
      <div className={classes.paddingGloves} />
      <div className={classes.glovesAndBoots}>

      </div>
    </div>
  )
}

export default GlovesBoots