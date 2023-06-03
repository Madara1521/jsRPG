import React from "react"
import { useStyles } from "../../../Styles"


const TalismansComp = () => {
  const classes = useStyles()

  return (
    <div className={classes.stackRow}>
      <div className={classes.stackColumn}>
        <div className={classes.talismansCont}>

        </div>
        <div className={classes.talismansCont}>

        </div>
      </div>
    </div>
  )
}

export default TalismansComp