import React from "react"
import { useStyles } from "../../../Styles"



const Description = () => {
  const classes = useStyles()

  return (
    <div className={classes.description}>
      <div className={classes.twoTitle}>
        <h1>Item description</h1>
      </div>
      <div className={classes.lootDescriptionComp}>

      </div>
    </div>
  )
}

export default Description