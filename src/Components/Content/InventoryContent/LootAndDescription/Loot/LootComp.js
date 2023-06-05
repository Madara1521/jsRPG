import React from "react"
import { useStyles } from "../../../../Styles"



const LootComp = (props) => {
  const classes = useStyles()
  const { nameLoot } = props

  return (
    <div className={classes.lootCell}>
      {nameLoot}
    </div>
  )
}

export default LootComp